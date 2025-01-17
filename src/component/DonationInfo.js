import clsx from "clsx";
import { useEffect, useState } from "react";

export default function DonationInfo({
  onClickDonate,
  isCtaSection,
  setTabActiveParent,
}) {
  const [dataKitaBisa, setDataKitabisa] = useState(null);

  const [tabActive, setTabActive] = useState(0);
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

  const handleClickTab = (id) => {
    setTabActive(id);
    if (setTabActiveParent) {
      setTabActiveParent(id);
    }
  };

  const fetchProgress = async () => {
    const response = await fetch("/api/kitabisa");

    const { data } = await response.json();

    setDataKitabisa(data);
  };

  useEffect(() => {
    fetchProgress();
  }, []);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  function formatPercentage(value) {
    return new Intl.NumberFormat("en-US", {
      style: "percent",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  }

  return (
    <section className="donation-info rounded-4">
      <div className="card rounded-4">
        <div className="card-body rounded-4">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12">
              <div className="tab-custom">
                {tabDonation.map((item) => {
                  return (
                    <div
                      className={clsx({
                        "tab-custom-item": true,
                        active: tabActive === item.id,
                      })}
                      onClick={() => handleClickTab(item.id)}
                    >
                      <span className="text-nowrap">{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            {dataKitaBisa && (
              <div className="col-lg-10 col-12 text-start">
                {!isCtaSection && (
                  <h3 className="donation-description">
                    Jadilah bagian dari{" "}
                    <strong style={{ fontWeight: 800 }}>
                      {dataKitaBisa[tabActive]?.donation_count}
                    </strong>{" "}
                    pendukung program perubahan lainya
                  </h3>
                )}
                <div className="progress mt-3" style={{ height: "25px" }}>
                  <div
                    className="progress-bar bg-success"
                    style={{
                      width: formatPercentage(
                        dataKitaBisa[tabActive]?.donation_percentage
                      ),
                    }}
                  ></div>
                </div>
                <div className="donation-nominal d-flex justify-content-between">
                  <span>
                    {formatCurrency(
                      dataKitaBisa[tabActive]?.donation_received
                    ) || `Rp-`}
                  </span>
                  <span>
                    {formatCurrency(dataKitaBisa[tabActive]?.donation_target) ||
                      `Rp-`}
                  </span>
                </div>
              </div>
            )}
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
