import BaseLayoutKnowledge from "@/component/BaseLayoutKnowledge";
import Quiz from "@/component/Quiz";
import knowledge from "@/constant/knowledge-base.json";
import clsx from "clsx";
import Head from "next/head";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import ScrollSpy from "react-scrollspy-navigation";

const KnowledgeBasePage = ({ knowledges }) => {
  const [listActive, setListActive] = useState("01");

  const [isMobileLocal, setIsMobileLocal] = useState(false);
  useEffect(() => {
    setIsMobileLocal(isMobile);
  }, [isMobile]);

  const handleClickList = (id) => {
    setListActive(id);
    var element = document.getElementById(`${id}`);
    var headerOffset = isMobileLocal ? 650 : 80;
    var elementPosition = element.getBoundingClientRect().top;
    const pageY = window.scrollY || window.pageYOffset;
    var offsetPosition = elementPosition + pageY - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    setIsListExpanded(!isListExpanded);
  };

  const [isListExpanded, setIsListExpanded] = useState(false);

  const toggleAccordionList = () => {
    setIsListExpanded(!isListExpanded);
  };

  return (
    <>
      <Head>
        <title>Sedekah Energi - {knowledges.title}</title>
        <meta
          name="description"
          content={knowledge.subtitle}
        />
        <meta property="og:title" content={`Sedekah Energi - ${knowledges.title}`} />
        <meta
          property="og:description"
          content={knowledge.subtitle}
          
        />
        <link
          rel="canonical"
          href={`https://sedekahenergi.mosaic-indonesia.com/${knowledges.slug}`}
        />
      </Head>
      <BaseLayoutKnowledge
        page={knowledges.page}
        jumbotronContent={{
          title: knowledges.title,
          subtitle: knowledges.subtitle,
        }}
      >
        <div className="knowledge-base-page">
          <div className="container">
            <div className="row knowledge-base-section">
              <div className="col-lg-4 col-12 wrapper-mview">
                {!isMobileLocal ? (
                  <div className="card-overview">
                    <p className="title p-0 m-0">Daftar Isi</p>
                    <ScrollSpy activeClass="active">
                      {knowledges.content.map((item) => {
                        return (
                          <a
                            href={`#${item.id}`}
                            onClick={(e) => {
                              e.preventDefault();
                              handleClickList(item.id);
                            }}
                            className={clsx({
                              "point-text text-decoration-none": true,
                            })}
                          >
                            {item.section}
                            <span>{item.id}</span>
                          </a>
                        );
                      })}
                    </ScrollSpy>
                  </div>
                ) : (
                  <div className="accordion-container">
                    <div
                      className="accordion-header"
                      onClick={toggleAccordionList}
                    >
                      <p className="title m-0 p-0">Daftar Isi</p>
                      <span
                        className={`accordion-arrow ${
                          isListExpanded ? "expanded" : ""
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                        >
                          <path
                            d="M20.367 9.53062L12.867 17.0306C12.7973 17.1003 12.7146 17.1557 12.6236 17.1934C12.5325 17.2312 12.4349 17.2506 12.3364 17.2506C12.2378 17.2506 12.1402 17.2312 12.0491 17.1934C11.9581 17.1557 11.8754 17.1003 11.8057 17.0306L4.30573 9.53062C4.165 9.38988 4.08594 9.19901 4.08594 8.99999C4.08594 8.80097 4.165 8.61009 4.30573 8.46936C4.44646 8.32863 4.63733 8.24957 4.83635 8.24957C5.03538 8.24957 5.22625 8.32863 5.36698 8.46936L12.3364 15.4397L19.3057 8.46936C19.3754 8.39968 19.4581 8.34441 19.5492 8.30669C19.6402 8.26898 19.7378 8.24957 19.8364 8.24957C19.9349 8.24957 20.0325 8.26898 20.1235 8.30669C20.2146 8.34441 20.2973 8.39968 20.367 8.46936C20.4367 8.53905 20.4919 8.62177 20.5296 8.71282C20.5674 8.80386 20.5868 8.90144 20.5868 8.99999C20.5868 9.09854 20.5674 9.19612 20.5296 9.28716C20.4919 9.37821 20.4367 9.46093 20.367 9.53062Z"
                            fill="#036A71"
                          />
                        </svg>
                      </span>
                    </div>
                    <ScrollSpy activeClass="active">
                      <>
                        {isListExpanded && (
                          <div className="accordion-body">
                            {knowledges.content.map((item) => {
                              return (
                                <a
                                  href={`#${item.id}`}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleClickList(item.id);
                                  }}
                                  className={clsx({
                                    "point-text text-decoration-none": true,
                                  })}
                                >
                                  {item.section}
                                  <span>{item.id}</span>
                                </a>
                              );
                            })}
                          </div>
                        )}
                      </>
                    </ScrollSpy>
                  </div>
                )}
              </div>

              <div className="col-lg-8 col-12 wrapper-content-section">
                {knowledges.content.map((item, index) => {
                  return <AccordionContent item={item} index={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
        <Quiz />
      </BaseLayoutKnowledge>
    </>
  );
};

export default KnowledgeBasePage;

export function getServerSideProps({ params }) {
  const knwoledgeBySlug = knowledge.find((item) => item.slug === params.slug);
  return {
    props: {
      knowledges: { ...knwoledgeBySlug },
    },
  };
}

const AccordionContent = ({ item, index }) => {
  const [activeIndex, setActiveIndex] = useState([]);
  const toggleAccordion = (index) => {
    if (activeIndex.includes(index)) {
      setActiveIndex((val) => val.filter((i) => i !== index));
      return;
    }
    setActiveIndex([...activeIndex, index]);
  };
  return (
    <section className="content-section" id={item.id}>
      <div className="section-wrapper row  align-items-center">
        <div className="col-2 col-lg-1 pr-0 pl-3">
          <p className="id">{item.id}</p>
        </div>
        <div className="col-10 col-lg-11 pl-2 pl-sm-0">
          <p className="section-title">{item.section}</p>
        </div>
      </div>

      {item.content.map((content) => {
        if (content.type === "free-text") {
          return (
            <div className="accordion">
              <div
                className={clsx({
                  "accordion-item": true,
                  expanded: activeIndex.includes(`${item.id}-${content.title}`),
                })}
                id={content.title.replace(/\s+/g, "")}
              >
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${
                      activeIndex !== index ? "" : "collapsed"
                    }`}
                    type="button"
                    onClick={() =>
                      toggleAccordion(`${item.id}-${content.title}`)
                    }
                    aria-expanded={activeIndex.includes(
                      `${item.id}-${content.title}`
                    )}
                  >
                    {content.title}
                  </button>
                </h2>
                <div
                  id={`${content.title.replace(/\s+/g, "")}-content`}
                  className={`accordion-collapse collapse ${
                    activeIndex.includes(`${item.id}-${content.title}`)
                      ? "show"
                      : ""
                  }`}
                  aria-labelledby={content.title.replace(/\s+/g, "")}
                >
                  {content.body?.map((body) => {
                    return (
                      <div
                        className="accordion-body"
                        dangerouslySetInnerHTML={{ __html: body }}
                      ></div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        }

        if (content.type === "heading") {
          return (
            <div className="accordion">
              <div
                className={clsx({
                  "accordion-item": true,
                  expanded: activeIndex.includes(`${item.id}-${content.title}`),
                })}
                id={content.title.replace(/\s+/g, "")}
              >
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${
                      activeIndex !== index ? "" : "collapsed"
                    }`}
                    type="button"
                    onClick={() =>
                      toggleAccordion(`${item.id}-${content.title}`)
                    }
                    aria-expanded={activeIndex.includes(
                      `${item.id}-${content.title}`
                    )}
                  >
                    {content.title}
                  </button>
                </h2>
                <div
                  id={`${content.title.replace(/\s+/g, "")}-content`}
                  className={`accordion-collapse collapse ${
                    activeIndex.includes(`${item.id}-${content.title}`)
                      ? "show"
                      : ""
                  }`}
                  aria-labelledby={content.title.replace(/\s+/g, "")}
                >
                  <div className="accordion-body">
                    {content.subtitle ? (
                      <>
                        <p>{content.subtitle}</p>
                        <ul>
                          {content.body.map((body) => {
                            return (
                              <>
                                <li
                                  className={` ${
                                    body.description && "fw-bold"
                                  }`}
                                >
                                  {body.heading}
                                </li>
                                <p>{body.description}</p>
                              </>
                            );
                          })}
                        </ul>
                      </>
                    ) : (
                      <ul>
                        {content.body.map((body) => {
                          return (
                            <>
                              <li
                                className={` ${body.description && "fw-bold"}`}
                              >
                                {body.heading}
                              </li>
                              <p>{body.description}</p>
                            </>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        }

        if (content.type === "heading-image") {
          return (
            <div className="accordion">
              <div
                className={clsx({
                  "accordion-item": true,
                  expanded: activeIndex.includes(`${item.id}-${content.title}`),
                })}
                id={content.title.replace(/\s+/g, "")}
              >
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${
                      activeIndex !== index ? "" : "collapsed"
                    }`}
                    type="button"
                    onClick={() =>
                      toggleAccordion(`${item.id}-${content.title}`)
                    }
                    aria-expanded={activeIndex.includes(
                      `${item.id}-${content.title}`
                    )}
                  >
                    {content.title}
                  </button>
                </h2>
                <div
                  id={`${content.title.replace(/\s+/g, "")}-content`}
                  className={`accordion-collapse collapse ${
                    activeIndex.includes(`${item.id}-${content.title}`)
                      ? "show"
                      : ""
                  }`}
                  aria-labelledby={content.title.replace(/\s+/g, "")}
                >
                  <div className="accordion-body">
                    {content.body.map((body) => {
                      return (
                        <div className="row align-items-center">
                          <div className="col-12 col-lg-3 pb-3">
                            <img
                              alt="sedekah-energi-asset"
                              src={body.image}
                              width={"100%"}
                            />
                          </div>
                          <div className="col-12 col-lg-9 pl-3">
                            <p className="fw-bold p-0 m-0">{body.heading}</p>
                            <p>{body.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        }

        if (content.type === "heading-number") {
          return (
            <div className="accordion">
              <div
                className={clsx({
                  "accordion-item": true,
                  expanded: activeIndex.includes(`${item.id}-${content.title}`),
                })}
                id={content.title.replace(/\s+/g, "")}
              >
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${
                      activeIndex !== index ? "" : "collapsed"
                    }`}
                    type="button"
                    onClick={() =>
                      toggleAccordion(`${item.id}-${content.title}`)
                    }
                    aria-expanded={activeIndex.includes(
                      `${item.id}-${content.title}`
                    )}
                  >
                    {content.title}
                  </button>
                </h2>
                <div
                  id={`${content.title.replace(/\s+/g, "")}-content`}
                  className={`accordion-collapse collapse ${
                    activeIndex.includes(`${item.id}-${content.title}`)
                      ? "show"
                      : ""
                  }`}
                  aria-labelledby={content.title.replace(/\s+/g, "")}
                >
                  <div className="accordion-body">
                    <ol>
                      {content.body?.map((body) => {
                        return (
                          <>
                            <li className="fw-bold">
                              {body.heading || body?.longDescription}
                            </li>

                            {body.description.constructor !== Array && (
                              <p> {body.description} </p>
                            )}
                            {body.description.constructor === Array && (
                              <ul>
                                {body.description?.map((child) => {
                                  return (
                                    <>
                                      <li className="fw-bolder">
                                        <div
                                          dangerouslySetInnerHTML={{
                                            __html: child.head,
                                          }}
                                        ></div>
                                      </li>
                                      <span>{child.desc}</span>
                                    </>
                                  );
                                })}
                              </ul>
                            )}
                          </>
                        );
                      })}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          );
        }

        if (content.type === "heading-number-no-bold") {
          return (
            <div className="accordion">
              <div
                className={clsx({
                  "accordion-item": true,
                  expanded: activeIndex.includes(`${item.id}-${content.title}`),
                })}
                id={content.title.replace(/\s+/g, "")}
              >
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${
                      activeIndex !== index ? "" : "collapsed"
                    }`}
                    type="button"
                    onClick={() =>
                      toggleAccordion(`${item.id}-${content.title}`)
                    }
                    aria-expanded={activeIndex.includes(
                      `${item.id}-${content.title}`
                    )}
                  >
                    {content.title}
                  </button>
                </h2>
                <div
                  id={`${content.title.replace(/\s+/g, "")}-content`}
                  className={`accordion-collapse collapse ${
                    activeIndex.includes(`${item.id}-${content.title}`)
                      ? "show"
                      : ""
                  }`}
                  aria-labelledby={content.title.replace(/\s+/g, "")}
                >
                  <div className="accordion-body">
                    <ol>
                      {content.body?.map((body) => {
                        return (
                          <>
                            <li className="mb-3">
                              {body.heading || body?.longDescription}
                            </li>
                          </>
                        );
                      })}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          );
        }

        if (content.type === "heading-number-nested") {
          return (
            <div className="accordion">
              <div
                className={clsx({
                  "accordion-item": true,
                  expanded: activeIndex.includes(`${item.id}-${content.title}`),
                })}
                id={content.title.replace(/\s+/g, "")}
              >
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${
                      activeIndex !== index ? "" : "collapsed"
                    }`}
                    type="button"
                    onClick={() =>
                      toggleAccordion(`${item.id}-${content.title}`)
                    }
                    aria-expanded={activeIndex.includes(
                      `${item.id}-${content.title}`
                    )}
                  >
                    {content.title}
                  </button>
                </h2>
                <div
                  id={`${content.title.replace(/\s+/g, "")}-content`}
                  className={`accordion-collapse collapse ${
                    activeIndex.includes(`${item.id}-${content.title}`)
                      ? "show"
                      : ""
                  }`}
                  aria-labelledby={content.title.replace(/\s+/g, "")}
                >
                  <div className="accordion-body">
                    {content.body?.map((body) => {
                      return (
                        <>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: body.longDescription,
                            }}
                            className="pb-2"
                          ></div>
                          <ol>
                            {body.description.map((i) => {
                              return (
                                <>
                                  {!i.subtitle && (
                                    <li className="fw-bold px-3">{i.heads}</li>
                                  )}
                                  {i.subtitle && (
                                    <span
                                      className="fw-bold"
                                      style={{ marginLeft: "-2rem" }}
                                    >
                                      {i.subtitle}
                                    </span>
                                  )}
                                  <ul>
                                    {i.descs.map((z) => {
                                      return (
                                        <>
                                          <li>
                                            <div
                                              dangerouslySetInnerHTML={{
                                                __html: z.head,
                                              }}
                                            ></div>
                                          </li>
                                          <p className="m-0">{z.desc}</p>
                                        </>
                                      );
                                    })}
                                  </ul>
                                </>
                              );
                            })}
                          </ol>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        }

        if (content.type === "multiple-heading") {
          return (
            <div className="accordion">
              <div
                className={clsx({
                  "accordion-item": true,
                  expanded: activeIndex.includes(`${item.id}-${content.title}`),
                })}
                id={content.title.replace(/\s+/g, "")}
              >
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${
                      activeIndex !== index ? "" : "collapsed"
                    }`}
                    type="button"
                    onClick={() =>
                      toggleAccordion(`${item.id}-${content.title}`)
                    }
                    aria-expanded={activeIndex.includes(
                      `${item.id}-${content.title}`
                    )}
                  >
                    {content.title}
                  </button>
                </h2>
                <div
                  id={`${content.title.replace(/\s+/g, "")}-content`}
                  className={`accordion-collapse collapse ${
                    activeIndex.includes(`${item.id}-${content.title}`)
                      ? "show"
                      : ""
                  }`}
                  aria-labelledby={content.title.replace(/\s+/g, "")}
                >
                  <div className="accordion-body">
                    {content.body.map((item) => {
                      return (
                        <div>
                          <p className="m-0 fw-bold">{item.heading}</p>
                          <p className="m-0 fw-bold">{item.subtitle}</p>
                          {item.description.map((desc) => {
                            return (
                              <ul>
                                <li>{desc.heading}</li>
                                {desc.point && (
                                  <ul>
                                    {desc.point.map((q) => {
                                      return <li>{q}</li>;
                                    })}
                                  </ul>
                                )}
                              </ul>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </section>
  );
};
