"use client";

import { createContext, useContext } from "react";
import type { SiteVariant } from "../lib/site";

const SiteVariantContext = createContext<SiteVariant>("recover");

export function SiteVariantProvider({
  variant,
  children,
}: {
  variant: SiteVariant;
  children: React.ReactNode;
}) {
  return (
    <SiteVariantContext.Provider value={variant}>
      {children}
    </SiteVariantContext.Provider>
  );
}

export function useSiteVariant(): SiteVariant {
  return useContext(SiteVariantContext);
}
