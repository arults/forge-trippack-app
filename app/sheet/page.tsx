import Link from "next/link";

const rows = [
  { name: "Student A", consent: "Received", medical: "Received", note: "Nut allergy — EpiPen with lead" },
  { name: "Student B", consent: "Chasing", medical: "Received", note: "Consent unsigned — draft ready" },
  { name: "Student C", consent: "Received", medical: "Chasing", note: "Medical form overdue" },
  { name: "Student D", consent: "Received", medical: "Received", note: "—" },
];

export default function SampleSheet() {
  return (
    <main className="lp-shell lp-page" style={{ maxWidth: 900 }}>
      <Link href="/" className="lp-back">← TripPack</Link>
      <h1 className="lp-section-title">Sample Completeness Sheet</h1>
      <p className="lp-section-lead">
        Synthetic example — Sai Kung coasteering day, 24 students, 3 staff (target ratio 1:8).
      </p>

      <div className="lp-card" style={{ marginBottom: 14 }}>
        <h3>Trip summary</h3>
        <p>
          <strong>Venue:</strong> Sai Kung · <strong>Date:</strong> 2026-11-12 ·{" "}
          <strong>Staff:</strong> 3 (incl. 1 first-aid) · <strong>Ratio:</strong> OK
        </p>
        <p style={{ marginTop: 8 }}>
          <strong>Risk summary:</strong> Coastal rock, slip/fall, sun, water entry supervised.
          Weather check morning-of. No AFCD event permit required (training / nature activity,
          not competition or fundraising).
        </p>
      </div>

      <div className="lp-card" style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "1px solid var(--lp-border)" }}>
              <th style={{ padding: "8px 6px" }}>Student</th>
              <th style={{ padding: "8px 6px" }}>Consent</th>
              <th style={{ padding: "8px 6px" }}>Medical</th>
              <th style={{ padding: "8px 6px" }}>Note</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.name} style={{ borderBottom: "1px solid var(--lp-border-soft)" }}>
                <td style={{ padding: "10px 6px" }}>{r.name}</td>
                <td style={{ padding: "10px 6px" }}>{r.consent}</td>
                <td style={{ padding: "10px 6px" }}>{r.medical}</td>
                <td style={{ padding: "10px 6px", color: "var(--lp-slate-600)" }}>{r.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="lp-card" style={{ marginTop: 14 }}>
        <h3>Chase draft (example)</h3>
        <p>
          Hi — quick reminder: we still need the signed outdoor consent for Student B before
          Thursday. Reply with the signed PDF or photo. Thanks — EOTC office.
        </p>
      </div>

      <div className="lp-hero-actions" style={{ justifyContent: "flex-start" }}>
        <Link href="/trial" className="lp-btn lp-btn-primary">Get your first sheet free</Link>
        <Link href="/start" className="lp-btn lp-btn-ghost">Full intake</Link>
      </div>
    </main>
  );
}
