export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-fg">

      {/* ===== HEADER ===== */}
      <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-bg/80">
        <div className="mx-auto flex h-16 max-w-[960px] items-center justify-between px-6">
          <a href="#" className="font-serif text-[11px] font-[400] tracking-[0.35em] uppercase">
            Fudoki Production
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#concept">Concept</NavLink>
            <NavLink href="#role">Role</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
          <a
            href="#contact"
            className="md:hidden text-[10px] tracking-[0.2em] uppercase text-muted transition-colors duration-400 hover:text-fg"
          >
            Contact
          </a>
        </div>
      </header>

      {/* ===== 1. MAIN VISUAL ===== */}
      <section className="px-6 pt-20 pb-24 md:pt-24 md:pb-36">
        <div className="mx-auto max-w-[960px]">
          <div className="hero-photo mb-12 md:mb-16 aspect-[21/9] w-full overflow-hidden bg-[#e8e6e3]">
            <img src="/hero.jpg" alt="FUDOKI" className="h-full w-full object-cover" />
          </div>

          <h1 className="hero-title mb-8 md:mb-10 font-serif text-[clamp(2.2rem,6vw,4.5rem)] font-[200] leading-[1.5] tracking-[0.08em]">
            風土を、記す。
          </h1>
          <p className="hero-sub text-[15px] md:text-[17px] font-[300] leading-[2.2] text-muted tracking-[0.12em]">
            産地の意志を、一皿の物語へ。
          </p>
        </div>
      </section>

      <Hr />

      {/* ===== 2. CONCEPT ===== */}
      <section id="concept" className="px-6 py-24 md:py-36 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full md:w-[50%] h-[40%] md:h-full pointer-events-none">
          <div className="absolute inset-0 bg-[url('/concept-bg.jpg')] bg-cover bg-center opacity-[0.45] md:opacity-[0.5]" />
          <div className="hidden md:block absolute inset-0 bg-gradient-to-l from-transparent via-bg/40 to-bg" />
          <div className="md:hidden absolute inset-0 bg-gradient-to-b from-bg/20 via-transparent to-bg" />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/50 via-transparent to-bg/50" />
        </div>
        <div className="mx-auto max-w-[960px] relative z-10">
          <h2 className="sv font-serif text-[clamp(1.6rem,4vw,2.8rem)] font-[200] leading-[1.5] tracking-[0.02em]">
            Concept
          </h2>
          <div className="mt-12 md:mt-16 max-w-[640px]">
            <p className="sv font-serif text-[clamp(1.1rem,2.5vw,1.4rem)] font-[300] leading-[2] tracking-[0.06em] border-l-[2px] border-fg/15 pl-6">
              食材の価値を、<br />
              正しく・美しく、翻訳する。
            </p>

            <div className="sv mt-14 md:mt-18 text-[15px] font-[300] leading-[2.6] text-fg/80">
              <p>
                圧倒的な熱量を持つ生産者の「こだわり」は、<br />
                時に言葉を超え、市場の論理に埋もれてしまう。
              </p>
              <p className="mt-10">
                一方、最高の一皿を追求する料理人は、<br />
                自らの感性を託せる「本物の素材」を切望している。
              </p>
              <p className="mt-10">
                私たちは、産地の現場に深く入り込み、<br />
                生産者が言葉にできない熱量・こだわりを、<br />
                料理人の創造性を刺激する「価値ある物語」へと翻訳します。
              </p>
            </div>

            <div className="sv-line my-16 md:my-20 h-px bg-border" />

            <p className="sv text-[15px] font-[300] leading-[2.6] text-fg/80">
              私たちは、生産者と料理人をつなぐ「代弁者」であり、「表現の伴走者」。<br />
              産地の情熱を社会の資産に変え、持続可能な未来を共に醸成します。
            </p>
          </div>
        </div>
      </section>

      <Hr />

      {/* ===== 3. ROLE ===== */}
      <section id="role" className="px-6 py-24 md:py-36">
        <div className="mx-auto max-w-[960px]">
          <h2 className="sv font-serif text-[clamp(1.6rem,4vw,2.8rem)] font-[200] leading-[1.5] tracking-[0.02em]">
            Role
          </h2>
          <p className="sv mt-4 text-[13px] font-[300] tracking-[0.15em] text-muted">
            私たちの役割
          </p>
          <div className="mt-14 md:mt-18 flex flex-col gap-12 md:gap-14">
            <RoleItem
              className="sv sv-d1"
              label="Food Produce / Branding"
              title="食材プロデュース／ブランディング"
              description="食材の価値を見つめ直し、その魅力を料理人や市場へ届けていきます。"
            />
            <RoleItem
              className="sv sv-d2"
              label="Product Development"
              title="商品開発"
              description="食材の魅力を活かしながら、新しい商品や価値づくりに取り組みます。"
            />
            <RoleItem
              className="sv sv-d3"
              label="Regional Project"
              title="地域プロジェクト"
              description="地域の取り組みと連携しながら、食材の可能性を広げていきます。"
            />
          </div>
        </div>
      </section>

      <Hr />

      {/* ===== 4. SERVICES ===== */}
      <section id="services" className="px-6 py-24 md:py-36">
        <div className="mx-auto max-w-[960px]">
          <h2 className="sv font-serif text-[clamp(1.6rem,4vw,2.8rem)] font-[200] leading-[1.5] tracking-[0.02em]">
            Services
          </h2>
          <p className="sv mt-4 text-[13px] font-[300] tracking-[0.15em] text-muted">
            事業展開
          </p>

          {/* 料理人の方へ */}
          <div className="mt-16 md:mt-22 max-w-[640px]">
            <div className="sv">
              <p className="text-[10px] tracking-[0.3em] uppercase text-muted mb-3">For Chefs</p>
              <h3 className="font-serif text-[clamp(1.1rem,2.5vw,1.4rem)] font-[300] leading-[1.8] tracking-[0.04em]">
                料理人の方へ
              </h3>
              <p className="mt-4 font-serif text-[15px] font-[300] leading-[2] tracking-[0.04em] text-fg/60">
                「産地の熱量を、厨房の創造性にお繋ぎします」
              </p>
            </div>
            <p className="sv mt-8 text-[15px] font-[300] leading-[2.6] text-fg/80">
              私たちは、単に食材を届けるだけでなく、<br />
              その背景にある「物語」をセットで提供します。
            </p>
            <div className="mt-10">
              <ServiceItem
                className="sv sv-d1"
                title="厳選仕入れ"
                description="圧倒的な品質と希少性を持つ産地・生産者を独自に開拓。"
              />
              <ServiceItem
                className="sv sv-d2"
                title="情報提供"
                description="シェフがお客様に語れる、素材の背景や生産のプロセスを詳細に共有。"
              />
              <ServiceItem
                className="sv sv-d3"
                title="共創開発"
                description="メニューのコンセプトに合わせた、特定の産地とのオリジナル食材開発や供給スキームを構築。"
              />
            </div>
          </div>

          <div className="sv-line my-16 md:my-20 mx-auto max-w-[640px] h-px bg-border" />

          {/* 一般消費者の方へ */}
          <div className="max-w-[640px]">
            <div className="sv">
              <div className="flex items-center gap-4 mb-3">
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted">For Consumers</p>
                <span className="text-[9px] tracking-[0.15em] uppercase text-muted/60 border border-border px-2 py-0.5">
                  準備中
                </span>
              </div>
              <h3 className="font-serif text-[clamp(1.1rem,2.5vw,1.4rem)] font-[300] leading-[1.8] tracking-[0.04em]">
                一般消費者の方へ
              </h3>
              <p className="mt-4 font-serif text-[15px] font-[300] leading-[2] tracking-[0.04em] text-fg/60">
                「プロの目利きを、ご自宅の食卓へお届けします」
              </p>
            </div>
            <p className="sv mt-8 text-[15px] font-[300] leading-[2.6] text-fg/80">
              これまでは一般に流通しなかった、<br />
              プロ仕様の最高級素材にアクセスできる場を提供します。
            </p>
            <div className="mt-10">
              <ServiceItem
                className="sv sv-d1"
                title="ダイレクト販売"
                description="厳選された産地から、最高のコンディションで直接お届け。"
              />
              <ServiceItem
                className="sv sv-d2"
                title="体験の共有"
                description="食べるだけでなく、オーナー制度などを通じて「育てる・守る」という一次産業のプロセスに参加する仕組みを構築。"
              />
            </div>
          </div>
        </div>
      </section>

      <Hr />

      {/* ===== 5. CONTACT ===== */}
      <section id="contact" className="px-6 py-24 md:py-36">
        <div className="mx-auto max-w-[960px]">
          <h2 className="sv font-serif text-[clamp(1.6rem,4vw,2.8rem)] font-[200] leading-[1.5] tracking-[0.02em]">
            Contact
          </h2>
          <p className="sv mt-4 text-[13px] font-[300] tracking-[0.15em] text-muted">
            お問い合わせ
          </p>

          <div className="mt-14 md:mt-18 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <div className="sv sv-d1 border border-border p-8 md:p-10">
              <p className="text-[10px] tracking-[0.3em] uppercase text-muted mb-6">For Producers</p>
              <h3 className="font-serif text-[17px] md:text-[19px] font-[300] leading-[1.8] tracking-[0.04em]">
                生産者の皆様へ
              </h3>
              <p className="mt-4 font-serif text-[15px] font-[300] leading-[2] tracking-[0.04em] text-fg/60">
                「あなたの情熱を、社会の資産に変える」
              </p>
              <p className="mt-6 text-[14px] font-[300] leading-[2.4] text-fg/70">
                販路開拓、ブランディング、マーケティング支援。<br />
                FUDOKIは、生産者が「作る」ことに集中できる環境を構築します。
              </p>
            </div>
            <div className="sv sv-d2 border border-border p-8 md:p-10">
              <p className="text-[10px] tracking-[0.3em] uppercase text-muted mb-6">For Chefs</p>
              <h3 className="font-serif text-[17px] md:text-[19px] font-[300] leading-[1.8] tracking-[0.04em]">
                料理人の皆様へ
              </h3>
              <p className="mt-4 font-serif text-[15px] font-[300] leading-[2] tracking-[0.04em] text-fg/60">
                「唯一無二の食材と、その背景を厨房へ」
              </p>
              <p className="mt-6 text-[14px] font-[300] leading-[2.4] text-fg/70">
                希少食材の仕入れや、産地と連携したオリジナル商品開発のご相談を承ります。
              </p>
            </div>
          </div>

          <div className="sv mt-16 md:mt-20 max-w-[640px]">
            <h3 className="font-serif text-[17px] md:text-[19px] font-[300] leading-[1.8] tracking-[0.04em] mb-8">
              お問い合わせフォーム
            </h3>
            <ContactForm />
          </div>
        </div>
      </section>

      <Hr />

      {/* ===== 7. CORPORATE ===== */}
      <section id="corporate" className="px-6 py-24 md:py-36">
        <div className="mx-auto max-w-[960px]">
          <h2 className="sv font-serif text-[clamp(1.6rem,4vw,2.8rem)] font-[200] leading-[1.5] tracking-[0.02em]">
            Corporate
          </h2>
          <p className="sv mt-4 text-[13px] font-[300] tracking-[0.15em] text-muted">
            企業情報
          </p>
          <div className="mt-12 md:mt-16 max-w-[640px]">
            <div className="sv">
              <p className="font-serif text-[13px] font-[400] tracking-[0.25em] uppercase">
                Fudoki Production
              </p>
              <p className="mt-2 text-[14px] font-[300] text-muted">
                （株）FUDOKI PRODUCTION
              </p>
              <p className="mt-4 text-[14px] font-[300] leading-[2.2] text-fg/70">
                代表取締役　大石 哲司
              </p>
              <p className="mt-2 text-[13px] font-[300] leading-[2] text-muted">
                〒541-0058 大阪府大阪市中央区南久宝寺町四丁目5番17号<br />
                アップウェル船場 2F
              </p>
            </div>

            <div className="sv-line my-12 md:my-14 h-px bg-border" />

            <p className="sv font-serif text-[clamp(1.1rem,2.5vw,1.4rem)] font-[300] leading-[2] tracking-[0.06em]">
              現場に、立ち続ける。
            </p>
            <p className="sv mt-8 text-[15px] font-[300] leading-[2.6] text-fg/80">
              私たちは机上の空論ではなく、常に産地の土を踏み、海に浸かり、<br />
              生産者と同じ視線で未来を見つめます。
            </p>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-border px-6 py-10 md:py-14">
        <div className="mx-auto max-w-[960px] flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-serif text-[10px] font-[400] tracking-[0.3em] uppercase">Fudoki Production</p>
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

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-[10px] tracking-[0.2em] uppercase text-muted transition-colors duration-400 hover:text-fg"
    >
      {children}
    </a>
  );
}

function RoleItem({ label, title, description, className }: { label: string; title: string; description: string; className?: string }) {
  return (
    <div className={className}>
      <p className="text-[10px] tracking-[0.25em] uppercase text-muted/60 mb-2">{label}</p>
      <h3 className="text-[15px] font-[400] leading-[2]">
        <span className="mr-3 text-muted/60">+</span>{title}
      </h3>
      <p className="mt-2 pl-6 text-[15px] font-[300] leading-[2.6] text-fg/80">
        {description}
      </p>
    </div>
  );
}

function ServiceItem({ title, description, className }: { title: string; description: string; className?: string }) {
  return (
    <div className={`border-t border-border py-6 ${className ?? ""}`}>
      <h4 className="text-[15px] font-[400] leading-[2] tracking-[0.04em]">{title}</h4>
      <p className="mt-1 text-[14px] font-[300] leading-[2.2] text-fg/70">{description}</p>
    </div>
  );
}


function ContactForm() {
  const inputClass = "w-full border border-border bg-transparent px-4 py-3 text-[14px] font-[300] text-fg outline-none transition-colors duration-300 focus:border-fg/40 placeholder:text-muted/50";
  const labelClass = "block text-[12px] font-[400] tracking-[0.1em] text-muted mb-2";

  return (
    <form
      action="https://formsubmit.co/fudoki@aska-g.com"
      method="POST"
      className="flex flex-col gap-6"
    >
      <input type="hidden" name="_subject" value="【FUDOKI】お問い合わせ" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>お名前 *</label>
          <input type="text" name="name" required placeholder="山田 太郎" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>会社名・団体名</label>
          <input type="text" name="company" placeholder="株式会社〇〇" className={inputClass} />
        </div>
      </div>

      <div>
        <label className={labelClass}>メールアドレス *</label>
        <input type="email" name="email" required placeholder="info@example.com" className={inputClass} />
      </div>

      <div>
        <label className={labelClass}>お問い合わせ種別</label>
        <select name="category" className={`${inputClass} appearance-none`} defaultValue="">
          <option value="" disabled>選択してください</option>
          <option value="producer">生産者の方</option>
          <option value="chef">料理人の方</option>
          <option value="media">メディア・取材</option>
          <option value="other">その他</option>
        </select>
      </div>

      <div>
        <label className={labelClass}>お問い合わせ内容 *</label>
        <textarea name="message" required rows={5} placeholder="お問い合わせ内容をご記入ください" className={`${inputClass} resize-none`} />
      </div>

      <div className="mt-2">
        <button
          type="submit"
          className="inline-block border border-fg/20 px-12 py-4 text-[13px] font-[400] tracking-[0.2em] text-fg/80 transition-all duration-400 hover:border-fg/50 hover:text-fg hover:bg-fg/[0.03] cursor-pointer"
        >
          送信する
        </button>
      </div>
    </form>
  );
}

function Hr() {
  return <div className="mx-auto max-w-[960px] px-6"><div className="sv-line h-px bg-border" /></div>;
}
