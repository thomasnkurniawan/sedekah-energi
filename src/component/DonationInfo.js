import clsx from "clsx";
import { useState } from "react";

export default function DonationInfo() {
  const [tabActive, setTabActive] = useState(0);
  const tabDonation = [
    {
      id: 0,
      name: "Jawa Barat",
    },
    {
      id: 1,
      name: "Sumatera Barat",
    },
  ];

  const handleClickTab = (id) => {
    setTabActive(id);
  };

  return (
    <section className="donation-info">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10">
            <div className="card">
              <div className="card-body">
                <div className="row justify-content-center align-items-center">
                  <div className="col-12">
                    <div className="tab-custom">
                      {tabDonation.map((item) => {
                        return (
                          <div
                            className={clsx({
                              "tab-custom-item": true,
                              "active": tabActive === item.id
                            })}
                            onClick={() => handleClickTab(item.id)}
                          >
                            <span>{item.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-10 text-start">
                    <h5 className="donation-description">
                      Jadilah orang <strong>pertama</strong> pendukung program
                      perubahan
                    </h5>
                    <div className="progress mt-3" style={{ height: "25px" }}>
                      <div
                        className="progress-bar bg-success"
                        style={{ width: "10%" }}
                      ></div>
                    </div>
                    <div className="donation-nominal d-flex justify-content-between">
                      <span>Rp0</span>
                      <span>Rp200.000.000</span>
                    </div>
                  </div>
                  <div className="col-2">
                    <button className="btn btn-success rounded-5">
                      Donasi
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
