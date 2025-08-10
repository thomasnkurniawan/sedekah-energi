import { useEffect, useState } from "react";
import CardKnowledgeComponent from "@/component/CardKnowledge";
import EmptyStateComponent from "@/component/EmptyState";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import ModalOptionDonate from "@/component/ModalOptionDonate";
import SearchComponent from "@/component/SearchComponent";
import { getKnowledgeBases } from "@/services/knowledgeBase";
import { useRouter } from "next/router";

const KnowledgeHub = () => {
  const [showModal, setShowModal] = useState(false);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState(null);
  const [category, setCategory] = useState(null);
  // state loading
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const loadArticles = async ({ reset = false, nextPage = 1 } = {}) => {
    const pageSize = 3;

    const response = await getKnowledgeBases({
      page: nextPage,
      pageSize,
      sort,
      search: query,
      category,
    });

    if (response) {
      const newArticles = response.data || [];
      const total = response.meta?.pagination?.total || 0;

      setArticles((prev) => (reset ? newArticles : [...prev, ...newArticles]));

      const totalFetched = reset
        ? newArticles.length
        : articles.length + newArticles.length;
      setHasMore(totalFetched < total);
      setPage(nextPage);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Trigger fetch saat filter berubah
    setLoading(true);

    loadArticles({ reset: true, nextPage: 1 });
    setPage(1);
  }, [query, sort, category]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    loadArticles({ nextPage });
  };

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Header onClickDonate={handleShow} />
      <div className="knowledge-hub-page pb-5">
        {/* Banner */}
        <div className="banner-section position-relative">
          <img src="/lamp-d.svg" className="d-none d-lg-block position-absolute lamp-d" />
          <img src="/lamp-m.svg" className="d-block d-lg-none position-absolute lamp-m" />

          <div className="container wrapper">
            <div className="row align-items-center">
              <div className="col-lg-8 col-12">
                <h1>Knowledge Hub</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Cras ultrices ut urna
                  vel egestas risus est.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Search */}
        <SearchComponent
          handleSearch={handleSearch}
          setSort={setSort}
          setCategory={setCategory}
        />

        {/* Search Count */}
        {query !== "" && (
          <div className="container search-count my-3">
            <div className="row">
              <div className="col-lg-12 col-12">
                <p className="m-0">
                  Menampilkan {articles.length} hasil pencarian untuk
                </p>
                <span>"{query}"</span>
              </div>
            </div>
          </div>
        )}

        {/* Cards */}
        <div className="container mb-4 knowledge-card">
          <div className="row">
            {articles.length > 0 ? (
              articles.map((item) => (
                <div className="col-12 col-md-6 col-lg-4 mb-4" key={item.id}>
                  <CardKnowledgeComponent
                    title={item.title}
                    category={item.category}
                    date={item.publishedAt}
                    image={item.headingImageUrl}
                    onClickSeeMore={() =>
                      router.push(`/knowledge-base/${item.id}/${item.slug}`)
                    }
                  />
                </div>
              ))
            ) : (
              <EmptyStateComponent loading={loading} />
            )}
          </div>

          {/* Load More */}
          {hasMore && (
            <div className="d-flex justify-content-center align-items-center my-4">
              <button
                className="btn btn-outline-secondary rounded-5"
                onClick={handleLoadMore}
              >
                Muat Lebih Banyak
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
      <ModalOptionDonate handleClose={handleClose} showModal={showModal} />
    </>
  );
};

export default KnowledgeHub;
