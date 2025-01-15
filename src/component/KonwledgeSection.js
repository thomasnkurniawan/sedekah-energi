import Link from "next/link";

export default function KnowledgeSection() {
  const dataKnowledge = [
    {
      title: "Basic Knowledge Renewable Energy",
      image: "/energi-asset-vector/1-know.png",
      link: "/knowledge-base/basic-knowledge-renewable-energy",
    },
    {
      title: "Offline Campaign Guidelines",
      image: "/energi-asset-vector/2-know.png",
      link: "/knowledge-base/offline-campaign-guidelines-sedekah-energi",
    },
    {
      title: "Digital Campaign Guidelines",
      image: "/energi-asset-vector/3-know.png",
      link: "/knowledge-base/digital-campaign-guidelines-sedekah-energi",
    },
    {
      title: "Do`s and Dont`s Campaigns",
      image: "/energi-asset-vector/4-know.png",
      link: "/knowledge-base/dos-and-donts-campaigns-sedekah-energi",
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
                        Temukan Fakta dan Solusi Energi Terbarukan
                        <br /> di Knowledge Hub
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    {dataKnowledge.map((item) => {
                      return (
                        <div className="col-lg-6 col-12 pb-3">
                          <Link
                            href={item.link}
                            className="text-decoration-none"
                          >
                            <div className="d-flex card-knowledge">
                              <img src={item.image} />
                              <div className="p-3 d-flex flex-column justify-content-between w-100 text-start">
                                <p className="title">{item.title}</p>
                                <p className="d-flex justify-content-between align-items-end m-0 see-more">
                                  Selengkapnya
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25"
                                    height="25"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                  >
                                    <path
                                      d="M21.2806 13.0817L14.5306 19.8317C14.3899 19.9724 14.199 20.0515 14 20.0515C13.801 20.0515 13.6101 19.9724 13.4694 19.8317C13.3286 19.691 13.2496 19.5001 13.2496 19.3011C13.2496 19.1021 13.3286 18.9112 13.4694 18.7705L18.9397 13.3011H4.25C4.05109 13.3011 3.86032 13.2221 3.71967 13.0814C3.57902 12.9408 3.5 12.75 3.5 12.5511C3.5 12.3522 3.57902 12.1614 3.71967 12.0207C3.86032 11.8801 4.05109 11.8011 4.25 11.8011H18.9397L13.4694 6.3317C13.3286 6.19097 13.2496 6.0001 13.2496 5.80108C13.2496 5.60205 13.3286 5.41118 13.4694 5.27045C13.6101 5.12972 13.801 5.05066 14 5.05066C14.199 5.05066 14.3899 5.12972 14.5306 5.27045L21.2806 12.0205C21.3504 12.0901 21.4057 12.1728 21.4434 12.2639C21.4812 12.3549 21.5006 12.4525 21.5006 12.5511C21.5006 12.6496 21.4812 12.7472 21.4434 12.8383C21.4057 12.9293 21.3504 13.012 21.2806 13.0817Z"
                                      fill="#036A71"
                                    />
                                  </svg>
                                </p>
                              </div>
                            </div>
                          </Link>
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
