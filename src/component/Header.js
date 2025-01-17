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
          <img src="/energi-logo.png" className="logo" alt="logo-sedekah-energi"/>
        </Link>
        {isMobileLocal && (
          <div>
            <button
              className="btn btn-success rounded-5 btn-donate-mobile"
              onClick={onClickDonate}
            >
              Donasi Sekarang
            </button>
            <button
              className="btn btn-link"
              type="button"
              onClick={toggleNavbar} // Handle the click event to toggle
              aria-controls="navbarNav"
              aria-label="Toggle navigation"
            >
              {!isCollapsed && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="28"
                  viewBox="0 0 29 28"
                  fill="none"
                >
                  <path
                    d="M24.833 14C24.833 14.2321 24.7408 14.4546 24.5767 14.6187C24.4126 14.7828 24.1901 14.875 23.958 14.875H4.70801C4.47594 14.875 4.25338 14.7828 4.08929 14.6187C3.9252 14.4546 3.83301 14.2321 3.83301 14C3.83301 13.7679 3.9252 13.5454 4.08929 13.3813C4.25338 13.2172 4.47594 13.125 4.70801 13.125H23.958C24.1901 13.125 24.4126 13.2172 24.5767 13.3813C24.7408 13.5454 24.833 13.7679 24.833 14ZM4.70801 7.875H23.958C24.1901 7.875 24.4126 7.78281 24.5767 7.61872C24.7408 7.45462 24.833 7.23206 24.833 7C24.833 6.76794 24.7408 6.54538 24.5767 6.38128C24.4126 6.21719 24.1901 6.125 23.958 6.125H4.70801C4.47594 6.125 4.25338 6.21719 4.08929 6.38128C3.9252 6.54538 3.83301 6.76794 3.83301 7C3.83301 7.23206 3.9252 7.45462 4.08929 7.61872C4.25338 7.78281 4.47594 7.875 4.70801 7.875ZM23.958 20.125H4.70801C4.47594 20.125 4.25338 20.2172 4.08929 20.3813C3.9252 20.5454 3.83301 20.7679 3.83301 21C3.83301 21.2321 3.9252 21.4546 4.08929 21.6187C4.25338 21.7828 4.47594 21.875 4.70801 21.875H23.958C24.1901 21.875 24.4126 21.7828 24.5767 21.6187C24.7408 21.4546 24.833 21.2321 24.833 21C24.833 20.7679 24.7408 20.5454 24.5767 20.3813C24.4126 20.2172 24.1901 20.125 23.958 20.125Z"
                    fill="#036A71"
                  />
                </svg>
              )}
              {isCollapsed && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                >
                  <path
                    d="M17.8276 16.2559C17.9089 16.3372 17.9733 16.4337 18.0173 16.54C18.0613 16.6462 18.084 16.76 18.084 16.875C18.084 16.99 18.0613 17.1038 18.0173 17.21C17.9733 17.3163 17.9089 17.4128 17.8276 17.4941C17.7463 17.5754 17.6497 17.6398 17.5435 17.6838C17.4373 17.7278 17.3235 17.7505 17.2085 17.7505C17.0935 17.7505 16.9797 17.7278 16.8735 17.6838C16.7672 17.6398 16.6707 17.5754 16.5894 17.4941L9.33349 10.237L2.07756 17.4941C1.91337 17.6582 1.69069 17.7505 1.45849 17.7505C1.2263 17.7505 1.00362 17.6582 0.839432 17.4941C0.675246 17.3299 0.583008 17.1072 0.583008 16.875C0.583008 16.6428 0.675246 16.4201 0.839432 16.2559L8.09646 9L0.839432 1.74406C0.675246 1.57988 0.583008 1.35719 0.583008 1.125C0.583008 0.892805 0.675246 0.670121 0.839432 0.505936C1.00362 0.34175 1.2263 0.249512 1.45849 0.249512C1.69069 0.249512 1.91337 0.34175 2.07756 0.505936L9.33349 7.76297L16.5894 0.505936C16.7536 0.34175 16.9763 0.249512 17.2085 0.249512C17.4407 0.249512 17.6634 0.34175 17.8276 0.505936C17.9917 0.670121 18.084 0.892805 18.084 1.125C18.084 1.35719 17.9917 1.57988 17.8276 1.74406L10.5705 9L17.8276 16.2559Z"
                    fill="#036A71"
                  />
                </svg>
              )}
            </button>
          </div>
        )}

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
                onMouseEnter={() => {
                  setDropdownKnowledge(true);
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
                onMouseEnter={() => {
                  setDropdownKnowledge(true);
                }}
                onMouseLeave={() => {
                  setDropdownKnowledge(false);
                }}
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
