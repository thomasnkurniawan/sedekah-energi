import { useEffect, useState } from "react";
import DonationInfo from "./DonationInfo";

export default function DonateSection({ onClickDonate }) {
   const [dataKitaBisa, setDataKitabisa] = useState(null);
  
    const [tabActive, setTabActive] = useState(0);
   const fetchProgress = async () => {
      const response = await fetch("/api/kitabisa");
  
      const { data } = await response.json();
  
      setDataKitabisa(data);
    };
  
    useEffect(() => {
      fetchProgress();
    }, []);

  return (
    <section className="donate-section position-relative">
      <div className="container">
        <div className="card bg-dark-green">
          <div className="card-body parrent">
            <div className="row align-items-center justify-content-between position-relative  text-center">
              <div className="col-lg-5 col-12 me-2">
                <p className="title">Siap untuk mendukung perubahan?</p>
                <img width="100%" src="/energi-asset-vector/line.svg" />
                <p className="subtitle">
                  Jadilah bagian dari <span className="fw-bold">{dataKitaBisa && dataKitaBisa[tabActive]?.donation_count}</span> pendukung program perubahan lainnya
                </p>
              </div>
              <div className="col-lg-6 col-12">
                <DonationInfo onClickDonate={onClickDonate} isCtaSection={true} setTabActiveParent={setTabActive} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
