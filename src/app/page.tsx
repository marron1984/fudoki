export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full">
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-8">
          <a
            href="#"
            className="text-lg font-light tracking-[0.3em] uppercase text-fg"
          >
            fudoki
          </a>
          <nav className="hidden items-center gap-10 text-xs font-light tracking-[0.2em] uppercase text-muted md:flex">
            <a href="#work" className="transition-colors duration-300 hover:text-fg">
              Work
            </a>
            <a href="#about" className="transition-colors duration-300 hover:text-fg">
              About
            </a>
            <a href="#contact" className="transition-colors duration-300 hover:text-fg">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="border border-border px-6 py-2.5 text-xs font-light tracking-[0.2em] uppercase text-fg transition-all duration-300 hover:border-fg hover:bg-fg hover:text-bg"
          >
            Talk to us
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col justify-end px-8 pb-24 pt-20">
        {/* Background grid lines */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.03]">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute top-0 h-full w-px bg-white"
              style={{ left: `${(i + 1) * (100 / 7)}%` }}
            />
          ))}
        </div>

        <div className="relative mx-auto w-full max-w-[1400px]">
          {/* Issue number */}
          <p className="animate-reveal mb-8 text-xs font-light tracking-[0.3em] uppercase text-muted">
            Est. 2026 &mdash; Branding Studio
          </p>

          {/* Main headline */}
          <h1 className="animate-reveal-delay-1 mb-8 text-[clamp(3rem,8vw,8rem)] font-extralight leading-[0.95] tracking-tight">
            Brand
            <br />
            the{" "}
            <span className="italic">unspoken</span>
            <span className="text-muted">.</span>
          </h1>

          {/* Horizontal rule */}
          <div className="animate-line-grow mb-8 h-px w-full bg-border" />

          {/* Sub copy */}
          <div className="animate-reveal-delay-2 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <p className="max-w-md text-sm font-light leading-relaxed text-muted">
              言語化されていない価値を、形にする。
              <br />
              fudokiは、ブランドの奥底に眠る
              「まだ語られていない物語」を
              <br className="hidden md:block" />
              引き出し、世界観として構築するブランディングスタジオです。
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 text-xs font-light tracking-[0.2em] uppercase text-muted transition-colors duration-300 hover:text-fg"
            >
              <span>Start a project</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
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
                  className="mx-8 text-sm font-light tracking-[0.15em] uppercase text-muted"
                >
                  {item}
                  <span className="ml-8 text-border">/</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Work / Features */}
      <section id="work" className="px-8 py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-20 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-xs font-light tracking-[0.3em] uppercase text-muted">
                What we do
              </p>
              <h2 className="text-4xl font-extralight tracking-tight md:text-5xl">
                本質を、設計する。
              </h2>
            </div>
            <p className="max-w-sm text-sm font-light leading-relaxed text-muted">
              見た目を整えるだけのデザインではなく、ブランドの根幹から設計する。
              それが、fudokiのブランディングです。
            </p>
          </div>

          <div className="grid gap-px bg-border md:grid-cols-3">
            <ServiceCard
              number="01"
              title="Brand Strategy"
              titleJa="ブランド戦略"
              description="市場調査、競合分析、ターゲット定義。ブランドの立ち位置と方向性を、データと対話から導きます。"
            />
            <ServiceCard
              number="02"
              title="Visual Identity"
              titleJa="ビジュアル・アイデンティティ"
              description="ロゴ、カラー、タイポグラフィ。すべてのタッチポイントに一貫した視覚言語を創り出します。"
            />
            <ServiceCard
              number="03"
              title="Brand Experience"
              titleJa="ブランド体験設計"
              description="Web、空間、プロダクト。あらゆる接点でブランドの世界観が息づく体験を設計します。"
            />
          </div>
        </div>
      </section>

      {/* About / Philosophy */}
      <section id="about" className="px-8 py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-3 text-xs font-light tracking-[0.3em] uppercase text-muted">
                Philosophy
              </p>
              <h2 className="mb-10 text-4xl font-extralight leading-snug tracking-tight md:text-5xl">
                風土記&mdash;
                <br />
                その土地の物語を
                <br />
                記すように。
              </h2>
              <div className="h-px w-16 bg-muted" />
            </div>
            <div className="flex flex-col justify-end gap-8">
              <p className="text-sm font-light leading-[1.8] text-muted">
                「風土記」とは、奈良時代に編纂された、各地の文化・地理・伝承を記した書物。
                その土地にしかない固有の物語を、後世に伝えるために。
              </p>
              <p className="text-sm font-light leading-[1.8] text-muted">
                fudokiは、その精神を現代のブランディングに受け継ぎます。
                流行を追うのではなく、そのブランドだけが持つ固有の価値を深く掘り下げ、
                言語化し、視覚化し、体験として設計する。
              </p>
              <p className="text-sm font-light leading-[1.8] text-fg">
                あなたのブランドの「風土記」を、一緒に編みましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="border-y border-border px-8 py-24">
        <div className="mx-auto grid max-w-[1400px] gap-px bg-border md:grid-cols-4">
          <NumberCard number="150+" label="Projects" />
          <NumberCard number="98%" label="Client Retention" />
          <NumberCard number="12" label="Industries" />
          <NumberCard number="8yr" label="Experience" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-8 py-32">
        <div className="mx-auto max-w-[1400px] text-center">
          <p className="mb-6 text-xs font-light tracking-[0.3em] uppercase text-muted">
            Start a project
          </p>
          <h2 className="mx-auto mb-12 max-w-3xl text-4xl font-extralight leading-snug tracking-tight md:text-6xl">
            まだ語られていない
            <br />
            <span className="italic">物語</span>を、
            <br />
            形にしませんか。
          </h2>
          <a
            href="mailto:hello@fudoki.jp"
            className="group inline-flex items-center gap-4 border border-border px-12 py-5 text-sm font-light tracking-[0.2em] uppercase transition-all duration-300 hover:border-fg hover:bg-fg hover:text-bg"
          >
            <span>Contact us</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
          <p className="mt-8 text-xs font-light tracking-wider text-muted">
            hello@fudoki.jp
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-8 py-16">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-8 md:flex-row">
          <span className="text-sm font-light tracking-[0.3em] uppercase text-muted">
            fudoki
          </span>
          <nav className="flex gap-8 text-xs font-light tracking-[0.15em] uppercase text-muted">
            <a href="#work" className="transition-colors duration-300 hover:text-fg">
              Work
            </a>
            <a href="#about" className="transition-colors duration-300 hover:text-fg">
              About
            </a>
            <a href="#contact" className="transition-colors duration-300 hover:text-fg">
              Contact
            </a>
          </nav>
          <span className="text-xs font-light text-muted">
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
    <div className="group bg-bg p-10 transition-colors duration-500 hover:bg-surface">
      <span className="mb-8 block text-xs font-light tracking-[0.2em] text-muted">
        {number}
      </span>
      <h3 className="mb-1 text-2xl font-extralight tracking-tight">{title}</h3>
      <p className="mb-6 text-xs font-light tracking-wider text-muted">
        {titleJa}
      </p>
      <p className="text-sm font-light leading-[1.8] text-muted">
        {description}
      </p>
      <div className="mt-8 h-px w-0 bg-fg transition-all duration-500 group-hover:w-full" />
    </div>
  );
}

function NumberCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-bg p-10 text-center">
      <p className="mb-2 text-4xl font-extralight tracking-tight md:text-5xl">
        {number}
      </p>
      <p className="text-xs font-light tracking-[0.2em] uppercase text-muted">
        {label}
      </p>
    </div>
  );
}
