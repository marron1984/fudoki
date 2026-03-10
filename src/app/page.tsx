import ScrollReveal from "./components/ScrollReveal";
import MagneticButton from "./components/MagneticButton";
import CountUp from "./components/CountUp";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-fg overflow-x-hidden">
      {/* ===== HEADER ===== */}
      <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-bg/70">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:px-10">
          <a href="#" className="font-serif text-[15px] font-[300] tracking-[0.25em]">
            fudoki
          </a>
          <nav className="hidden items-center gap-12 text-[10px] tracking-[0.25em] uppercase text-muted md:flex">
            <a href="#service" className="hover-line transition-colors duration-500 hover:text-fg">Service</a>
            <a href="#philosophy" className="hover-line transition-colors duration-500 hover:text-fg">Philosophy</a>
            <a href="#contact" className="hover-line transition-colors duration-500 hover:text-fg">Contact</a>
          </nav>
          <MagneticButton
            href="#contact"
            className="rounded-full border border-fg bg-fg px-7 py-2.5 text-[10px] tracking-[0.2em] uppercase text-bg transition-all duration-500 hover:bg-transparent hover:text-fg"
          >
            Talk to us
          </MagneticButton>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative flex min-h-[100svh] flex-col justify-end px-6 pb-16 pt-20 md:px-10 md:pb-20">
        {/* Grid overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="absolute top-0 h-full w-px bg-fg" style={{ left: `${(i + 1) * (100 / 6)}%` }} />
          ))}
        </div>

        <div className="relative mx-auto w-full max-w-[1440px]">
          {/* Label */}
          <p className="hero-1 mb-12 md:mb-16 text-[10px] tracking-[0.4em] uppercase text-muted">
            Branding Studio
          </p>

          {/* Headline */}
          <div className="hero-2 mb-6">
            <h1 className="font-serif text-[clamp(2.6rem,9vw,10rem)] font-[200] leading-[0.9] tracking-[0.02em]">
              まだ、
            </h1>
          </div>
          <div className="hero-3 mb-16 md:mb-20">
            <h1 className="font-serif text-[clamp(2.6rem,9vw,10rem)] font-[200] leading-[0.9] tracking-[0.02em]">
              語られていない
              <br />
              <span className="font-[400] italic">物語</span>
              <span className="text-muted/30">を。</span>
            </h1>
          </div>

          {/* Divider */}
          <div className="hero-4 mb-12 md:mb-16 h-px bg-border" />

          {/* Bottom row */}
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <p className="hero-5 max-w-[420px] font-sans text-[13px] font-[300] leading-[2.2] text-muted">
              ブランドの奥底に眠る本質を引き出し、
              <br className="hidden md:block" />
              唯一無二の世界観として構築する。
              <br className="hidden md:block" />
              fudokiは、言葉にならない価値を形にする
              <br className="hidden md:block" />
              ブランディングスタジオです。
            </p>

            {/* Scroll indicator */}
            <div className="hero-6 flex items-center gap-3">
              <div className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-fg" />
              <p className="text-[10px] tracking-[0.3em] uppercase text-subtle">
                Scroll to explore
              </p>
            </div>
          </div>
        </div>

        {/* Spinning badge — desktop only */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:block">
          <div className="relative h-32 w-32 opacity-40 hover:opacity-70 transition-opacity duration-700">
            <svg className="animate-spin-slow h-full w-full" viewBox="0 0 120 120">
              <defs>
                <path id="cp" d="M 60,60 m -48,0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0" />
              </defs>
              <text className="fill-muted text-[9px] uppercase tracking-[0.4em]">
                <textPath href="#cp">Brand the unspoken &bull; fudoki studio &bull;&nbsp;</textPath>
              </text>
            </svg>
          </div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <div className="overflow-hidden border-y border-border py-6">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center">
              {["Brand Strategy", "Visual Identity", "Naming", "Art Direction", "Web Design", "Tone of Voice", "Packaging", "Space Design"].map((item) => (
                <span key={`${i}-${item}`} className="mx-10 font-serif text-[12px] font-[300] tracking-[0.2em] uppercase text-muted/40">
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ===== SERVICE ===== */}
      <section id="service" className="px-6 py-36 md:px-10 md:py-44">
        <div className="mx-auto max-w-[1440px]">
          <ScrollReveal>
            <div className="mb-28 md:mb-32">
              <p className="mb-6 text-[10px] tracking-[0.4em] uppercase text-muted">What we do</p>
              <h2 className="font-serif text-[clamp(2rem,4.5vw,4rem)] font-[200] leading-[1.2] tracking-[0.02em]">
                本質を、
                <br />
                設計する。
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-3">
            <ScrollReveal delay={0}>
              <ServiceCard number="01" title="Brand Strategy" titleJa="ブランド戦略" body="市場調査、競合分析、ターゲット定義。ブランドの立ち位置と方向性を、データと対話から導きます。" />
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <ServiceCard number="02" title="Visual Identity" titleJa="ビジュアル・アイデンティティ" body="ロゴ、カラー、タイポグラフィ。すべてのタッチポイントに一貫した視覚言語を創り出します。" />
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <ServiceCard number="03" title="Brand Experience" titleJa="ブランド体験設計" body="Web、空間、プロダクト。あらゆる接点でブランドの世界観が息づく体験を設計します。" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== PHILOSOPHY ===== */}
      <section id="philosophy" className="px-6 py-36 md:px-10 md:py-44">
        <div className="mx-auto max-w-[1440px]">
          {/* Large statement */}
          <ScrollReveal>
            <h2 className="mb-36 md:mb-44 font-serif text-[clamp(2.2rem,6vw,6rem)] font-[200] leading-[1.15] tracking-[0.01em]">
              風土記&mdash;
              <br />
              その土地だけの
              <br />
              物語を記すように
              <span className="text-muted/30">。</span>
            </h2>
          </ScrollReveal>

          <div className="grid gap-20 md:grid-cols-[1fr_1fr] md:gap-32">
            {/* Circle graphic */}
            <ScrollReveal className="flex items-center justify-center">
              <div className="relative h-64 w-64 md:h-80 md:w-80">
                <svg viewBox="0 0 200 200" className="h-full w-full">
                  <circle cx="100" cy="100" r="92" fill="none" stroke="#ddd" strokeWidth="0.3" className="draw-circle" />
                  <circle cx="100" cy="100" r="68" fill="none" stroke="#ccc" strokeWidth="0.3" className="draw-circle" style={{ animationDelay: "0.4s" }} />
                  <circle cx="100" cy="100" r="44" fill="none" stroke="#bbb" strokeWidth="0.3" className="draw-circle" style={{ animationDelay: "0.8s" }} />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center font-serif text-[1.6rem] md:text-[1.8rem] font-[200] tracking-[0.15em] text-fg/70">
                  風土記
                </span>
              </div>
            </ScrollReveal>

            {/* Text */}
            <div className="flex flex-col justify-center gap-10 md:gap-12">
              <ScrollReveal>
                <p className="font-sans text-[13px] font-[300] leading-[2.4] text-muted">
                  「風土記」とは、奈良時代に編纂された、各地の文化・地理・伝承を記した書物。その土地にしかない固有の物語を、後世に伝えるために。
                </p>
              </ScrollReveal>
              <ScrollReveal delay={120}>
                <p className="font-sans text-[13px] font-[300] leading-[2.4] text-muted">
                  fudokiは、その精神を現代のブランディングに受け継ぎます。流行を追うのではなく、そのブランドだけが持つ固有の価値を深く掘り下げ、言語化し、視覚化し、体験として設計する。
                </p>
              </ScrollReveal>
              <ScrollReveal delay={240}>
                <p className="font-serif text-[15px] font-[400] leading-[2.2] text-fg">
                  あなたのブランドの「風土記」を、
                  <br />
                  一緒に編みましょう。
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NUMBERS ===== */}
      <section className="px-6 py-32 md:px-10">
        <div className="mx-auto max-w-[1440px]">
          <ScrollReveal stagger>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <NumberCard target={150} suffix="+" label="Projects" />
              <NumberCard target={98} suffix="%" label="Client Retention" />
              <NumberCard target={12} suffix="" label="Industries" />
              <NumberCard target={8} suffix="yr" label="Experience" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section id="contact" className="px-6 py-40 md:px-10 md:py-52">
        <div className="mx-auto max-w-[1440px] text-center">
          <ScrollReveal>
            <p className="mb-10 text-[10px] tracking-[0.4em] uppercase text-muted">Start a project</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="mx-auto mb-16 md:mb-20 max-w-4xl font-serif text-[clamp(1.8rem,5vw,4.5rem)] font-[200] leading-[1.3] tracking-[0.01em]">
              あなたのブランドの
              <br />
              <span className="italic font-[400]">風土記</span>を、
              <br />
              一緒に綴りませんか。
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <MagneticButton
              href="mailto:hello@fudoki.jp"
              className="group inline-flex items-center gap-5 rounded-full border border-fg bg-fg px-12 md:px-16 py-5 md:py-6 text-[11px] tracking-[0.2em] uppercase text-bg transition-all duration-500 hover:bg-transparent hover:text-fg"
            >
              <span>Contact us</span>
              <svg className="h-4 w-4 transition-transform duration-600 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16m0 0l-6-6m6 6l-6 6" />
              </svg>
            </MagneticButton>
            <p className="mt-10 font-serif text-[12px] font-[300] tracking-[0.3em] text-subtle">hello@fudoki.jp</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-border px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-8 md:flex-row">
          <span className="font-serif text-[13px] font-[300] tracking-[0.3em]">fudoki</span>
          <nav className="flex gap-10 text-[10px] tracking-[0.2em] uppercase text-muted">
            <a href="#service" className="hover-line transition-colors duration-500 hover:text-fg">Service</a>
            <a href="#philosophy" className="hover-line transition-colors duration-500 hover:text-fg">Philosophy</a>
            <a href="#contact" className="hover-line transition-colors duration-500 hover:text-fg">Contact</a>
          </nav>
          <span className="text-[10px] font-[300] tracking-[0.15em] text-subtle">&copy; 2026 fudoki Inc.</span>
        </div>
      </footer>
    </div>
  );
}

/* ===== COMPONENTS ===== */

function ServiceCard({ number, title, titleJa, body }: { number: string; title: string; titleJa: string; body: string }) {
  return (
    <div className="card-hover group relative border border-border bg-bg p-10 md:p-12">
      <span className="mb-8 md:mb-10 block text-[10px] tracking-[0.3em] text-subtle">{number}</span>
      <h3 className="mb-2 font-serif text-[1.2rem] md:text-[1.35rem] font-[300] tracking-[0.01em]">{title}</h3>
      <p className="mb-6 md:mb-8 text-[10px] font-[300] tracking-[0.15em] text-muted">{titleJa}</p>
      <p className="font-sans text-[13px] font-[300] leading-[2.2] text-muted">{body}</p>
      <div className="mt-8 md:mt-10 h-px w-0 bg-fg/20 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
    </div>
  );
}

function NumberCard({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  return (
    <div className="scroll-reveal border border-border bg-bg px-6 py-12 md:px-8 md:py-14 text-center">
      <p className="mb-3 font-serif text-[2.4rem] md:text-[3.5rem] font-[200] tracking-tight">
        <CountUp target={target} suffix={suffix} />
      </p>
      <p className="text-[10px] tracking-[0.25em] uppercase text-muted">{label}</p>
    </div>
  );
}
