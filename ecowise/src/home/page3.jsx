export default function Page3() {
  return (
  <section className="py-xl bg-main px-margin-mobile md:px-margin-desktop overflow-hidden" >
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-xl">
  <div className="w-full md:w-1/2 space-y-md">
  <h2 className="font-display-lg text-display-lg-mobile md:text-headline-md text-primary">Transparency in Three Simple Steps.</h2>
  <p className="font-body-lg text-on-surface-variant">We've built the world's most accessible sustainability tool. No browser extension required—just paste and learn.</p>
  <div className="space-y-lg mt-xl">
  <div className="flex gap-md group">
  <div className="shrink-0 w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center font-bold text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">1</div>
  <div>
  <h4 className="font-headline-sm text-primary">Paste Product Link</h4>
  <p className="font-body-md text-on-surface-variant">Copy the URL from any major retailer and drop it into EcoWise.</p>
  </div>
  </div>
  <div className="flex gap-md group">
  <div className="shrink-0 w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center font-bold text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">2</div>
  <div>
  <h4 className="font-headline-sm text-primary">AI-Powered Analysis</h4>
  <p className="font-body-md text-on-surface-variant">Our AI cross-references product specs with global sustainability databases.</p>
  </div>
  </div>
  <div className="flex gap-md group">
  <div className="shrink-0 w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center font-bold text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">3</div>
  <div>
  <h4 className="font-headline-sm text-primary">Get Your Impact Report</h4>
  <p className="font-body-md text-on-surface-variant">Review a detailed breakdown of carbon, water, and labor ethics before you buy.</p>
  </div>
  </div>
  </div>
  </div>
  <div className="w-full md:w-1/2">
  <div className="relative glass-panel p-md rounded-[2.5rem] shadow-2xl border-white/20">
  <img className="w-full rounded-4xl shadow-lg" data-alt="A clean, minimalist mobile app interface screenshot showing a 'Sustainability Impact Report'. The UI features elegant typography in dark green, a large circular gauge showing an 82% score, and a list of 'Eco-Pros' and 'Greenwashing Alerts'. The design uses soft shadows and a light mode aesthetic against a soft mint background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnDz43aF3pix3FwW_7QefEd4Dv3_P9U0JSt0dQA1Wr9HVrCSFT_DwNp3sdCgGou1oU20vlrh6pzksh6M3dLyLZPCrmDPshTDJIT1cEc4KHH09moU9h8ka-T2Z4FGx4qTf9iCqA2tzeX3KT-q1hcqBh3wT9D0R4aG9PxWh82fpBOKf9I7z7vGDIxH45_I7r-TePvjs3_NvpTM3bqk9fmUsjLECok5exgRw0bfkiO-y9TH1fqmGPqqW_Mep72EPb7Kna5AWV2tPvqfoW" />
            {/*Red alert card floating*/}
            <div className="absolute -left-12 bottom-12 max-w-xs bg-white border-l-4 border-error p-md rounded-xl shadow-xl hidden lg:block transform -rotate-3">
  <div className="flex items-start gap-sm">
  <span className="material-symbols-outlined text-error">warning</span>
  <div>
  <p className="font-label-md text-error font-bold uppercase">Greenwashing Alert</p>
  <p className="font-body-sm text-on-surface">Vague terms like 'Earth-friendly' used without certification data.</p>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </section>
  );
}