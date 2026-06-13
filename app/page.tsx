import Image from "next/image";

import storefront from "@/public/images/storefront.jpg";
import greeting from "@/public/images/greeting.jpg";
import galleryCarwash from "@/public/images/gallery-carwash.jpg";
import galleryMaintenance from "@/public/images/gallery-maintenance.jpg";
import galleryMascot from "@/public/images/gallery-mascot.jpg";
import galleryCommunity from "@/public/images/gallery-community.jpg";
import galleryKerosene from "@/public/images/gallery-kerosene.jpg";
import galleryFestival from "@/public/images/gallery-festival.jpg";

const LINE_URL = "https://lin.ee/YM3neq9";
const RESERVE_URL = "https://timy.jp/shop/5424/?menu=";
const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("石川県鳳珠郡穴水町字川島キ-112-1");

const NAV_ITEMS = [
  { href: "#about", label: "ご挨拶" },
  { href: "#service", label: "サービス" },
  { href: "#group", label: "グループ" },
  { href: "#access", label: "アクセス" },
];

const GROUP_SITES = [
  {
    name: "チーム能登食いしん坊",
    description: "能登食材の魅力を発信するNPO活動",
    url: "https://kuishinbou.wixsite.com/noto",
    note: null,
  },
  {
    name: "海臨山 千手院",
    description: "石川県穴水町の寺院",
    url: "https://kairinzan-senjuin.github.io",
    note: null,
  },
  {
    name: "クリエイト",
    description: "能登食材のオンラインショップ",
    url: "https://create8686.com",
    note: null,
  },
];

const GALLERY = [
  {
    img: galleryCarwash,
    alt: "お客様の車を洗車するスタッフ",
    caption: "洗車もおまかせください",
  },
  {
    img: galleryMaintenance,
    alt: "ボンネットを開けて点検中のスタッフ",
    caption: "点検・整備もていねいに",
  },
  {
    img: galleryMascot,
    alt: "店舗前のマスコット",
    caption: "マスコットがお出迎え",
  },
  {
    img: galleryCommunity,
    alt: "地域の皆さんと記念撮影",
    caption: "地域のみなさんと",
  },
  {
    img: galleryKerosene,
    alt: "軽トラックに積んだ灯油のポリタンク",
    caption: "灯油の配達も承ります",
  },
  {
    img: galleryFestival,
    alt: "地域のお祭りの屋台",
    caption: "地域行事を応援しています",
  },
];

const SERVICES = [
  {
    title: "給油・カーメンテナンス",
    description:
      "フルサービスでの給油はもちろん、オイル・タイヤ交換などのメンテナンスや自動車関連商品の販売も承ります。",
    icon: FuelIcon,
  },
  {
    title: "車両販売",
    description:
      "新車・中古車の販売を行っています。車選びのご相談から納車まで、地元ならではの安心感でサポートします。",
    icon: CarIcon,
  },
  {
    title: "生命保険のご相談",
    description:
      "生命保険の見直しや新規ご加入のご相談を承ります。お電話・LINE・Zoomでもご相談いただけます。",
    icon: ShieldIcon,
  },
  {
    title: "配達サービス",
    description:
      "ご高齢の方を中心に、灯油などの配達サービスを行っています。お気軽にお声がけください。",
    icon: TruckIcon,
  },
  {
    title: "地域行事の支援",
    description:
      "穴水町の地域行事を応援しています。地域の皆さまとともに歩む会社でありたいと考えています。",
    icon: UsersIcon,
  },
  {
    title: "キャッシュレス決済",
    description:
      "各種キャッシュレス決済に対応しています。現金をお持ちでなくても安心してご利用いただけます。",
    icon: CardIcon,
  },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-beige bg-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <a href="#top" className="text-lg font-bold text-ink-strong">
            株式会社<span className="text-accent">森本石油</span>
          </a>
          <nav aria-label="メインナビゲーション" className="hidden gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2.5 font-medium transition-colors duration-200 hover:bg-beige hover:text-ink-strong"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={RESERVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-5 py-2.5 font-bold text-white transition-colors duration-200 hover:bg-accent-dark"
          >
            ご予約
          </a>
        </div>
      </header>

      <main id="top">
        {/* ヒーロー */}
        <section className="mx-auto max-w-5xl px-4 py-20 text-center sm:py-28">
          <h1 className="text-4xl font-bold leading-tight text-ink-strong sm:text-5xl">
            お茶を飲みに、
            <br className="sm:hidden" />
            寄ってって。
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed">
            創業1984年。石川県穴水町で、給油もクルマのことも、保険のことも。
            <br className="hidden sm:block" />
            お茶のおもてなしとともに、地域に寄りそうフルサービスのガソリンスタンドです。
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={RESERVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-accent px-8 py-4 text-lg font-bold text-white transition-colors duration-200 hover:bg-accent-dark sm:w-auto"
            >
              カーメンテナンスを予約する
            </a>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full border-2 border-ink px-8 py-4 text-lg font-bold text-ink-strong transition-colors duration-200 hover:bg-beige sm:w-auto"
            >
              LINEで相談する
            </a>
          </div>
          <Image
            src={storefront}
            alt="森本石油の店舗外観"
            priority
            className="mx-auto mt-14 w-full max-w-3xl rounded-3xl shadow-lg"
          />
        </section>

        {/* 会社・代表メッセージ */}
        <section id="about" className="scroll-mt-20 bg-beige">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:py-20">
            <SectionHeading>ご挨拶</SectionHeading>
            <Image
              src={greeting}
              alt="代表取締役 森本敬一"
              className="mx-auto mt-8 w-full max-w-sm rounded-2xl shadow-md"
            />
            <div className="mt-8 space-y-5 text-lg leading-relaxed">
              <p>
                森本石油は、祖父の創業以来、穴水町の皆さまに支えられて歩んでまいりました。
              </p>
              <p>
                私たちが大切にしているのは、給油だけではなく「気軽にお立ちより頂ける環境」です。
                フルサービスの運営とお茶のおもてなしを続けながら、
                お客さま一人ひとりとの会話を大切にしています。
              </p>
              <p>
                セルフサービス店との価格競争のなかでも、
                「ここに来てよかった」と思っていただける満足度で、
                これからも地域の皆さまのお役に立ってまいります。
              </p>
              <p className="text-right font-bold text-ink-strong">
                代表取締役　森本 敬一
              </p>
            </div>
          </div>
        </section>

        {/* サービス一覧 */}
        <section id="service" className="scroll-mt-20">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
            <SectionHeading>ご提供サービス</SectionHeading>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service) => (
                <div
                  key={service.title}
                  className="rounded-2xl border border-beige bg-white p-6 transition-shadow duration-200 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream text-accent">
                    <service.icon />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-ink-strong">
                    {service.title}
                  </h3>
                  <p className="mt-2 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={RESERVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full bg-accent px-8 py-4 text-lg font-bold text-white transition-colors duration-200 hover:bg-accent-dark sm:w-auto"
              >
                カーメンテナンスを予約する
              </a>
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full border-2 border-ink px-8 py-4 text-center text-lg font-bold text-ink-strong transition-colors duration-200 hover:bg-beige sm:w-auto"
              >
                保険のご相談はLINEから
              </a>
            </div>
          </div>
        </section>

        {/* 日々のようす */}
        <section id="gallery" className="scroll-mt-20 bg-beige">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
            <SectionHeading>日々のようす</SectionHeading>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
              {GALLERY.map((item) => (
                <figure key={item.caption}>
                  <Image
                    src={item.img}
                    alt={item.alt}
                    className="aspect-[4/3] w-full rounded-2xl object-cover shadow-sm"
                  />
                  <figcaption className="mt-2 text-center text-sm sm:text-base">
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* グループ紹介 */}
        <section id="group" className="scroll-mt-20">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
            <SectionHeading>グループ紹介</SectionHeading>
            <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed">
              森本石油は、能登の食や文化を発信する活動にも取り組んでいます。
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {GROUP_SITES.map((site) =>
                site.url ? (
                  <a
                    key={site.name}
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl border border-beige bg-white p-6 transition-shadow duration-200 hover:shadow-md"
                  >
                    <h3 className="text-xl font-bold text-ink-strong">
                      {site.name}
                    </h3>
                    <p className="mt-2 leading-relaxed">{site.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 font-bold text-accent">
                      サイトを見る
                      <ArrowIcon />
                    </span>
                  </a>
                ) : (
                  <div
                    key={site.name}
                    className="rounded-2xl border border-beige bg-white p-6"
                  >
                    <h3 className="text-xl font-bold text-ink-strong">
                      {site.name}
                    </h3>
                    <p className="mt-2 leading-relaxed">{site.description}</p>
                    <span className="mt-4 inline-block rounded-full bg-beige px-3 py-1 text-sm font-bold">
                      {site.note}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* アクセス・会社概要 */}
        <section id="access" className="scroll-mt-20 bg-beige">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:py-20">
            <SectionHeading>アクセス・会社概要</SectionHeading>
            <dl className="mt-8 overflow-hidden rounded-2xl border border-ink/10 bg-white">
              {[
                ["社名", "株式会社森本石油"],
                ["所在地", "〒927-0027 石川県鳳珠郡穴水町字川島キ-112-1"],
                ["代表者", "森本 敬一"],
                ["開業", "1984年10月"],
                [
                  "事業内容",
                  "ガソリンスタンドの運営（フルサービス）、カーメンテナンス、車両販売、生命保険募集、配達サービス",
                ],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex flex-col border-b border-ink/10 last:border-b-0 sm:flex-row"
                >
                  <dt className="shrink-0 bg-cream px-5 py-4 font-bold text-ink-strong sm:w-36">
                    {label}
                  </dt>
                  <dd className="px-5 py-4 leading-relaxed">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-center">
              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-accent underline underline-offset-4 transition-colors duration-200 hover:text-accent-dark"
              >
                Googleマップで場所を確認する
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-ink-strong text-cream">
        <div className="mx-auto max-w-5xl px-4 py-10 text-center">
          <p className="text-lg font-bold">株式会社森本石油</p>
          <p className="mt-2 text-sm">
            〒927-0027 石川県鳳珠郡穴水町字川島キ-112-1
          </p>
          <p className="mt-6 text-sm text-cream/70">
            &copy; {new Date().getFullYear()} Morimoto Sekiyu Co., Ltd.
          </p>
        </div>
      </footer>
    </>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-center text-2xl font-bold text-ink-strong sm:text-3xl">
      <span className="border-b-4 border-accent pb-2">{children}</span>
    </h2>
  );
}

/* ---- アイコン (Lucide) ---- */

function IconBase({ children }: { children: React.ReactNode }) {
  return (
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
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function FuelIcon() {
  return (
    <IconBase>
      <line x1="3" x2="15" y1="22" y2="22" />
      <line x1="4" x2="14" y1="9" y2="9" />
      <path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" />
      <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" />
    </IconBase>
  );
}

function CarIcon() {
  return (
    <IconBase>
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </IconBase>
  );
}

function ShieldIcon() {
  return (
    <IconBase>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </IconBase>
  );
}

function TruckIcon() {
  return (
    <IconBase>
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62L18.3 8.38a1 1 0 0 0-.78-.38H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </IconBase>
  );
}

function UsersIcon() {
  return (
    <IconBase>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </IconBase>
  );
}

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function CardIcon() {
  return (
    <IconBase>
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </IconBase>
  );
}
