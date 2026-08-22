import logo from "../assets/logo.svg";
const navLinks = [
  { nav: "Home", path: "men" },
  { nav: "Features", path: "men" },
  { nav: "about", path: "men" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b font-Inter  bg-main  w-screen  backdrop-blur-sm border border-white/50  shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)]    before:absolute before:inset-0 before:rounded-lg after:bg-linear-to-tl before:bg-linear-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0  after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3  h-12">
        <div className="flex items-center gap-70">
          <a className="text-xl font-extrabold flex font-Inter items-center gap-2 text-bg-primary"> 
            <img src={logo} alt="ecowise logo" className="h-8 w-8" />
            EcoWise
          </a>
          <nav className="hidden items-center gap-5 text-sm capitalize text-gray-800 md:flex">
            {navLinks.map((item) => {
              return (
                <a key={item.nav} className="relative transition hover:text-[#185E20]">
                  {item.nav}
                </a>
              );
            })}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end gap-6 md:flex-none">
          <div className="flex items-center gap-6 text-xs font-semibold uppercase text-gray-800">
            <a className="hidden  flex-col items-center gap-1 transition   md:flex">
              <button
                type="button"
                class=" text-white bg-[#185E20] box-border border border-transparent hover:bg-success-strong focus:ring-4 focus:ring-success-medium shadow-xs font-medium leading-2 rounded-xl text-sm px-4 py-2.5 focus:outline-none"
              >
                Get Started
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
