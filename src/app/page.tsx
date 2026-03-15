export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-fg">

      {/* ===== HEADER ===== */}
      <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-bg/80">
        <div className="mx-auto flex h-16 max-w-[960px] items-center justify-between px-6">
          <a href="#" className="font-serif text-[11px] font-[400] tracking-[0.35em] uppercase">
            Fudoki Production
          </a>
          <a
            href="#contact"
            className="text-[10px] tracking-[0.2em] uppercase text-muted transition-colors duration-400 hover:text-fg"
          >
            Contact
          </a>
        </div>
      </header>

      {/* ===== TOP ===== */}
      <section className="px-6 pt-36 pb-24 md:pt-52 md:pb-36">
        <div className="mx-auto max-w-[960px]">
          {/* 写真エリア */}
          <div className="hero-photo mb-16 md:mb-24 aspect-[21/9] w-full overflow-hidden bg-[#e8e6e3]">
            {/* TODO: public/hero.jpg を配置して下記を有効化 */}
            {/* <img src="/hero.jpg" alt="" className="h-full w-full object-cover" /> */}
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#bbb]">Photo</span>
            </div>
          </div>

          <h1 className="hero-title mb-8 md:mb-10 font-serif text-[clamp(2.2rem,6vw,4.5rem)] font-[200] leading-[1.5] tracking-[0.02em]">
            風土の可能性を、ひらく。
          </h1>
          <p className="hero-sub text-[15px] md:text-[17px] font-[300] leading-[2.2] text-muted">
            食材の価値を引き出す。
          </p>
        </div>
      </section>

      <Hr />

      {/* ===== ABOUT ===== */}
      <section className="px-6 py-24 md:py-36">
        <div className="mx-auto max-w-[960px]">
          <h2 className="sv font-serif text-[clamp(1.6rem,4vw,2.8rem)] font-[200] leading-[1.5] tracking-[0.02em]">
            About
          </h2>
          <div className="mt-12 md:mt-16 max-w-[640px]">
            <p className="sv text-[15px] font-[300] leading-[2.6] text-fg/80">
              食材の価値は、その土地の風土と生産者の仕事によって生まれます。
            </p>
            <p className="sv mt-10 text-[15px] font-[300] leading-[2.6] text-fg/80">
              FUDOKI PRODUCTION〈フドキプロダクション〉は、
              <br />
              食材と向き合いながら、その魅力を料理人や市場へ届けていきます。
            </p>
            <p className="sv mt-10 text-[15px] font-[300] leading-[2.6] text-fg/80">
              風土に根ざした食材の可能性を見つめ、
              <br />
              その価値を次のかたちへとつないでいくこと。
              <br />
              それが私たちの仕事です。
            </p>
            <p className="sv mt-10 text-[15px] font-[300] leading-[2.6] text-fg/80">
              FUDOKIという名前には、
              <br />
              風土とそこに生きる人々の営みを記すという意味が込められています。
              <br />
              これからもずっと、私たちは、食材を通して風土の可能性をひらいていきます。
            </p>
          </div>
        </div>
      </section>

      <Hr />

      {/* ===== PHILOSOPHY ===== */}
      <section className="px-6 py-24 md:py-36">
        <div className="mx-auto max-w-[960px]">
          <h2 className="sv font-serif text-[clamp(1.6rem,4vw,2.8rem)] font-[200] leading-[1.5] tracking-[0.02em]">
            Philosophy
          </h2>
          <div className="mt-12 md:mt-16 max-w-[640px]">
            <h3 className="sv font-serif text-[18px] md:text-[20px] font-[300] leading-[1.8] tracking-[0.02em]">
              風土から生まれる価値
            </h3>
            <p className="sv mt-6 text-[15px] font-[300] leading-[2.6] text-fg/80">
              食材は、ただの素材ではありません。
              <br />
              その土地の風土、環境、そして生産者の仕事によって育まれるものです。
            </p>
            <p className="sv mt-10 text-[15px] font-[300] leading-[2.6] text-fg/80">
              私たちは、そうした背景と向き合いながら
              <br />
              食材が持つ本来の価値を見つめ直します。
            </p>

            <div className="sv-line my-16 md:my-20 h-px bg-border" />

            <h3 className="sv font-serif text-[18px] md:text-[20px] font-[300] leading-[1.8] tracking-[0.02em]">
              食材の可能性をひらく
            </h3>
            <p className="sv mt-6 text-[15px] font-[300] leading-[2.6] text-fg/80">
              風土に根ざした食材には、まだ知られていない可能性があります。
              <br />
              私たちはその価値を見つけ、磨き、次の価値へとつないでいきます。
            </p>
          </div>
        </div>
      </section>

      <Hr />

      {/* ===== PROJECTS ===== */}
      <section className="px-6 py-24 md:py-36">
        <div className="mx-auto max-w-[960px]">
          <h2 className="sv font-serif text-[clamp(1.6rem,4vw,2.8rem)] font-[200] leading-[1.5] tracking-[0.02em]">
            Projects
          </h2>
          <div className="mt-12 md:mt-16 max-w-[640px]">
            <p className="sv text-[15px] font-[300] leading-[2.6] text-fg/80">
              私たちは、食に関わるさまざまなプロジェクトに取り組んでいます。
            </p>
            <div className="mt-14 md:mt-18 flex flex-col gap-12 md:gap-14">
              <ProjectItem
                className="sv sv-d1"
                title="食材プロデュース / ブランディング"
                description="食材の価値を見つめ直し、その魅力を料理人や市場へ届けていきます。"
              />
              <ProjectItem
                className="sv sv-d2"
                title="商品開発"
                description="食材の魅力を活かしながら、新しい商品や価値づくりに取り組みます。"
              />
              <ProjectItem
                className="sv sv-d3"
                title="地域プロジェクト"
                description="地域の取り組みと連携しながら、食材の可能性を広げていきます。"
              />
            </div>
          </div>
        </div>
      </section>

      <Hr />

      {/* ===== CONTACT ===== */}
      <section id="contact" className="px-6 py-24 md:py-36">
        <div className="mx-auto max-w-[960px]">
          <h2 className="sv font-serif text-[clamp(1.6rem,4vw,2.8rem)] font-[200] leading-[1.5] tracking-[0.02em]">
            Contact
          </h2>
          <div className="mt-12 md:mt-16 max-w-[640px]">
            <p className="sv text-[15px] font-[300] leading-[2.6] text-fg/80">
              生産者の方、料理人の方、企業の方など、
              <br />
              私たちの取り組みに関心をお持ちの方はお気軽にご連絡ください。
            </p>
            <p className="sv mt-10 text-[15px] font-[300] leading-[2.6] text-fg/80">
              食材のプロデュースや地域プロジェクトなど、
              <br />
              さまざまな形での連携を検討しています。
            </p>
            <div className="sv mt-16 md:mt-20">
              <p className="font-serif text-[13px] font-[400] tracking-[0.25em] uppercase">
                Fudoki Production
              </p>
              <p className="mt-3 text-[14px] font-[300] text-muted">大石 哲司</p>
              <a
                href="mailto:hello@fudoki.jp"
                className="mt-6 inline-block text-[14px] font-[300] text-fg/70 underline underline-offset-4 decoration-fg/20 transition-colors duration-400 hover:text-fg hover:decoration-fg/50"
              >
                hello@fudoki.jp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-border px-6 py-10 md:py-14">
        <div className="mx-auto max-w-[960px] flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-serif text-[10px] font-[400] tracking-[0.3em] uppercase">Fudoki Production</p>
            <p className="mt-2 text-[10px] font-[300] leading-[2] text-muted">
              〒541-0058 大阪府大阪市中央区南久宝寺町四丁目5番17号 アップウェル船場 2F
            </p>
          </div>
          <p className="text-[10px] font-[300] text-subtle">
            &copy; {new Date().getFullYear()} FUDOKI PRODUCTION
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ===== Sub-components ===== */

function ProjectItem({ title, description, className }: { title: string; description: string; className?: string }) {
  return (
    <div className={className}>
      <h3 className="text-[15px] font-[400] leading-[2]">
        <span className="mr-3 text-muted/60">+</span>{title}
      </h3>
      <p className="mt-2 pl-6 text-[15px] font-[300] leading-[2.6] text-fg/80">
        {description}
      </p>
    </div>
  );
}

function Hr() {
  return <div className="mx-auto max-w-[960px] px-6"><div className="sv-line h-px bg-border" /></div>;
}
