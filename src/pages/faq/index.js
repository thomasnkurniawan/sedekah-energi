import BaseLayoutKnowledge from "@/component/BaseLayoutKnowledge";
import DonateSection from "@/component/Cta-donate";
import faq from "@/constant/faq.json";
import { useState } from "react";

const Faq = ({ faqList }) => {
  const jumbotronContent = {
    title: "Pertanyaan Umum",
    subtitle:
      "Temukan jawaban atas pertanyaan umum seputar program Sedekah Energi.",
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <BaseLayoutKnowledge page={"faq"} jumbotronContent={jumbotronContent}>
      <div className="faq-page">
        <div className="faq-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-12">
                <div className="card faq-card">
                  <div className="card-body p-0">
                    <div className="row justify-content-center align-items-center g-1 mb-3">
                      <div className="col-12">
                        <span className="section-badge-title">FAQ</span>
                      </div>
                      <div className="col-12 mb-3">
                        <span className="section-title">
                          Pertanyaan Umum Teknikal: Solar Panel Installation
                        </span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-12">
                        <div className="accordion">
                          {faqList.content.map((faq, index) => {
                            return (
                              <div
                                className={clsx({
                                  "accordion-item": true,
                                  expanded: activeIndex === index,
                                })}
                                id={faq.title.replace(/\s+/g, "")}
                              >
                                <h2 className="accordion-header">
                                  <button
                                    className={`accordion-button ${
                                      activeIndex !== index ? "" : "collapsed"
                                    }`}
                                    type="button"
                                    onClick={() => toggleAccordion(index)}
                                    aria-expanded={activeIndex === index}
                                  >
                                    {faq.title}
                                  </button>
                                </h2>
                                <div
                                  id={`${faq.title.replace(
                                    /\s+/g,
                                    ""
                                  )}-content`}
                                  className={`accordion-collapse collapse ${
                                    activeIndex === index ? "show" : ""
                                  }`}
                                  aria-labelledby={faq.title.replace(
                                    /\s+/g,
                                    ""
                                  )}
                                >
                                  {faq.body.length > 1 ? (
                                    <div className="accordion-body">
                                      <ul>
                                        {faq.body.map((body) => {
                                          return <li>{body}</li>;
                                        })}
                                      </ul>
                                    </div>
                                  ) : (
                                    <>
                                      {faq.body.map((body) => {
                                        return (
                                          <div className="accordion-body">
                                            {body}
                                          </div>
                                        );
                                      })}
                                    </>
                                  )}
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
        </div>
        <DonateSection />
      </div>
    </BaseLayoutKnowledge>
  );
};

export default Faq;

export function getServerSideProps() {
  return {
    props: {
      faqList: { ...faq },
    },
  };
}
