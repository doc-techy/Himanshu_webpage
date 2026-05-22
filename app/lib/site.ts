import type { Metadata } from "next";

export type SiteVariant = "recover" | "drSingh";

export function getSiteVariant(hostname: string): SiteVariant {
  const envOverride = process.env.SITE_VARIANT?.trim();
  if (envOverride === "drSingh" || envOverride === "recover") {
    return envOverride;
  }

  const host = hostname.toLowerCase().split(":")[0].replace(/^www\./, "");
  if (host.includes("drsinghortho")) {
    return "drSingh";
  }
  return "recover";
}

export function isDrSinghSite(variant: SiteVariant): boolean {
  return variant === "drSingh";
}

const METADATA_BY_VARIANT: Record<SiteVariant, Metadata> = {
  recover: {
    title: "Recover Clinic | Orthopaedics & Limb Reconstruction Bangalore",
    description:
      "Recover Clinic — advanced orthopaedic & robotic surgery in Bangalore. Joint replacement, limb reconstruction, sports medicine by Dr. Himanshu Singh.",
  },
  drSingh: {
    title: "Dr. Himanshu Singh | Orthopaedics — Recover Clinic & Sparsh Hospital Bangalore",
    description:
      "Dr. Himanshu Singh — orthopaedic surgeon at Recover Clinic (Sanjaynagar) and Sparsh Hospital (Hennur). Joint replacement, arthroscopy, limb reconstruction.",
  },
};

export function getMetadataForVariant(variant: SiteVariant): Metadata {
  return METADATA_BY_VARIANT[variant];
}
