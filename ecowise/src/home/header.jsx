import { Link } from "react-router";
import { LuLeaf } from "react-icons/lu";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-main px-3 pt-3 font-Inter backdrop-blur-xl sm:px-5">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl border border-white/80 bg-transparent   px-3 shadow-[0_10px_30px_rgba(24,94,32,0.1)] sm:px-5">
        <div className="flex items-center gap-8 lg:gap-16">
          <Link
            href="/"
            className="flex items-center gap-1 sm:gap-2.5 text-xs sm:text-2xl font-extrabold tracking-tight text-[#185e20]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-900 text-lime-200 shadow-sm">
              <LuLeaf size={24} />
            </div>
            EcoWise
          </Link>
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
