import Video from "./Video";

export default function AreasSection() {
  return (
    <section className="impact-section">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="card text-center rounded-4">
              <div className="card-body">
                <div className="row justify-content-center align-items-center g-1 mb-4">
                  <div className="col-12">
                    <span className="section-badge-title">Jangkauan</span>
                  </div>
                  <div className="col-12 mb-4">
                    <span className="section-title">Area Jangkauan</span>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-5 col-12 col-12">
                    <div className="d-flex flex-column card-mini video-areas">
                      <div className="date-badge">Juni, 2023</div>
                      <Video
                        videoId="tVwFVwysZ8A" // Ganti dengan ID video YouTube Anda
                        thumbnailUrl="https://img.youtube.com/vi/tVwFVwysZ8A/maxresdefault.jpg"
                      />
                      <div className="d-flex gap-4">
                        <div className="badge-video">1</div>
                        <div className="text-start">
                          <p className="m-0 text-start title">
                            Masjid Al Muharram Bantul
                          </p>
                          <p className="m-0 text-start desc">
                            Kampung Brajan, Kabupaten Bantul, DIY
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-12">
                    <div className="d-flex flex-column card-mini video-areas">
                      <div className="date-badge">Maret, 2023</div>
                      <Video
                        videoId="mxBtzM4CAuU" // Ganti dengan ID video YouTube Anda
                        thumbnailUrl="https://img.youtube.com/vi/mxBtzM4CAuU/maxresdefault.jpg"
                      />
                      <div className="d-flex gap-4">
                        <div className="badge-video">2</div>
                        <div className="text-start">
                          <p className="m-0 text-start title">
                            Masjid Al-Ummah Al-Islamiyah Lombok
                          </p>
                          <p className="m-0 text-start desc">
                            Kampung Brajan, Kabupaten Bantul, DIY
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
