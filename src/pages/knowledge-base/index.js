import Footer from "@/component/Footer";
import Header from "@/component/Header";
import ModalOptionDonate from "@/component/ModalOptionDonate";
import SearchComponent from "@/component/SearchComponent";
import { useState } from "react";

const KnowledgeHub = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  return (
    <>
      <Header onClickDonate={handleShow} />
      <div className="knowledge-hub-page pb-5">
        {/* Banner */}
        <div className="banner-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8 col-12 p-0">
                <h1>Knowledge Hub</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Cras ultrices ut urna
                  vel egestas risus est.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Search */}
        <SearchComponent handleSearch={handleSearch} />
      </div>
      <Footer />
      <ModalOptionDonate handleClose={handleClose} showModal={showModal} />
    </>
  );
};

export default KnowledgeHub;
