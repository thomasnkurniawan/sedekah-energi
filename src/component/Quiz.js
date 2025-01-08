import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

export default function Quiz() {
  const [isMobileLocal, setIsMobileLocal] = useState(false);
  useEffect(() => {
    setIsMobileLocal(isMobile);
  }, [isMobile]);

  return (
    <section className="quiz-section">
      <div className="container">
        <div className="card">
          <div className="card-body quiz-card">
            <div className="row p-0 align-items-center position-relative">
              {!isMobileLocal && (
                <div className="col-lg-4 col-12 ml-4">
                  <img src="/energi-asset-vector/card-quiz.svg" />
                </div>
              )}
              <div className="col-lg-4 col-12">
                <div>
                  <span>Ikuti kuisnya dan kumpulkan semua karakter unik!</span>
                </div>
              </div>
              <div className="col-lg-3 col-12 pt-4 p-sm-4 pb-4">
                <a
                  href="https://tally.so/r/m6rB7Y"
                  target="_blank"
                  className="btn btn-success rounded-5 d-flex align-items-center justify-content-center btn-quiz"
                >
                  Ikuti Quiz
                </a>
                {!isMobileLocal && (
                  <img
                    src="/energi-asset-vector/quiz-right.svg"
                    className="asset-quiz-right"
                  />
                )}
              </div>
              {isMobileLocal && (
                <div className="col-12">
                  <img
                    src="/energi-asset-vector/quiz-msite.svg"
                    width={"100%"}
                    style={{marginBottom: '-16px'}}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
