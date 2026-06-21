"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Playfair_Display, Space_Mono } from "next/font/google";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["italic"],
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// ─────────────────────────────────────────────────────────
// Edit these to personalize. Nothing else needs to change.
// ─────────────────────────────────────────────────────────
const TARGET_DATE = "2026-08-08T00:00:00";
const FROM_LABEL = "ME";
const TO_LABEL = "YOU";
const HEADLINE = "Until I'm holding you again";
const SUBHEAD = "Reunion day: scheduled and counting down.";
const MESSAGE = "Every mile is just distance, not direction. I'll be there.";
// Point this at a real photo in /public (e.g. "/potrait/us.jpg") to
// replace the placeholder frame below.
const PHOTO_SRC =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <rect width="200" height="200" fill="#FBF6EC"/>
      <rect x="10" y="10" width="180" height="180" fill="none" stroke="#C9A227" stroke-width="3" stroke-dasharray="8 7" rx="6"/>
      <path d="M100 132c-2-1.4-37-23.6-37-49.4C63 66.7 75 56 89.6 56c6.7 0 13 3 17.4 8 4.4-5 10.7-8 17.4-8C139 56 151 66.7 151 82.6 151 108.4 116 130.6 114 132l-7 4.4-7-4.4z" fill="none" stroke="#C9706B" stroke-width="4" stroke-linejoin="round"/>
      <text x="100" y="160" text-anchor="middle" font-family="monospace" font-size="11" letter-spacing="2" fill="#241F1A" opacity="0.65">YOUR PHOTO HERE</text>
    </svg>`
  );

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(): TimeLeft | null {
  const diff = new Date(TARGET_DATE).getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}



function DigitGroup({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="flex gap-1">
        {value.split("").map((d, i) => (
          <span key={i} className={`${mono.className} digit-tile`}>
            {d}
          </span>
        ))}
      </div>
      <span
        className={`${mono.className} text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#241F1A]/60`}
      >
        {label}
      </span>
    </div>
  );
}

function Colon() {
  return (
    <span
      className={`${mono.className} text-lg sm:text-2xl text-[#241F1A]/30 pb-5 sm:pb-6 select-none`}
    >
      :
    </span>
  );
}

function PlaneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="plane -rotate-45 w-5 h-5 sm:w-6 sm:h-6 text-[#241F1A]/60"
    >
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22 11 13 2 9 22 2Z" />
    </svg>
  );
}

export default function Countdown() {
  // undefined = not yet mounted on the client (avoids a server/client
  // mismatch, since the countdown depends on the visitor's clock)
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null | undefined>(
    undefined
  );

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const formattedDate = new Date(TARGET_DATE).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <main
      className="min-h-screen flex items-center justify-center px-4 py-12 sm:py-16"
      style={{
          background:
            "linear-gradient(135deg, #f9a8d4 0%, #fbcfe8 50%, #fed7aa 100%)",
        }}
    >
      <div className="w-full max-w-xl">
        <p
          className={`${mono.className} text-center text-[10px] sm:text-xs tracking-[0.3em] uppercase text-pink-800 mb-4`}
        >
          Long distance<br/> status: counting down
        </p>
        <h1
          className={`${display.className} text-center italic text-3xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400 leading-tight mb-3`}
        >
          {HEADLINE}
        </h1>
        <p className="text-center text-sm sm:text-base text-[#6b7280] mb-10">
          {SUBHEAD}
        </p>

        <div className="ticket relative px-5 sm:px-8 pt-6 sm:pt-8 pb-6 sm:pb-8">
          {timeLeft === null && (
            <div className="stamp absolute -right-3 -top-3 sm:-right-5 sm:-top-5 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center -rotate-12 border-2 border-[#FBF6EC] z-20">
              <span
                className={`${mono.className} text-[8px] sm:text-[9px] font-bold text-[#241F1A]/90 uppercase tracking-wide text-center leading-tight`}
              >
                Arrived
                <br />
                at last
              </span>
            </div>
          )}

          <div className="flex items-start justify-between gap-4">
            <div>
              <div className={`${mono.className} flex items-baseline gap-2 sm:gap-3`}>
                <span className="text-xl sm:text-3xl font-bold">{FROM_LABEL}</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#241F1A]/40">
                  to
                </span>
                <span className="text-xl sm:text-3xl font-bold">{TO_LABEL}</span>
              </div>
              <p
                className={`${mono.className} text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#241F1A]/40 mt-1`}
              >
                One way · no layovers
              </p>
            </div>

            <div className="relative shrink-0">
              <div className="tape" />
              <div className="photo-frame">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Image
                    src="/potrait/Longdistance.jpg"
                    alt="the two of us"
                    fill
                    className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="route-line my-6 sm:my-8">
            <PlaneIcon />
          </div>

          <div
            className={`${mono.className} flex items-center justify-between text-[9px] sm:text-xs uppercase tracking-[0.15em] text-[#241F1A]/50 mb-1`}
          >
            <span>Departs</span>
            <span>{formattedDate}</span>
          </div>

          <div className="ticket-seam mt-5 pt-6 sm:pt-7">
            {timeLeft === undefined && (
              <div className="flex items-end justify-center gap-2 sm:gap-4 opacity-30">
                <DigitGroup value="---" label="Days" />
                <Colon />
                <DigitGroup value="--" label="Hrs" />
                <Colon />
                <DigitGroup value="--" label="Min" />
                <Colon />
                <DigitGroup value="--" label="Sec" />
              </div>
            )}

            {timeLeft && (
              <div className="flex items-end justify-center gap-2 sm:gap-4">
                <DigitGroup value={String(timeLeft.days).padStart(3, "0")} label="Days" />
                <Colon />
                <DigitGroup value={String(timeLeft.hours).padStart(2, "0")} label="Hrs" />
                <Colon />
                <DigitGroup value={String(timeLeft.minutes).padStart(2, "0")} label="Min" />
                <Colon />
                <DigitGroup value={String(timeLeft.seconds).padStart(2, "0")} label="Sec" />
              </div>
            )}

            {timeLeft === null && (
              <p className={`${display.className} text-center italic text-xl sm:text-2xl py-1`}>
                We&rsquo;re finally together.
              </p>
            )}
          </div>
        </div>

        <p className="text-center text-sm text-[#E8DEC8]/80 mt-8 italic">
          &ldquo;{MESSAGE}&rdquo;
        </p>
      </div>

      <style jsx>{`
        .ticket {
          background: #fbf6ec;
          color: #241f1a;
          border-radius: 1.25rem;
          box-shadow: 0 40px 80px -20px rgba(0, 0, 0, 0.55),
            0 0 0 1px rgba(0, 0, 0, 0.04);
        }
        .ticket-seam {
          position: relative;
          border-top: 2px dashed rgba(36, 31, 26, 0.25);
        }
        .ticket-seam::before,
        .ticket-seam::after {
          content: "";
          position: absolute;
          top: -13px;
          width: 26px;
          height: 26px;
          border-radius: 9999px;
          background: #102e2f;
        }
        .ticket-seam::before {
          left: -13px;
        }
        .ticket-seam::after {
          right: -13px;
        }
        .route-line {
          position: relative;
          border-top: 2px dotted rgba(36, 31, 26, 0.35);
        }
        :global(.plane) {
          position: absolute;
          top: -10px;
          animation: drift 7s ease-in-out infinite;
        }
        :global(.digit-tile) {
          background: #0f2a2b;
          color: #fbf6ec;
          font-weight: 700;
          border-radius: 0.375rem;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
          position: relative;
          padding: 0.4rem 0.5rem;
          font-size: clamp(1.1rem, 4vw, 1.9rem);
          line-height: 1;
        }
        :global(.digit-tile::after) {
          content: "";
          position: absolute;
          left: 2px;
          right: 2px;
          top: 50%;
          height: 1px;
          background: rgba(0, 0, 0, 0.45);
        }
        .photo-frame {
          position: relative;
          width: 84px;
          height: 84px;
          border-radius: 0.55rem;
          overflow: hidden;
          transform: rotate(-3deg);
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.28);
          border: 4px solid #fbf6ec;
          outline: 1px solid rgba(36, 31, 26, 0.15);
        }
        .tape {
          position: absolute;
          width: 38px;
          height: 14px;
          background: rgba(201, 162, 39, 0.55);
          top: -8px;
          left: 50%;
          transform: translateX(-50%) rotate(-4deg);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
          z-index: 10;
        }
        .stamp {
          background: radial-gradient(circle at 35% 30%, #ddb53a, #b6890f 70%);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25),
            inset 0 0 0 2px rgba(255, 255, 255, 0.25);
        }
        @keyframes drift {
          0%,
          100% {
            left: 3%;
            transform: translateY(0);
          }
          50% {
            left: 88%;
            transform: translateY(-4px);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          :global(.plane) {
            animation: none;
            left: 45% !important;
          }
        }
      `}</style>
    </main>
  );
}
