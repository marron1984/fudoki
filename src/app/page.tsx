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

      {/* ===== HERO ===== */}
      <section className="px-6 pt-36 pb-20 md:pt-52 md:pb-32">
        <div className="mx-auto max-w-[960px]">
          {/* 写真エリア — 霧や光など抽象的な自然イメージを配置 */}
          <div className="mb-16 md:mb-24 aspect-[21/9] w-full overflow-hidden bg-[#e8e6e3]">
            {/* TODO: 実際の写真に差し替え → public/hero.jpg を配置して下記を有効化 */}
            {/* <img src="/hero.jpg" alt="" className="h-full w-full object-cover" /> */}
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#bbb]">Photo</span>
            </div>
          </div>

          <h1 className="mb-10 md:mb-14 font-serif text-[clamp(1.8rem,5vw,3.6rem)] font-[200] leading-[1.6] tracking-[0.04em]">
            風土の可能性を、ひらく。
          </h1>
          <p className="max-w-[520px] text-[13px] font-[300] leading-[2.6] text-muted">
            生産者とともに、
            <br />
            料理人の一皿につながる物語を紡ぎます。
          </p>
        </div>
      </section>

      <Hr />

      {/* ===== FUDOKIとは ===== */}
      <section className="px-6 py-20 md:py-32">
        <div className="mx-auto max-w-[960px]">
          <SectionLabel>FUDOKIとは</SectionLabel>
          <div className="mt-10 md:mt-14 max-w-[600px]">
            <p className="text-[13px] font-[300] leading-[2.8] text-fg/80">
              私たち（FUDOKI PRODUCTION／フドキプロダクション）は、
              <br />
              生産者と向き合い、
              <br />
              食材の味や背景、技術、営みを丁寧に紐解きながら、
              <br />
              まだ伝わりきっていない価値をすくい上げています。
            </p>
            <p className="mt-10 text-[13px] font-[300] leading-[2.8] text-fg/80">
              素材には、まだ届いていない意味があります。
              <br />
              それらを丁寧に整理し、
              <br />
              料理人の創作へと編み込まれていく環境を整えます。
            </p>
          </div>
        </div>
      </section>

      <Hr />

      {/* ===== 一皿と向き合う方々へ ===== */}
      <section className="px-6 py-20 md:py-32">
        <div className="mx-auto max-w-[960px]">
          <SectionLabel>一皿と向き合う方々へ</SectionLabel>
          <div className="mt-10 md:mt-14 max-w-[600px]">
            <p className="text-[13px] font-[300] leading-[2.8] text-fg/80">
              素材の背景まで引き受けながら、一皿と向き合う料理人の方々へ。
            </p>
            <p className="mt-10 text-[13px] font-[300] leading-[2.8] text-fg/80">
              価格や希少性だけではなく、その土地の営みや技術まで理解し、
              <br />
              料理として表現しようとする方と、仕事を重ねていきたいと考えています。
            </p>
            <p className="mt-10 text-[13px] font-[300] leading-[2.8] text-fg/80">
              まだ広く知られていない食材にも、確かな価値があります。
              <br />
              その本質を共有し、
              <br />
              料理として立ち上がっていく過程を、
              <br />
              ともに築いていきます。
            </p>
          </div>
        </div>
      </section>

      <Hr />

      {/* ===== 生産者の方へ ===== */}
      <section className="px-6 py-20 md:py-32">
        <div className="mx-auto max-w-[960px]">
          <SectionLabel>生産者の方へ</SectionLabel>
          <div className="mt-10 md:mt-14 max-w-[600px]">
            <p className="text-[13px] font-[300] leading-[2.8] text-fg/80">
              自らの仕事に誇りを持ち、
              <br />
              素材と真剣に向き合っている生産者の方へ。
            </p>
            <p className="mt-10 text-[13px] font-[300] leading-[2.8] text-fg/80">
              販路が限られていることや、
              <br />
              適切な価格で届けきれていないことに、
              <br />
              もどかしさを感じていませんか。
            </p>
            <p className="mt-10 text-[13px] font-[300] leading-[2.8] text-fg/80">
              私たちは、売り方だけを変えることはしません。
              <br />
              背景や技術、営みを見つめ直し、
              <br />
              料理の現場との接点を一から設計していきます。
            </p>
            <p className="mt-10 text-[13px] font-[300] leading-[2.8] text-fg/80">
              その過程では、
              <br />
              これまでのやり方を問い直す場面もあるかもしれません。
              <br />
              本気で価値を高めたいと考える方と、
              <br />
              長く向き合っていきます。
            </p>
            <p className="mt-10 text-[13px] font-[300] leading-[2.8] text-fg/80">
              価格を上げることが目的ではありません。
              <br />
              価値が正しく伝わる状態を整えること。
              <br />
              その先に、持続可能な関係が生まれると考えています。
            </p>
          </div>
        </div>
      </section>

      <Hr />

      {/* ===== CONTACT ===== */}
      <section id="contact" className="px-6 py-20 md:py-32">
        <div className="mx-auto max-w-[960px]">
          <div className="max-w-[600px]">
            <p className="text-[13px] font-[300] leading-[2.8] text-fg/80">
              ともに時間をかけて向き合える方と、
              <br />
              出会えればと考えています。
            </p>
            <p className="mt-6 text-[13px] font-[300] leading-[2.8] text-fg/80">
              ご連絡は、下記より。
            </p>
            <div className="mt-14 md:mt-20">
              <p className="font-serif text-[12px] font-[400] tracking-[0.25em] uppercase">
                Fudoki Production
              </p>
              <p className="mt-3 text-[12px] font-[300] text-muted">大石 哲司</p>
              <a
                href="mailto:hello@fudoki.jp"
                className="mt-6 inline-block text-[12px] font-[300] text-fg/70 underline underline-offset-4 decoration-fg/20 transition-colors duration-400 hover:text-fg hover:decoration-fg/50"
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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-[clamp(1.4rem,3.5vw,2.2rem)] font-[200] leading-[1.6] tracking-[0.02em]">
      {children}
    </h2>
  );
}

function Hr() {
  return <div className="mx-auto max-w-[960px] px-6"><div className="h-px bg-border" /></div>;
}
