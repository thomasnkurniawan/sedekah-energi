import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ModalOptionDonate from "./ModalOptionDonate";

const BaseLayout = ({ showModalVideo, setShowModalVideo, children }) => {
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
      {showModalVideo && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content rounded-5">
              <div className="modal-body">
                <button
                  type="button"
                  className="close btn btn-icon btn-close-modal w-100 text-end p-0"
                  onClick={() => setShowModalVideo(false)}
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M19.781 18.2194C19.8507 18.289 19.906 18.3718 19.9437 18.4628C19.9814 18.5539 20.0008 18.6514 20.0008 18.75C20.0008 18.8485 19.9814 18.9461 19.9437 19.0372C19.906 19.1282 19.8507 19.2109 19.781 19.2806C19.7114 19.3503 19.6286 19.4056 19.5376 19.4433C19.4465 19.481 19.349 19.5004 19.2504 19.5004C19.1519 19.5004 19.0543 19.481 18.9632 19.4433C18.8722 19.4056 18.7895 19.3503 18.7198 19.2806L12.5004 13.0603L6.28104 19.2806C6.14031 19.4213 5.94944 19.5004 5.75042 19.5004C5.55139 19.5004 5.36052 19.4213 5.21979 19.2806C5.07906 19.1399 5 18.949 5 18.75C5 18.551 5.07906 18.3601 5.21979 18.2194L11.4401 12L5.21979 5.78061C5.07906 5.63988 5 5.44901 5 5.24999C5 5.05097 5.07906 4.8601 5.21979 4.71936C5.36052 4.57863 5.55139 4.49957 5.75042 4.49957C5.94944 4.49957 6.14031 4.57863 6.28104 4.71936L12.5004 10.9397L18.7198 4.71936C18.8605 4.57863 19.0514 4.49957 19.2504 4.49957C19.4494 4.49957 19.6403 4.57863 19.781 4.71936C19.9218 4.8601 20.0008 5.05097 20.0008 5.24999C20.0008 5.44901 19.9218 5.63988 19.781 5.78061L13.5607 12L19.781 18.2194Z"
                      fill="#191F38"
                    />
                  </svg>
                </button>
                <div className="ratio ratio-16x9">
                  <iframe
                    src={`https://www.youtube.com/embed/${showModalVideo}?autoplay=1`}
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-4"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BaseLayout;
