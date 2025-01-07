export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
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
        </div>
        <hr className="separator" />
        <div className="row justify-content-between py-4 py-sm-0">
          <div className="col-lg-8 col-12">
            <p className="footer-subtitle">Copyright © 2024 Sedekah Energi</p>
          </div>
          <div className="col-lg-4 col-12">
            <div className="d-flex gap-4 py-4 py-sm-0">
              <p className="footer-subtitle">Privacy Policy</p>

              <p className="footer-subtitle">Term of use</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
