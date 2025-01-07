export default function MapSection() {
  return (
    <section className="map-section">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="card text-center rounded-4">
              <div className="card-body">
                <div className="row justify-content-center align-items-center g-1 mb-4">
                  <div className="col-12">
                    <span className="section-badge-title">
                      PENERIMA MANFAAT
                    </span>
                  </div>
                  <div className="col-12 mb-2">
                    <span className="section-title">
                      Daerah Penerima Manfaat Sedekah Energi
                    </span>
                  </div>
                  <div className="col-12">
                    <span className="ssection-description">
                      Alhamdulillah, Sedekah Energi sudah hadir di Bantul dan
                      Sembalun. InsyaAllah, tahun depan terang ini akan menyebar
                      ke Sumatera Barat dan Jawa Barat dengan membawa lebih
                      banyak manfaat.
                    </span>
                  </div>
                </div>
                <div className="row justify-content-center mb-2">
                  <img src="/energi-asset-vector/map.png" />
                </div>
                <div className="card-benefit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="277"
                    height="153"
                    viewBox="0 0 277 153"
                    fill="none"
                  >
                    <path
                      d="M4.76589 -37.0226C9.05907 2.1756 36.3855 85.2895 111.346 104.16C205.046 127.747 106.485 3.54649 147.804 3.04724C189.123 2.54799 184.739 171.588 428.205 145.275"
                      stroke="#C3DBDD"
                      stroke-width="8"
                    />
                  </svg>
                  <div className="row align-items-center">
                    <div className="col-lg-2 col-12 lamp-container">
                      <img src="/energi-asset-vector/think-lamp.svg" className="lamp" />
                    </div>
                    <div className="col-lg-7 col-12 text-start">
                      <h2>Berikan Manfaat untuk Daerah Sekitarmu</h2>
                      <p>
                        Kamu juga bisa membantu daerah di sekitarmu untuk
                        mendapatkan manfaat program Sedekah Energi.
                      </p>
                    </div>
                    <div className="col-12 col-lg-3 position-relative btn-container">
                      <button className="btn btn-success rounded-5 text-center w-100 position-absolute btn-cta">Dapatkan sekarang</button>
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
