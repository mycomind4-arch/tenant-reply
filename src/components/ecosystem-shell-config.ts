/**
 * Tenant Reply — Ecosystem Shell Config
 */
import { useAuth } from "@/lib/auth";
import type { EcosystemShellConfig } from "./ecosystem-shell";

export function useShellConfig(): EcosystemShellConfig {
  const { user, loading, signOut } = useAuth();
  return {
    brand: "Tenant Reply",
    brandTagline: "Tenant-side correspondence by MailMyPDF",
    mailPdfUrl: "https://mailmypdf-etc.pages.dev/mail-a-pdf",
    workflowsUrl: "/workflows",
    howItWorksUrl: "/how-it-works",
    pricingUrl: "/pricing",
    authUrl: "/auth",
    startUrl: "/start",
    dashboardUrl: "/dashboard",
    productsUrl: "/products",
    currentProductSlug: "tenant-reply",
    caseTerm: "Matters",
    ctaLabel: "Start a Matter",
    theme: "default",
    auth: {
      user: user ? { email: user.email ?? "", fullName: (user as any).fullName, role: (user as any).role } : null,
      loading,
      signOut,
    },
  };
}
