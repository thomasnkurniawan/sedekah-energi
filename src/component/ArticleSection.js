import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

export default function ArticleSection() {
  const [isMobileLocal, setIsMobileLocal] = useState(false);
  useEffect(() => {
    setIsMobileLocal(isMobile);
  }, [isMobile]);

  const dataArticle = [
    {
      title: `What Can 'Green Islam' Achieve in the World's Largest Muslim Country?`,
      logo: "/energi-asset-vector/nyt.png",
      description:
        "Para ulama di Indonesia mulai mengeluarkan fatwa yang menyerukan kepedulian terhadap lingkungan, memakmurkan masjid dengan teknologi ramah lingkungan, serta mengajak umat untuk turut menjaga bumi sebagai amanah dari Allah SWT.",
      link: "https://www.nytimes.com/2024/04/17/world/asia/green-islam-indonesia.html",
      date: "Apr 17, 2024",
    },
    {
      title: ` 'Green Islam': How Indonesian Muslims are helping protect the Earth`,
      logo: "/energi-asset-vector/blue.png",
      description:
        "Indonesia mungkin berada di garis depan krisis pemanasan global, namun banyak warganya masih skeptis terhadap isu perubahan iklim.",
      link: "https://www.france24.com/en/tv-shows/focus/20241115-green-islam-how-indonesian-muslims-are-helping-protect-the-earth",
      date: "Dec 11, 2024",
    },
  ];
  return (
    <section className="article-section position-relative">
      {!isMobileLocal && (
        <svg
          className="asset-decor"
          xmlns="http://www.w3.org/2000/svg"
          width="72"
          height="65"
          viewBox="0 0 72 65"
          fill="none"
        >
          <path
            d="M71.136 14.3554C68.194 11.9138 65.3655 9.32204 62.2434 7.10723C59.0913 4.86907 55.5289 3.64825 51.6897 3.25799C50.4722 3.13458 49.2747 3.34805 48.0606 3.51817C45.5956 3.86507 43.3341 4.71897 41.2627 6.01984C36.5729 8.9618 34.3181 13.4781 33.4108 18.7583C33.1073 20.5195 32.7904 22.294 32.8771 24.1253C32.5969 23.8184 32.3935 23.5015 32.21 23.1746C30.0953 19.3788 27.9805 15.5862 25.8758 11.787C24.7751 9.80236 23.701 7.80436 22.6036 5.8197C21.7464 4.26867 20.8858 2.71763 20.0019 1.17994C19.5716 0.429439 19.198 0.339379 18.6176 0.823035C16.6363 2.47414 14.6149 4.08188 12.707 5.81303C9.42815 8.79169 7.66697 12.5942 7.32674 16.9671C7.16997 18.9852 7.14329 21.0299 7.66364 23.0812C8.18732 25.1559 8.92448 27.0939 10.1553 28.805C13.711 33.7417 18.721 35.9565 24.665 36.3301C25.8658 36.4068 27.0599 36.6102 28.2707 36.3034C28.2841 36.3768 28.2974 36.4501 28.3141 36.5235C19.0346 41.657 9.75837 46.7904 0.492188 51.9171C0.675643 52.6143 1.206 52.8177 1.63295 53.0879C3.8044 54.4688 6.0092 55.7997 8.17398 57.1906C11.8464 59.5489 15.6189 61.6369 20.0019 62.4308C23.5609 63.0746 26.8965 62.4975 30.1019 60.9698C33.8678 59.1753 36.673 56.3968 38.3708 52.5642C39.3281 50.4061 39.9618 48.1613 40.0886 45.7764C40.132 44.9625 40.192 44.1253 40.5723 43.1646C40.8091 43.4848 40.9792 43.6683 41.0959 43.8784C43.144 47.5542 45.1853 51.2333 47.2234 54.9125C48.8444 57.8411 50.4522 60.7764 52.0799 63.7017C52.6236 64.679 52.8671 64.7223 53.8511 64.1586C54.4515 63.8151 55.0719 63.5049 55.6623 63.1446C57.3868 62.0972 59.2647 61.2967 60.7624 59.8858C63.8511 56.9738 65.3688 53.248 65.9492 49.1886C66.2794 46.8638 66.2694 44.4555 65.7224 42.0772C64.9885 38.8784 63.3508 36.3234 60.7891 34.3387C58.7644 32.7677 56.5463 31.5702 54.0946 30.763C52.0066 30.0759 49.9252 29.5055 47.707 29.5756C46.9765 29.5989 46.246 29.5789 45.5156 29.5789C48.2874 27.8677 51.0926 26.3267 53.8911 24.7824C59.0546 21.9338 64.2214 19.0952 69.3648 16.21C70.0953 15.7997 71.0426 15.6062 71.5096 14.5956C71.3695 14.5088 71.2394 14.4455 71.1326 14.3554H71.136ZM59.5416 45.3127C59.5516 45.673 59.5416 46.0332 59.5416 46.3934C59.5849 49.1586 58.8645 51.7003 57.3034 53.9918C56.9432 54.5222 56.4829 54.9525 55.9925 55.3694C55.4055 55.8731 55.0586 55.6396 54.7551 55.0926C53.7377 53.2547 52.727 51.4135 51.7097 49.5756C49.5949 45.753 47.4902 41.9238 45.3621 38.1079C44.5783 36.7036 44.8051 36.3067 46.4629 36.1833C50.4689 35.8798 53.9112 37.3007 57.0132 39.6756C58.8445 41.0766 59.4849 43.0846 59.5382 45.3127H59.5416ZM39.5783 23.9084C39.5783 23.685 39.5783 23.4648 39.5783 23.2413C39.7884 20.0492 40.1353 16.8904 42.0332 14.1586C44.2714 10.9365 48.7244 9.27201 52.5836 10.0158C55.0686 10.4962 57.24 11.5369 59.2547 12.9912C60.1653 13.6483 60.1653 13.8084 59.218 14.3387C55.2354 16.5569 51.246 18.7617 47.2534 20.9665C45.0786 22.1673 42.9005 23.3614 40.7257 24.5655C39.695 25.1359 39.5783 25.0725 39.5749 23.9084H39.5783ZM33.6943 44.2153C33.4775 46.3434 33.1773 48.4448 32.1867 50.3861C30.7857 53.1313 28.5409 54.8291 25.6189 55.7097C22.1166 56.767 18.9512 55.6763 15.8624 54.162C14.9318 53.705 13.9678 53.2714 13.1073 52.3874C19.9585 48.6016 26.7297 44.8591 33.661 41.0265C33.9178 42.3007 33.7877 43.258 33.691 44.2153H33.6943ZM26.8731 29.9191C24.7784 29.779 22.6903 29.6923 20.679 28.9251C17.4168 27.681 15.0419 25.5862 14.2047 22.1406C13.2173 18.0812 13.761 14.2753 16.6863 11.0565C17.4168 10.2527 17.5803 10.2793 18.1006 11.2233C20.9258 16.32 23.7377 21.4268 26.5562 26.5269C27.0999 27.5142 27.657 28.4915 28.2173 29.4855C27.8171 29.9124 27.3234 29.9458 26.8765 29.9158L26.8731 29.9191Z"
            fill="#F35B3D"
          />
        </svg>
      )}
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="card text-center rounded-4">
              <div className="card-body">
                <div className="row justify-content-center align-items-center g-1 mb-4">
                  <div className="col-12">
                    <span className="section-badge-title">LIPUTAN MEDIA</span>
                  </div>
                  <div className="col-12 mb-2">
                    <span className="section-title">
                      Ini Dia Perjalanan Umat Islam untuk Selamatkan Bumi!
                    </span>
                  </div>
                </div>
                <div className="row justify-content-center">
                  {dataArticle.map((item) => {
                    return (
                      <div className="col-lg-5 col-12">
                        <div className="d-flex flex-column card-mini video-areas">
                          <a href={item.link} className="text-decoration-none">
                            <div className="article-logo">
                              <img src={item.logo} alt="logo-news"/>
                            </div>
                            <div className="text-start">
                              <p className="mb-4 text-start art-title">
                                {item.title}
                              </p>
                              <p className="mb-4 text-start art-desc">
                                {item.description}
                              </p>
                              <p className="text-start art-desc">{item.date}</p>
                            </div>
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
