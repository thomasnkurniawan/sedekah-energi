import DonationInfo from "./DonationInfo";

export default function DonateSection({ onClickDonate }) {
  return (
    <section className="donate-section">
      <div className="container">
        <div className="card bg-dark-green">
          <div className="card-body parrent">
            <div className="row align-items-center justify-content-between position-relative  text-center">
              <div className="col-lg-5 col-12 me-2">
                <p className="title">Siap untuk mendukung perubahan?</p>
                <img width="100%" src="/energi-asset-vector/line.svg" />
                <p className="subtitle">
                  Jadilah orang <span>pertama</span> pendukung program perubahan
                </p>
              </div>
              <div className="col-lg-6 col-12">
                <DonationInfo onClickDonate={onClickDonate} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
