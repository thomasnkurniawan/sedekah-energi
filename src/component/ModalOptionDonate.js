const ModalOptionDonate = ({
  handleClose,
  showModal,
}) => {
  if (!showModal) {
    return <></>;
  }

  const handleClickOption = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      role="dialog"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content rounded-4">
          <div className="modal-body">
            <button
              type="button"
              className="close btn btn-icon btn-close-modal w-100 text-end p-0"
              onClick={handleClose}
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
            <div
              className="donation-option mb-4 justify-content-between"
              onClick={() =>
                handleClickOption("http://kitabisa.com/listrikuntukjabar")
              }
            >
              <img alt="sedekah-energi-asset" src="/energi-asset-vector/icon-donate.png" />
              <span>Sedekah Energi untuk Jawa Barat (Default)</span>
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
                    fill="#036A71"
                  />
                </svg>
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
              <img alt="sedekah-energi-asset" src="/energi-asset-vector/icon-donate.png" />
              <span>Sedekah Energi untuk Sumatera Barat</span>
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
                    fill="#036A71"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalOptionDonate;
