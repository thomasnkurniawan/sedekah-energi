export default function AboutSection() {
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
    <section className="bg-dark-green about-section">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12" style={{ position: 'relative' }}>
            <img src="/energi-asset-vector/masjid.svg" className="asset-mesjid"/>
            <div className="card text-center rounded-4" style={{marginTop: '384px'}}>
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
                    <span className="ssection-description">
                      Listrik yang kita gunakan saat ini sebagian besar berasal
                      dari sumber yang tidak terbarukan seperti batu bara, yang
                      berdampak negatif terhadap lingkungan. Dengan beralih ke
                      energi terbarukan, kita dapat mengurangi jejak karbon dan
                      melindungi planet ini.
                    </span>
                  </div>
                </div>
                <div className="row justify-content-center">
                  {dataAbout.map((item) => {
                    return (
                      <div className="col-4 card-mini d-flex flex-column gap-3 align-items-center">
                        <img src={item.image} loading="lazy" />
                        <p>{item.title}</p>
                        <span>{item.description}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="row justify-content-center">
                  <div className="col-3">
                    <button className="btn btn-outline-secondary rounded-5">
                      Pelajari selengkapnya
                      <i class="bi bi-arrow-right-short icon-btn"></i>
                    </button>
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
