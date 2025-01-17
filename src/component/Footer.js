import Link from "next/link";

export default function Footer() {
  const onClickScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row position-relative">
          <div className="col-lg-3 col-12 py-4 py-sm-0">
            <img
              alt="uus-image-logo"
              src="/energi-asset-vector/sedekah-energi-logo.png"
              className="image-logo"
            />
          </div>
          <div className="col-lg-3 col-12 py-4 py-sm-0 d-flex flex-column">
            <p className="footer-title">Telusuri</p>
            <Link
              href="/about"
              className="footer-subtitle text-decoration-none"
            >
              Tentang Kami
            </Link>
            <Link
              href="/knowledge-base/basic-knowledge-renewable-energy"
              className="footer-subtitle text-decoration-none"
            >
              Knowledge Hub
            </Link>
            <Link
              href="https://tally.so/r/m6rB7Y"
              target="_blank"
              className="footer-subtitle text-decoration-none"
            >
              Quiz
            </Link>
            <Link href="/faq" className="footer-subtitle text-decoration-none">
              Pertanyaan Umum
            </Link>
          </div>
          <div className="col-lg-3 col-12 py-4 py-sm-0">
            <p className="footer-title">Hubungi Kami</p>
            <p className="footer-subtitle">sedekahenergi@mosaic-indonesia.id</p>
          </div>
          <div className="col-lg-3 col-12 py-4 py-sm-0">
            <p className="footer-title">Media Sosial</p>
            <div className="d-flex gap-4">
              <a
                href="https://www.facebook.com/umatdansemesta/"
                target="_blank"
              >
                <img src="/energi-asset-vector/fb-white.svg" alt="fb-logo" />
              </a>
              <a
                href="https://www.tiktok.com/@umatuntuksemesta"
                target="_blank"
              >
                <img
                  src="/energi-asset-vector/tt-white.svg"
                  alt="tiktok-logo"
                />
              </a>
              <a
                href="https://www.instagram.com/umatuntuksemesta/"
                target="_blank"
              >
                <img
                  src="/energi-asset-vector/ig-white.svg"
                  alt="instagram-logo"
                />
              </a>
              <a
                href="https://x.com/umatutksemesta/status/1867902591935430736"
                target="_blank"
              >
                <img src="/energi-asset-vector/x-white.svg" alt="x-logo" />
              </a>
              <a
                href="https://www.youtube.com/@UmatUntukSemesta"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <rect
                    x="0.757812"
                    y="0.000488281"
                    width="24"
                    height="24"
                    rx="4.5"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.7578 4.80029C13.5273 4.80029 14.3166 4.82009 15.0816 4.85249L15.9852 4.89569L16.8501 4.94699L17.6601 5.00189L18.3999 5.05949C19.2029 5.1206 19.9585 5.46308 20.5338 6.02663C21.109 6.59019 21.4669 7.33865 21.5445 8.14019L21.5805 8.52269L21.648 9.34169C21.711 10.1904 21.7578 11.1156 21.7578 12.0003C21.7578 12.885 21.711 13.8102 21.648 14.6589L21.5805 15.4779L21.5445 15.8604C21.4669 16.6621 21.1089 17.4107 20.5334 17.9742C19.958 18.5378 19.2021 18.8802 18.399 18.9411L17.661 18.9978L16.851 19.0536L15.9852 19.1049L15.0816 19.1481C14.3075 19.1816 13.5327 19.199 12.7578 19.2003C11.9829 19.199 11.2082 19.1816 10.434 19.1481L9.53041 19.1049L8.66551 19.0536L7.85551 18.9978L7.11571 18.9411C6.31274 18.88 5.55709 18.5375 4.98185 17.974C4.40661 17.4104 4.04868 16.6619 3.97111 15.8604L3.93511 15.4779L3.86761 14.6589C3.79906 13.7743 3.76244 12.8875 3.75781 12.0003C3.75781 11.1156 3.80461 10.1904 3.86761 9.34169L3.93511 8.52269L3.97111 8.14019C4.04865 7.33879 4.40645 6.59044 4.98151 6.02691C5.55657 5.46338 6.312 5.1208 7.11481 5.05949L7.85371 5.00189L8.66371 4.94699L9.52951 4.89569L10.4331 4.85249C11.2076 4.81895 11.9826 4.80154 12.7578 4.80029ZM10.9578 9.81779V14.1828C10.9578 14.5986 11.4078 14.8578 11.7678 14.6508L15.5478 12.4683C15.6301 12.4209 15.6984 12.3528 15.7459 12.2706C15.7934 12.1884 15.8184 12.0952 15.8184 12.0003C15.8184 11.9054 15.7934 11.8122 15.7459 11.73C15.6984 11.6478 15.6301 11.5796 15.5478 11.5323L11.7678 9.35069C11.6857 9.30328 11.5925 9.27833 11.4977 9.27835C11.4029 9.27836 11.3098 9.30334 11.2277 9.35078C11.1456 9.39822 11.0774 9.46643 11.03 9.54857C10.9827 9.63071 10.9578 9.72387 10.9578 9.81869V9.81779Z"
                    fill="#314B2A"
                  />
                </svg>
              </a>
            </div>
          </div>
          <button
            className="btn btn-icon btn-success rounded-5 btn-scroll-top"
            onClick={onClickScrollToTop}
          >
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
