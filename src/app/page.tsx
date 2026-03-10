export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-stone-200 bg-stone-50/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#" className="text-xl font-bold tracking-tight text-stone-900">
            fudoki
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-stone-600 md:flex">
            <a href="#features" className="transition-colors hover:text-stone-900">
              特徴
            </a>
            <a href="#philosophy" className="transition-colors hover:text-stone-900">
              考え方
            </a>
            <a href="#contact" className="transition-colors hover:text-stone-900">
              お問い合わせ
            </a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-stone-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-stone-700"
          >
            相談する
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-16 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
            Branding Service
          </p>
          <h1 className="mb-8 text-5xl font-bold leading-tight tracking-tight text-stone-900 md:text-7xl">
            ブランドの風土を、
            <br />
            <span className="text-amber-700">記す。</span>
          </h1>
          <p className="mx-auto mb-12 max-w-xl text-lg leading-relaxed text-stone-500">
            fudokiは、ブランドの本質を丁寧に引き出し、
            一貫した世界観を構築するブランディングサービスです。
            あなたのブランドだけが持つ「風土」を、形にします。
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#contact"
              className="inline-flex h-14 items-center rounded-full bg-stone-900 px-8 text-base font-medium text-white transition-colors hover:bg-stone-700"
            >
              無料相談を予約する
            </a>
            <a
              href="#features"
              className="inline-flex h-14 items-center rounded-full border border-stone-300 px-8 text-base font-medium text-stone-700 transition-colors hover:border-stone-400 hover:bg-stone-100"
            >
              サービスを見る
            </a>
          </div>
        </div>
        <div className="mt-16 animate-bounce text-stone-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
              Features
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
              fudokiが提供する価値
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              }
              title="本質の発見"
              description="表面的なデザインではなく、ブランドの根底にある価値観・ストーリー・想いを深く掘り下げ、唯一無二の核を見つけ出します。"
            />
            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9" />
                  <path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838.838-2.872a2 2 0 0 1 .506-.855z" />
                </svg>
              }
              title="一貫した世界観"
              description="ロゴ、カラー、タイポグラフィ、トーン&マナーまで、すべてのタッチポイントで統一されたブランド体験を設計します。"
            />
            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              }
              title="伴走型サポート"
              description="ブランドは育てるもの。立ち上げから運用まで、長期的なパートナーとしてブランドの成長に寄り添います。"
            />
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
                Philosophy
              </p>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
                風土記のように、
                <br />
                ブランドを記録する
              </h2>
              <p className="mb-6 leading-relaxed text-stone-500">
                「風土記」は、古代日本で各地の文化・風土・物語を記した書物です。
                fudokiは、その精神を受け継ぎ、それぞれのブランドが持つ固有の文化や物語を丁寧に記録し、形にしていきます。
              </p>
              <p className="leading-relaxed text-stone-500">
                流行に流されない、本質的なブランディング。
                あなたのブランドの「風土記」を、一緒に綴りましょう。
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative flex h-80 w-80 items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-amber-200" />
                <div className="absolute inset-6 rounded-full border border-amber-300/60" />
                <div className="absolute inset-12 rounded-full border border-amber-400/40" />
                <div className="absolute inset-18 rounded-full bg-amber-50" />
                <span className="relative text-4xl font-bold tracking-tight text-amber-700">
                  風土記
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-stone-900 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-4xl">
            ブランドの本質を、
            <br />
            一緒に見つけませんか？
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-lg leading-relaxed text-stone-400">
            まずは無料相談から。あなたのブランドの現状と目指す姿をお聞かせください。
          </p>
          <a
            href="mailto:hello@fudoki.jp"
            className="inline-flex h-14 items-center rounded-full bg-amber-600 px-10 text-base font-semibold text-white transition-colors hover:bg-amber-500"
          >
            無料相談に申し込む
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-stone-50 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <div className="text-lg font-bold tracking-tight text-stone-900">
            fudoki
          </div>
          <nav className="flex gap-8 text-sm text-stone-500">
            <a href="#features" className="transition-colors hover:text-stone-700">
              特徴
            </a>
            <a href="#philosophy" className="transition-colors hover:text-stone-700">
              考え方
            </a>
            <a href="#contact" className="transition-colors hover:text-stone-700">
              お問い合わせ
            </a>
          </nav>
          <p className="text-sm text-stone-400">
            &copy; 2026 fudoki. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-stone-50 p-8 transition-shadow hover:shadow-lg">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-bold text-stone-900">{title}</h3>
      <p className="leading-relaxed text-stone-500">{description}</p>
    </div>
  );
}
