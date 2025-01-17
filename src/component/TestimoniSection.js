import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { useRef, useState } from "react";

export default function TestimoniSection() {
  const swiperRef = useRef(null); // Reference to the Swiper instance

  const dataTestimoni = [
    {
      picture: "/energi-asset-vector/3-testimoni.jpg",
      name: "Ibu Diah",
      occupation: "Pengajar SD",
      location: "Desa Sembalun, Lombok Timur, NTB",
      description:
        "Dulu ada sih keinginan saya untuk mencoba memasang (panel surya), tapi saya belum tau ilmunya. Alhamdulillah dari temen-teman ini bersedia memberi kita pelajaran, membantu kita. Bagi saya pribadi sangat membantu sekali.",
    },
    {
      picture: "/energi-asset-vector/2-testimoni.jpg",
      name: "Bapak Ayub",
      occupation: "Penjual Mie Ayam",
      location: "Desa Sembalun, Lombok Timur, NTB",
      description:
        "Karena setiap bulan puasa, di sini (jalanan) kan lewat orang pergi tarawih, jadi kita biasa masang lampu di sini. Seandainya nanti listrik yang dari masjid bisa dialirkan ke sini untuk jalan menuju masjid, besar sekali harapan kami bisa terealisasi.",
    },
    {
      picture: "/energi-asset-vector/1-testimoni.jpg",
      name: "Ibu Nurfianti",
      occupation: "Ibu Rumah Tangga",
      location: "Desa Sembalun, Lombok Timur, NTB",
      description:
        "Karena kalau hujan angin di sini sering banget mati lampu. Pohon tumbang karena angin, listriknya roboh. Jadi kalau pakai panel surya, tinggal mengandalkan tenaga matahari aja.",
    },
    {
      picture: "/energi-asset-vector/4-testimoni.jpg",
      name: "Bapak Ruspaendi",
      occupation: "Petani",
      location: "Desa Sembalun, Lombok Timur, NTB",
      description:
        "Ya, syukur Alhamdulillah ya, Mbak, ya. Dipasangkan, dibantu, diajar apalagi, dikasih pelatihan berarti kan tambah ilmu… Nah, kedepannya kita harapkan bahwa bukan Mbak, Mas-mas, dan Bapak-bapak, bukan hanya berhenti sampai di sini, kan begitu.",
    },
  ];

  const handleSlideClick = (index) => {
    console.log(index)
    if (swiperRef.current && swiperRef.current.slideTo) {
    console.log(index)

      swiperRef.current.slideToLoop(index); // Programmatically slide to the clicked slide
    }
  };

  return (
    <section className="impact-section">
      <div className="container text-center">
        <div className="card rounded-4">
          <div className="card-body">
            <div className="row justify-content-center align-items-center g-1 mb-5">
              <div className="col-12">
                <span className="section-badge-title">Testimoni</span>
              </div>
              <div className="col-12">
                <span className="section-title">
                  Tanggapan Masyarakat Tentang Sedekah Energi
                </span>
              </div>
            </div>
            <div className="slider-container">
              <Swiper
                className="my-swiper"
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                onSwiper={(swiper) => (swiperRef.current = swiper)} 
                breakpoints={{
                  // when window width is >= 320px
                  320: {
                    slidesPerView: "auto",
                    spaceBetween: 10,
                    centeredSlides: false,
                  },
                  // when window width is >= 480px
                  480: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
              >
                {dataTestimoni.map((item, index) => {
                  return (
                    <SwiperSlide
                      onClick={() => handleSlideClick(index)}
                    >
                      <div className="card card-testimoni">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-12 col-lg-5 person-wrapper">
                              <img alt="sedekah-energi-asset" className="person" src={item.picture} />
                            </div>
                            <div className="col-12 col-lg-7 text-start">
                              <div className="row">
                                <div className="col-lg-10 col-10">
                                  <p className="name">{item.name}</p>
                                  <p className="m-0 occupation">
                                    {item.occupation}
                                  </p>
                                  <p className="location">{item.location}</p>
                                </div>
                                  <div className="col-lg-2 col-2">
                                    <svg
                                      className="pr-4"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20"
                                      height="17"
                                      viewBox="0 0 20 17"
                                      fill="none"
                                    >
                                      <path
                                        d="M0.399902 16.5V12.0989C0.399902 10.7999 0.624218 9.43219 1.07285 7.9957C1.52148 6.55922 2.14536 5.18386 2.94448 3.86963C3.7436 2.55539 4.68293 1.43218 5.76244 0.5L8.87482 2.9298C8.01962 4.28987 7.29059 5.71108 6.68774 7.19341C6.0849 8.67574 5.78347 10.288 5.78347 12.0301V16.5H0.399902ZM11.125 16.5V12.0989C11.125 10.7999 11.3493 9.43219 11.7979 7.9957C12.2466 6.55922 12.8704 5.18386 13.6696 3.86963C14.4687 2.55539 15.408 1.43218 16.4875 0.5L19.5999 2.9298C18.7447 4.28987 18.0157 5.71108 17.4128 7.19341C16.81 8.67574 16.5086 10.288 16.5086 12.0301V16.5H11.125Z"
                                        fill="#024B50"
                                      />
                                    </svg>
                                  </div>
                                <div className="col-lg-12 col-12">
                                  <p className="p-0 description">
                                    {item.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
