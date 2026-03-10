import MagneticButton from "./components/MagneticButton";
import CustomCursor from "./components/CustomCursor";
import SplitText from "./components/SplitText";

export default function Home() {
  return (
    <div className="grain min-h-screen bg-bg text-fg overflow-x-hidden">
      <CustomCursor />

      {/* ===== HEADER ===== */}
      <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-bg/60">
        <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between px-5 md:px-10">
          <a href="#" className="font-serif text-sm font-[300] tracking-[0.2em]">fudoki</a>
          <nav className="hidden items-center gap-10 text-[10px] tracking-[0.2em] uppercase text-muted md:flex">
            <a href="#service" className="hline transition-colors duration-400 hover:text-fg">Service</a>
            <a href="#manifesto" className="hline transition-colors duration-400 hover:text-fg">Manifesto</a>
            <a href="#contact" className="hline transition-colors duration-400 hover:text-fg">Contact</a>
          </nav>
          <MagneticButton href="#contact" className="rounded-full bg-fg px-6 py-2 text-[10px] tracking-[0.15em] uppercase text-bg transition-all duration-400 hover:bg-fg/80">
            Talk to us
          </MagneticButton>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="px-5 pt-32 pb-20 md:px-10 md:pt-44 md:pb-32">
        <div className="mx-auto w-full max-w-[1440px]">
          <p className="h1 mb-10 md:mb-16 text-[10px] tracking-[0.5em] uppercase text-muted">
            Branding Studio &mdash; Tokyo
          </p>

          <h1 className="mb-10 md:mb-16 font-serif text-[clamp(2.8rem,10vw,10rem)] font-[200] leading-[0.9]">
            <SplitText text="まだ、" baseDelay={0.3} />
            <br />
            <SplitText text="語られていない" baseDelay={0.55} />
            <br />
            <span className="inline-flex">
              <SplitText text="物語" charClass="!font-[500]" baseDelay={0.9} />
              <SplitText text="を。" charClass="text-muted/30" baseDelay={1.05} />
            </span>
          </h1>

          <div className="h4 h-px bg-border mb-10 md:mb-16" />

          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="h5 max-w-[440px] text-[13px] font-[300] leading-[2.4] text-muted">
              ブランドの奥底に眠る本質を引き出し、
              唯一無二の世界観として構築する。
              fudokiは、言葉にならない価値を形にする
              ブランディングスタジオです。
            </p>
            <div className="h6 flex items-center gap-3">
              <span className="animate-pulse-d h-1.5 w-1.5 rounded-full bg-fg" />
              <span className="text-[9px] tracking-[0.3em] uppercase text-subtle">Scroll</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <div className="border-y border-border py-4 overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0">
              {["Brand Strategy","Visual Identity","Naming","Art Direction","Web Design","Tone of Voice","Packaging","Space Design"].map(t => (
                <span key={`${i}-${t}`} className="mx-8 font-serif text-[11px] font-[300] tracking-[0.15em] uppercase text-muted/30">{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ===== SERVICE ===== */}
      <section id="service" className="px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1440px]">
          <div className="sv mb-16 md:mb-24">
            <p className="mb-3 text-[10px] tracking-[0.5em] uppercase text-muted">What we do</p>
            <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] font-[200] leading-[1.15]">
              本質を、<br />設計する。
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="sv">
              <Card n="01" t="Brand Strategy" j="ブランド戦略" b="市場調査、競合分析、ターゲット定義。ブランドの立ち位置と方向性を、データと対話から導きます。" />
            </div>
            <div className="sv sv-d1">
              <Card n="02" t="Visual Identity" j="VI設計" b="ロゴ、カラー、タイポグラフィ。すべてのタッチポイントに一貫した視覚言語を創り出します。" />
            </div>
            <div className="sv sv-d2">
              <Card n="03" t="Brand Experience" j="体験設計" b="Web、空間、プロダクト。あらゆる接点でブランドの世界観が息づく体験を設計します。" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== MANIFESTO ===== */}
      <section id="manifesto" className="px-5 py-24 md:px-10 md:py-36 border-y border-border">
        <div className="mx-auto max-w-[1440px]">
          <p className="sv mb-12 md:mb-20 text-[10px] tracking-[0.5em] uppercase text-muted">Manifesto</p>

          <div className="space-y-3 md:space-y-4">
            <ManifestoLine dir="left">美しいだけのデザインに、意味はない。</ManifestoLine>
            <ManifestoLine dir="right">流行は追わない。本質を追う。</ManifestoLine>
            <ManifestoLine dir="left">言葉にできないものこそ、価値がある。</ManifestoLine>
            <ManifestoLine dir="right">ブランドは作るものではなく、見つけるもの。</ManifestoLine>
            <ManifestoLine dir="left">私たちは、あなたの風土記を綴る。</ManifestoLine>
          </div>
        </div>
      </section>

      {/* ===== BIG HORIZONTAL TEXT ===== */}
      <div className="overflow-hidden py-6 md:py-12">
        <div className="animate-h-scroll flex whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="shrink-0 font-serif text-[clamp(3.5rem,14vw,12rem)] font-[100] tracking-tight text-border/50 mr-16">
              Brand the unspoken — ブランドの風土を記す —&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ===== PHILOSOPHY ===== */}
      <section className="px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="sv mb-16 md:mb-24 font-serif text-[clamp(2.2rem,6vw,6rem)] font-[200] leading-[1.15]">
            風土記&mdash;<br />
            その土地だけの<br />
            物語を記すように<span className="text-muted/30">。</span>
          </h2>

          <div className="grid gap-14 md:grid-cols-2 md:gap-24">
            <div className="sv-parallax flex items-center justify-center">
              <div className="relative h-52 w-52 md:h-64 md:w-64">
                <svg viewBox="0 0 200 200" className="sv-draw h-full w-full">
                  <circle cx="100" cy="100" r="92" fill="none" stroke="#ddd" strokeWidth=".35" />
                  <circle cx="100" cy="100" r="66" fill="none" stroke="#ccc" strokeWidth=".35" />
                  <circle cx="100" cy="100" r="40" fill="none" stroke="#bbb" strokeWidth=".35" />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center font-serif text-xl font-[200] tracking-[0.12em] text-fg/50">風土記</span>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-8">
              <p className="sv text-[13px] font-[300] leading-[2.4] text-muted">
                「風土記」とは、奈良時代に編纂された、各地の文化・地理・伝承を記した書物。その土地にしかない固有の物語を、後世に伝えるために。
              </p>
              <p className="sv text-[13px] font-[300] leading-[2.4] text-muted">
                fudokiは、その精神を現代のブランディングに受け継ぎます。流行を追うのではなく、そのブランドだけが持つ固有の価値を深く掘り下げ、言語化し、視覚化し、体験として設計する。
              </p>
              <p className="sv font-serif text-[15px] font-[400] leading-[2.2] text-fg">
                あなたのブランドの「風土記」を、<br />一緒に編みましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section id="contact" className="px-5 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1440px] text-center">
          <p className="sv mb-6 text-[10px] tracking-[0.5em] uppercase text-muted">Start a project</p>
          <h2 className="sv mx-auto mb-12 md:mb-16 max-w-3xl font-serif text-[clamp(1.8rem,5vw,4.5rem)] font-[200] leading-[1.3]">
            あなたのブランドの<br />
            <em className="not-italic font-[500]">風土記</em>を、<br />
            一緒に綴りませんか。
          </h2>
          <div className="sv">
            <MagneticButton
              href="mailto:hello@fudoki.jp"
              className="group inline-flex items-center gap-4 rounded-full bg-fg px-10 md:px-16 py-4 md:py-5 text-[11px] tracking-[0.15em] uppercase text-bg transition-all duration-400 hover:bg-fg/80"
            >
              <span>Contact us</span>
              <svg className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16m0 0l-6-6m6 6l-6 6" />
              </svg>
            </MagneticButton>
            <p className="mt-5 font-serif text-[11px] font-[300] tracking-[0.3em] text-subtle">hello@fudoki.jp</p>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-border px-5 py-8 md:px-10 md:py-12">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-5 md:flex-row">
          <span className="font-serif text-xs font-[300] tracking-[0.25em]">fudoki</span>
          <nav className="flex gap-8 text-[10px] tracking-[0.15em] uppercase text-muted">
            <a href="#service" className="hline transition-colors duration-400 hover:text-fg">Service</a>
            <a href="#manifesto" className="hline transition-colors duration-400 hover:text-fg">Manifesto</a>
            <a href="#contact" className="hline transition-colors duration-400 hover:text-fg">Contact</a>
          </nav>
          <span className="text-[10px] font-[300] text-subtle">&copy; 2026 fudoki Inc.</span>
        </div>
      </footer>
    </div>
  );
}

/* ===== Components ===== */

function Card({ n, t, j, b }: { n: string; t: string; j: string; b: string }) {
  return (
    <div className="clift group border border-border bg-bg p-8 md:p-10">
      <span className="mb-6 block text-[10px] tracking-[0.25em] text-subtle">{n}</span>
      <h3 className="mb-1 font-serif text-lg md:text-xl font-[300]">{t}</h3>
      <p className="mb-5 text-[10px] font-[300] tracking-[0.1em] text-muted">{j}</p>
      <p className="text-[12px] font-[300] leading-[2.2] text-muted">{b}</p>
      <div className="mt-6 h-px w-0 bg-fg/15 transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:w-full" />
    </div>
  );
}

function ManifestoLine({ children, dir }: { children: string; dir: "left" | "right" }) {
  return (
    <div className={`manifesto-line relative inline-block w-full cursor-default ${dir === "left" ? "sv-left" : "sv-right"}`}>
      <p className={`font-serif text-[clamp(1.4rem,3.5vw,3rem)] font-[200] leading-[1.4] ${dir === "right" ? "md:text-right" : ""}`}>
        {children}
      </p>
      <div className="strike" />
    </div>
  );
}
