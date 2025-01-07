export default function KnowledgeSection() {
  const dataKnowledge = [
    {
      title: "Basic Knowledge Renewable Energy",
      image: "",
    },
    {
      title: "Offline Campaign Guidelines",
      image: "",
    },
    {
      title: "Digital Campaign Guidelines",
      image: "",
    },
    {
      title: "Do`s and Dont`s Campaigns",
      image: "",
    },
  ];
  return (
    <>
      <section className="bg-dark-green knowledge-section position-relative">
        <div className="separator-dark-green-circle"></div>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="card text-center rounded-4">
                <div className="card-body">
                  <div className="row justify-content-center align-items-center g-1 mb-4">
                    <div className="col-12">
                      <span className="section-badge-title">Knowledge hub</span>
                    </div>
                    <div className="col-12 mb-4">
                      <span className="section-title">
                        Temukan Fakta dan Solusi Energi Terbarukan di Knowledge
                        Hub
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    {dataKnowledge.map((item) => {
                      return (
                        <div className="col-lg-6 col-12 py-4">
                          <div className="d-flex card-knowledge">
                            <img src="https://placehold.co/600x400/DCEAD8/DCEAD8" />
                            <div className="p-3 d-flex flex-column justify-content-between w-100 text-start">
                              <p className="title">{item.title}</p>

                              <p className="d-flex justify-content-between align-items-end m-0 see-more">
                                Selengkapnya
                                <i class="bi bi-arrow-right-short icon-btn align-self-end d-flex"></i>
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
