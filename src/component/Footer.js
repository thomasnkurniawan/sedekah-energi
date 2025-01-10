export default function Footer() {
  const onClickScrollToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row position-relative">
          <div className="col-lg-3 col-12 py-4 py-sm-0">
            <img
              src="/energi-asset-vector/sedekah-energi-logo.png"
              className="image-logo"
            />
          </div>
          <div className="col-lg-3 col-12 py-4 py-sm-0">
            <p className="footer-title">Telusuri</p>
            <p className="footer-subtitle">Tentang Kami</p>
            <p className="footer-subtitle">Knowledge Hub</p>
            <p className="footer-subtitle">Pertanyaan Umum</p>
          </div>
          <div className="col-lg-3 col-12 py-4 py-sm-0">
            <p className="footer-title">Hubungi Kami</p>
            <p className="footer-subtitle">sedekahenergi@mosaic-indonesia.id</p>
          </div>
          <div className="col-lg-3 col-12 py-4 py-sm-0">
            <p className="footer-title">Media Sosial</p>
            <div className="d-flex gap-4">
              <a>
                <img src="/energi-asset-vector/fb-white.svg" />
              </a>
              <a>
                <img src="/energi-asset-vector/tt-white.svg" />
              </a>
              <a>
                <img src="/energi-asset-vector/ig-white.svg" />
              </a>
              <a>
                <img src="/energi-asset-vector/x-white.svg" />
              </a>
            </div>
          </div>
          <button className="btn btn-icon btn-success rounded-5 btn-scroll-top" onClick={onClickScrollToTop}>
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="0.523438"
                width="32"
                height="32"
                rx="16"
                fill="#9FE970"
              />
              <path
                d="M24.031 20.0542C23.9614 20.1239 23.8787 20.1792 23.7876 20.217C23.6966 20.2547 23.599 20.2741 23.5004 20.2741C23.4019 20.2741 23.3043 20.2547 23.2132 20.217C23.1222 20.1792 23.0394 20.1239 22.9698 20.0542L16.0004 13.0839L9.03104 20.0542C8.89031 20.1949 8.69944 20.274 8.50042 20.274C8.30139 20.274 8.11052 20.1949 7.96979 20.0542C7.82906 19.9134 7.75 19.7226 7.75 19.5235C7.75 19.3245 7.82906 19.1336 7.96979 18.9929L15.4698 11.4929C15.5394 11.4232 15.6222 11.3679 15.7132 11.3301C15.8043 11.2924 15.9019 11.2729 16.0004 11.2729C16.099 11.2729 16.1966 11.2924 16.2876 11.3301C16.3787 11.3679 16.4614 11.4232 16.531 11.4929L24.031 18.9929C24.1008 19.0626 24.1561 19.1453 24.1938 19.2363C24.2316 19.3274 24.251 19.425 24.251 19.5235C24.251 19.6221 24.2316 19.7197 24.1938 19.8107C24.1561 19.9018 24.1008 19.9845 24.031 20.0542Z"
                fill="#024B50"
              />
            </svg>
          </button>
        </div>
        <hr className="separator" />
        <div className="row justify-content-between py-4 py-sm-0">
          <div className="col-lg-8 col-12">
            <p className="footer-subtitle">Copyright © 2024 Sedekah Energi</p>
          </div>
          <div className="col-lg-4 col-12">
            {/* <div className="d-flex gap-4 py-4 py-sm-0">
              <p className="footer-subtitle">Privacy Policy</p>

              <p className="footer-subtitle">Term of use</p>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
