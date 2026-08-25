import { Link } from "react-router";
import logo from "../assets/logo.svg";
const navLinks = [
  { nav: "Home", path: "home" },
  { nav: "Features", path: "feature" },
  { nav: "about", path: "about" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[#f4fafd]/85 px-3 pt-3 font-Inter backdrop-blur-xl sm:px-5">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl border border-white/80 bg-white/75 px-3 shadow-[0_10px_30px_rgba(24,94,32,0.1)] sm:px-5">
        <div className="flex items-center gap-8 lg:gap-16">
          <a
            href="#top"
            className="flex items-center gap-2.5 text-xl font-extrabold tracking-tight text-[#185e20]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f1f8e9] shadow-inner">
              <img src={logo} alt="EcoWise logo" className="h-7 w-7" />
            </span>
            EcoWise
          </a>
          <nav
            className="hidden items-center gap-1 text-sm font-semibold text-[#506259] md:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((item) => {
              return (
                <Link 
                   key={item.nav}
                  to={item.path}
                  className={`rounded-full px-4 py-2 transition hover:bg-[#f1f8e9] hover:text-[#185e20] ${item.nav === "Home" ? "bg-[#f1f8e9] text-[#185e20]" : ""}`}
                >
                  {item.nav}
                </Link>
              );
            })}
          </nav>
        </div>

        <Link
          to="auth"
          viewTransition
          className="group flex items-center gap-2 rounded-xl bg-[#185e20] px-3.5 py-2.5 text-sm font-bold text-white shadow-[0_6px_16px_rgba(24,94,32,0.22)] transition hover:-translate-y-0.5 hover:bg-[#124b19] sm:px-5"
        >
          <span className="hidden sm:inline">Get Started</span>
          <span className="sm:hidden">Start</span>
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M5 12h13M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </header>
  );
}
