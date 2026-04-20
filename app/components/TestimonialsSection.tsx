"use client";

import {
  useState,
  useEffect,
  useCallback,
  useRef,
  type ReactNode,
  type TouchEvent,
} from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/** Each case: use `beforeImage` + `afterImage` for side‑by‑side, OR `combinedImage` alone for one graphic. */
type Transformation = {
  id: number | string;
  title: string;
  procedure?: string;
  /** Shown above the before image when using a before/after pair (defaults to “Before”). */
  beforeCaption?: string;
  /** Shown above the after image when using a before/after pair (defaults to “After”). */
  afterCaption?: string;
  /** Preferred: support multiple before images. */
  beforeImages?: string[];
  /** Preferred: support multiple after images. */
  afterImages?: string[];
  /** Backward compatible single before image. */
  beforeImage?: string;
  /** Backward compatible single after image. */
  afterImage?: string;
  combinedImage?: string;
  story: string;
  duration: string;
  highlight: string;
  name: string;
  age: number;
};

function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [locked]);
}

function ImageLightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  useBodyScrollLock(true);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0c1212]/88 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label="Enlarged image"
      onClick={onClose}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 0%, rgb(11 107 102 / 0.2), transparent 55%), radial-gradient(circle at 100% 100%, rgb(213 160 40 / 0.12), transparent 45%)",
        }}
        aria-hidden
      />
      <p className="pointer-events-none absolute bottom-6 left-0 right-0 text-center text-[11px] font-medium text-white/45">
        Press Esc or tap outside to close
      </p>
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.08] text-white shadow-lg transition hover:border-[#d5a028]/45 hover:bg-[#d5a028]/15"
        aria-label="Close"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div
        className="relative max-h-[min(92vh,940px)] max-w-[min(96vw,1200px)] rounded-2xl bg-black/20 p-2 ring-1 ring-white/10 sm:p-3"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="max-h-[min(88vh,900px)] max-w-full rounded-xl object-contain shadow-2xl"
        />
      </div>
    </div>
  );
}

/** Responsive grid for clinical images: consistent tiles, contain fit, premium hover, lightbox. */
function CaseImageMosaic({
  images,
  altPrefix,
  onImageClick,
}: {
  images: string[];
  altPrefix: string;
  onImageClick: (src: string, alt: string) => void;
}) {
  const n = images.length;
  if (n === 0) {
    return (
      <div
        className="flex min-h-[168px] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-gray-200/90 bg-gradient-to-b from-gray-50/90 to-gray-50/40 px-4 text-center"
        aria-hidden
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">No image</span>
        <span className="max-w-[200px] text-[11px] leading-snug text-gray-400">Add a study to this stage to show the comparison.</span>
      </div>
    );
  }
  const gridClass =
    n === 1
      ? "grid-cols-1"
      : n === 2
        ? "grid-cols-1 sm:grid-cols-2"
        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid gap-3 sm:gap-3.5 ${gridClass}`}>
      {images.map((src, idx) => {
        const alt = `${altPrefix} ${idx + 1}`;
        return (
          <button
            key={`${src}-${idx}`}
            type="button"
            onClick={() => onImageClick(src, alt)}
            className="group relative flex min-h-[200px] cursor-zoom-in items-center justify-center overflow-hidden rounded-2xl border border-gray-200/90 bg-white p-2.5 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_4px_12px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-[#0b6f66]/28 hover:shadow-[0_8px_24px_-4px_rgba(11,107,102,0.18)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0b6f66]/35 focus-visible:ring-offset-2 sm:min-h-[220px] md:min-h-[240px] md:p-3"
          >
            {n > 1 ? (
              <span className="absolute left-2.5 top-2.5 z-[1] flex h-6 min-w-6 items-center justify-center rounded-lg bg-gray-900/[0.06] px-1.5 text-[10px] font-bold tabular-nums text-gray-600 ring-1 ring-black/[0.04] backdrop-blur-sm">
                {idx + 1}
              </span>
            ) : null}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-900/[0.03] to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className="relative z-0 max-h-[min(38vh,400px)] w-full object-contain transition duration-500 ease-out group-hover:scale-[1.015] md:max-h-[min(40vh,420px)]"
              loading="lazy"
              decoding="async"
            />
            <span className="pointer-events-none absolute bottom-2.5 right-2.5 z-[1] flex items-center gap-1 rounded-lg bg-[#0b6f66] px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white opacity-0 shadow-lg shadow-[#0b6f66]/20 transition duration-300 group-hover:opacity-100">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              View
            </span>
          </button>
        );
      })}
    </div>
  );
}

/** Only the image mosaics cross-fade (overlapping, no “blank” wait). Header stays stable. */
function AnimatedMosaicSlot({
  animKey,
  children,
  className = "",
}: {
  animKey: string;
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0.01 : 0.5;
  const easeInOut = [0.33, 1, 0.68, 1] as const;

  return (
    <div
      className={`grid min-w-0 [grid-template-areas:'stack'] place-items-stretch ${className}`}
    >
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={animKey}
          style={{ gridArea: "stack" }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration, ease: easeInOut },
          }}
          exit={{
            opacity: 0,
            transition: { duration: duration * 0.85, ease: easeInOut },
          }}
          className="col-start-1 row-start-1 w-full min-w-0 will-change-[opacity] [backface-visibility:hidden] [transform:translateZ(0)]"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function BeforeAfterConnector() {
  return (
    <>
      <div className="flex w-full items-center gap-3 py-1 xl:hidden">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-gray-200" />
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-[#0b6f66] shadow-[0_2px_8px_rgba(15,23,42,0.08)]"
          aria-hidden
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gray-300 to-gray-200" />
      </div>
      <div
        className="relative hidden w-12 shrink-0 flex-col items-center justify-center self-stretch py-4 xl:flex"
        aria-hidden
      >
        <div className="absolute inset-y-8 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
        <div className="relative z-[1] flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-[#0b6f66] shadow-[0_4px_14px_rgba(11,107,102,0.12)] ring-4 ring-white">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </>
  );
}

const TestimonialsSection = () => {
  const testimonials: { name: string; role: string; content: string; rating: number }[] = [];

  const transformations: Transformation[] = [
    {
      id: 1,
      title: "Knee Replacement",
      procedure: "ARTHRITIS IN 72 YR OLD",
      beforeCaption: "ARTHRITIS IN 72 YR OLD",
      afterCaption: "AFTER KNEE REPLACEMENT",
      beforeImages: [
        "/images/knee_replacement_arthritis_before_1.png",
        "/images/knee_replacement_arthritis_before_2.png",
      ],
      afterImages: [
        "/images/knee_replacement_after_1.png",
        "/images/knee_replacement_after_3.png",
        "/images/knee_replacement_after_4.png",
      ],
      story: "",
      duration: "",
      highlight: "",
      name: "",
      age: 0,
    },
    {
      id: 2,
      title: "Shoulder Arthroscopic AC Joint Dislocation",
      beforeCaption: "Before",
      afterCaption: "After",
      beforeImages: ["/images/shoulder_ac_joint_dislocation_before.png"],
      afterImages: ["/images/shoulder_ac_joint_dislocation_after.png"],
      story: "",
      duration: "",
      highlight: "",
      name: "",
      age: 0,
    },
    {
      id: 3,
      title: "Limb Deformity Correction",
      procedure: "SHORT DEFOREMED LIMB",
      beforeCaption: "SHORT DEFOREMED LIMB",
      afterCaption: "AFTER LENGTHENING & DEFORMITY CORRECTION",
      beforeImages: [
        "/images/limb_deformity_correction_before_photo.png",
        "/images/limb_deformity_correction_before_xray.png",
      ],
      afterImages: [
        "/images/limb_deformity_correction_after_1.png",
        "/images/limb_deformity_correction_after_2.png",
        "/images/limb_deformity_correction_after_3.png",
      ],
      story: "",
      duration: "",
      highlight: "",
      name: "",
      age: 0,
    },
    {
      id: 4,
      title:
        "Infected Non-Union with Nail insitu revised with ILIZAROV ring Fixator",
      beforeCaption: "Before",
      afterCaption: "After Ilizarov ring fixator",
      beforeImages: ["/images/infected_nonunion_nail_ilizarov_before.png"],
      afterImages: ["/images/infected_nonunion_nail_ilizarov_after.png"],
      story: "",
      duration: "",
      highlight: "",
      name: "",
      age: 0,
    },
    {
      id: 5,
      title: "PERI -PROSTHETIC FRACTURE",
      beforeCaption: "Before",
      afterCaption: "After",
      beforeImages: ["/images/periprosthetic_fracture_before.png"],
      afterImages: ["/images/periprosthetic_fracture_after.png"],
      story: "",
      duration: "",
      highlight: "",
      name: "",
      age: 0,
    },
    {
      id: 6,
      title: "Nail Based Deformity correction for Malunited Fracture",
      beforeCaption: "Before",
      afterCaption: "After",
      beforeImages: [
        "/images/nail_based_deformity_correction_malunion_before.png",
      ],
      afterImages: [
        "/images/nail_based_deformity_correction_malunion_after.png",
      ],
      story: "",
      duration: "",
      highlight: "",
      name: "",
      age: 0,
    },
    {
      id: 7,
      title: "ELBOW FRACTURE IN CHILD",
      beforeCaption: "Before",
      afterCaption: "After",
      beforeImages: ["/images/elbow_fracture_child_before.png"],
      afterImages: [
        "/images/elbow_fracture_child_after_1.png",
        "/images/elbow_fracture_child_after_2.png",
      ],
      story: "",
      duration: "",
      highlight: "",
      name: "",
      age: 0,
    },
    {
      id: 8,
      title: "HIP FRACTURES OPERATED",
      beforeCaption: "Before",
      afterCaption: "After",
      beforeImages: [
        "/images/hip_fracture_operated_before_1.png",
        "/images/hip_fracture_operated_before_2.png",
      ],
      afterImages: [
        "/images/hip_fracture_operated_after_1.png",
        "/images/hip_fracture_operated_after_2.png",
      ],
      story: "",
      duration: "",
      highlight: "",
      name: "",
      age: 0,
    },
    {
      id: 9,
      title: "PELVIC FRACTURE(PUBIC DIASTASIS)",
      beforeCaption: "Before",
      afterCaption: "After",
      beforeImages: ["/images/pelvic_fracture_pubic_diastasis_before.png"],
      afterImages: [
        "/images/pelvic_fracture_pubic_diastasis_after_1.png",
        "/images/pelvic_fracture_pubic_diastasis_after_2.png",
        "/images/pelvic_fracture_pubic_diastasis_after_3.png",
      ],
      story: "",
      duration: "",
      highlight: "",
      name: "",
      age: 0,
    },
    {
      id: 10,
      title: "ANKLE FRACTURE",
      beforeCaption: "Before",
      afterCaption: "After",
      beforeImages: ["/images/ankle_fracture_before.png"],
      afterImages: [
        "/images/ankle_fracture_after_1.png",
        "/images/ankle_fracture_after_2.png",
      ],
      story: "",
      duration: "",
      highlight: "",
      name: "",
      age: 0,
    },
    {
      id: 11,
      title: "PROXIMAL TIBIA FRACTURE",
      beforeCaption: "Before",
      afterCaption: "After",
      beforeImages: ["/images/proximal_tibia_fracture_before.png"],
      afterImages: ["/images/proximal_tibia_fracture_after.png"],
      story: "",
      duration: "",
      highlight: "",
      name: "",
      age: 0,
    },
    {
      id: 12,
      title: "LISFRANC FOOT FRACTURE DISLOCATION",
      beforeCaption: "Before",
      afterCaption: "After",
      beforeImages: ["/images/lisfranc_foot_fracture_dislocation_before.png"],
      afterImages: ["/images/lisfranc_foot_fracture_dislocation_after.png"],
      story: "",
      duration: "",
      highlight: "",
      name: "",
      age: 0,
    },
  ];

  const slideCount = transformations.length;
  const slideCountRef = useRef(slideCount);

  const [activeTransformation, setActiveTransformation] = useState(0);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const [carouselPaused, setCarouselPaused] = useState(false);

  const touchStartXRef = useRef<number | null>(null);
  /** After swipe / chip / arrow, hold auto-advance until this timestamp (ms). */
  const userPauseUntilRef = useRef(0);
  const caseStripRef = useRef<HTMLDivElement>(null);

  const MOBILE_AUTO_MS = 7500;
  const DESKTOP_AUTO_MS = 6500;
  const USER_PAUSE_MS = 12000;

  /** Pause auto-advance for a beat after manual navigation (works with hover pause on desktop). */
  const bumpUserInteractionPause = useCallback(() => {
    userPauseUntilRef.current = Date.now() + USER_PAUSE_MS;
  }, []);

  /** Always a valid index in range [0, slideCount - 1] for display and content lookup */
  const safeSlideIndex =
    slideCount <= 0
      ? 0
      : Math.min(Math.max(0, activeTransformation), slideCount - 1);

  useEffect(() => {
    slideCountRef.current = slideCount;
  }, [slideCount]);

  const handlePrev = useCallback(() => {
    setActiveTransformation((prev) => {
      const n = slideCountRef.current;
      if (n <= 0) return 0;
      const clamped = Math.min(Math.max(0, prev), n - 1);
      return clamped === 0 ? n - 1 : clamped - 1;
    });
  }, []);

  const handleNext = useCallback(() => {
    setActiveTransformation((prev) => {
      const n = slideCountRef.current;
      if (n <= 0) return 0;
      const clamped = Math.min(Math.max(0, prev), n - 1);
      return clamped >= n - 1 ? 0 : clamped + 1;
    });
  }, []);

  const onCarouselTouchStart = useCallback((e: TouchEvent) => {
    touchStartXRef.current = e.changedTouches[0].clientX;
  }, []);

  const onCarouselTouchEnd = useCallback(
    (e: TouchEvent) => {
      const startX = touchStartXRef.current;
      touchStartXRef.current = null;
      if (startX == null || slideCount <= 0) return;
      const dx = e.changedTouches[0].clientX - startX;
      const threshold = 48;
      if (dx > threshold) {
        bumpUserInteractionPause();
        handlePrev();
      } else if (dx < -threshold) {
        bumpUserInteractionPause();
        handleNext();
      }
    },
    [bumpUserInteractionPause, handleNext, handlePrev, slideCount]
  );

  // Auto-advance: longer interval on small screens; skips tick while hovering, lightbox open, or post-gesture cooldown
  useEffect(() => {
    if (slideCount <= 0 || lightbox) return;
    const ms =
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 639px)").matches
        ? MOBILE_AUTO_MS
        : DESKTOP_AUTO_MS;
    const id = setInterval(() => {
      if (carouselPaused) return;
      if (Date.now() < userPauseUntilRef.current) return;
      handleNext();
    }, ms);
    return () => clearInterval(id);
  }, [handleNext, slideCount, carouselPaused, lightbox]);

  // Keep active case chip visible in the horizontal strip (mobile + desktop)
  useEffect(() => {
    const strip = caseStripRef.current;
    if (!strip || slideCount <= 0) return;
    const active = strip.querySelector<HTMLElement>('[role="tab"][aria-selected="true"]');
    active?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [safeSlideIndex, slideCount]);

  const duplicatedTestimonials =
    testimonials.length > 0 ? [...testimonials, ...testimonials] : [];

  return (
    <section
      id="testimonials"
      className="relative w-full overflow-hidden bg-[#fafafa] py-8 md:py-12 lg:py-16 scroll-mt-24"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-[#0b6f66]/[0.07] blur-3xl" />
        <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-[#d5a028]/[0.08] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgb(15 23 42 / 0.06) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-6 max-w-3xl text-center md:mb-8">
          <h2 className="mb-3 text-balance text-3xl font-bold tracking-tight text-[#0b6f66] sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            Patient{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d5a028] via-[#e8b82e] to-[#f4c430]">
              Transformations
            </span>
          </h2>
          <div className="mx-auto flex justify-center gap-1">
            <div className="h-1 w-8 rounded-full bg-[#d5a028]" />
            <div className="h-1 w-3 rounded-full bg-[#0b6f66]/35" />
            <div className="h-1 w-3 rounded-full bg-[#0b6f66]/35" />
          </div>
        </div>

        <div className="relative mb-5 w-full px-1 sm:px-6 md:px-10">
          <button
            type="button"
            onClick={() => {
              bumpUserInteractionPause();
              handlePrev();
            }}
            className="absolute left-0 top-[min(32%,260px)] z-20 flex h-11 w-11 -translate-y-1/2 touch-manipulation select-none items-center justify-center rounded-2xl border border-gray-200/95 bg-white/95 text-gray-700 shadow-[0_4px_16px_rgba(15,23,42,0.08)] backdrop-blur-sm transition duration-200 hover:-translate-y-1/2 hover:scale-[1.02] hover:border-[#0b6f66]/35 hover:text-[#0b6f66] hover:shadow-[0_8px_24px_rgba(11,107,102,0.12)] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0b6f66]/30 focus-visible:ring-offset-2 sm:top-[min(40%,300px)] sm:h-12 sm:w-12 md:left-1"
            aria-label="Previous case"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => {
              bumpUserInteractionPause();
              handleNext();
            }}
            className="absolute right-0 top-[min(32%,260px)] z-20 flex h-11 w-11 -translate-y-1/2 touch-manipulation select-none items-center justify-center rounded-2xl border border-gray-200/95 bg-white/95 text-gray-700 shadow-[0_4px_16px_rgba(15,23,42,0.08)] backdrop-blur-sm transition duration-200 hover:-translate-y-1/2 hover:scale-[1.02] hover:border-[#0b6f66]/35 hover:text-[#0b6f66] hover:shadow-[0_8px_24px_rgba(11,107,102,0.12)] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0b6f66]/30 focus-visible:ring-offset-2 sm:top-[min(40%,300px)] sm:h-12 sm:w-12 md:right-1"
            aria-label="Next case"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            className="mx-auto max-w-6xl touch-pan-y overflow-hidden rounded-[1.25rem] border border-gray-200/90 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-12px_rgba(15,23,42,0.08),0_0_0_1px_rgba(255,255,255,0.8)_inset] ring-1 ring-black/[0.03] transition-shadow duration-500 hover:shadow-[0_1px_2px_rgba(15,23,42,0.04),0_32px_64px_-16px_rgba(11,107,102,0.1)] md:rounded-3xl"
            onMouseEnter={() => setCarouselPaused(true)}
            onMouseLeave={() => setCarouselPaused(false)}
            onFocusCapture={() => setCarouselPaused(true)}
            onBlurCapture={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                setCarouselPaused(false);
              }
            }}
            onTouchStart={onCarouselTouchStart}
            onTouchEnd={onCarouselTouchEnd}
          >
            <div>
              {(() => {
                const t = transformations[safeSlideIndex] ?? transformations[0];
                if (!t || transformations.length === 0) {
                  return (
                    <div className="p-12 text-center text-sm text-gray-500">
                      No patient transformations to display.
                    </div>
                  );
                }
                const beforeImgs = t.beforeImages?.length
                  ? t.beforeImages
                  : t.beforeImage
                    ? [t.beforeImage]
                    : [];
                const afterImgs = t.afterImages?.length
                  ? t.afterImages
                  : t.afterImage
                    ? [t.afterImage]
                    : [];
                const hasBothImages = beforeImgs.length > 0 && afterImgs.length > 0;
                const wantsCaptionPair = Boolean(
                  t.beforeCaption?.trim() || t.afterCaption?.trim()
                );
                const showLabeledSplit =
                  hasBothImages || (wantsCaptionPair && !t.combinedImage);
                const singleSrc = showLabeledSplit
                  ? undefined
                  : t.combinedImage ?? t.beforeImage ?? t.afterImage;
                const hasHighlight = Boolean(t.highlight?.trim());
                const hasDuration = Boolean(t.duration?.trim());
                const hasTitle = Boolean(t.title?.trim());
                const hasProcedure = Boolean(t.procedure?.trim());
                const hasStory = Boolean(t.story?.trim());
                const showPatientRow = Boolean(t.name?.trim()) || t.age > 0;
                const hasTextPanel = hasStory || showPatientRow;
                const showHeaderBlock =
                  hasHighlight || hasDuration || hasTitle || hasProcedure;
                const openLightbox = (src: string, alt: string) =>
                  setLightbox({ src, alt });

                const stageHeader = (
                  caption: string,
                  count: number,
                  variant: "before" | "after"
                ) => (
                  <div className="mb-3.5 flex flex-wrap items-center justify-between gap-2">
                    <span
                      className={`inline-flex max-w-[85%] items-center rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase leading-snug tracking-[0.14em] sm:max-w-none sm:text-xs ${
                        variant === "before"
                          ? "bg-gray-100 text-gray-700 ring-1 ring-gray-200/90"
                          : "bg-[#0b6f66] text-white shadow-md shadow-[#0b6f66]/20"
                      }`}
                    >
                      {caption}
                    </span>
                    {count > 1 ? (
                      <span className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-[11px] font-semibold tabular-nums text-gray-600 shadow-sm">
                        {count} frames
                      </span>
                    ) : null}
                  </div>
                );

                return (
                  <>
                    <div className="border-b border-gray-100/90 bg-gradient-to-br from-white via-white to-gray-50/40 px-4 pb-4 pt-5 sm:px-7 sm:pb-5 sm:pt-6">
                      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                        <div className="min-w-0 flex-1 space-y-2.5">
                          {showHeaderBlock ? (
                            <>
                              {hasHighlight || hasDuration ? (
                                <div className="flex flex-wrap items-center gap-2 text-xs text-gray-600 md:text-sm">
                                  {hasHighlight ? (
                                    <span className="font-semibold text-[#0b6f66]">{t.highlight}</span>
                                  ) : null}
                                  {hasDuration ? (
                                    <span className="text-gray-500">{t.duration}</span>
                                  ) : null}
                                </div>
                              ) : null}
                              {hasTitle ? (
                                <h3 className="text-pretty text-xl font-bold leading-snug tracking-tight text-gray-900 sm:text-2xl md:text-[1.65rem] md:leading-tight">
                                  {t.title}
                                </h3>
                              ) : null}
                              {hasProcedure ? (
                                <p className="text-pretty text-sm font-semibold leading-snug text-[#0b6f66]/95 md:text-base">
                                  {t.procedure}
                                </p>
                              ) : null}
                            </>
                          ) : null}
                        </div>
                        <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-gray-200/95 bg-white px-4 py-2.5 shadow-sm sm:self-start">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0b6f66] to-[#095a52] text-sm font-bold text-white shadow-md shadow-[#0b6f66]/25">
                            {String(safeSlideIndex + 1).padStart(2, "0")}
                          </div>
                          <div className="text-left leading-tight">
                            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                              Active case
                            </div>
                            <div className="text-sm font-bold tabular-nums text-gray-900">
                              {safeSlideIndex + 1}
                              <span className="px-1 font-normal text-gray-300">/</span>
                              {slideCount}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`grid grid-cols-1 ${hasTextPanel ? "lg:grid-cols-[1fr_minmax(280px,360px)]" : ""}`}
                    >
                      <div className="border-t border-gray-100/80 bg-gradient-to-b from-[#0b6f66]/[0.04] via-gray-50/30 to-white p-4 sm:p-6">
                        {showLabeledSplit ? (
                          <div className="flex min-h-[min(48vh,520px)] w-full flex-col gap-6 md:min-h-[min(50vh,560px)] xl:flex-row xl:items-stretch xl:gap-5">
                            <div className="flex min-h-0 min-w-0 flex-1 flex-col rounded-2xl border border-white/80 bg-white/90 p-4 shadow-[0_2px_12px_rgba(15,23,42,0.04)] ring-1 ring-gray-100 sm:p-5">
                              {stageHeader(
                                t.beforeCaption?.trim() || "Before",
                                beforeImgs.length,
                                "before"
                              )}
                              <AnimatedMosaicSlot
                                animKey={`${safeSlideIndex}-${t.id}-before`}
                                className="flex min-h-[200px] flex-1 flex-col justify-center md:min-h-[240px]"
                              >
                                <CaseImageMosaic
                                  images={beforeImgs}
                                  altPrefix={`${t.title} — before`}
                                  onImageClick={openLightbox}
                                />
                              </AnimatedMosaicSlot>
                            </div>
                            <BeforeAfterConnector />
                            <div className="flex min-h-0 min-w-0 flex-1 flex-col rounded-2xl border border-white/80 bg-white/90 p-4 shadow-[0_2px_12px_rgba(15,23,42,0.04)] ring-1 ring-gray-100 sm:p-5">
                              {stageHeader(
                                t.afterCaption?.trim() || "After",
                                afterImgs.length,
                                "after"
                              )}
                              <AnimatedMosaicSlot
                                animKey={`${safeSlideIndex}-${t.id}-after`}
                                className="flex min-h-[200px] flex-1 flex-col justify-center md:min-h-[240px]"
                              >
                                <CaseImageMosaic
                                  images={afterImgs}
                                  altPrefix={`${t.title} — after`}
                                  onImageClick={openLightbox}
                                />
                              </AnimatedMosaicSlot>
                            </div>
                          </div>
                        ) : singleSrc ? (
                          <div className="flex min-h-[min(48vh,520px)] flex-col justify-center overflow-hidden rounded-2xl border border-white/80 bg-white/90 p-4 ring-1 ring-gray-100 sm:min-h-[min(50vh,560px)] sm:p-6">
                            <AnimatedMosaicSlot animKey={`${safeSlideIndex}-${t.id}-single`}>
                              <CaseImageMosaic
                                images={[singleSrc]}
                                altPrefix={t.title}
                                onImageClick={openLightbox}
                              />
                            </AnimatedMosaicSlot>
                          </div>
                        ) : (
                          <div
                            className="flex min-h-[min(48vh,520px)] w-full items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-white/70 md:min-h-[min(50vh,560px)]"
                            aria-hidden
                          />
                        )}

                        <div className="mt-5 space-y-3">
                          <div
                            className="h-1.5 w-full max-w-xl mx-auto overflow-hidden rounded-full bg-gray-200/90"
                            role="presentation"
                          >
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-[#0b6f66] to-[#0a8f7f] transition-[width] duration-500 ease-out"
                              style={{
                                width:
                                  slideCount > 0
                                    ? `${((safeSlideIndex + 1) / slideCount) * 100}%`
                                    : "0%",
                              }}
                            />
                          </div>
                          <div
                            ref={caseStripRef}
                            className="-mx-1 flex snap-x snap-mandatory gap-2 overflow-x-auto scroll-smooth pb-1 px-1 [scrollbar-width:thin] [-webkit-overflow-scrolling:touch]"
                            role="tablist"
                            aria-label="Browse cases"
                          >
                            {transformations.map((item, index) => {
                              const active = safeSlideIndex === index;
                              return (
                                <button
                                  key={item.id}
                                  type="button"
                                  role="tab"
                                  aria-selected={active}
                                  onClick={() => {
                                    if (index === safeSlideIndex) return;
                                    bumpUserInteractionPause();
                                    setActiveTransformation(index);
                                  }}
                                  className={`flex min-w-0 max-w-[min(100%,220px)] shrink-0 snap-center snap-always touch-manipulation items-center gap-2.5 rounded-2xl border px-3.5 py-2.5 text-left transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0b6f66]/35 focus-visible:ring-offset-2 sm:max-w-[260px] sm:px-4 ${
                                    active
                                      ? "border-[#0b6f66] bg-[#0b6f66] text-white shadow-lg shadow-[#0b6f66]/25"
                                      : "border-gray-200 bg-white text-gray-700 hover:border-[#0b6f66]/28 hover:bg-gray-50/80"
                                  }`}
                                  aria-label={`Case ${index + 1}: ${item.title}`}
                                >
                                  <span
                                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold tabular-nums ${
                                      active
                                        ? "bg-white/20 text-white"
                                        : "bg-gray-100 text-[#0b6f66]"
                                    }`}
                                  >
                                    {String(index + 1).padStart(2, "0")}
                                  </span>
                                  <span
                                    className={`line-clamp-2 text-[11px] font-semibold leading-snug sm:text-xs ${
                                      active ? "text-white/95" : "text-gray-800"
                                    }`}
                                  >
                                    {item.title}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      {hasTextPanel ? (
                        <aside className="flex flex-col justify-center border-t border-gray-100 bg-gradient-to-b from-white to-gray-50/50 p-5 sm:p-6 lg:border-l lg:border-t-0">
                          {hasStory ? (
                            <div className="relative mb-6 overflow-hidden rounded-2xl border border-[#0b6f66]/12 bg-[#0b6f66]/[0.06] p-5 shadow-inner shadow-white/40 md:p-6">
                              <div className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#d5a028]/10 blur-2xl" aria-hidden />
                              <svg
                                className="relative mb-3 h-7 w-7 text-[#d5a028]/50"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden
                              >
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                              </svg>
                              <p className="relative text-sm leading-relaxed text-gray-700 md:text-base">
                                {t.story}
                              </p>
                            </div>
                          ) : null}

                          {showPatientRow ? (
                            <div className="mt-auto flex items-center gap-4 border-t border-gray-100/90 pt-6">
                              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0b6f66] to-[#095a52] text-lg font-semibold text-white shadow-lg shadow-[#0b6f66]/20">
                                {(t.name?.trim() ? t.name.trim().charAt(0) : "?").toUpperCase()}
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="font-semibold text-gray-900">{t.name}</div>
                                <div className="text-sm text-gray-500">
                                  {t.age > 0 ? (
                                    <>Age {t.age} · Recovered patient</>
                                  ) : (
                                    <>Recover Clinic · Sanjay Nagar, Bangalore</>
                                  )}
                                </div>
                              </div>
                              <div className="flex shrink-0 gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                  <svg
                                    key={i}
                                    className="h-4 w-4 text-[#d5a028]"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    aria-hidden
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                            </div>
                          ) : null}
                        </aside>
                      ) : null}
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>

        {testimonials.length > 0 ? (
          <>
            <div className="mb-4 text-center md:mb-6">
              <h3 className="text-lg font-bold text-[#0b6f66] md:text-xl lg:text-2xl">
                More patient{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d5a028] to-[#f4c430]">
                  reviews
                </span>
              </h3>
              <div className="mx-auto mt-2 flex justify-center gap-1">
                <div className="h-0.5 w-6 rounded-full bg-[#d5a028]" />
                <div className="h-0.5 w-2 rounded-full bg-[#0b6f66]/30" />
              </div>
            </div>
            <div className="flex items-center overflow-hidden w-full py-2 md:py-4">
              <div className="w-full relative">
                <div className="flex gap-2 md:gap-3 animate-scroll-testimonials">
                  {duplicatedTestimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="group relative flex-shrink-0 w-[50vw] sm:w-[40vw] md:w-[28vw] lg:w-[22vw] xl:w-[18vw] max-w-[240px] rounded-lg bg-white border border-gray-200 shadow-sm p-2.5 md:p-4 hover:shadow-md hover:border-[#0b6f66]/30 transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="flex gap-0.5 mb-1 md:mb-1.5">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-2 h-2 md:w-2.5 md:h-2.5 text-[#d5a028]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-[10px] leading-relaxed text-gray-600 sm:text-[11px] md:text-xs mb-1.5 md:mb-2 line-clamp-3">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>
                      <div className="border-t border-gray-100 pt-1.5 md:pt-2">
                        <div className="font-bold text-[#0b6f66] text-[10px] md:text-xs">{testimonial.name}</div>
                        <div className="text-[9px] md:text-[10px] text-gray-500">{testimonial.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>

      {lightbox ? (
        <ImageLightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      ) : null}
    </section>
  );
};

export default TestimonialsSection;
