import Header from "@/component/Header";
import ModalOptionDonate from "@/component/ModalOptionDonate";
import { useState } from "react";

const NotFound = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);

  // Close modal
  const handleClose = () => setShowModal(false);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <Header onClickDonate={handleShow} />
      <div className="not-found-wrapper p-4 mt-5">
        <div className="d-flex justify-content-center align-items-center flex-column w-100 h-100 gap-3">
          <img src="/404-text.svg" className="img-fluid" />
          <h3>Oops, Halaman Tidak Ditemukan!</h3>
          <span>
            Jangan khawatir, peluang kebaikan selalu ada! Kamu tetap bisa
            bersedekah energi melalui tauntan berikut:
          </span>

          <div
            className="d-flex align-items-center justify-content-between d-none d-lg-flex"
            style={{ cursor: "pointer", width: "30%" }}
          >
            <span style={{ color: "#E2FEA5" }}>
              Sedekah Energi untuk Jawa Barat
            </span>
            <div className="arrow-icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M21.2806 12.5306L14.5306 19.2806C14.3899 19.4213 14.199 19.5004 14 19.5004C13.801 19.5004 13.6101 19.4213 13.4694 19.2806C13.3286 19.1399 13.2496 18.949 13.2496 18.75C13.2496 18.551 13.3286 18.3601 13.4694 18.2194L18.9397 12.75H4.25C4.05109 12.75 3.86032 12.671 3.71967 12.5303C3.57902 12.3897 3.5 12.1989 3.5 12C3.5 11.8011 3.57902 11.6103 3.71967 11.4697C3.86032 11.329 4.05109 11.25 4.25 11.25H18.9397L13.4694 5.78061C13.3286 5.63988 13.2496 5.44901 13.2496 5.24999C13.2496 5.05097 13.3286 4.8601 13.4694 4.71936C13.6101 4.57863 13.801 4.49957 14 4.49957C14.199 4.49957 14.3899 4.57863 14.5306 4.71936L21.2806 11.4694C21.3504 11.539 21.4057 11.6217 21.4434 11.7128C21.4812 11.8038 21.5006 11.9014 21.5006 12C21.5006 12.0986 21.4812 12.1961 21.4434 12.2872C21.4057 12.3782 21.3504 12.461 21.2806 12.5306Z"
                  fill="#E2FEA5"
                />
              </svg>
            </div>
          </div>
          <div
            className="d-flex align-items-center justify-content-between d-none d-lg-flex"
            style={{ cursor: "pointer", width: "30%" }}
          >
            <span style={{ color: "#E2FEA5" }}>
              Sedekah Energi untuk Sumatera Barat
            </span>
            <div className="arrow-icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M21.2806 12.5306L14.5306 19.2806C14.3899 19.4213 14.199 19.5004 14 19.5004C13.801 19.5004 13.6101 19.4213 13.4694 19.2806C13.3286 19.1399 13.2496 18.949 13.2496 18.75C13.2496 18.551 13.3286 18.3601 13.4694 18.2194L18.9397 12.75H4.25C4.05109 12.75 3.86032 12.671 3.71967 12.5303C3.57902 12.3897 3.5 12.1989 3.5 12C3.5 11.8011 3.57902 11.6103 3.71967 11.4697C3.86032 11.329 4.05109 11.25 4.25 11.25H18.9397L13.4694 5.78061C13.3286 5.63988 13.2496 5.44901 13.2496 5.24999C13.2496 5.05097 13.3286 4.8601 13.4694 4.71936C13.6101 4.57863 13.801 4.49957 14 4.49957C14.199 4.49957 14.3899 4.57863 14.5306 4.71936L21.2806 11.4694C21.3504 11.539 21.4057 11.6217 21.4434 11.7128C21.4812 11.8038 21.5006 11.9014 21.5006 12C21.5006 12.0986 21.4812 12.1961 21.4434 12.2872C21.4057 12.3782 21.3504 12.461 21.2806 12.5306Z"
                  fill="#E2FEA5"
                />
              </svg>
            </div>
          </div>

          <button
            className="btn btn-outline-light rounded-5"
            onClick={handleRefresh}
          >
            Muat Ulang
          </button>
        </div>
      </div>
      <ModalOptionDonate handleClose={handleClose} showModal={showModal} />
    </>
  );
};

export default NotFound;
