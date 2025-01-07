import AboutSection from "@/component/AboutSection";
import ArticleSection from "@/component/ArticleSection";
import DonateSection from "@/component/Cta-donate";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import HeroSection from "@/component/HeroSection";
import ImpactSection from "@/component/ImpactSection";
import KnowledgeSection from "@/component/KonwledgeSection";
import MapSection from "@/component/MapSection";
import Quiz from "@/component/Quiz";
import SocialSection from "@/component/SocialSection";
import { useRef, useState } from "react";

export default function Home() {
  const myRef = useRef(null);

  const [showModal, setShowModal] = useState(false);
  const [showModalVideo, setShowModalVideo] = useState(null);

  // Open modal
  const handleShow = () => setShowModal(true);

  // Close modal
  const handleClose = () => setShowModal(false);

  const handleClickOption = (link) => {
    window.open(link, "_blank");
  };

  const executeScroll = () => myRef.current?.scrollIntoView()    


  return (
    <>
      <Header onClickDonate={handleShow} />
      <HeroSection onClickDonate={(link) => handleClickOption(link)} executeScroll={executeScroll} />
      <AboutSection ref={myRef} />
      <Quiz />
      <ImpactSection setShowModalVideo={setShowModalVideo} />
      <MapSection onClickDonate={(link) => handleClickOption(link)} />
      <ArticleSection />
      <SocialSection />
      <DonateSection onClickDonate={(link) => handleClickOption(link)} />
      <KnowledgeSection />
      <Footer />
      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <button
                  type="button"
                  className="close btn btn-icon btn-close-modal w-100 text-end"
                  onClick={handleClose}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <div
                  className="donation-option my-4 justify-content-between"
                  onClick={() =>
                    handleClickOption("http://kitabisa.com/listrikuntukjabar")
                  }
                >
                  <img src="/energi-asset-vector/icon-donate.png" />
                  <span>Sedekah Energi untuk Jawa Barat (Default)</span>
                  <div className="arrow-icon-wrapper">
                    <i class="bi bi-arrow-right-short icon-btn"></i>
                  </div>
                </div>
                <div
                  className="donation-option justify-content-between"
                  onClick={() =>
                    handleClickOption(
                      "https://kitabisa.com/campaign/listrikuntuksumbar"
                    )
                  }
                >
                  <img src="/energi-asset-vector/icon-donate.png" />
                  <span>Sedekah Energi untuk Sumatera Barat</span>
                  <div className="arrow-icon-wrapper">
                    <i class="bi bi-arrow-right-short icon-btn"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModalVideo && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <button
                  type="button"
                  className="close btn btn-icon btn-close-modal w-100 text-end"
                  onClick={() => setShowModalVideo(false)}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <div className="ratio ratio-16x9">
                  <iframe
                    src={`https://www.youtube.com/embed/${showModalVideo}?autoplay=1`}
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
