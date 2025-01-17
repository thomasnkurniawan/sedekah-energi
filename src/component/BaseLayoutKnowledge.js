import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ModalOptionDonate from "./ModalOptionDonate";
import clsx from "clsx";
import DonateSection from "./Cta-donate";
import Quiz from "./Quiz";

const BaseLayoutKnowledge = ({ children, page, jumbotronContent }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);

  // Close modal
  const handleClose = () => setShowModal(false);

  const IMAGE_JUMBO = {
    kbOrange: "/energi-asset-vector/1-know.png",
    kbGreen: "/energi-asset-vector/2-know.png",
    kbYellow: "/energi-asset-vector/4-know.png",
    kbDarkGreen: "/energi-asset-vector/3-know.png",
    faq: "/energi-asset-vector/faq.png",
  };

  const CLASS_BG = {
    faq: "bg-jumbotron-faq",
    kbOrange: "bg-jumbotron-orange",
    kbGreen: "bg-jumbotron-green",
    kbDarkGreen: "bg-jumbotron-dark-green",
    kbYellow: "bg-jumbotron-yellow",
  };

  return (
    <div className="layout-section">
      <Header onClickDonate={handleShow} />
      <div className={`text-white ${CLASS_BG[page]}`}>
        <div className="container-fluid">
          <div className="row jumbotron align-items-center">
            <div className="col-lg-5 col-md-6 col-12 text-center p-0 d-flex align-items-center image-wrapper">
              <img
                src={IMAGE_JUMBO[page]}
                className="img-fluid jumbotron-image"
                alt="jumbotron-image"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5 col-md-12 col-12 text-wrapper">
              <div className="row align-items-center justify-content-center">
                <h1
                  className={clsx({
                    title: true,
                    "text-white": page !== "faq",
                  })}
                >
                  {jumbotronContent.title}
                </h1>
                <p
                  className={clsx({
                    subtitle: true,
                    "text-white": page !== "faq",
                  })}
                >
                  {jumbotronContent.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {children}
      <div className="pb-5 donate-container">
        <DonateSection />
      </div>

      <Footer />
      <ModalOptionDonate handleClose={handleClose} showModal={showModal} />
    </div>
  );
};

export default BaseLayoutKnowledge;
