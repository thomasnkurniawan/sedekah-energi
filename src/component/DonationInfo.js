import clsx from "clsx";
import { useEffect, useState } from "react";

const tabDonation = [
  {
    id: 0,
    name: "Jawa Barat",
    link: "http://kitabisa.com/listrikuntukjabar",
  },
  {
    id: 1,
    name: "Sumatera Barat",
    link: "https://kitabisa.com/campaign/listrikuntuksumbar",
  },
];

export default function DonationInfo({
  onClickDonate,
  isCtaSection,
  setTabActiveParent,
}) {
  const [dataKitaBisa, setDataKitabisa] = useState(null);
  const [tabActive, setTabActive] = useState(0);
  const [isFallback, setIsFallback] = useState(false); // ⬅️ untuk deteksi default state

  const handleClickTab = (id) => {
    setTabActive(id);
    if (setTabActiveParent) {
      setTabActiveParent(id);
    }
  };

  const fetchProgress = async () => {
    try {
      const response = await fetch("/api/kitabisa");
      if (!response.ok) {
        setIsFallback(true);
        return;
      }

      const { data } = await response.json();
      if (Array.isArray(data) && data.length) {
        setDataKitabisa(data);
      } else {
        setIsFallback(true);
      }
    } catch (error) {
      console.error("Gagal ambil data API:", error);
      setIsFallback(true);
    }
  };

  useEffect(() => {
    fetchProgress();
  }, []);

  const formatCurrency = (value) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);

  const formatPercentage = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "percent",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);

  const currentData = dataKitaBisa?.[tabActive];

  return (
    <section className="donation-info rounded-4">
      <div className="card rounded-4">
        <div className="card-body rounded-4">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12">
              <div className="tab-custom">
                {tabDonation.map((item) => (
                  <div
                    key={item.id}
                    className={clsx("tab-custom-item", {
                      active: tabActive === item.id,
                    })}
                    onClick={() => handleClickTab(item.id)}
                  >
                    <span className="text-nowrap">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-10 col-12 text-start">
              {isFallback ? (
                <h3 className="donation-nominal">Donasi Sekarang</h3>
              ) : currentData && !isCtaSection ? (
                <>
                  <h3 className="donation-description">
                    Jadilah bagian dari{" "}
                    <strong style={{ fontWeight: 800 }}>
                      {currentData.donation_count}
                    </strong>{" "}
                    pendukung program perubahan lainya
                  </h3>
                  <div className="progress mt-3" style={{ height: "25px" }}>
                    <div
                      className="progress-bar bg-success"
                      style={{
                        width: formatPercentage(
                          currentData.donation_percentage || 0
                        ),
                      }}
                    ></div>
                  </div>
                  <div className="donation-nominal d-flex justify-content-between">
                    <span>
                      {formatCurrency(currentData.donation_received)}
                    </span>
                    <span>
                      {formatCurrency(currentData.donation_target)}
                    </span>
                  </div>
                </>
              ) : null}
            </div>

            <div className="col-12 col-lg-2 p-sm-0 pt-4">
              <button
                onClick={() => onClickDonate(tabDonation[tabActive].link)}
                className="btn btn-success rounded-5"
              >
                Donasi
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
