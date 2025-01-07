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
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  // Open modal
  const handleShow = () => setShowModal(true);

  // Close modal
  const handleClose = () => setShowModal(false);

  const handleClickOption = (link) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <Header onClickDonate={handleShow} />
      <HeroSection onClickDonate={handleShow} />
      <AboutSection />
      <Quiz />
      <ImpactSection />
      <MapSection />
      <ArticleSection />
      <SocialSection />
      <DonateSection onClickDonate={handleShow} />
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
                  className="donation-option my-4"
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
                  className="donation-option"
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
    </>
  );
}
