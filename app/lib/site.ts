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
