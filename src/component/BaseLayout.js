import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ModalOptionDonate from "./ModalOptionDonate";

const BaseLayout = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);

  // Close modal
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Header onClickDonate={handleShow} />
      {children}
      <Footer />
      <ModalOptionDonate handleClose={handleClose} showModal={showModal} />
    </>
  );
};

export default BaseLayout;
