export default function Page2() {
  return (
    <section className="relative overflow-hidden bg-[#f4fafd] px-5 py-10 sm:py-20 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 font-Inter text-xs font-bold uppercase tracking-[0.22em] text-[#e15a5a]">
              Clarity before checkout
            </p>
            <h2 className="font-Mon text-2xl font-bold leading-tight text-[#185e20] sm:text-5xl">
              See the real cost of what you buy.
            </h2>
          </div>
          <p className="max-w-sm font-Inter text-base leading-7 text-[#506259]">
            EcoWise turns hard-to-find sustainability data into a simple score
            you can trust.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="group relative overflow-hidden rounded-4xl bg-[#185e20] p-7 text-white shadow-[0_24px_60px_rgba(24,94,32,0.2)] transition duration-500 hover:-translate-y-1 sm:p-10">
            <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border-28 border-[#4caf50]/25 transition duration-700 group-hover:scale-110" />
            <div className="relative z-10 flex h-full flex-col justify-between gap-14">
              <div>
                <div className="mb-8 flex items-center justify-between">
                  <span className="rounded-full bg-white/12 px-3 py-1.5 font-Inter text-xs font-semibold tracking-wide text-[#d9f2c7]">
                    LIVE ANALYSIS
                  </span>
                  <svg
                    className="h-7 w-7 text-[#a7e476]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4" />
                  </svg>
                </div>
                <p className="font-Mon text-2xl font-semibold sm:text-3xl">
                  Carbon footprint tracking
                </p>
                <p className="mt-3 max-w-md font-Inter text-sm leading-6 text-[#c4dec2]">
                  Understand emissions across materials, manufacturing, and
                  delivery, not just the marketing label on the box.
                </p>
              </div>
              <div className="flex items-end justify-between border-t border-white/15 pt-6">
                <div>
                  <p className="font-Inter text-xs uppercase tracking-widest text-[#a7e476]">
                    Average impact found
                  </p>
                  <p className="mt-1 font-Mon text-4xl font-bold">-38%</p>
                </div>
                <span className="font-Inter text-sm text-[#c4dec2]">
                  per informed choice
                </span>
              </div>
            </div>
          </article>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <article className="rounded-4xl border border-[#185e20]/10 bg-white p-7 shadow-[0_12px_35px_rgba(24,94,32,0.08)] transition duration-500 hover:-translate-y-1 sm:p-8">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f1f8e9] text-[#185e20]">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <path d="M4 19V5m0 14h16M7 16l3-4 3 2 4-6" />
                </svg>
              </div>
              <h3 className="font-Mon text-xl font-bold text-[#185e20]">
                Real-time eco-scoring
              </h3>
              <p className="mt-2 font-Inter text-sm leading-6 text-[#607168]">
                A living score that weighs evidence, certifications, and the
                full product journey.
              </p>
            </article>
            <article className="rounded-4xl border border-[#185e20]/10 bg-[#e8f3e0] p-7 shadow-[0_12px_35px_rgba(24,94,32,0.06)] transition duration-500 hover:-translate-y-1 sm:p-8">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#185e20] text-[#bde88e]">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <path d="M12 3 5 6v5c0 4.5 2.9 8.4 7 10 4.1-1.6 7-5.5 7-10V6l-7-3Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-Mon text-xl font-bold text-[#185e20]">
                Evidence, not greenwashing
              </h3>
              <p className="mt-2 font-Inter text-sm leading-6 text-[#607168]">
                Spot vague claims quickly with transparent sources behind every
                recommendation.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
