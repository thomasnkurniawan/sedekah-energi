export default function DampakSection() {
  const dataAbout = [
    {
      id: 0,
      description: "Warga tak lagi kesulitan beraktivitas saat listrik padam",
      image: "/energi-asset-vector/dampak/lamp.svg",
    },
    {
      id: 1,
      description: "Warga dapat mengetahui dan memahami cara penggunaan dan pemeliharaannya solar panel",
      image: "/energi-asset-vector/dampak/solar.svg",
    },
    {
      id: 2,
      description: "Pengenalan energi bersih kepada anak-anak dan santri pondok pesantren untuk bekal masa depan",
      image: "/energi-asset-vector/about/1.svg",
    },
  ];
  return (
    <section className="impact-section">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="card text-center rounded-4">
              <div className="card-body">
                <div className="row justify-content-center align-items-center g-1 mb-2">
                  <div className="col-12">
                    <span className="section-badge-title">Dampak</span>
                  </div>
                  <div className="col-12">
                    <span className="section-title">
                      Dampak Positif Bagi Masyarakat
                    </span>
                  </div>
                </div>
                <div className="row justify-content-center">
                  {dataAbout.map((item) => {
                    return (
                      <div className="col-4 card-mini d-flex flex-column gap-3 align-items-center">
                        <img src={item.image} loading="lazy" alt="about-image-vector" />
                        <span>{item.description}</span>
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
  );
}
