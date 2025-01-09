import { useState } from "react";
import { Tooltip } from "react-tooltip";

export default function MapSection({ onClickDonate }) {
  const [isOpenSumbar, setIsOpenSumbar] = useState(true);

  const handleGetNow = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdNPtP_nQVqu9egHGvANiVDQc1Os7Ggt3-RVk33C5eMtJolQw/viewform",
      "_blank"
    );
  };

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
                    <span className="section-description">
                      Alhamdulillah, Sedekah Energi sudah hadir di Bantul dan
                      Sembalun. InsyaAllah, tahun depan terang ini akan menyebar
                      ke Sumatera Barat dan Jawa Barat dengan membawa lebih
                      banyak manfaat.
                    </span>
                  </div>
                </div>
                <div className="row button-wrapper">
                  <div className="col-lg-6 col-12 d-flex justify-content-end redd">
                    <div className="red-dot-legend">
                      <span className="dot red"></span>
                      Akan Dilaksanakan | 2025
                    </div>
                  </div>
                  <div className="col-lg-6 col-12 greenn">
                    <div className="green-dot-legend">
                      <span className="dot"></span>
                      Telah Terlaksana | 2023
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center mb-2 position-relative map-wrapper">
                  <div className="col-12 col-lg-12">
                    <img src="/energi-asset-vector/map.png" className="maps-image" />
                    <span
                      data-tooltip-id="clickable"
                      onMouseEnter={() => setIsOpenSumbar(true)}
                      id="sumatera"
                      className="dot red position-absolute sumatera"
                    ></span>
                    {/* <Tooltip
                    id="sumatera"
                    className="tooltip-custom"
                    clickable
                    isOpen={isOpenSumbar}
                  >
                    <div className="text-start">
                      <p className="title">Sumatera Barat</p>
                      <button
                        className="btn btn-success  rounded-5"
                        onClick={() => {
                          onClickDonate(
                            "https://kitabisa.com/campaign/listrikuntuksumbar"
                          );
                          setIsOpenJabar(false);
                        }}
                      >
                        Donasi Untuk Sumatera Barat
                      </button>
                    </div>
                  </Tooltip> */}
                    <span
                      data-tooltip-id="clickable"
                      onMouseEnter={() => setIsOpenSumbar(false)}
                      id="jabar"
                      className="dot red jabar position-absolute"
                    ></span>
                    <Tooltip
                      id="clickable"
                      className="tooltip-custom"
                      clickable
                    >
                      <div className="text-start">
                        <p className="title">
                          {isOpenSumbar ? "Sumatera Barat" : "Jawa Barat"}
                        </p>
                        <button
                          className="btn btn-success  rounded-5"
                          onClick={() => {
                            onClickDonate(
                              isOpenSumbar
                                ? "https://kitabisa.com/campaign/listrikuntuksumbar"
                                : "http://kitabisa.com/listrikuntukjabar"
                            );
                          }}
                        >
                          Donasi Untuk{" "}
                          {isOpenSumbar ? "Sumatera Barat" : "Jawa Barat"}
                        </button>
                      </div>
                    </Tooltip>
                    <span
                      data-tooltip-id="bantul"
                      id="bantul"
                      className="dot green position-absolute bantul"
                    ></span>
                    <Tooltip id="bantul" className="tooltip-custom">
                      <div className="text-start">
                        <p className="m-0 title">Masjid Al Muharram Bantul</p>
                        <p className="subtitle">
                          Kampung Brajan, Kabupaten Bantul, DIY
                        </p>
                      </div>
                    </Tooltip>
                    <span
                      data-tooltip-id="ntb"
                      id="ntb"
                      className="dot green ntb position-absolute"
                    ></span>
                    <Tooltip id="ntb" className="tooltip-custom">
                      <div className="text-start">
                        <p className="m-0 title">
                          Masjid Al-Ummah Al-Islamiyah Lombok
                        </p>
                        <p className="subtitle">
                          Desa Sembalun, Lombok Timur, NTB
                        </p>
                      </div>
                    </Tooltip>
                  </div>
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
                      <img
                        src="/energi-asset-vector/think-lamp.svg"
                        className="lamp"
                      />
                    </div>
                    <div className="col-lg-7 col-12 text-start">
                      <h2>Berikan Manfaat untuk Daerah Sekitarmu</h2>
                      <p>
                        Kamu juga bisa membantu daerah di sekitarmu untuk
                        mendapatkan manfaat program Sedekah Energi.
                      </p>
                    </div>
                    <div className="col-12 col-lg-3 position-relative btn-container">
                      <button
                        className="btn btn-success rounded-5 text-center w-100 position-absolute"
                        onClick={handleGetNow}
                      >
                        Dapatkan sekarang
                      </button>
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
