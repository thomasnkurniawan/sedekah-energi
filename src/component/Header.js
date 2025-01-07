import Link from "next/link";

export default function Header() {
  return (
    <header className="header-section py-2">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img src="/energi-logo.png" className="logo" />
        </div>
        <nav>
          <Link href="/" className="text-decoration-none">
            Home
          </Link>
          <Link href="/about" className="text-decoration-none">
            About Us
          </Link>
          <Link href="/knowledge-hub" className="text-decoration-none">
            Knowledge Hub
          </Link>
          <Link href="/faq" className="text-decoration-none">
            FAQ
          </Link>
          <button href="#donate" className="btn btn-success rounded-5">
            Donate Now
          </button>
        </nav>
      </div>
    </header>
  );
}
