import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const SITE_ORIGIN = "https://tenant-reply.pages.dev";
const WORKFLOWS = [
  ["Eviction & Possession Notices", ["Eviction notice response", "Pay-or-quit response", "Cure-or-quit response"]],
  ["Lease & Property Issues", ["Lease violation response", "Repair request", "Habitability complaint"]],
  ["Money & Move-Out", ["Security deposit dispute"]],
  ["General Tenant Correspondence", ["Landlord or property-manager response"]],
];

export const Route = createFileRoute("/workflows/")({
  head: () => ({
    meta: [
      { title: "Tenant Reply Workflows — Tenant & Housing Correspondence" },
      { name: "description", content: "Tenant-side workflow families for eviction-related notices, lease issues, repairs, habitability, security deposits, and landlord or property-manager correspondence." },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Tenant Reply Workflows" },
      { property: "og:description", content: "Tenant-side correspondence workflows by MailMyPDF." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Tenant Reply · MailMyPDF" },
      { property: "og:url", content: SITE_ORIGIN + "/workflows" },
    ],
    links: [{ rel: "canonical", href: SITE_ORIGIN + "/workflows" }],
  }),
  component: WorkflowsDirectory,
});

function WorkflowsDirectory() {
  return (
    <div className="min-h-screen bg-paper">
      <SiteHeader />
      <main>
        <section className="border-b border-rule/60 bg-paper-deep/20">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
            <div className="postmark w-fit">Tenant Reply · Workflow Directory</div>
            <h1 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">Tenant and housing correspondence workflows.</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Choose the kind of landlord, property-manager, lease, repair, eviction-related, or security-deposit matter you need to organize. The shared MailMyPDF workflow engine provides the underlying document, evidence, review, and mailing primitives.
            </p>
          </div>
        </section>
        <section>
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <div className="space-y-12">
              {WORKFLOWS.map(([category, items]) => (
                <section key={category}>
                  <div className="mb-5 flex items-center gap-3">
                    <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{category}</h2>
                    <span className="h-px flex-1 bg-rule/60" />
                    <span className="font-mono text-xs text-muted-foreground">{items.length}</span>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((title) => (
                      <article key={title} className="rounded-xl border border-rule bg-card p-6">
                        <h3 className="font-serif text-xl leading-snug">{title}</h3>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">Tenant-side workflow family. The detailed interactive implementation is kept separate from the shared workflow infrastructure.</p>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
