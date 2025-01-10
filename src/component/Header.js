import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

export default function Header({ onClickDonate }) {
  const [currentPath, setCurrentPath] = useState("");

  // State to track whether the navbar is collapsed or not
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [dropdownKnowledge, setDropdownKnowledge] = useState(false);

  // Function to toggle the collapsed state
  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const [isMobileLocal, setIsMobileLocal] = useState(false);
  useEffect(() => {
    setIsMobileLocal(isMobile);
    setCurrentPath(window.location.pathname);
  }, [isMobile]);

  const dataKnowledge = [
    {
      title: "Basic Knowledge Renewable Energy",
      link: "/knowledge-base/basic-knowledge-renewable-energy",
    },
    {
      title: "Offline Campaign Guidelines",
      link: "/knowledge-base/offline-campaign-guidelines-sedekah-energi",
    },
    {
      title: "Digital Campaign Guidelines",
      link: "/knowledge-base/digital-campaign-guidelines-sedekah-energi",
    },
    {
      title: "Do`s and Dont`s Campaigns",
      link: "/knowledge-base/dos-and-donts-campaigns-sedekah-energi",
    },
  ];

  return (
    <div className="header-section fixed-top">
      <nav className="container navbar navbar-expand-lg bg-white justify-content-between align-items-center px-2">
        <Link href="/" className="text-decoration-none">
          <img src="/energi-logo.png" className="logo" />
        </Link>
        {isMobileLocal && (
          <button
            className="btn btn-success rounded-5 btn-donate-mobile"
            onClick={onClickDonate}
          >
            Donasi Sekarang
          </button>
        )}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar} // Handle the click event to toggle
          aria-controls="navbarNav"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`justify-content-end collapse navbar-collapse transisi ${
            !isCollapsed ? "" : "show"
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav ml-auto align-items-center gap-4">
            <li className="nav-item">
              <Link
                href="/about"
                className={clsx({
                  "text-decoration-none nav-link": true,
                  "active-link": currentPath === "/about",
                })}
              >
                Tentang Program
              </Link>
            </li>
            <li className="nav-item">
              <a
                className={clsx({
                  "nav-link d-flex gap-2": true,
                  "active-link": dropdownKnowledge,
                })}
                onClick={() => {
                  setDropdownKnowledge(!dropdownKnowledge);
                }}
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded={dropdownKnowledge}
              >
                Knowledge Hub
                <svg
                  className={dropdownKnowledge ? "opened" : ""}
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M20.3641 9.53062L12.864 17.0306C12.7944 17.1003 12.7117 17.1557 12.6206 17.1934C12.5296 17.2312 12.432 17.2506 12.3334 17.2506C12.2349 17.2506 12.1373 17.2312 12.0462 17.1934C11.9552 17.1557 11.8725 17.1003 11.8028 17.0306L4.3028 9.53062C4.16207 9.38988 4.08301 9.19901 4.08301 8.99999C4.08301 8.80097 4.16207 8.61009 4.3028 8.46936C4.44353 8.32863 4.6344 8.24957 4.83342 8.24957C5.03245 8.24957 5.22332 8.32863 5.36405 8.46936L12.3334 15.4397L19.3028 8.46936C19.3725 8.39968 19.4552 8.34441 19.5463 8.30669C19.6373 8.26898 19.7349 8.24957 19.8334 8.24957C19.932 8.24957 20.0296 8.26898 20.1206 8.30669C20.2116 8.34441 20.2944 8.39968 20.3641 8.46936C20.4337 8.53905 20.489 8.62177 20.5267 8.71282C20.5644 8.80386 20.5838 8.90144 20.5838 8.99999C20.5838 9.09854 20.5644 9.19612 20.5267 9.28716C20.489 9.37821 20.4337 9.46093 20.3641 9.53062Z"
                    fill="#3D4460"
                  />
                </svg>
              </a>
              <div
                className={clsx({
                  "dropdown-menu": true,
                  show: dropdownKnowledge,
                })}
                aria-labelledby="navbarDropdownMenuLink"
              >
                {dataKnowledge.map((item) => {
                  return (
                    <Link
                      className={clsx({
                        "dropdown-item text-decoration-none": true,
                        "active-link": currentPath === item.link,
                      })}
                      href={item.link}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            </li>
            <li className="nav-item">
              <Link
                href="https://tally.so/r/m6rB7Y"
                target="_blank"
                className={clsx({
                  "text-decoration-none nav-link": true,
                })}
              >
                Quiz
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/faq"
                className={clsx({
                  "text-decoration-none nav-link": true,
                  "active-link": currentPath === "/faq",
                })}
              >
                Pertanyaan Umum
              </Link>
            </li>
            {!isMobileLocal && (
              <li className="nav-item">
                <button
                  href="#donate"
                  className="btn btn-success rounded-5"
                  onClick={onClickDonate}
                >
                  Donasi Sekarang
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}
