import { isMobile } from "react-device-detect";
import DonationInfo from "./DonationInfo";
import { useEffect, useState } from "react";

export default function HeroSection({ onClickDonate, executeScroll }) {
  const [isMobileLocal, setIsMobileLocal] = useState(false);
  useEffect(() => {
    setIsMobileLocal(isMobile);
  }, [isMobile]);
  return (
    <section className="hero-section text-center pt-5 p-sm-0">
      <div className="container position-relative">
        {!isMobileLocal && (
          <img src="/energi-asset-vector/sun.svg" className="asset-sun" />
        )}
        <div className="row justify-content-center pt-5 p-sm-5">
          <div className="col-lg-8 col-12">
            <h1 className="fw-bold hero-title mb-3">
              Berbuat Baik untuk Bumi dan Sesama Melalui Sedekah Energi
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
          {!isMobileLocal && (
            <div className="col-lg-2">
              <img
                src="/energi-asset-vector/solar-left.svg"
                className="asset-left"
              />
            </div>
          )}
          <div className="col-12 col-lg-8">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10 col-12">
                  <DonationInfo
                    onClickDonate={(param) => onClickDonate(param)}
                  />
                </div>
              </div>
            </div>
          </div>
          {!isMobileLocal && (
            <div className="col-lg-2">
              <img
                src="/energi-asset-vector/solar-right.svg"
                className="asset-right"
              />
            </div>
          )}
          {isMobileLocal && (
            <div className="col-12">
              <img
                src="/energi-asset-vector/msite-hero.svg"
                className="asset-msite"
              />
            </div>
          )}
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12 col12">
            <button
              className="btn btn-scroll rounded-5 d-flex align-items-center"
              onClick={executeScroll}
            >
              Selengkapnya? Scroll ke bawah{" "}
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <path
                    d="M13.354 9.36718L8.85403 13.8672C8.80759 13.9137 8.75245 13.9505 8.69175 13.9757C8.63105 14.0009 8.56599 14.0138 8.50028 14.0138C8.43457 14.0138 8.36951 14.0009 8.30881 13.9757C8.24811 13.9505 8.19296 13.9137 8.14653 13.8672L3.64653 9.36718C3.55271 9.27336 3.5 9.14611 3.5 9.01343C3.5 8.88075 3.55271 8.7535 3.64653 8.65968C3.74035 8.56586 3.8676 8.51315 4.00028 8.51315C4.13296 8.51315 4.26021 8.56586 4.35403 8.65968L8.00028 12.3066V2.51343C8.00028 2.38082 8.05296 2.25364 8.14672 2.15987C8.24049 2.06611 8.36767 2.01343 8.50028 2.01343C8.63289 2.01343 8.76006 2.06611 8.85383 2.15987C8.9476 2.25364 9.00028 2.38082 9.00028 2.51343V12.3066L12.6465 8.65968C12.7403 8.56586 12.8676 8.51315 13.0003 8.51315C13.133 8.51315 13.2602 8.56586 13.354 8.65968C13.4478 8.7535 13.5006 8.88075 13.5006 9.01343C13.5006 9.14611 13.4478 9.27336 13.354 9.36718Z"
                    fill="#191F38"
                  />
                </svg>
              </i>
            </button>
          </div>
        </div>
      </div>

      <div className="separator-dark-green"></div>
    </section>
  );
}
