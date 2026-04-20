"use client";

import { useState, useEffect, useCallback, useRef } from "react";

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
  slideCountRef.current = slideCount;

  const [activeTransformation, setActiveTransformation] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);

  /** Always a valid index in range [0, slideCount - 1] for display and content lookup */
  const safeSlideIndex =
    slideCount <= 0
      ? 0
      : Math.min(Math.max(0, activeTransformation), slideCount - 1);

  useEffect(() => {
    if (slideCount === 0) return;
    setActiveTransformation((i) =>
      i >= slideCount || i < 0 ? 0 : i
    );
  }, [slideCount]);

  const handlePrev = useCallback(() => {
    setSlideDirection('right');
    setTimeout(() => {
      setActiveTransformation((prev) => {
        const n = slideCountRef.current;
        if (n <= 0) return 0;
        const clamped = Math.min(Math.max(0, prev), n - 1);
        return clamped === 0 ? n - 1 : clamped - 1;
      });
      setSlideDirection(null);
    }, 200);
  }, []);

  const handleNext = useCallback(() => {
    setSlideDirection('left');
    setTimeout(() => {
      setActiveTransformation((prev) => {
        const n = slideCountRef.current;
        if (n <= 0) return 0;
        const clamped = Math.min(Math.max(0, prev), n - 1);
        return clamped >= n - 1 ? 0 : clamped + 1;
      });
      setSlideDirection(null);
    }, 200);
  }, []);

  // Auto-slide every 5 seconds (single stable interval; next uses ref for count)
  useEffect(() => {
    if (slideCount <= 0) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [handleNext, slideCount]);

  const duplicatedTestimonials =
    testimonials.length > 0 ? [...testimonials, ...testimonials] : [];

  return (
    <section id="testimonials" className="relative w-full bg-white overflow-hidden py-8 md:py-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#0b6f66]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#d5a028]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative w-full flex flex-col z-10">
        {/* Section Title */}
        <div className="text-center mb-6 md:mb-10 px-4">
          <h2 className="text-2xl font-bold text-[#0b6f66] sm:text-3xl md:text-4xl lg:text-5xl mb-2 md:mb-4">
            Patient <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d5a028] to-[#f4c430]">Transformations</span>
          </h2>
          <div className="w-16 md:w-24 h-1 bg-[#d5a028] mx-auto mt-3 md:mt-4"></div>
        </div>

        {/* Featured Transformation Showcase */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-10 md:mb-16 relative">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 sm:left-1 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-[#0b6f66] hover:text-white hover:border-[#0b6f66] text-gray-600 transition-all duration-300 hover:scale-110"
            aria-label="Previous transformation"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 sm:right-1 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-[#0b6f66] hover:text-white hover:border-[#0b6f66] text-gray-600 transition-all duration-300 hover:scale-110"
            aria-label="Next transformation"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-gradient-to-br from-[#0b6f66] via-[#0a5d54] to-[#0b6f66] p-1 mx-4 sm:mx-8">
            <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden">
              <div
                className={`transition-all duration-300 ${
                  slideDirection === "left"
                    ? "opacity-0 -translate-x-8"
                    : slideDirection === "right"
                      ? "opacity-0 translate-x-8"
                      : "opacity-100 translate-x-0"
                }`}
              >
                {(() => {
                  const t =
                    transformations[safeSlideIndex] ?? transformations[0];
                  if (!t || transformations.length === 0) {
                    return (
                      <div className="p-8 text-center text-gray-500 text-sm">
                        No patient transformations to display.
                      </div>
                    );
                  }
                  const beforeImgs =
                    t.beforeImages?.length
                      ? t.beforeImages
                      : t.beforeImage
                        ? [t.beforeImage]
                        : [];
                  const afterImgs =
                    t.afterImages?.length
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
                  const singleSrc =
                    showLabeledSplit
                      ? undefined
                      : t.combinedImage ?? t.beforeImage ?? t.afterImage;
                  const hasHighlight = Boolean(t.highlight?.trim());
                  const hasDuration = Boolean(t.duration?.trim());
                  const hasTitle = Boolean(t.title?.trim());
                  const hasProcedure = Boolean(t.procedure?.trim());
                  const hasStory = Boolean(t.story?.trim());
                  const showPatientRow =
                    Boolean(t.name?.trim()) || t.age > 0;
                  const hasTextPanel = hasStory || showPatientRow;
                  const showHeaderBlock = hasHighlight || hasDuration || hasTitle || hasProcedure;
                  return (
                    <>
                      {/* Case title + meta (full width) */}
                      {showHeaderBlock ? (
                        <div className="px-4 pt-4 pb-3 md:px-8 md:pt-8 md:pb-4">
                          {hasHighlight || hasDuration ? (
                            <div className="flex flex-wrap items-center gap-1.5 md:gap-2 mb-2 md:mb-3">
                              {hasHighlight ? (
                                <span className="text-[10px] md:text-sm font-semibold text-[#0b6f66]">
                                  {t.highlight}
                                </span>
                              ) : null}
                              {hasDuration ? (
                                <span className="text-[10px] md:text-sm font-medium text-gray-500">
                                  {t.duration}
                                </span>
                              ) : null}
                            </div>
                          ) : null}
                          {hasTitle ? (
                            <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-[#0b6f66] leading-tight">
                              {t.title}
                            </h3>
                          ) : null}
                          {hasProcedure ? (
                            <p className="text-gray-500 text-xs md:text-sm mt-1 md:mt-2">{t.procedure}</p>
                          ) : null}
                        </div>
                      ) : null}

                      <div className={`grid grid-cols-1 ${hasTextPanel ? "lg:grid-cols-2" : ""} gap-0`}>
                        {/* Images: Before | After or single combined */}
                        <div className="relative bg-gray-100 p-3 md:p-6 lg:p-8 flex flex-col justify-center">
                          {showLabeledSplit ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 w-full max-w-2xl mx-auto">
                              <figure className="flex flex-col gap-1.5 md:gap-2 m-0">
                                <figcaption className="text-center text-[9px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-wide text-[#0b6f66] leading-snug">
                                  {t.beforeCaption?.trim() || "Before"}
                                </figcaption>
                                <div className="relative rounded-lg md:rounded-xl overflow-hidden shadow-lg border border-white ring-1 ring-black/5 bg-white min-h-[min(28vh,200px)] p-2">
                                  {beforeImgs.length > 0 ? (
                                    <div
                                      className={`grid gap-2 ${
                                        beforeImgs.length >= 3
                                          ? "grid-cols-3"
                                          : beforeImgs.length === 2
                                            ? "grid-cols-2"
                                            : "grid-cols-1"
                                      }`}
                                    >
                                      {beforeImgs.map((src, idx) => (
                                        <div
                                          key={`${src}-${idx}`}
                                          className="aspect-[3/4] w-full rounded border border-gray-100 bg-white flex items-center justify-center overflow-hidden"
                                        >
                                          <img
                                            src={src}
                                            alt={`${t.title} — before ${idx + 1}`}
                                            className="max-h-full max-w-full object-contain"
                                          />
                                        </div>
                                      ))}
                                    </div>
                                  ) : (
                                    <div
                                      className="min-h-[min(28vh,200px)] w-full bg-gray-50 border border-dashed border-gray-200"
                                      aria-hidden
                                    />
                                  )}
                                </div>
                              </figure>
                              <figure className="flex flex-col gap-1.5 md:gap-2 m-0">
                                <figcaption className="text-center text-[9px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-wide text-[#0b6f66] leading-snug">
                                  {t.afterCaption?.trim() || "After"}
                                </figcaption>
                                <div className="relative rounded-lg md:rounded-xl overflow-hidden shadow-lg border border-white ring-1 ring-black/5 bg-white min-h-[min(28vh,200px)] p-2">
                                  {afterImgs.length > 0 ? (
                                    <div
                                      className={`grid gap-2 ${
                                        afterImgs.length >= 3
                                          ? "grid-cols-3"
                                          : afterImgs.length === 2
                                            ? "grid-cols-2"
                                            : "grid-cols-1"
                                      }`}
                                    >
                                      {afterImgs.map((src, idx) => (
                                        <div
                                          key={`${src}-${idx}`}
                                          className="aspect-[3/4] w-full rounded border border-gray-100 bg-white flex items-center justify-center overflow-hidden"
                                        >
                                          <img
                                            src={src}
                                            alt={`${t.title} — after ${idx + 1}`}
                                            className="max-h-full max-w-full object-contain"
                                          />
                                        </div>
                                      ))}
                                    </div>
                                  ) : (
                                    <div
                                      className="min-h-[min(28vh,200px)] w-full bg-gray-50 border border-dashed border-gray-200"
                                      aria-hidden
                                    />
                                  )}
                                </div>
                              </figure>
                            </div>
                          ) : singleSrc ? (
                            <div className="relative group w-full max-w-2xl mx-auto">
                              <div className="relative w-full rounded-lg md:rounded-2xl overflow-hidden shadow-xl border border-white ring-1 ring-black/5">
                                <img
                                  src={singleSrc}
                                  alt={t.title}
                                  className="w-full h-auto object-contain max-h-[min(56vh,480px)] group-hover:scale-[1.01] transition-transform duration-500"
                                />
                              </div>
                            </div>
                          ) : (
                            <div
                              className="min-h-[min(28vh,200px)] w-full rounded-lg md:rounded-xl bg-gray-100/80 border border-dashed border-gray-200"
                              aria-hidden
                            />
                          )}

                          <div className="flex justify-center items-center gap-1.5 md:gap-2 mt-3 md:mt-5">
                            {transformations.map((_, index) => (
                              <button
                                key={index}
                                type="button"
                                onClick={() => setActiveTransformation(index)}
                                className={`rounded-full transition-all duration-300 ${
                                  safeSlideIndex === index
                                    ? "bg-[#0b6f66] w-4 h-2 md:w-8 md:h-3"
                                    : "bg-gray-300 hover:bg-gray-400 w-2 h-2 md:w-3 md:h-3"
                                }`}
                                aria-label={`View transformation ${index + 1}`}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Story + attribution */}
                        {hasTextPanel ? (
                          <div className="p-4 md:p-8 lg:p-10 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-gray-100 min-h-[120px]">
                            {hasStory ? (
                              <div className="relative mb-3 md:mb-6">
                                <svg
                                  className="absolute -top-1 -left-1 w-4 h-4 md:w-8 md:h-8 text-[#d5a028]/30"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                  aria-hidden
                                >
                                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                                <p className="text-gray-600 text-[11px] md:text-base lg:text-lg leading-relaxed pl-3 md:pl-6">
                                  {t.story}
                                </p>
                              </div>
                            ) : null}

                            {showPatientRow ? (
                              <div className="flex items-center gap-2 md:gap-4 pt-3 md:pt-6 border-t border-gray-200 mt-auto">
                                <div className="w-8 h-8 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#0b6f66] to-[#0a5d54] flex items-center justify-center text-white text-sm md:text-xl font-bold shadow-md shrink-0">
                                  {(t.name?.trim() ? t.name.trim().charAt(0) : "?").toUpperCase()}
                                </div>
                                <div className="min-w-0">
                                  <div className="font-bold text-gray-900 text-xs md:text-lg">{t.name}</div>
                                  <div className="text-gray-500 text-[10px] md:text-sm">
                                    {t.age > 0 ? (
                                      <>Age {t.age} • Recovered patient</>
                                    ) : (
                                      <>Recover Clinic • Sanjay Nagar, Bangalore</>
                                    )}
                                  </div>
                                </div>
                                <div className="ml-auto flex gap-0.5 shrink-0">
                                  {[...Array(5)].map((_, i) => (
                                    <svg
                                      key={i}
                                      className="w-3 h-3 md:w-5 md:h-5 text-[#d5a028]"
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
                          </div>
                        ) : null}
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>
          </div>

          {/* Counter */}
          <div className="text-center mt-3 text-sm text-gray-500 font-medium">
            {slideCount > 0 ? safeSlideIndex + 1 : 0} / {slideCount}
          </div>
        </div>
        
        {testimonials.length > 0 ? (
          <>
            <div className="text-center mb-4 md:mb-6 px-4">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800">
                More Patient <span className="text-[#0b6f66]">Reviews</span>
              </h3>
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
    </section>
  );
};

export default TestimonialsSection;
