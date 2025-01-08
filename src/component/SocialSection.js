import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

export default function SocialSection() {
  const [isMobileLocal, setIsMobileLocal] = useState(false);
  useEffect(() => {
    setIsMobileLocal(isMobile);
  }, []);
  return (
    <div className="bg-dark-green social-section position-relative">
      {!isMobileLocal && (
        <svg
          className="top-asset"
          xmlns="http://www.w3.org/2000/svg"
          width="315"
          height="112"
          viewBox="0 0 315 112"
          fill="none"
        >
          <path
            d="M8.76471 -41.7989C16.6762 -20.7486 47.5728 26.0168 107.868 44.6761C183.236 68.0002 92.3331 -8.63508 124.293 -4.06411C156.254 0.506864 172.628 88.6067 358.216 103.289"
            stroke="#FDCF56"
            stroke-width="17"
          />
        </svg>
      )}
      {isMobileLocal && (
        <svg
          className="top-asset"
          xmlns="http://www.w3.org/2000/svg"
          width="310"
          height="108"
          viewBox="0 0 310 108"
          fill="none"
        >
          <path
            d="M4.15728 -41.627C12.0688 -20.5767 42.9654 26.1887 103.26 44.848C178.629 68.1721 87.7257 -8.4632 119.686 -3.89223C151.646 0.678739 168.02 88.7786 353.608 103.461"
            stroke="#FDCF56"
            stroke-width="8"
          />
        </svg>
      )}
      <div className="container text-center">
        <div className="row">
          <div className="col-12">
            <div className="card rounded-4" style={{ zIndex: 99 }}>
              <div className="card-body">
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-12 text-center">
                    <img
                      src="/energi-asset-vector/logo-umat.png"
                      width={!isMobileLocal ? "300px" : "200px"}
                    />
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="col-lg-12 col-12">
                      <div className="row justify-content-center">
                        <div className="col-lg-12 col-12 text-start p-0">
                          <p className="pl-3 pt-4 p-sm-0">
                            Kunjungi juga media <span>sosial</span> kami
                          </p>
                        </div>
                        <div className="col-lg-12 col-12 p-1 p-sm-0 col-socmed">
                          <div className="d-flex gap-4 flex-wrap social-med-wrapper">
                          <a
                            href="https://www.facebook.com/umatdansemesta/"
                            target="_blank"
                          >
                            <img
                              src="/energi-asset-vector/fb.svg"
                              className="cursor-pointer"
                            />
                          </a>
                          <a
                            href="https://www.tiktok.com/@umatuntuksemesta"
                            target="_blank"
                          >
                            <img
                              src="/energi-asset-vector/tiktok.svg"
                              className="cursor-pointer"
                            />
                          </a>
                          <a
                            href="https://www.instagram.com/umatuntuksemesta/"
                            target="_blank"
                          >
                            <img
                              src="/energi-asset-vector/ig-new.svg"
                              className="cursor-pointer"
                            />
                          </a>
                          <a
                            href="https://x.com/umatutksemesta/status/1867902591935430736"
                            target="_blank"
                          >
                            <img
                              src="/energi-asset-vector/x.svg"
                              className="cursor-pointer"
                            />
                          </a>
                          <a
                            href="https://www.youtube.com/@UmatUntukSemesta"
                            target="_blank"
                          >
                            <img
                              src="/energi-asset-vector/yt.svg"
                              className="cursor-pointer"
                            />
                          </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!isMobileLocal && (
        <svg
          className="bottom-asset"
          xmlns="http://www.w3.org/2000/svg"
          width="582"
          height="160"
          viewBox="0 0 582 160"
          fill="none"
        >
          <path
            d="M574.035 270.749C524.877 191.823 385.152 30.6504 219.515 17.3613C12.4675 0.749887 333.697 222.032 253.74 237.06C173.784 252.088 6.39158 -96.0323 -440.417 40.4414"
            stroke="#F35B3D"
            stroke-width="17"
          />
        </svg>
      )}
      {isMobileLocal && (
        <svg
          className="bottom-asset"
          xmlns="http://www.w3.org/2000/svg"
          width="375"
          height="121"
          viewBox="0 0 375 121"
          fill="none"
        >
          <path
            d="M573.441 266.479C524.284 187.553 384.559 26.3804 218.921 13.0913C11.8738 -3.52013 333.103 217.762 253.147 232.79C173.19 247.818 5.79783 -100.302 -441.01 36.1714"
            stroke="#F35B3D"
            stroke-width="8"
          />
        </svg>
      )}
    </div>
  );
}
