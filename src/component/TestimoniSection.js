import Slider from "react-slick";

export default function TestimoniSection() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
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
              <Slider {...settings}>
                {/* {[1, 2, 3].map((item) => {
                  return ( */}
                    <div>
                      <div className="card card-testimoni">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-2">
                              <img
                                className="person"
                                src="/energi-asset-vector/person.svg"
                              />
                            </div>
                            <div className="col-9 text-start">
                              <p className="name">1</p>
                              <p className="m-0 occupation">Occupation Here</p>
                              <p className="location">Location</p>
                            </div>
                            <div className="col-1">
                              <svg
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
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <p className="p-0 description">
                                Lorem ipsum dolor sit amet consectetur. Elit sed
                                laoreet augue adipiscing. Egestas aliquet ipsum
                                mattis porttitor lacinia ut. Fusce suspendisse
                                commodo eu quam imperdiet mattis nulla quis
                                felis.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  {/* );
                })} */}
              </Slider>
            </div>
            {/* <div className="row">
                  <Slider {...settings} className="custom-slider">
                   
                  </Slider>
                </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
