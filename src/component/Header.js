import Link from "next/link";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

export default function Header({ onClickDonate }) {
  // State to track whether the navbar is collapsed or not
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Function to toggle the collapsed state
  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const [isMobileLocal, setIsMobileLocal] = useState(false);
  useEffect(() => {
    setIsMobileLocal(isMobile);
  }, [isMobile]);

  return (
    <div className="header-section">
      <nav className="container navbar navbar-expand-lg bg-white justify-content-between align-items-center px-2">
        <a className="navbar-brand" href="#">
          <img src="/energi-logo.png" className="logo" />
        </a>
        {isMobileLocal && (
          <button
            className="btn btn-success rounded-5 btn-donate-mobile"
            onClick={onClickDonate}
          >
            Donasi Sekarang
          </button>
        )}
        {/* <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar} // Handle the click event to toggle
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed} // Inverse of isCollapsed
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div
          className={`justify-content-end collapse navbar-collapse ${
            isCollapsed ? "" : "show"
          }`}
          id="navbarNav"
        >
          {isCollapsed && (
            <ul className="navbar-nav ml-auto align-items-center gap-4">
              {/* <li className="nav-item">
              <Link href="/about" className="text-decoration-none">
                Tentang Program
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/knowledge-hub" className="text-decoration-none">
                Knowledge Hub
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/faq" className="text-decoration-none">
                Quiz
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/faq" className="text-decoration-none">
                Pertanyaan Umum
              </Link>
            </li> */}
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
          )}
          {!isMobileLocal && (
            <ul className="navbar-nav ml-auto align-items-center gap-4">
              <li className="nav-item">
                <button
                  href="#donate"
                  className="btn btn-success rounded-5"
                  onClick={onClickDonate}
                >
                  Donasi Sekarang
                </button>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
}
