import {
  PHONE_RECOVER_DISPLAY,
  PHONE_RECOVER_TEL,
  PHONE_SPARSH_DISPLAY,
  PHONE_SPARSH_TEL,
} from "../constants/phones";

export const RECOVER_MAP_URL = "https://maps.app.goo.gl/WtyAJ4EMifhPcdvYA";
export const SPARSH_MAP_URL = "https://maps.app.goo.gl/xVNAE8Edmy77qxnz6";

export const RECOVER_LOCATION = {
  name: "Recover Clinic",
  displayName: "Recover Ortho Clinic, Sanjaynagar",
  logoSrc: "/images/recover-clinic-logo.png",
  logoCompactSrc: "/images/logo.png",
  logoAlt: "Recover Clinic — Orthopaedics & Limb Reconstruction",
  addressLines: [
    "Recover Clinic, 34, 50 feet road,",
    "NGEF Layout, Postal Colony,",
    "Sanjayanagara, Bengaluru,",
    "Karnataka 560094",
  ],
  phoneTel: PHONE_RECOVER_TEL,
  phoneDisplay: PHONE_RECOVER_DISPLAY,
  mapUrl: RECOVER_MAP_URL,
} as const;

export const SPARSH_LOCATION = {
  name: "Sparsh Hospital",
  displayName: "Dr. Himanshu Singh @ Sparsh Hospital, Hennur",
  logoSrc: "/images/sparsh_logo.png",
  logoAlt: "SPARSH Hospital — Dr. Himanshu Singh Orthopaedics",
  addressLines: [
    "SPARSH Hospital, Hennur Road,",
    "DivyaSree Avance, Hennur Bagalur Main Rd,",
    "HBR Layout, Geddalahalli, Bengaluru,",
    "Karnataka 560043",
  ],
  phoneTel: PHONE_SPARSH_TEL,
  phoneDisplay: PHONE_SPARSH_DISPLAY,
  mapUrl: SPARSH_MAP_URL,
} as const;
