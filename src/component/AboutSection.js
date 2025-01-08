export default function AboutSection({ ref }) {
  const dataAbout = [
    {
      id: 0,
      title: "Manfaat untuk Umat",
      description: "Mendukung masjid dan masyarakat sekitar",
      image: "/energi-asset-vector/about/1.svg",
    },
    {
      id: 1,
      title: "Manfaat untuk Lingkungan",
      description: "Mendukung masjid dan masyarakat sekitar",
      image: "/energi-asset-vector/card-2.svg",
    },
    {
      id: 2,
      title: "Manfaat Spiritual",
      description: "Mendukung masjid dan masyarakat sekitar",
      image: "/energi-asset-vector/card-3.svg",
    },
  ];
  return (
    <section className="bg-dark-green about-section" ref={ref}>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-12 position-relative">
            <img
              src="/energi-asset-vector/masjid.svg"
              className="asset-mesjid"
            />
            <div className="card text-center rounded-4 card-about">
              <div className="card-body">
                <div className="row justify-content-center align-items-center g-1 mb-4">
                  <div className="col-12">
                    <span className="section-badge-title">Tentang Program</span>
                  </div>
                  <div className="col-12 mb-4">
                    <span className="section-title">
                      Apa itu Sedekah Energi?
                    </span>
                  </div>
                  <div className="col-12 mb-2">
                    <span className="section-subtitle">
                      Energi Bersih untuk Masjid, Manfaat untuk Bumi dan Sesama
                    </span>
                  </div>
                  <div className="col-12">
                    <span className="section-description">
                      Listrik yang kita gunakan saat ini sebagian besar berasal
                      dari sumber yang tidak terbarukan seperti batu bara, yang
                      berdampak negatif terhadap lingkungan. Dengan beralih ke
                      energi terbarukan, kita dapat mengurangi jejak karbon dan
                      melindungi planet ini.
                    </span>
                  </div>
                </div>
                <div className="row justify-content-center card-carousel">
                  {dataAbout.map((item) => {
                    return (
                      <div className="col-12 col-lg-4 card-mini d-flex flex-column gap-3 align-items-center">
                        <img src={item.image} loading="lazy" />
                        <p>{item.title}</p>
                        <span>{item.description}</span>
                      </div>
                    );
                  })}
                </div>
                {/* <div className="row justify-content-center">
                  <div className="col-12 col-lg-3">
                    <button className="btn btn-outline-secondary rounded-5 w-100 d-flex justify-content-between">
                      Pelajari selengkapnya
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
<path d="M21.2806 13.0817L14.5306 19.8317C14.3899 19.9724 14.199 20.0515 14 20.0515C13.801 20.0515 13.6101 19.9724 13.4694 19.8317C13.3286 19.691 13.2496 19.5001 13.2496 19.3011C13.2496 19.1021 13.3286 18.9112 13.4694 18.7705L18.9397 13.3011H4.25C4.05109 13.3011 3.86032 13.2221 3.71967 13.0814C3.57902 12.9408 3.5 12.75 3.5 12.5511C3.5 12.3522 3.57902 12.1614 3.71967 12.0207C3.86032 11.8801 4.05109 11.8011 4.25 11.8011H18.9397L13.4694 6.3317C13.3286 6.19097 13.2496 6.0001 13.2496 5.80108C13.2496 5.60205 13.3286 5.41118 13.4694 5.27045C13.6101 5.12972 13.801 5.05066 14 5.05066C14.199 5.05066 14.3899 5.12972 14.5306 5.27045L21.2806 12.0205C21.3504 12.0901 21.4057 12.1728 21.4434 12.2639C21.4812 12.3549 21.5006 12.4525 21.5006 12.5511C21.5006 12.6496 21.4812 12.7472 21.4434 12.8383C21.4057 12.9293 21.3504 13.012 21.2806 13.0817Z" fill="#036A71"/>
</svg>
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
