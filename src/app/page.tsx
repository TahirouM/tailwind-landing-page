import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-dvh bg-white text-slate-900">
      {/* NavBar moved to layout */}

      {/* HERO */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-14 md:grid-cols-2 md:py-24">
        <div className="space-y-5">
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
            Creativity Is The Key
            <br />
            Of Success
          </h1>
          <p className="max-w-prose text-slate-600">
            Our mission is to provide quality design services across a variety of
            sectors in a streamlined and safe manner in a professional and
            supportive atmosphere.
          </p>
          <div>
            <a href="#portfolio" className="inline-block rounded-full bg-[#385f96] px-8 py-3 text-white">Read More</a>
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full">
          <Image src="/image-1.png" alt="Hero Illustration" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-contain" />
        </div>
      </section>

      {/* FEATURES / STEPS */}
      <section id="services" className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-14 md:grid-cols-2">
        <div className="relative aspect-[4/3] w-full">
          <Image src="/image-2.png" alt="Team working" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-contain" />
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-extrabold md:text-3xl">How Many Steps We Take To Have A Better Design</h2>
          <p className="text-slate-600 max-w-prose">
            Unlike the lonely wolfs, we always work around the most creative
            people and share ideas. In the super surface of the imaginative mind,
            those moments are the real alchemy to the great design.
          </p>
          <ul className="grid grid-cols-2 gap-5 text-sm">
            {[
              { label: "Search Zone", icon: "/icon-1.png" },
              { label: "Sketch Up", icon: "/icon-3.png" },
              { label: "Brain Storm", icon: "/icon-2.png" },
              { label: "Brain Storm", icon: "/icon-4.png" },
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 ">
                <div className="h-16 w-16 rounded-full bg-slate-800/10">
                  <Image src={item.icon} alt={item.label} className="object-contain no-repeat" width={64} height={64} />
                </div>
                <span className="font-bold text-slate-700">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ALTERNATING SECTION */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-14 md:grid-cols-2">
        <div className="space-y-5">
          <h3 className="text-2xl font-extrabold md:text-3xl">Do You Know How Many Creative People Work Here?</h3>
          <p className="text-slate-600 max-w-prose">
            Our mission is to provide quality design services across a variety of
            sectors in a streamlined and safe manner in a professional and
            supportive atmosphere.
          </p>
          <a href="#contact" className="inline-block rounded-full bg-[#385f96] px-8 py-3 text-white">See More</a>
        </div>
        <div className="relative aspect-[4/3] w-full">
          <Image src="/image-3.png" alt="Creative people" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-contain" />
        </div>
      </section>

      {/* GALLERY */}
      <section id="portfolio" className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <h3 className="text-2xl font-extrabold md:text-3xl">We Always Have A New</h3>
          <span className="text-2xl font-extrabold md:text-3xl">Design For Your Projects</span>
          <div className="mt-3 flex items-center justify-center gap-4 text-xs text-slate-600">
            <button className="rounded-full bg-slate-800 px-3 py-1 text-white">All</button>
            <button className="rounded-full px-3 py-1 hover:bg-slate-100">Graphic Design</button>
            <button className="rounded-full px-3 py-1 hover:bg-slate-100">Illustration</button>
            <button className="rounded-full px-3 py-1 hover:bg-slate-100">Industrial Design</button>
            <button className="rounded-full px-3 py-1 hover:bg-slate-100">Web Design</button>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[
            "/image-5.png",
            "/image-6.png",
            "/image-7.png",
            "/image-8.png",
            "/image-9.png",
            "/image-10.png",
            "/image-11.png",
            "/image-12.png",
            "/image-13.png",
          ].map((src, i) => (
            <div key={i} className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-slate-200">
              <Image src={src} alt="Gallery item" fill sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="rounded-full bg-[#385f96] px-8 py-3 text-white">See More</button>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#dcf6fa]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-16 md:grid-cols-2">
          <div className="relative aspect-[4/3] w-full">
            <Image src="/image-4.png" alt="CTA Illustration" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-contain" />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-extrabold md:text-3xl">We Are Ready To Run Your New Project!</h3>
            <a href="#contact" className="inline-block rounded-full bg-[#385f96] px-8 py-3 text-white">Contact Us</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative bg-[#385f96] text-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3">
            {/* Brand */}
            <div className="flex items-center gap-3 font-semibold">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                <span className="h-2 w-2 rounded-full bg-white" />
              </span>
              <span>Phlox | Portfolio</span>
            </div>

            {/* Center text */}
            <div className="text-center text-sm text-black/90">There are no menu items in this menu.</div>

            {/* Call us */}
            <div className="flex items-center justify-start gap-3 md:justify-end">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full">
                {/* phone icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M21 16.5v2a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 1.5 2.82 2 2 0 0 1 3.5.5h2a2 2 0 0 1 2 1.72c.12.86.33 1.7.62 2.5a2 2 0 0 1-.45 2.11L7 7.5a16 16 0 0 0 6 6l.67-.67a2 2 0 0 1 2.11-.45c.8.29 1.64.5 2.5.62A2 2 0 0 1 21 16.5Z" fill="currentColor"/>
                </svg>
              </span>
              <span className="text-[15px]">Call Us: (001) 88451234</span>
            </div>
          </div>

          {/* Socials pill */}
          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-6 rounded-full bg-[#2f4f7d] px-10 py-4">
              {/* Facebook */}
              <button aria-label="Facebook" className="text-white/95 hover:text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z"/>
                </svg>
              </button>
              {/* Twitter */}
              <button aria-label="Twitter" className="text-white/95 hover:text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.29 4.29 0 0 0 1.88-2.37 8.58 8.58 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.29 3.9A12.14 12.14 0 0 1 3.16 4.9a4.28 4.28 0 0 0 1.32 5.72 4.25 4.25 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.2 4.3 4.3 0 0 1-1.93.07 4.29 4.29 0 0 0 4 2.98 8.6 8.6 0 0 1-5.32 1.84c-.35 0-.7-.02-1.04-.06A12.15 12.15 0 0 0 8.29 21c7.9 0 12.22-6.55 12.22-12.23 0-.19 0-.39-.01-.58A8.71 8.71 0 0 0 22.46 6Z"/>
                </svg>
              </button>
              {/* Instagram */}
              <button aria-label="Instagram" className="text-white/95 hover:text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.24 2.22.4.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.42.35 1.05.4 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.8-.4 2.22a3.54 3.54 0 0 1-.9 1.38 3.54 3.54 0 0 1-1.38.9c-.42.17-1.05.35-2.22.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.24-2.22-.4a3.54 3.54 0 0 1-1.38-.9 3.54 3.54 0 0 1-.9-1.38c-.17-.42-.35-1.05-.4-2.22C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.24-1.8.4-2.22.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.17 1.05-.35 2.22-.4C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.52.01-4.76.07-.98.05-1.52.21-1.87.35-.47.18-.8.39-1.15.74-.35.35-.56.68-.74 1.15-.14.35-.3.89-.35 1.87-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.05.98.21 1.52.35 1.87.18.47.39.8.74 1.15.35.35.68.56 1.15.74.35.14.89.3 1.87.35 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c.98-.05 1.52-.21 1.87-.35.47-.18.8-.39 1.15-.74.35-.35.56-.68.74-1.15.14-.35.3-.89.35-1.87.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.05-.98-.21-1.52-.35-1.87a2.75 2.75 0 0 0-.74-1.15 2.75 2.75 0 0 0-1.15-.74c-.35-.14-.89-.3-1.87-.35-1.24-.06-1.61-.07-4.76-.07Zm0 3.3a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 1.8a3.7 3.7 0 1 0 0 7.4 3.7 3.7 0 0 0 0-7.4Zm5.7-2.5a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Z"/>
                </svg>
              </button>
              {/* Google Plus */}
              <button aria-label="Google Plus" className="text-white/95 hover:text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 10.2v2.4h3.97c-.17 1.08-1.2 3.16-3.97 3.16-2.39 0-4.34-1.98-4.34-4.36s1.95-4.36 4.34-4.36c1.36 0 2.27.58 2.79 1.08l1.9-1.83C15.48 5.2 13.9 4.5 12 4.5 7.86 4.5 4.5 7.86 4.5 12s3.36 7.5 7.5 7.5c4.33 0 7.19-3.04 7.19-7.33 0-.49-.05-.86-.11-1.22H12Z"/>
                  <path d="M22 10.8h-2v-2h-1.8v2h-2v1.8h2v2H20v-2h2v-1.8Z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Floating actions */}
        <a href="#" className="absolute bottom-20 right-24 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4l-7 7h4v7h6v-7h4l-7-7z" fill="currentColor"/>
          </svg>
        </a>
        <button aria-label="Chat" className="absolute bottom-14 right-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4f6fd6] text-white shadow-lg">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm-3 9H7v-2h10v2Zm-4 4H7v-2h6v2Zm4-8H7V5h10v2Z"/>
          </svg>
        </button>

        <div className="bg-[#2f4f7d] py-4 text-center text-xs text-white">© 2025 Creative Portfolio - Phlox Elementor WordPress Theme . All rights reserved.</div>
      </footer>
    </main>
  );
}
