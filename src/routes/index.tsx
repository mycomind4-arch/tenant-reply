import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const SITE_ORIGIN = "https://tenant-reply.pages.dev";

const WORKFLOWS = [
  { title: "Eviction Notice Response", detail: "Organize the notice, dates, facts, supporting records, and a written response." },
  { title: "Pay-or-Quit / Cure-or-Quit Response", detail: "Track the stated demand, deadline, lease terms, payment records, and response path." },
  { title: "Lease Violation Response", detail: "Document the alleged violation, relevant lease language, facts, and supporting evidence." },
  { title: "Repair & Habitability Request", detail: "Build a dated repair record with notices, communications, photos, and requested action." },
  { title: "Security Deposit Dispute", detail: "Organize the move-out record, deposit accounting, deductions, receipts, and correspondence." },
  { title: "Landlord / Property Manager Correspondence", detail: "Prepare a structured response to a formal property-management communication." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tenant Reply — Tenant-Side Property Correspondence" },
      { name: "description", content: "Tenant-side workflows for organizing landlord and property-manager notices, lease issues, repairs, habitability matters, eviction-related responses, and security-deposit disputes." },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Tenant Reply — Tenant-Side Property Correspondence" },
      { property: "og:description", content: "Tenant-side correspondence workflows by MailMyPDF." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Tenant Reply · MailMyPDF" },
      { property: "og:url", content: SITE_ORIGIN + "/" },
    ],
    links: [{ rel: "canonical", href: SITE_ORIGIN + "/" }],
  }),
  component: TenantReplyHome,
});

function TenantReplyHome() {
  return (
    <div className="min-h-screen bg-paper">
      <SiteHeader />
      <main>
        <section className="border-b border-rule/60">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
            <div className="max-w-3xl">
              <div className="postmark w-fit">Tenant Reply · MailMyPDF</div>
              <h1 className="mt-6 font-serif text-4xl leading-[1.08] sm:text-5xl md:text-6xl">
                Respond clearly.<br />
                Keep the record.<br />
                <span className="italic text-stamp">Stay organized.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-ink-soft sm:text-lg">
                Tenant Reply is the tenant-side correspondence vertical for organizing landlord and property-manager communications, deadlines, facts, evidence, and written responses.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-rule/60 bg-paper-deep/20">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <div className="flex items-end justify-between gap-6">
              <div>
                <div className="eyebrow">Tenant matters</div>
                <h2 className="mt-3 font-serif text-3xl sm:text-4xl">Core workflow families</h2>
              </div>
              <div className="hidden font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground sm:block">
                Domain: Tenant / Housing
              </div>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {WORKFLOWS.map((workflow) => (
                <article key={workflow.title} className="rounded-xl border border-rule bg-card p-6">
                  <h3 className="font-serif text-xl leading-snug">{workflow.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{workflow.detail}</p>
                  <div className="mt-5 border-t border-rule/50 pt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-stamp">
                    Workflow family
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-rule/60">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <div className="grid gap-6 md:grid-cols-3">
              <Principle title="Document" text="Start with the actual notice, lease, communication, or record and preserve the source material." />
              <Principle title="Organize" text="Separate user-provided facts from extracted information, identify deadlines, and surface missing evidence." />
              <Principle title="Respond" text="Prepare a clear written response that the user reviews before any consequential submission or mailing." />
            </div>
          </div>
        </section>

        <section className="border-t border-rule/60 bg-ink text-paper">
          <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
            <div className="postmark mx-auto w-fit">MailMyPDF ecosystem</div>
            <h2 className="mt-5 font-serif text-3xl sm:text-4xl">Built as a distinct vertical, sharing the same trusted platform.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-paper/70 sm:text-base">
              Tenant Reply owns the tenant and housing domain. Shared identity, mailing, proof, security, and workflow infrastructure comes from the MailMyPDF ecosystem.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Principle({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl border border-rule bg-card p-6">
      <div className="font-mono text-xs text-stamp">{title}</div>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
    </div>
  );
}
