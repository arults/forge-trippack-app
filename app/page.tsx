import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="lp-shell">
        <section className="lp-hero">
          <p className="lp-hero-kicker">School outdoor trip pack</p>
          <h1>
            Missing consent.
            <br />
            Delayed trip.
          </h1>
          <p className="lp-hero-sub">
            Completeness sheet. Parent chase drafts. One share link for the
            coordinator.
          </p>
          <div className="lp-hero-actions">
            <Link href="/trial" className="lp-btn lp-btn-primary">
              Free trial
            </Link>
            <Link href="/sheet" className="lp-btn lp-btn-ghost">
              See sample sheet
            </Link>
          </div>
          <div className="lp-pill-row">
            <span className="lp-pill">HK schools / EOTC</span>
            <span className="lp-pill">Outdoor centres</span>
            <span className="lp-pill">Consent + medical</span>
            <span className="lp-pill">First sheet free</span>
          </div>
        </section>

        <section className="lp-section" id="why">
          <h2 className="lp-section-title">Built for the people who clear the trip</h2>
          <p className="lp-section-lead">
            EOTC and outdoor coordinators at HK international and DSS schools —
            and bookings leads at outdoor centres selling to schools — who must
            prove consent, medical, risk, and ratios before departure.
          </p>
          <div className="lp-why-list">
            <div className="lp-why-item">
              <strong>The bus is waiting on one form</strong>
              <span>
                One unsigned consent or missing allergy note and the trip slips.
                Chasing parents by WhatsApp the night before is not a system.
              </span>
            </div>
            <div className="lp-why-item">
              <strong>Spreadsheets do not show gaps</strong>
              <span>
                Shared drives and paper packets hide who is still outstanding.
                Ratios and first-aid cover get checked too late.
              </span>
            </div>
            <div className="lp-why-item">
              <strong>You still own the trip</strong>
              <span>
                We assemble the pack and draft parent chases. You send messages
                and decide go / no-go. Not legal advice. Not DigiSign.
              </span>
            </div>
          </div>
          <div className="lp-trust">
            <span>Paperwork pack only</span>
            <span>Not CrewLoop staffing</span>
            <span>Not AFCD permit filing</span>
          </div>
        </section>

        <section className="lp-section" id="how">
          <h2 className="lp-section-title">How it works</h2>
          <p className="lp-section-lead">
            Three clear steps from messy folder to ready-to-depart pack.
          </p>
          <div className="lp-grid-3">
            <div className="lp-card">
              <span className="lp-step-num">1</span>
              <h3>Completeness sheet</h3>
              <p>
                Every student: consent, medical, emergency contact — plus risk
                summary and staff:student ratio check.
              </p>
            </div>
            <div className="lp-card">
              <span className="lp-step-num">2</span>
              <h3>Parent chase drafts</h3>
              <p>
                Ready-to-send WhatsApp / email copy for missing forms. You send;
                we do not message parents for you.
              </p>
            </div>
            <div className="lp-card">
              <span className="lp-step-num">3</span>
              <h3>One share link</h3>
              <p>
                Coordinator and centre see the same status. Printable pack for
                the day lead.
              </p>
            </div>
          </div>
        </section>

        <section className="lp-section">
          <h2 className="lp-section-title">What you get</h2>
          <p className="lp-section-lead">
            A concrete deliverable for the trip that is stuck — not a vague
            platform.
          </p>
          <div className="lp-grid-3">
            <div className="lp-card">
              <h3>Trip Completeness Sheet</h3>
              <p>Per-student status plus risk and ratio flags for this trip.</p>
            </div>
            <div className="lp-card">
              <h3>Chase drafts</h3>
              <p>Copy ready for parents. Sent from your channel, on your terms.</p>
            </div>
            <div className="lp-card">
              <h3>Day-lead pack</h3>
              <p>Medical highlights and emergency contacts for the field lead.</p>
            </div>
          </div>
        </section>

        <section className="lp-section">
          <div className="lp-card" style={{ textAlign: "center" }}>
            <h3>Pricing</h3>
            <p style={{ marginTop: 8 }}>
              Free trial — first Completeness Sheet free. Then HK$1,999/trip or
              HK$299/mo school seat. Typical turnaround 48h.
            </p>
            <div className="lp-hero-actions">
              <Link href="/trial" className="lp-btn lp-btn-primary">
                Start free trial
              </Link>
            </div>
          </div>
        </section>

        <section className="lp-cta-band">
          <h2>Stop delaying the trip</h2>
          <p>
            Get your first Completeness Sheet free. Tell us the date, venue, and
            what is still missing — we assemble the chase.
          </p>
          <div className="lp-hero-actions">
            <Link href="/trial" className="lp-btn lp-btn-on-dark">
              Free trial
            </Link>
            <Link href="/sheet" className="lp-btn lp-btn-ghost" style={{ color: "#fff", borderColor: "#475569" }}>
              Sample sheet
            </Link>
          </div>
        </section>

        <footer className="lp-footer">
          <div>
            <strong style={{ color: "var(--lp-slate-800)" }}>TripPack</strong>
            <div>Paperwork pack only. Not legal advice. Not CrewLoop.</div>
          </div>
          <div className="lp-footer-links">
            <Link href="/sheet">Sample sheet</Link>
            <Link href="/trial">Free trial</Link>
            <Link href="/start">Full intake</Link>
            <Link href="/status">Status</Link>
            <Link href="/non-goals">What we are not</Link>
          </div>
        </footer>
        <div className="lp-mobile-pad" />
      </main>
      <div className="lp-sticky-mobile">
        <Link href="/trial" className="lp-btn lp-btn-primary">
          Free trial
        </Link>
      </div>
    </>
  );
}
