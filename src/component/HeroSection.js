import DonationInfo from "./DonationInfo";

export default function HeroSection() {
  return (
    <section className="hero-section text-center pt-5">
      <div className="container position-relative">
        <img src="/energi-asset-vector/sun.svg" className="asset-sun" />
        <div className="row justify-content-center">
          <div className="col-8">
            <h1 className="fw-bold hero-title mb-3">
              Berbuat Baik untuk Bumi dan
              <br /> Sesama Melalui Sedekah Energi
              <svg
                className="vector-line"
                xmlns="http://www.w3.org/2000/svg"
                width="410"
                height="20"
                viewBox="0 0 410 20"
                fill="none"
              >
                <path
                  d="M2.11816 17.6837C71.5289 3.86555 200.519 3.75127 201.887 5.71694C203.597 8.17404 157.585 11.7297 166.849 15.3192C176.113 18.9088 344.992 -1.71402 407.869 2.7604"
                  stroke="#FCC431"
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </svg>
            </h1>
            <p className="pt-3 hero-description">
              Kontribusi untuk penyediaan energi terbarukan di masjid, solusi
              nyata <br />
              menjaga ciptaan-Nya.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-2">
            <img
              src="/energi-asset-vector/solar-left.svg"
              className="asset-left"
            />
          </div>
          <div className="col-8">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-10">
                  <DonationInfo />
                </div>
              </div>
            </div>
          </div>
          <div className="col-2">
            <img
              src="/energi-asset-vector/solar-right.svg"
              className="asset-right"
            />
          </div>
        </div>
      </div>
      <div className="separator-dark-green"></div>
    </section>
  );
}
