import CardKnowledgeComponent from "@/component/CardKnowledge";
import EmptyStateComponent from "@/component/EmptyState";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import ModalOptionDonate from "@/component/ModalOptionDonate";
import SearchComponent from "@/component/SearchComponent";
import { useState } from "react";

const KnowledgeHub = () => {
  const [showModal, setShowModal] = useState(false);
  const [query, setQuery] = useState("");
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleSearch = (query) => {
    setQuery(query);
    console.log("Searching for:", query);
  };

  return (
    <>
      <Header onClickDonate={handleShow} />
      <div className="knowledge-hub-page pb-5">
        {/* Banner */}
        <div className="banner-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8 col-12 p-0">
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
        <SearchComponent handleSearch={handleSearch} />

        {/* Search Count */}
        {query !== "" && (
          <div className="container search-count my-3">
            <div className="row">
              <div className="col-lg-12 col-12">
                <hr className="line-section" />
                <p className="m-0">Manampilkan XXXX hasil pencarian untuk</p>
                <span>"{query}"</span>
              </div>
            </div>
          </div>
        )}

        {/* Card */}
        <div className="container mb-4 knowledge-card">
          <div className="d-flex justify-space-between card-wrapper flex-wrap">
            <CardKnowledgeComponent
              title="Sedekah Energi, Ibadah untuk Masa Depan"
              category={["Energi", "Sub"]}
              date="Juni, 2023"
              onClickSeeMore={() => console.log("See More")}
              image="/energi-asset-vector/about-page/m-about.png"
            />
            <CardKnowledgeComponent
              title="Sedekah Energi, Ibadah untuk Masa Depan"
              category={["Energi", "Sub"]}
              date="Juni, 2023"
              onClickSeeMore={() => console.log("See More")}
              image="/energi-asset-vector/about-page/m-about.png"
            />
            <CardKnowledgeComponent
              title="Sedekah Energi, Ibadah untuk Masa Depan"
              category={["Energi", "Sub"]}
              date="Juni, 2023"
              onClickSeeMore={() => console.log("See More")}
              image="/energi-asset-vector/about-page/m-about.png"
            />
          </div>

          <div className="d-flex justify-content-center align-items-center my-4">
            <button className="btn btn-outline-secondary rounded-5">
              Muat Lebih Banyak
            </button>
          </div>
        </div>

        <EmptyStateComponent />
      </div>
      <Footer />
      <ModalOptionDonate handleClose={handleClose} showModal={showModal} />
    </>
  );
};

export default KnowledgeHub;
