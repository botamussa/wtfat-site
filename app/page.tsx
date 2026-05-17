"use client";

import { useEffect, useMemo, useState } from "react";

const BOT_URL = "https://t.me/WTFatBot";
const CHANNEL_URL = "https://t.me/wtfatme";
const CONTACT = "mailto:akbota.mussa.z@gmail.com";

/* ============================== NAV ============================== */

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
        scrolled ? "bg-white border-b border-black/5" : "bg-transparent"
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
            <a href="#how" className="hover:text-accent transition-colors">
              How it works
            </a>
          </li>
          <li>
            <a href="#tiers" className="hover:text-accent transition-colors">
              Surfaces
            </a>
          </li>
          <li>
            <a
              href="#achievements"
              className="hover:text-accent transition-colors"
            >
              Achievements
            </a>
          </li>
          <li>
            <a href="#faq" className="hover:text-accent transition-colors">
              FAQ
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

/* ============================== HERO ============================== */

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
    <span key={i} className="inline-block animate-fade-up text-accent">
      {ROTATING_WORDS[i]}
    </span>
  );
}

function LiveCounter() {
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

function RankBadge() {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-accent/20 bg-accent/[0.06] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
      <span aria-hidden>🏆</span>
      <span>Lv.47 · Roast Apprentice</span>
      <span className="h-3 w-px bg-accent/30" aria-hidden />
      <span className="font-mono normal-case tracking-normal text-accent/70">
        2,140 XP
      </span>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-6xl px-6 pt-14 pb-20 text-center sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-32"
    >
      <div className="mb-5 flex justify-center">
        <RankBadge />
      </div>
      <div className="mb-7 flex justify-center">
        <LiveCounter />
      </div>

      <h1 className="mx-auto max-w-5xl text-[44px] leading-[0.95] tracking-tightest font-semibold sm:text-6xl lg:text-7xl xl:text-[96px]">
        The AI roast platform
        <br />
        Gen Z screenshots and shares.
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
    </section>
  );
}

/* ============================== ROAST MARQUEE ============================== */

const MARQUEE_ROASTS = [
  { emoji: "🍔", text: "Bag of chips at 1am — only thing you're tracking is dopamine." },
  { emoji: "👗", text: "Hoodie + slides combo says 'I gave up before lunch.'" },
  { emoji: "💸", text: "$47 in iced lattes — your Roth IRA is filing damages." },
  { emoji: "💘", text: "'Just here for the plot' — unseasoned chicken energy." },
  { emoji: "🍔", text: "Salad with ranch. Bold of you to claim that's healthy." },
  { emoji: "👗", text: "Cargo pants in 2026 — committing to a bit, respect." },
  { emoji: "💸", text: "$8 oat milk. Your barista has a yacht because of you." },
  { emoji: "💘", text: "Mirror selfie, dim lighting — the lore is loud." },
];

function RoastMarquee() {
  // Duplicate the list for a seamless loop.
  const items = [...MARQUEE_ROASTS, ...MARQUEE_ROASTS];
  return (
    <section
      aria-label="Recent roasts"
      className="overflow-hidden border-y border-black/5 bg-[#FAFAFA] py-4"
    >
      <div className="relative">
        <div
          className="flex w-max animate-marquee gap-3"
          style={{ animationDuration: "55s" }}
        >
          {items.map((r, i) => (
            <div
              key={i}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-1.5 text-xs text-black/75"
            >
              <span aria-hidden className="text-sm leading-none">
                {r.emoji}
              </span>
              <span className="whitespace-nowrap">{r.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== HOW IT WORKS ============================== */

const STEPS = [
  {
    n: "01",
    title: "Tell us what you did",
    body: "Photo or text. Calories, outfits, purchases — whatever you'd rather not think about.",
  },
  {
    n: "02",
    title: "Get judged by AI",
    body: "Our roast engine returns in 1.2 seconds. Brutally specific. Shareably funny.",
  },
  {
    n: "03",
    title: "Climb the shame ladder",
    body: "Earn XP, unlock badges, level up. The more you roast, the harder the bot gets.",
  },
];

function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/45">
          How it works
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          Three steps. One panda.
          <span className="text-black/40"> Infinite damage.</span>
        </h2>
      </div>

      <ol className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {STEPS.map((s) => (
          <li
            key={s.n}
            className="rounded-2xl border border-black/10 bg-white p-7 transition-colors hover:border-black/25"
          >
            <span className="text-[11px] font-mono uppercase tracking-wider text-black/40">
              {s.n}
            </span>
            <h3 className="mt-5 text-xl font-semibold tracking-tight">
              {s.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-black/65">
              {s.body}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ============================== INTERACTIVE DEMO ============================== */

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
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
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
              className="flex animate-fade-up justify-start"
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
      </div>
    </section>
  );
}

/* ============================== TIERS (SURFACES AS PRICING) ============================== */

type Tier = {
  name: string;
  emoji: string;
  cost: string;
  costSuffix?: string;
  status: "live" | "soon" | "locked";
  statusLabel: string;
  highlight?: string;
  perks: string[];
  ctaLabel: string;
  ctaHref?: string;
};

const TIERS: Tier[] = [
  {
    name: "Calorie Roaster",
    emoji: "🍔",
    cost: "Free",
    costSuffix: "/ forever",
    status: "live",
    statusLabel: "Live now",
    highlight: "Popular",
    perks: [
      "Photo or text input",
      "1.2s roast response time",
      "+10 XP per roast",
      "Share to anywhere",
    ],
    ctaLabel: "Start roasting",
    ctaHref: BOT_URL,
  },
  {
    name: "Outfit Roaster",
    emoji: "👗",
    cost: "Free",
    costSuffix: "at launch",
    status: "soon",
    statusLabel: "Q3 2026",
    perks: [
      "Snap a fit, get judged",
      "Style score from 0–100",
      "+15 XP per fit",
      "Weekly drip ranking",
    ],
    ctaLabel: "Join waitlist",
    ctaHref: CHANNEL_URL,
  },
  {
    name: "Spending Roaster",
    emoji: "💸",
    cost: "Free",
    costSuffix: "at launch",
    status: "soon",
    statusLabel: "Q4 2026",
    perks: [
      "Bank link (read-only)",
      "Weekly spend roast",
      "+20 XP per spree",
      "Net-worth shame index",
    ],
    ctaLabel: "Join waitlist",
    ctaHref: CHANNEL_URL,
  },
  {
    name: "Dating Roaster",
    emoji: "💘",
    cost: "Free",
    costSuffix: "at launch",
    status: "locked",
    statusLabel: "2027",
    perks: [
      "Bio + photo audit",
      "Swipe-rate prediction",
      "+25 XP per profile",
      "Rewrite suggestions",
    ],
    ctaLabel: "Notify me",
    ctaHref: CHANNEL_URL,
  },
];

function SurfaceTiers() {
  return (
    <section id="tiers" className="border-t border-black/5">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/45">
            Roast surfaces
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            One engine.
            <br />
            Every flavor of guilt.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TIERS.map((t) => {
            const isLive = t.status === "live";
            const isLocked = t.status === "locked";
            return (
              <article
                key={t.name}
                className={`group relative flex flex-col rounded-2xl border p-6 transition-all duration-200 ${
                  isLive
                    ? "border-ink bg-white shadow-[0_24px_60px_-24px_rgba(0,0,0,0.18)]"
                    : "border-black/10 bg-white hover:border-black/25"
                }`}
              >
                {t.highlight && (
                  <span className="absolute -top-2.5 left-6 inline-flex items-center rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white">
                    {t.highlight}
                  </span>
                )}

                <div className="flex items-center justify-between">
                  <span className="text-2xl" aria-hidden>
                    {t.emoji}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ${
                      isLive
                        ? "bg-accent/10 text-accent"
                        : isLocked
                        ? "bg-black/5 text-black/40"
                        : "bg-black/[0.06] text-black/55"
                    }`}
                  >
                    {isLive && (
                      <span
                        aria-hidden
                        className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent"
                      />
                    )}
                    {isLocked && <span aria-hidden>🔒</span>}
                    {t.statusLabel}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {t.name}
                </h3>
                <div className="mt-1 flex items-baseline gap-1.5">
                  <span className="text-2xl font-semibold tracking-tight">
                    {t.cost}
                  </span>
                  {t.costSuffix && (
                    <span className="text-xs text-black/45">
                      {t.costSuffix}
                    </span>
                  )}
                </div>

                <ul className="mt-5 space-y-2 text-sm text-black/70">
                  {t.perks.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span
                        aria-hidden
                        className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-black/35"
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={t.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
                    isLive
                      ? "bg-ink text-white hover:bg-accent"
                      : "border border-black/10 text-black/75 hover:border-ink hover:text-ink"
                  }`}
                >
                  {t.ctaLabel}
                  <span aria-hidden>→</span>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================== ACHIEVEMENTS ============================== */

type Achievement = {
  emoji: string;
  name: string;
  desc: string;
  state: "unlocked" | "progress" | "locked";
  progress?: number;
};

const ACHIEVEMENTS: Achievement[] = [
  {
    emoji: "🔥",
    name: "First Burn",
    desc: "Get your first roast.",
    state: "unlocked",
  },
  {
    emoji: "📸",
    name: "Photo Pro",
    desc: "Submit 10 food photos.",
    state: "progress",
    progress: 60,
  },
  {
    emoji: "💀",
    name: "Streak Master",
    desc: "7-day roast streak.",
    state: "unlocked",
  },
  {
    emoji: "🎭",
    name: "Iron Will",
    desc: "Survive 50 public roasts.",
    state: "progress",
    progress: 32,
  },
  {
    emoji: "🏆",
    name: "Top 1%",
    desc: "Most-shared roast of the week.",
    state: "locked",
  },
  {
    emoji: "🌶️",
    name: "Spice Lord",
    desc: "Survive brutal mode.",
    state: "locked",
  },
  {
    emoji: "🐼",
    name: "Friend of Panda",
    desc: "Refer 5 friends.",
    state: "progress",
    progress: 20,
  },
  {
    emoji: "⭐",
    name: "Legend",
    desc: "Unlock all achievements.",
    state: "locked",
  },
];

function Achievements() {
  const unlocked = ACHIEVEMENTS.filter((a) => a.state === "unlocked").length;

  return (
    <section
      id="achievements"
      className="border-t border-black/5 bg-ink text-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
              Achievements
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Get roasted.
              <br />
              Earn the badge.
            </h2>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4">
            <p className="text-xs uppercase tracking-wider text-white/45">
              Your collection
            </p>
            <p className="mt-1 font-mono text-2xl tabular-nums">
              {unlocked} <span className="text-white/30">/ {ACHIEVEMENTS.length}</span>
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {ACHIEVEMENTS.map((a) => {
            const isUnlocked = a.state === "unlocked";
            const isLocked = a.state === "locked";
            return (
              <div
                key={a.name}
                className={`relative flex flex-col rounded-2xl border p-5 transition-all duration-200 ${
                  isUnlocked
                    ? "border-accent/30 bg-accent/[0.06]"
                    : isLocked
                    ? "border-white/5 bg-white/[0.015]"
                    : "border-white/10 bg-white/[0.04]"
                }`}
              >
                <div
                  className={`text-3xl ${isLocked ? "opacity-30 grayscale" : ""}`}
                  aria-hidden
                >
                  {a.emoji}
                </div>
                <h3
                  className={`mt-4 text-sm font-semibold tracking-tight ${
                    isLocked ? "text-white/40" : "text-white"
                  }`}
                >
                  {a.name}
                </h3>
                <p
                  className={`mt-1 text-xs leading-relaxed ${
                    isLocked ? "text-white/30" : "text-white/55"
                  }`}
                >
                  {a.desc}
                </p>

                <div className="mt-4">
                  {isUnlocked && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-accent">
                      <span
                        aria-hidden
                        className="h-1.5 w-1.5 rounded-full bg-accent"
                      />
                      Unlocked
                    </span>
                  )}
                  {a.state === "progress" && (
                    <div>
                      <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-accent transition-all"
                          style={{ width: `${a.progress ?? 0}%` }}
                        />
                      </div>
                      <p className="mt-1.5 font-mono text-[10px] text-white/45 tabular-nums">
                        {a.progress}% to unlock
                      </p>
                    </div>
                  )}
                  {isLocked && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white/35">
                      <span aria-hidden>🔒</span>
                      Locked
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================== THESIS ============================== */

function Thesis() {
  return (
    <section id="thesis" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
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

/* ============================== WHY NOW ============================== */

function WhyNow() {
  const points = [
    {
      tag: "Distribution",
      text: "Gen Z screenshots and shares everything that makes them laugh — proven by Co-Star's $100M valuation built on a daily-card-share mechanic.",
    },
    {
      tag: "Category",
      text: "AI × social hasn't been cracked. Sora topped the App Store for 20 days then crashed. The lane is wide open.",
    },
    {
      tag: "Format",
      text: "Roast formats already dominate TikTok. We give creators the AI tool to generate personalized roasts at scale.",
    },
  ];

  return (
    <section className="border-t border-black/5 bg-[#FAFAFA]">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/45">
            Why now
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Three reasons the window is open.
          </h2>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
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
      </div>
    </section>
  );
}

/* ============================== FAQ ============================== */

const FAQS = [
  {
    q: "Will this actually hurt my feelings?",
    a: "Yes. That's the point. The roasts are surgical, not generic. People share them precisely because they hit.",
  },
  {
    q: "Is it really free?",
    a: "100% free on Telegram. No signup, no email, no card. We'll add an optional premium tier ('brutal mode') later — the core roast engine stays free.",
  },
  {
    q: "How is this different from MyFitnessPal or Noom?",
    a: "Those apps make you feel bad in a way you want to delete. We make you laugh at feeling bad in a way you want to screenshot. Different ROI.",
  },
  {
    q: "What about my privacy?",
    a: "We don't store photos beyond the roast generation. Your roasts are not used to train other models. Telegram chat history stays in your control.",
  },
  {
    q: "When does Outfit / Spending / Dating launch?",
    a: "Outfit in Q3 2026, Spending in Q4 2026, Dating in 2027. Join the channel for early access drops.",
  },
];

function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/45">
          FAQ
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          Common questions, brief answers.
        </h2>
      </div>

      <ul className="mt-14 divide-y divide-black/10 border-y border-black/10">
        {FAQS.map((f) => (
          <li key={f.q}>
            <details className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-medium tracking-tight text-ink sm:text-lg">
                <span>{f.q}</span>
                <span
                  aria-hidden
                  className="shrink-0 text-2xl font-light leading-none text-black/40 transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-black/65">
                {f.a}
              </p>
            </details>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ============================== FINAL CTA ============================== */

function FinalCTA() {
  return (
    <section className="border-t border-black/5 bg-ink text-white">
      <div className="mx-auto max-w-6xl px-6 py-28 text-center sm:py-36 lg:py-44">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/45">
          Press start
        </p>
        <h2 className="mt-4 text-5xl font-semibold tracking-tightest sm:text-7xl lg:text-8xl">
          Get roasted now.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-base text-white/60 sm:text-lg">
          30 seconds. No signup. Live on Telegram.
        </p>
        <div className="mt-12 flex justify-center">
          <a
            href={BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-5 text-lg font-medium text-ink transition-colors hover:bg-accent hover:text-white"
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
        <p className="mt-6 text-xs text-white/35">
          + 10 XP just for clicking. <span aria-hidden>🐼</span>
        </p>
      </div>
    </section>
  );
}

/* ============================== FOOTER ============================== */

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#FAFAFA]">
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
                <a href="#tiers" className="hover:text-accent transition-colors">
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
                <a
                  href="#thesis"
                  className="hover:text-accent transition-colors"
                >
                  Thesis
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-accent transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href={CONTACT} className="hover:text-accent transition-colors">
                  Contact
                </a>
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

/* ============================== PAGE ============================== */

export default function Page() {
  return (
    <main>
      <TopNav />
      <Hero />
      <RoastMarquee />
      <HowItWorks />
      <RoastDemo />
      <SurfaceTiers />
      <Achievements />
      <Thesis />
      <WhyNow />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
