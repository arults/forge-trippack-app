import Link from "next/link";

const items = [
  "Not CrewLoop — we do not staff educators, manage roster, or run company admin.",
  "Not DigiSign / DocuSign — schools keep their own signature method; we track status.",
  "Not legal advice — we do not tell you whether a trip is lawful or insured.",
  "Not AFCD permit filing — ordinary school hiking, picnics, and training usually need no event permit; competitions and fundraising do, and that is out of scope.",
  "Not parent messaging for you — we draft; you send from your channel.",
  "Not insurance underwriting or medical diagnosis.",
];

export default function NonGoals() {
  return (
    <main className="lp-shell lp-page">
      <Link href="/" className="lp-back">← TripPack</Link>
      <h1 className="lp-section-title">What we are not</h1>
      <p className="lp-section-lead">Clear boundaries so schools and centres know what they are buying.</p>
      <div className="lp-why-list">
        {items.map((t) => (
          <div className="lp-why-item" key={t}>
            <span>{t}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
