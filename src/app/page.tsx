import ScrollReveal from "./components/ScrollReveal";
import MagneticButton from "./components/MagneticButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-fg overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-bg/80">
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-8">
          <a
            href="#"
            className="text-base font-light tracking-[0.3em] uppercase text-fg"
          >
            fudoki
          </a>
          <nav className="hidden items-center gap-10 text-[11px] font-normal tracking-[0.2em] uppercase text-muted md:flex">
            <a href="#work" className="hover-line transition-colors duration-300 hover:text-fg">
              Work
            </a>
            <a href="#about" className="hover-line transition-colors duration-300 hover:text-fg">
              About
            </a>
            <a href="#contact" className="hover-line transition-colors duration-300 hover:text-fg">
              Contact
            </a>
          </nav>
          <MagneticButton
            href="#contact"
            className="rounded-full border border-fg bg-fg px-7 py-2.5 text-[11px] font-normal tracking-[0.15em] uppercase text-bg transition-all duration-300 hover:bg-transparent hover:text-fg"
          >
            Talk to us
          </MagneticButton>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col justify-center px-8 pt-20">
        <div className="mx-auto w-full max-w-[1400px]">
          {/* Label */}
          <p className="hero-reveal-1 mb-10 text-[11px] font-normal tracking-[0.35em] uppercase text-muted">
            Branding Studio &mdash; Est. 2026
          </p>

          {/* Main headline with clip animation */}
          <div className="hero-reveal-2 mb-10">
            <h1 className="text-[clamp(3rem,8vw,9rem)] font-extralight leading-[0.92] tracking-tight">
              Brand
              <br />
              the <span className="italic font-light">unspoken</span>
              <span className="text-muted">.</span>
            </h1>
          </div>

          {/* Divider */}
          <div className="hero-reveal-4 mb-10 h-px bg-border" />

          {/* Sub */}
          <div className="hero-reveal-3 flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <p className="max-w-lg text-[15px] font-light leading-[1.9] text-muted">
              言語化されていない価値を、形にする。
              <br />
              fudokiは、ブランドの奥底に眠る「まだ語られていない物語」を引き出し、
              世界観として構築するブランディングスタジオです。
            </p>
            <MagneticButton
              href="#contact"
              className="group flex items-center gap-3 text-[11px] font-normal tracking-[0.2em] uppercase text-muted transition-colors duration-300 hover:text-fg"
            >
              <span>Start a project</span>
              <svg
                className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16m0 0l-6-6m6 6l-6 6" />
              </svg>
            </MagneticButton>
          </div>
        </div>

        {/* Spinning badge */}
        <div className="absolute bottom-16 right-8 hidden md:block">
          <div className="relative h-28 w-28">
            <svg className="animate-spin-slow h-full w-full" viewBox="0 0 120 120">
              <defs>
                <path
                  id="circlePath"
                  d="M 60,60 m -48,0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0"
                />
              </defs>
              <text className="fill-muted text-[10px] uppercase tracking-[0.35em]">
                <textPath href="#circlePath">
                  Brand the unspoken &bull; Brand the unspoken &bull;&nbsp;
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="h-4 w-4 text-fg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-6-6m6 6l6-6" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-border py-5">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center">
              {[
                "Brand Strategy",
                "Visual Identity",
                "Naming",
                "Art Direction",
                "Web Design",
                "Tone of Voice",
                "Brand Guidelines",
                "Packaging",
              ].map((item) => (
                <span
                  key={`${i}-${item}`}
                  className="mx-8 text-[13px] font-light tracking-[0.15em] uppercase text-muted/60"
                >
                  {item}
                  <span className="ml-8 text-border">&bull;</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <section id="work" className="px-8 py-36">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <div className="mb-24 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-4 text-[11px] font-normal tracking-[0.35em] uppercase text-muted">
                  What we do
                </p>
                <h2 className="text-4xl font-extralight tracking-tight md:text-[3.5rem] md:leading-[1.1]">
                  本質を、設計する。
                </h2>
              </div>
              <p className="max-w-sm text-[15px] font-light leading-[1.9] text-muted">
                見た目を整えるだけのデザインではなく、
                ブランドの根幹から設計する。それが、fudokiのブランディングです。
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-3">
            <ScrollReveal delay={0}>
              <ServiceCard
                number="01"
                title="Brand Strategy"
                titleJa="ブランド戦略"
                description="市場調査、競合分析、ターゲット定義。ブランドの立ち位置と方向性を、データと対話から導きます。"
              />
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <ServiceCard
                number="02"
                title="Visual Identity"
                titleJa="ビジュアル・アイデンティティ"
                description="ロゴ、カラー、タイポグラフィ。すべてのタッチポイントに一貫した視覚言語を創り出します。"
              />
            </ScrollReveal>
            <ScrollReveal delay={240}>
              <ServiceCard
                number="03"
                title="Brand Experience"
                titleJa="ブランド体験設計"
                description="Web、空間、プロダクト。あらゆる接点でブランドの世界観が息づく体験を設計します。"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="about" className="px-8 py-36 bg-surface">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <ScrollReveal>
              <div>
                <p className="mb-4 text-[11px] font-normal tracking-[0.35em] uppercase text-muted">
                  Philosophy
                </p>
                <h2 className="mb-10 text-4xl font-extralight leading-snug tracking-tight md:text-[3.5rem] md:leading-[1.15]">
                  風土記&mdash;
                  <br />
                  その土地の物語を
                  <br />
                  記すように。
                </h2>
              </div>
            </ScrollReveal>
            <div className="flex flex-col justify-center gap-8">
              <ScrollReveal>
                <p className="text-[15px] font-light leading-[2] text-muted">
                  「風土記」とは、奈良時代に編纂された、各地の文化・地理・伝承を記した書物。
                  その土地にしかない固有の物語を、後世に伝えるために。
                </p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <p className="text-[15px] font-light leading-[2] text-muted">
                  fudokiは、その精神を現代のブランディングに受け継ぎます。
                  流行を追うのではなく、そのブランドだけが持つ固有の価値を深く掘り下げ、
                  言語化し、視覚化し、体験として設計する。
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-[15px] font-light leading-[2] text-fg">
                  あなたのブランドの「風土記」を、一緒に編みましょう。
                </p>
              </ScrollReveal>
            </div>
          </div>

          {/* Circle graphic */}
          <ScrollReveal className="mt-24 flex justify-center">
            <div className="relative h-48 w-48">
              <svg viewBox="0 0 200 200" className="h-full w-full">
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="#e8e8e8"
                  strokeWidth="0.5"
                  className="animate-draw-circle"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="#ddd"
                  strokeWidth="0.5"
                  className="animate-draw-circle"
                  style={{ animationDelay: "0.3s" }}
                />
                <circle
                  cx="100"
                  cy="100"
                  r="50"
                  fill="none"
                  stroke="#ccc"
                  strokeWidth="0.5"
                  className="animate-draw-circle"
                  style={{ animationDelay: "0.6s" }}
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-2xl font-extralight tracking-wider text-fg">
                風土記
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Numbers */}
      <section className="px-8 py-24">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal stagger>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <NumberCard number="150+" label="Projects" />
              <NumberCard number="98%" label="Client Retention" />
              <NumberCard number="12" label="Industries" />
              <NumberCard number="8yr" label="Experience" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-8 py-36">
        <div className="mx-auto max-w-[1400px] text-center">
          <ScrollReveal>
            <p className="mb-8 text-[11px] font-normal tracking-[0.35em] uppercase text-muted">
              Start a project
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="mx-auto mb-14 max-w-3xl text-4xl font-extralight leading-snug tracking-tight md:text-[3.5rem] md:leading-[1.2]">
              まだ語られていない
              <br />
              <span className="italic font-light">物語</span>を、
              形にしませんか。
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <MagneticButton
              href="mailto:hello@fudoki.jp"
              className="group inline-flex items-center gap-4 rounded-full border border-fg bg-fg px-14 py-5 text-[13px] font-normal tracking-[0.15em] uppercase text-bg transition-all duration-500 hover:bg-transparent hover:text-fg"
            >
              <span>Contact us</span>
              <svg
                className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16m0 0l-6-6m6 6l-6 6" />
              </svg>
            </MagneticButton>
            <p className="mt-8 text-xs font-light tracking-widest text-muted">
              hello@fudoki.jp
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-8 py-16">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-8 md:flex-row">
          <span className="text-[13px] font-light tracking-[0.3em] uppercase text-muted">
            fudoki
          </span>
          <nav className="flex gap-8 text-[11px] font-normal tracking-[0.15em] uppercase text-muted">
            <a href="#work" className="hover-line transition-colors duration-300 hover:text-fg">
              Work
            </a>
            <a href="#about" className="hover-line transition-colors duration-300 hover:text-fg">
              About
            </a>
            <a href="#contact" className="hover-line transition-colors duration-300 hover:text-fg">
              Contact
            </a>
          </nav>
          <span className="text-[11px] font-light text-subtle">
            &copy; 2026 fudoki Inc.
          </span>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({
  number,
  title,
  titleJa,
  description,
}: {
  number: string;
  title: string;
  titleJa: string;
  description: string;
}) {
  return (
    <div className="group relative rounded-2xl border border-border bg-bg p-10 transition-all duration-500 hover:border-muted hover:shadow-[0_8px_60px_-12px_rgba(0,0,0,0.08)]">
      <span className="mb-8 block text-[11px] font-normal tracking-[0.2em] text-subtle">
        {number}
      </span>
      <h3 className="mb-1.5 text-[1.4rem] font-extralight tracking-tight">
        {title}
      </h3>
      <p className="mb-6 text-[11px] font-light tracking-wider text-muted">
        {titleJa}
      </p>
      <p className="text-[14px] font-light leading-[1.9] text-muted">
        {description}
      </p>
      {/* Hover corner accent */}
      <div className="absolute right-6 top-6 h-6 w-6 opacity-0 transition-all duration-500 group-hover:opacity-100">
        <div className="absolute right-0 top-0 h-full w-px bg-fg/20 transition-all duration-500 origin-top scale-y-0 group-hover:scale-y-100" />
        <div className="absolute right-0 top-0 h-px w-full bg-fg/20 transition-all duration-500 origin-right scale-x-0 group-hover:scale-x-100" />
      </div>
    </div>
  );
}

function NumberCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="scroll-reveal rounded-2xl border border-border p-8 text-center transition-all duration-500 hover:border-muted hover:shadow-[0_4px_40px_-8px_rgba(0,0,0,0.06)]">
      <p className="mb-2 text-[2.5rem] font-extralight tracking-tight md:text-5xl">
        {number}
      </p>
      <p className="text-[11px] font-normal tracking-[0.2em] uppercase text-muted">
        {label}
      </p>
    </div>
  );
}
