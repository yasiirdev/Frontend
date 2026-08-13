const navLinks = [
  { nav: "Home", path: "men" },
  { nav: "Features", path: "men" },
  { nav: "about", path: "men" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b shadow-2xl border-white bg-[#F1F8E9]/80 backdrop-blur w-screen">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3  h-12 bg-[#F1F8E9]">
        <div className="flex items-center gap-70">
          <a className="text-xl font-extrabold  text-[#185E20]">EcoWise</a>
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
            <a className="capitalize hover:text-[#185E20] text-sm"> Sign In</a>

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
