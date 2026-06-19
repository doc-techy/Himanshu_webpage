import type { Metadata } from "next";
import { PHONE_RECOVER_TEL, PHONE_SPARSH_TEL } from "../constants/phones";
import { FAQ_ITEMS } from "./faqs";
import { RECOVER_LOCATION, SPARSH_LOCATION } from "./locations";
import { getSiteVariant, type SiteVariant } from "./site";

export const SITE_URLS = {
  recover: "https://www.recoverortho.com",
  drSingh: "https://www.drsinghortho.com",
} as const;

export const SITE_INDEXABLE_PATHS = ["", "/services", "/blogs", "/videos"] as const;

const OG_IMAGE_PATH = "/images/dr-himanshu-singh.png";

const SOCIAL_PROFILES = [
  "https://www.instagram.com/doctorhimanshusingh/",
  "https://www.linkedin.com/in/dr-himanshu-singh-2a280835/",
  "https://www.facebook.com/profile.php?id=61581468332725",
  "https://www.youtube.com/@LimbReconstruction",
] as const;

export function getBaseUrl(hostname: string): string {
  return SITE_URLS[getSiteVariant(hostname)];
}

export function getSiteName(variant: SiteVariant): string {
  return variant === "drSingh"
    ? "Dr. Himanshu Singh Orthopaedics"
    : "Recover Clinic";
}

type PageMetaInput = {
  hostname: string;
  path?: string;
  title: string;
  description: string;
};

export function buildPageMetadata({
  hostname,
  path = "",
  title,
  description,
}: PageMetaInput): Metadata {
  const variant = getSiteVariant(hostname);
  const baseUrl = getBaseUrl(hostname);
  const canonical = `${baseUrl}${path}`;
  const siteName = getSiteName(variant);
  const ogImage = `${baseUrl}${OG_IMAGE_PATH}`;

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 460,
          height: 600,
          alt: "Dr. Himanshu Singh — Orthopaedic Surgeon, Bangalore",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/images/recover-clinic-logo.png",
      apple: "/images/recover-clinic-logo.png",
    },
  };
}

export function getHomeMetadata(hostname: string): Metadata {
  const variant = getSiteVariant(hostname);

  if (variant === "drSingh") {
    return buildPageMetadata({
      hostname,
      path: "",
      title: "Dr. Himanshu Singh | Orthopaedics — Recover Clinic & Sparsh Hospital Bangalore",
      description:
        "Dr. Himanshu Singh — orthopaedic surgeon at Recover Clinic (Sanjaynagar) and Sparsh Hospital (Hennur). Joint replacement, arthroscopy, limb reconstruction.",
    });
  }

  return buildPageMetadata({
    hostname,
    path: "",
    title: "Recover Clinic | Orthopaedics & Limb Reconstruction Bangalore",
    description:
      "Recover Clinic — advanced orthopaedic & robotic surgery in Bangalore. Joint replacement, limb reconstruction, sports medicine by Dr. Himanshu Singh.",
  });
}

export function getServicesMetadata(hostname: string): Metadata {
  const variant = getSiteVariant(hostname);

  if (variant === "drSingh") {
    return buildPageMetadata({
      hostname,
      path: "/services",
      title: "Orthopaedic Services | Dr. Himanshu Singh — Bangalore",
      description:
        "Robotic joint replacement, limb reconstruction, Ilizarov technique, arthroscopy, sports medicine, and fracture care by Dr. Himanshu Singh in Bangalore.",
    });
  }

  return buildPageMetadata({
    hostname,
    path: "/services",
    title: "Orthopaedic Services | Recover Clinic Bangalore",
    description:
      "Comprehensive orthopaedic services at Recover Clinic — robotic joint replacement, limb reconstruction, Ilizarov, arthroscopy, and trauma care in Bangalore.",
  });
}

export function getBlogsMetadata(hostname: string): Metadata {
  const variant = getSiteVariant(hostname);
  const brand =
    variant === "drSingh" ? "Dr. Himanshu Singh" : "Recover Clinic";

  return buildPageMetadata({
    hostname,
    path: "/blogs",
    title: `Orthopaedic Health Blogs | ${brand} Bangalore`,
    description:
      "Educational articles on orthopaedic care, joint replacement, limb reconstruction, sports injuries, and recovery by Dr. Himanshu Singh in Bangalore.",
  });
}

export function getVideosMetadata(hostname: string): Metadata {
  const variant = getSiteVariant(hostname);
  const brand =
    variant === "drSingh" ? "Dr. Himanshu Singh" : "Recover Clinic";

  return buildPageMetadata({
    hostname,
    path: "/videos",
    title: `Orthopaedic Education Videos | ${brand} Bangalore`,
    description:
      "Watch educational videos on orthopaedic surgery, recovery, arthroscopy, robotic joint replacement, and patient care from Dr. Himanshu Singh in Bangalore.",
  });
}

function buildPostalAddress(lines: readonly string[]) {
  const postalCode = lines[lines.length - 1].match(/\d{6}/)?.[0] ?? "";
  const streetAddress = lines
    .slice(0, -1)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  return {
    "@type": "PostalAddress",
    streetAddress,
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode,
    addressCountry: "IN",
  };
}

export function buildStructuredData(hostname: string) {
  const variant = getSiteVariant(hostname);
  const baseUrl = getBaseUrl(hostname);
  const siteName = getSiteName(variant);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}#website`,
        url: baseUrl,
        name: siteName,
        description:
          variant === "drSingh"
            ? "Orthopaedic surgeon Dr. Himanshu Singh at Recover Clinic and Sparsh Hospital, Bangalore."
            : "Recover Clinic — advanced orthopaedic and limb reconstruction centre in Bangalore.",
        inLanguage: "en-IN",
      },
      {
        "@type": "Physician",
        "@id": `${baseUrl}#physician`,
        name: "Dr. Himanshu Singh",
        jobTitle: "Consultant Orthopaedic and Limb Reconstruction Surgeon",
        medicalSpecialty: "Orthopaedic Surgery",
        email: "doctorsingh@live.com",
        telephone: PHONE_RECOVER_TEL,
        image: `${baseUrl}${OG_IMAGE_PATH}`,
        url: baseUrl,
        sameAs: [...SOCIAL_PROFILES],
        worksFor: [
          { "@id": `${baseUrl}#recover-clinic` },
          { "@id": `${baseUrl}#sparsh-hospital` },
        ],
      },
      {
        "@type": "MedicalClinic",
        "@id": `${baseUrl}#recover-clinic`,
        name: RECOVER_LOCATION.name,
        description:
          "Advanced orthopaedic and robotic surgery centre in Sanjayanagara, Bangalore.",
        telephone: PHONE_RECOVER_TEL,
        url: baseUrl,
        image: `${baseUrl}${RECOVER_LOCATION.logoSrc}`,
        hasMap: RECOVER_LOCATION.mapUrl,
        address: buildPostalAddress(RECOVER_LOCATION.addressLines),
        geo: {
          "@type": "GeoCoordinates",
          latitude: 13.0369337,
          longitude: 77.5749837,
        },
      },
      {
        "@type": "Hospital",
        "@id": `${baseUrl}#sparsh-hospital`,
        name: SPARSH_LOCATION.name,
        description:
          "Dr. Himanshu Singh orthopaedic consultations at Sparsh Hospital, Hennur Road, Bangalore.",
        telephone: PHONE_SPARSH_TEL,
        url: baseUrl,
        image: `${baseUrl}${SPARSH_LOCATION.logoSrc}`,
        hasMap: SPARSH_LOCATION.mapUrl,
        address: buildPostalAddress(SPARSH_LOCATION.addressLines),
        geo: {
          "@type": "GeoCoordinates",
          latitude: 13.0402215,
          longitude: 77.6407268,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${baseUrl}#faq`,
        mainEntity: FAQ_ITEMS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };
}
