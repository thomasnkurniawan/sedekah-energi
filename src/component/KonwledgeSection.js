export default function KnowledgeSection() {
  return (
    <section className="bg-dark-green about-section">
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
                  <div className="col-lg-6 col-12 ">
                    <div className="d-flex card-knowledge">
                      <img src="https://placehold.co/600x400/DCEAD8/DCEAD8" />
                      <div className="p-3 d-flex flex-column justify-content-between w-100 text-start">
                        <p className="title">Basic Knowledge</p>

                        <p className="d-flex justify-content-between align-items-end m-0 see-more">
                          Selengkapnya
                          <i class="bi bi-arrow-right-short icon-btn align-self-end d-flex"></i>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="d-flex card-knowledge">
                      <img src="https://placehold.co/600x400/DCEAD8/DCEAD8" />
                      <div className="p-3 d-flex flex-column justify-content-between w-100 text-start">
                        <p className="title">Basic Knowledge</p>

                        <p className="d-flex justify-content-between align-items-end m-0 see-more">
                          Selengkapnya
                          <i class="bi bi-arrow-right-short icon-btn align-self-end d-flex"></i>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
