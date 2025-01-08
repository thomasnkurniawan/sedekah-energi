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
    kbGreen: "",
    kbYellow: "",
    kbDarkGreen: "",
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
      <div className={`text-white rounded ${CLASS_BG[page]}`}>
        <div className="container">
          <div className="row jumbotron">
            <div className="col-lg-6 col-12">
              <img src={IMAGE_JUMBO[page]} className="jumbotron-image" />
            </div>
            <div className="col-lg-6 col-12 text-wrapper">
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
      {children}
      <Quiz />
      <div className="pb-5 donate-container">
        <DonateSection />
      </div>

      <Footer />
      <ModalOptionDonate handleClose={handleClose} showModal={showModal} />
    </div>
  );
};

export default BaseLayoutKnowledge;
