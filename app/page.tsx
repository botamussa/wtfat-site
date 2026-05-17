"use client";

import { useEffect, useMemo, useState } from "react";

const BOT_URL = "https://t.me/WTFatBot";
const CHANNEL_URL = "https://t.me/wtfatme";
const CONTACT = "mailto:akbota.mussa.z@gmail.com";

/* ----------------------------- NAV ----------------------------- */

function TopNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-200 ${
        scrolled
          ? "bg-white border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto grid max-w-6xl grid-cols-3 items-center px-6 py-4">
        <a
          href="#top"
          className="justify-self-start text-base font-semibold tracking-tight"
          aria-label="WTFat home"
        >
          WTFat <span aria-hidden>🐼</span>
        </a>

        <ul className="hidden justify-self-center gap-7 text-sm text-black/70 sm:flex">
          <li>
            <a href="#surfaces" className="hover:text-accent transition-colors">
              Surfaces
            </a>
          </li>
          <li>
            <a href="#thesis" className="hover:text-accent transition-colors">
              Thesis
            </a>
          </li>
          <li>
            <a href="#why" className="hover:text-accent transition-colors">
              Why now
            </a>
          </li>
        </ul>

        <a
          href={BOT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="justify-self-end inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-ink px-3.5 py-2 text-[13px] font-medium text-white transition-colors hover:bg-accent sm:px-4 sm:text-sm"
        >
          <span className="sm:hidden">Try bot</span>
          <span className="hidden sm:inline">Try the bot</span>
          <span aria-hidden>→</span>
        </a>
      </nav>
    </header>
  );
}

/* ----------------------------- HERO ----------------------------- */

const ROTATING_WORDS = ["ate", "wore", "spent", "swiped on", "posted"];

function RotatingWord() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setI((n) => (n + 1) % ROTATING_WORDS.length),
      2000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-block text-accent">
      <span key={i} className="inline-block animate-[fadeIn_400ms_ease-out]">
        {ROTATING_WORDS[i]}
      </span>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </span>
  );
}

function LiveCounter() {
  // Starts at a plausible number and ticks up — fakes a live feel.
  const [n, setN] = useState(127431);

  useEffect(() => {
    const id = setInterval(() => {
      setN((v) => v + Math.floor(Math.random() * 3) + 1);
    }, 1800);
    return () => clearInterval(id);
  }, []);

  const formatted = useMemo(() => n.toLocaleString("en-US"), [n]);

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-medium text-black/70">
      <span
        aria-hidden
        className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent"
      />
      <span className="tabular-nums">{formatted}</span>
      <span className="text-black/45">roasts served</span>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-6xl px-6 pt-16 pb-20 text-center sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-32"
    >
      <div className="mb-8 flex justify-center">
        <LiveCounter />
      </div>

      <h1 className="mx-auto max-w-5xl text-[44px] leading-[0.95] tracking-tightest font-semibold sm:text-6xl lg:text-7xl xl:text-[96px]">
        The AI roast platform
        <br /> Gen Z screenshots and shares.
      </h1>

      <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-black/65 sm:text-lg">
        We turn the things you already feel guilty about — what you{" "}
        <RotatingWord /> — into hilariously brutal AI roasts. Built for the
        audience that hates being lectured.
      </p>

      <div className="mt-9 flex flex-col items-center gap-3">
        <a
          href={BOT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-accent"
        >
          Start getting roasted
          <span
            aria-hidden
            className="transition-transform group-hover:translate-x-0.5"
          >
            →
          </span>
        </a>
        <p className="text-xs text-black/45">
          Live on Telegram. 100% free to start. <span aria-hidden>🐼</span>
        </p>
      </div>

      <BadgeRow />
    </section>
  );
}

function BadgeRow() {
  const badges = [
    { label: "Bot live", tone: "live" as const },
    { label: "Featured in Threads", tone: "neutral" as const },
    { label: "a16z Speedrun SR007", tone: "neutral" as const },
    { label: "4.9★ on Telegram", tone: "neutral" as const },
  ];
  return (
    <ul className="mt-14 flex flex-wrap items-center justify-center gap-2.5">
      {badges.map((b) => (
        <li
          key={b.label}
          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-medium text-black/65"
        >
          {b.tone === "live" && (
            <span
              aria-hidden
              className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent"
            />
          )}
          {b.label}
        </li>
      ))}
    </ul>
  );
}

/* --------------------- INTERACTIVE ROAST DEMO --------------------- */

type Target = {
  key: string;
  emoji: string;
  label: string;
  input: string;
  roast: string;
};

const TARGETS: Target[] = [
  {
    key: "food",
    emoji: "🍔",
    label: "Late-night snack",
    input: "Bag of chips at 1:47am.",
    roast:
      "1:47am chip session — the only thing you're tracking is which dopamine receptor still answers your texts. 🐼",
  },
  {
    key: "fit",
    emoji: "👗",
    label: "Today's outfit",
    input: "Hoodie + sweatpants + slides combo.",
    roast:
      "Three pieces, one vibe: 'I gave up before the meeting started.' Iconic, low-effort, valid.",
  },
  {
    key: "spend",
    emoji: "💸",
    label: "This week's spend",
    input: "$47 on iced lattes. Again.",
    roast:
      "$47 on iced lattes — at this rate your Roth IRA is gonna sue you for emotional damages.",
  },
  {
    key: "bio",
    emoji: "💘",
    label: "Dating bio",
    input: "'Just here for the plot.'",
    roast:
      "'Just here for the plot' is the bio equivalent of unseasoned chicken. Brave to post, braver to expect a swipe.",
  },
];

function RoastDemo() {
  const [active, setActive] = useState<string>(TARGETS[0].key);
  const target = TARGETS.find((t) => t.key === active) ?? TARGETS[0];

  return (
    <section className="border-t border-black/5 bg-[#FAFAFA]">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/45">
            Live demo
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Pick your target. Get roasted.
          </h2>
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2">
          {TARGETS.map((t) => {
            const isActive = t.key === active;
            return (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? "border-ink bg-ink text-white"
                    : "border-black/10 bg-white text-black/70 hover:border-black/30"
                }`}
              >
                <span aria-hidden>{t.emoji}</span>
                {t.label}
              </button>
            );
          })}
        </div>

        <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_24px_80px_-32px_rgba(0,0,0,0.18)]">
          <div className="flex items-center justify-between border-b border-black/5 px-6 py-3">
            <div className="flex items-center gap-2 text-xs font-medium text-black/55">
              <span aria-hidden>🐼</span>
              @WTFatBot
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-black/10" />
              <span className="h-2 w-2 rounded-full bg-black/10" />
              <span className="h-2 w-2 rounded-full bg-black/10" />
            </div>
          </div>

          <div className="space-y-4 px-6 py-7 sm:px-10 sm:py-10">
            <div className="flex justify-end">
              <div className="max-w-[80%] rounded-2xl rounded-br-md bg-ink px-4 py-2.5 text-sm text-white">
                {target.input}
              </div>
            </div>

            <div
              key={target.key}
              className="flex animate-[fadeIn_350ms_ease-out] justify-start"
            >
              <div className="max-w-[88%] rounded-2xl rounded-bl-md bg-[#F2F2F2] px-4 py-3 text-[15px] leading-relaxed text-ink">
                {target.roast}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-black/5 px-6 py-3 text-xs text-black/45">
            <span>Generated in 1.2s</span>
            <span>+12 XP earned</span>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(6px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </section>
  );
}

/* ----------------------------- THESIS ----------------------------- */

function Thesis() {
  return (
    <section
      id="thesis"
      className="mx-auto max-w-6xl px-6 py-24 sm:py-32"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/45">
            Thesis
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Anti-Noom.
            <br />
            Anti-saccharine.
            <br />
            <span className="text-accent">Anti-lecture.</span>
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-black/75 lg:col-span-7">
          <p>
            Gen Z doesn&apos;t want a coach. They want a friend who roasts them
            into self-awareness.
          </p>
          <p>
            Calorie apps moralize food. Diet apps shame. We laugh — and people
            actually change behavior because they want to share the joke.
          </p>
          <p>
            WTFat started with calories because it&apos;s the most-googled guilt
            category. Same engine roasts everything else.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- SURFACES (LEVELS) ----------------------------- */

type Level = {
  level: number;
  emoji: string;
  title: string;
  status: "live" | "soon" | "locked";
  statusLabel: string;
  desc: string;
  xp: string;
};

const LEVELS: Level[] = [
  {
    level: 1,
    emoji: "🍔",
    title: "Calorie Roasts",
    status: "live",
    statusLabel: "Unlocked",
    desc: "Photo or text, instant AI verdict.",
    xp: "+10 XP / roast",
  },
  {
    level: 2,
    emoji: "👗",
    title: "Outfit Roasts",
    status: "soon",
    statusLabel: "Q3 2026",
    desc: "Snap your fit, get judged.",
    xp: "+15 XP / fit",
  },
  {
    level: 3,
    emoji: "💸",
    title: "Spending Roasts",
    status: "soon",
    statusLabel: "Q4 2026",
    desc: "Bank link, AI roasts your purchases.",
    xp: "+20 XP / spree",
  },
  {
    level: 4,
    emoji: "💘",
    title: "Dating Roasts",
    status: "locked",
    statusLabel: "2027",
    desc: "Drop your Tinder bio, prepare yourself.",
    xp: "+25 XP / bio",
  },
];

function Surfaces() {
  return (
    <section
      id="surfaces"
      className="border-t border-black/5 bg-ink text-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
            Product surfaces
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            One engine.
            <br />
            Every level of daily self-judgment.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LEVELS.map((l) => {
            const isLive = l.status === "live";
            const isLocked = l.status === "locked";
            return (
              <article
                key={l.title}
                className={`group relative flex flex-col rounded-2xl border p-6 transition-all duration-200 ${
                  isLive
                    ? "border-white/15 bg-white/[0.06] hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.09]"
                    : "border-white/10 bg-white/[0.02] hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="text-[11px] font-mono uppercase tracking-wider text-white/45"
                    aria-hidden
                  >
                    LV {l.level.toString().padStart(2, "0")}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ${
                      isLive
                        ? "bg-accent/15 text-accent"
                        : isLocked
                        ? "bg-white/5 text-white/40"
                        : "bg-white/10 text-white/65"
                    }`}
                  >
                    {isLive && (
                      <span
                        aria-hidden
                        className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent"
                      />
                    )}
                    {isLocked && <span aria-hidden>🔒</span>}
                    {l.statusLabel}
                  </span>
                </div>

                <div className="mt-6 text-3xl" aria-hidden>
                  {l.emoji}
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {l.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {l.desc}
                </p>

                <div className="mt-6 border-t border-white/10 pt-4 text-[11px] font-mono uppercase tracking-wider text-white/45">
                  {l.xp}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium text-white">Your progress</p>
            <p className="mt-1 text-xs text-white/55">
              1 of 4 levels unlocked. Roast harder to climb the leaderboard.
            </p>
          </div>
          <div className="flex w-full max-w-xs items-center gap-3 sm:w-64">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-1/4 rounded-full bg-accent" />
            </div>
            <span className="text-xs font-mono text-white/65 tabular-nums">
              25%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- WHY NOW ----------------------------- */

function WhyNow() {
  const points = [
    {
      tag: "Distribution",
      text:
        "Gen Z screenshots and shares everything that makes them laugh — proven by Co-Star's $100M valuation built on a daily-card-share mechanic.",
    },
    {
      tag: "Category",
      text:
        "AI × social hasn't been cracked. Sora topped the App Store for 20 days then crashed. The lane is wide open.",
    },
    {
      tag: "Format",
      text:
        "Roast formats already dominate TikTok. We give creators the AI tool to generate personalized roasts at scale.",
    },
  ];

  return (
    <section id="why" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/45">
          Why now
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          Three reasons the window is open.
        </h2>
      </div>

      <ol className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 lg:grid-cols-3">
        {points.map((p, i) => (
          <li
            key={p.tag}
            className="rounded-2xl border border-black/10 bg-white p-7 transition-colors hover:border-black/25"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-wider text-black/40">
                0{i + 1}
              </span>
              <span className="inline-flex items-center rounded-full bg-black/[0.05] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-black/55">
                {p.tag}
              </span>
            </div>
            <p className="mt-6 text-base leading-relaxed text-black/80 sm:text-lg">
              {p.text}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ----------------------------- FINAL CTA ----------------------------- */

function FinalCTA() {
  return (
    <section className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-28 text-center sm:py-36 lg:py-44">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/45">
          Press start
        </p>
        <h2 className="mt-4 text-5xl font-semibold tracking-tightest sm:text-7xl lg:text-8xl">
          Get roasted now.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-base text-black/55 sm:text-lg">
          30 seconds. No signup. Live on Telegram.
        </p>
        <div className="mt-12 flex justify-center">
          <a
            href={BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-5 text-lg font-medium text-white transition-colors hover:bg-accent"
          >
            @WTFatBot
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
        <p className="mt-6 text-xs text-black/40">
          + 10 XP just for clicking. <span aria-hidden>🐼</span>
        </p>
      </div>
    </section>
  );
}

/* ----------------------------- FOOTER ----------------------------- */

function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#FAFAFA]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-2">
            <p className="text-base font-semibold tracking-tight">
              WTFat <span aria-hidden>🐼</span>
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-black/55">
              The AI roast platform turning daily guilt into shareable
              entertainment. Built for Gen Z.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-black/40">
              Product
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-black/70">
              <li>
                <a
                  href={BOT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  Telegram bot
                </a>
              </li>
              <li>
                <a
                  href={CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  Channel
                </a>
              </li>
              <li>
                <a
                  href="#surfaces"
                  className="hover:text-accent transition-colors"
                >
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-black/40">
              Company
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-black/70">
              <li>
                <a href="#thesis" className="hover:text-accent transition-colors">
                  Thesis
                </a>
              </li>
              <li>
                <a href={CONTACT} className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <span className="text-black/40">Press kit (soon)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-black/10 pt-6 text-xs text-black/45 sm:flex-row sm:items-center">
          <p>
            WTFat <span aria-hidden>🐼</span> © 2026 — all roasts reserved.
          </p>
          <p>Built for a16z Speedrun SR007.</p>
        </div>
      </div>
    </footer>
  );
}

/* ----------------------------- PAGE ----------------------------- */

export default function Page() {
  return (
    <main>
      <TopNav />
      <Hero />
      <RoastDemo />
      <Thesis />
      <Surfaces />
      <WhyNow />
      <FinalCTA />
      <Footer />
    </main>
  );
}
