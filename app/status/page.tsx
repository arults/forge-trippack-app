import Link from "next/link";

const states = [
  { name: "Received", desc: "Intake logged. We are building the Completeness Sheet." },
  { name: "Chasing parents", desc: "Sheet drafted; outstanding consent/medical listed with chase copy for you to send." },
  { name: "Ready", desc: "Pack complete enough for go/no-go. Day-lead medical highlights included." },
];

export default function Status() {
  return (
    <main className="lp-shell lp-page">
      <Link href="/" className="lp-back">← TripPack</Link>
      <h1 className="lp-section-title">Status meanings</h1>
      <p className="lp-section-lead">
        Honest concierge states. No fake live tracker until a real job is in flight.
      </p>
      <div className="lp-why-list">
        {states.map((s) => (
          <div className="lp-why-item" key={s.name}>
            <strong>{s.name}</strong>
            <span>{s.desc}</span>
          </div>
        ))}
      </div>
      <p style={{ marginTop: 20, fontSize: 14, color: "var(--lp-slate-600)" }}>
        Start with a <Link href="/trial">free trial</Link> or <Link href="/start">full intake</Link>.
      </p>
    </main>
  );
}
