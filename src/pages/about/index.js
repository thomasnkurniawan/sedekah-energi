import BaseLayout from "@/component/BaseLayout";
import DonateSection from "@/component/Cta-donate";
import TestimoniSection from "@/component/TestimoniSection";
import Video from "@/component/Video";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import Head from "next/head";

const About = ({ data }) => {
  const [showModalVideo, setShowModalVideo] = useState(null);
  const [isMobileLocal, setIsMobileLocal] = useState(false);

  useEffect(() => {
    setIsMobileLocal(isMobile);
  }, [isMobile]);

  const handleClickOption = (link) => {
    window.open(link, "_blank");
  };

  const dataVideo = [
    {
      id: 1,
      date: "Juni, 2023",
      videoId: "tVwFVwysZ8A",
      name: "Masjid Al Muharram Bantul",
      location: "Kampung Brajan, Kabupaten Bantul, DIY",
    },
    {
      id: 2,
      date: "Maret, 2023",
      videoId: "mxBtzM4CAuU",
      name: "Masjid Al-Ummah Al-Islamiyah Lombok",
      location: "Desa Sembalun, Lombok Timur, NTB",
    },
  ];

  return (
    <>
      <Head>
        <title>Sedekah Energi - Tentang Kami</title>
        <meta
          name="description"
          content="Sedekah Energi adalah program inisiatif dari Mosaic Indonesia, merupakan cara alternatif buat kamu yang pengen berbuat baik buat lingkungan sambil tetap menjalankan ibadah."
        />
        <meta property="og:title" content="Sedekah Energi - Tentang Kami" />
        <meta
          property="og:description"
          content="Sedekah Energi adalah program inisiatif dari Mosaic Indonesia, merupakan cara alternatif buat kamu yang pengen berbuat baik buat lingkungan sambil tetap menjalankan ibadah."
        />
        <link rel="canonical" href="https://sedekahenergi.mosaic-indonesia.com/about" />
      </Head>

      <BaseLayout
        showModalVideo={showModalVideo}
        setShowModalVideo={setShowModalVideo}
      >
        <section className="about-page">
          <div className="container-fluid hero-about-section">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-6 col-12 p-0 text-center">
                <img alt="sedekah-energi-asset"
                  src="/energi-asset-vector/about-page/hero.svg"
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-5 col-md-12 col-12">
                <div className="row align-items-center justify-content-center position-relative title-wrapper">
                  <p className="section-title-about">
                    Sedekah Energi, Ibadah untuk{" "}
                    <span
                      className="position-relative"
                      style={{ padding: "0 10px" }}
                    >
                      Masa Depan
                      <svg
                        className="circle"
                        xmlns="http://www.w3.org/2000/svg"
                        width="301"
                        height="70"
                        viewBox="0 0 301 70"
                        fill="none"
                      >
                        <path
                          d="M149.09 1.99998C97.9265 2.88199 0.763163 26.3298 2.98009 45.3788C5.75126 69.1901 82.0716 70.954 190.008 62.1349C297.945 53.3158 319.37 26.6938 281.219 14.3469C250.699 4.46936 165.529 10.2313 126.758 14.3469"
                          stroke="#FCC431"
                          stroke-width="4"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>{" "}
                    Bumi
                  </p>
                  <p className="section-subtitle-about">
                    Sedekah untuk panel surya masjid, energi terbarukan untuk
                    bumi yang lebih baik.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section-two bg-gradient-custom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-12 p-0">
                <div className="card rounded-4 card-about">
                  <div className="card-body">
                    <div class="container">
                      <div className="row justify-content-center mb-4">
                        <div className="col-12 col-lg-6 mb-3">
                          <h2 className="section-badge-title">
                            TENTANG SEDEKAH ENERGI
                          </h2>
                          <h3 className="section-title">{data.about.title}</h3>
                        </div>
                        <div
                          className="col-12 col-lg-6 text-start section-description"
                          dangerouslySetInnerHTML={{
                            __html: data.about.content,
                          }}
                        ></div>
                        <div className="col-12 text-center image-wrapper">
                          {isMobileLocal ? (
                            <img alt="sedekah-energi-asset"
                              className="img-fluid"
                              src="/energi-asset-vector/about-page/m-about.png"
                            />
                          ) : (
                            <img alt="sedekah-energi-asset"
                              className="img-fluid"
                              src="/energi-asset-vector/about-page/desk-about.png"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section-benefit">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-12 p-0">
                <div className="card rounded-4 card-about">
                  <div className="card-body">
                    <div class="container">
                      <div className="row justify-content-center">
                        <div className="col-12 text-center p-0">
                          {isMobileLocal ? (
                            <img alt="sedekah-energi-asset"
                              className="img-fluid"
                              src="/energi-asset-vector/about-page/kolase-msite.png"
                            />
                          ) : (
                            <img alt="sedekah-energi-asset"
                              className="img-fluid"
                              src="/energi-asset-vector/about-page/kolase.png"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <DonateSection onClickDonate={(link) => handleClickOption(link)} />

        <section className="about-section-four bg-dark-green">
          <svg
            className="m-asset-top"
            xmlns="http://www.w3.org/2000/svg"
            width="219"
            height="147"
            viewBox="0 0 219 147"
            fill="none"
          >
            <path
              d="M210.288 -7.07394C202.377 13.9764 171.48 60.7418 111.185 79.4011C35.8165 102.725 126.72 26.0899 94.7592 30.6609C62.7988 35.2318 46.4251 123.332 -139.163 138.014"
              stroke="#023C40"
              stroke-width="17"
            />
          </svg>
          <svg
            className="asset-right"
            xmlns="http://www.w3.org/2000/svg"
            width="219"
            height="113"
            viewBox="0 0 219 113"
            fill="none"
          >
            <path
              d="M210.714 -41.4856C202.802 -20.4353 171.906 26.3302 111.611 44.9895C36.2422 68.3136 127.145 -8.32172 95.185 -3.75075C63.2246 0.820218 46.8509 88.9201 -138.737 103.603"
              stroke="#023C40"
              stroke-width="17"
            />
          </svg>
          <div className="container quotes-wrapper">
            <div className="row">
              <div className="col-lg-8 col-12">
                <p className="text">
                  Lewat Sedekah Energi, kita semua bisa jadi bagian dari solusi
                  perubahan iklim.
                  <br />
                  <br />
                  Dengan kontribusi bareng-bareng, kita bisa bantu masjid-masjid
                  di berbagai daerah untuk beralih ke energi terbarukan, mulai
                  dari pemasangan panel surya yang jadi langkah nyata.
                </p>
              </div>
            </div>
          </div>
          <svg
            className="asset-left"
            xmlns="http://www.w3.org/2000/svg"
            width="620"
            height="200"
            viewBox="0 0 620 200"
            fill="none"
          >
            <path
              d="M7.65234 271.062C56.8102 192.136 196.535 30.9637 362.173 17.6745C569.22 1.06312 247.991 222.346 327.947 237.374C407.904 252.402 575.296 -95.7191 1022.1 40.7547"
              stroke="#023C40"
              stroke-width="17"
            />
          </svg>
          <svg
            className="m-asset-bottom"
            xmlns="http://www.w3.org/2000/svg"
            width="376"
            height="94"
            viewBox="0 0 376 94"
            fill="none"
          >
            <path
              d="M-236.77 271.296C-187.612 192.37 -47.8866 31.1975 117.751 17.9084C324.798 1.29701 3.56866 222.58 83.5254 237.607C163.482 252.635 330.874 -95.4852 777.682 40.9886"
              stroke="#023C40"
              stroke-width="17"
            />
          </svg>
          <img alt="sedekah-energi-asset"
            src="/energi-asset-vector/about-page/sun-rotate.svg"
            className="sun"
          />
          <img alt="sedekah-energi-asset"
            src="/energi-asset-vector/about-page/sun-croped.svg"
            className="m-sun"
          />
        </section>

        <section className="about-section-two bg-gradient-custom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-12 p-0">
                <div className="card rounded-4 card-about mt-4 mt-sm-0">
                  <div className="card-body">
                    <div className="row justify-content-center mb-4">
                      <div className="col-12 col-lg-6 mb-3">
                        <p className="section-badge-title">Jangkauan</p>
                        <span className="section-title">
                          Area Jangkauan <br />
                          Sedekah Energi
                        </span>
                      </div>
                      <div className="col-12 col-lg-6">
                        <p className="section-description text-start">
                          Alhamdulillah, Sedekah Energi sudah dilaksanakan di
                          Sembalun, Nusa Tenggara Barat, dan Bantul, Yogyakarta,
                          sebagai contoh nyata betapa besar potensi umat Islam
                          Indonesia dalam memberi dampak positif. Yuk,
                          bareng-bareng kita jaga bumi dan terus berkarya untuk
                          masa depan yang lebih hijau!
                        </p>
                      </div>
                      <div className="col-12 col-lg-12">
                        <div className="row justify-content-center">
                          {dataVideo.map((item) => {
                            return (
                              <div className="col-lg-6 col-12 col-12">
                                <div className="d-flex flex-column card-mini video-areas">
                                  <div className="date-badge">{item.date}</div>
                                  <Video
                                    setShowModalVideo={(param) =>
                                      setShowModalVideo(param)
                                    }
                                    videoId={item.videoId} // Ganti dengan ID video YouTube Anda
                                    thumbnailUrl={`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`}
                                  />
                                  <div className="d-flex gap-3">
                                    <div className="badge-video">{item.id}</div>
                                    <div className="text-start">
                                      <p className="m-0 text-start title">
                                        {item.name}
                                      </p>
                                      <p className="m-0 text-start desc">
                                        {item.location}
                                      </p>
                                    </div>
                                  </div>
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
            </div>
          </div>
        </section>

        <section className="documentation-section">
          <div className="shadow-left"></div>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={1000}
            allowTouchMove={false}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
              return (
                <SwiperSlide>
                  <img alt="sedekah-energi-asset" src={`/energi-asset-vector/about-page/${item}.png`} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="shadow-right"></div>
        </section>

        <section className="testimoni-section">
          <TestimoniSection />
        </section>
      </BaseLayout>
    </>
  );
};

export default About;

export function getServerSideProps() {
  const data = {
    about: {
      title: "Memakmurkan Masjid dengan Nyala Lampu Energi Bersih",
      content:
        "<p>Sedekah Energi adalah program inisiatif dari <a href='https://mosaic-indonesia.com/' class='text-decoration-none'>Mosaic Indonesia</a>, merupakan cara alternatif buat kamu yang pengen berbuat baik buat lingkungan sambil tetap menjalankan ibadah. <br /><br /> Program ini ngajak umat Muslim untuk ikut serta mendukung penyediaan energi terbarukan di masjid. Jadi, sedekah yang kamu berikan nggak cuma bermanfaat buat masyarakat sekitar, tapi juga buat bumi, sesuai dengan perintah Allah SWT yang mengajak kita untuk menjaga ciptaan-Nya.</p>",
    },
  };

  return {
    props: {
      data: { ...data },
    },
  };
}
