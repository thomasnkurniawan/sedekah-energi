export default function Quiz() {
  return (
    <section className="quiz-section">
      <div className="container">
        <div className="card">
          <div className="card-body p-0">
            <div className="row p-0 align-items-center position-relative">
              <div className="col-4 ml-4">
                <img src="/energi-asset-vector/card-quiz.svg" />
              </div>
              <div className="col-4">
                <div>
                  <span>Ikuti kuisnya dan kumpulkan semua karakter unik!</span>
                </div>
              </div>
              <div className="col-4 justify-content-end d-flex">
                <img src="/energi-asset-vector/quiz-right.svg" className="asset-quiz-right" />
                <a href="https://tally.so/templates/quiz-sedekah-energi/w42orm" target="_blank" className="btn btn-success rounded-5 d-flex align-items-center text-end btn-quiz">Ikuti Quiz</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
