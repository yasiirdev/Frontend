export default function Page3() {
  return (
    <section className="bg-main p-3 px-margin-mobile md:px-margin-desktop overflow-hidden  pb-12 md:pb-24">
      <div className="mx-auto max-w-7xl items-center gap-10 md:flex">
        <div className="w-full md:w-1/2">
          <div className="max-w-xl">
            <h2 className="mt-4 text-2xl font-bold leading-tight text-[#1D5B31] md:text-5xl">
              Transparency in Three Simple Steps.
            </h2>

            <p className="mt-5 text-xm text-[#3E4D44] md:text-xl">
              We've built the world's most accessible sustainability tool. No
              browser extension required—just paste and learn.
            </p>

            <div className="mt-10 space-y-5">
              <div className="group flex items-start gap-4 rounded-2xl border border-[#1D5B31]/10 bg-white/40 p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#1D5B31] bg-[#F1F8E9] text-base font-bold text-[#1D5B31] transition-all duration-300 group-hover:bg-[#1D5B31] group-hover:text-white">
                  1
                </div>
                <div>
                  <h4 className=" text-xm sm:text-xl font-semibold text-[#1D5B31]">
                    Paste Product Link
                  </h4>
                  <p className="mt-1 text-xs sm:text-base text-[#3E4D44]">
                    Copy the URL from any major retailer and drop it into
                    EcoWise.
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-4 rounded-2xl border border-[#1D5B31]/10 bg-white/40 p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#1D5B31] bg-[#F1F8E9] text-base font-bold text-[#1D5B31] transition-all duration-300 group-hover:bg-[#1D5B31] group-hover:text-white">
                  2
                </div>
                <div>
                  <h4 className="text-xm sm:text-xl font-semibold text-[#1D5B31]">
                    AI-Powered Analysis
                  </h4>
                  <p className="mt-1 text-xs  sm:text-base text-[#3E4D44]">
                    Our AI cross-references product specs with global
                    sustainability databases.
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-4 rounded-2xl border border-[#1D5B31]/10 bg-white/40 p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#1D5B31] bg-[#F1F8E9] text-base font-bold text-[#1D5B31] transition-all duration-300 group-hover:bg-[#1D5B31] group-hover:text-white">
                  3
                </div>
                <div>
                  <h4 className=" text-xm sm:text-xl font-semibold text-[#1D5B31]">
                    Get Your Impact Report
                  </h4>
                  <p className="mt-1 text-xs  sm:text-base text-[#3E4D44]">
                    Review a detailed breakdown of carbon, water, and labor
                    ethics before you buy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 w-full md:mt-0 md:w-1/2">
          <div className="relative rounded-4xl border border-white/40 bg-white/40 p-3 shadow-[0_20px_60px_rgba(29,91,49,0.12)] backdrop-blur-sm md:p-4">
            <img
              className="w-full rounded-3xl object-cover shadow-xl transition-transform duration-300 hover:scale-[1.02]"
              data-alt="A clean, minimalist mobile app interface screenshot showing a 'Sustainability Impact Report'. The UI features elegant typography in dark green, a large circular gauge showing an 82% score, and a list of 'Eco-Pros' and 'Greenwashing Alerts'. The design uses soft shadows and a light mode aesthetic against a soft mint background."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnDz43aF3pix3FwW_7QefEd4Dv3_P9U0JSt0dQA1Wr9HVrCSFT_DwNp3sdCgGou1oU20vlrh6pzksh6M3dLyLZPCrmDPshTDJIT1cEc4KHH09moU9h8ka-T2Z4FGx4qTf9iCqA2tzeX3KT-q1hcqBh3wT9D0R4aG9PxWh82fpBOKf9I7z7vGDIxH45_I7r-TePvjs3_NvpTM3bqk9fmUsjLECok5exgRw0bfkiO-y9TH1fqmGPqqW_Mep72EPb7Kna5AWV2tPvqfoW"
              alt="EcoWise sustainability report preview"
            />

            <div className="absolute -left-5 bottom-8 hidden max-w-xs rounded-2xl border-l-4 border-[#E15A5A] bg-white p-4 shadow-xl md:block -rotate-3">
              <div className="flex items-start gap-3">
                <span className="text-xl text-[#E15A5A]">⚠</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#E15A5A]">
                    Greenwashing Alert
                  </p>
                  <p className="mt-1 text-sm text-[#3E4D44]">
                    Vague terms like 'Earth-friendly' used without certification
                    data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
