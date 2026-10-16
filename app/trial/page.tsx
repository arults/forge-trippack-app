"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function Trial() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const lines = [
      "TripPack FREE TRIAL — first Completeness Sheet",
      "",
      `Email: ${fd.get("email")}`,
      `School / centre: ${fd.get("org")}`,
      `Next trip (rough): ${fd.get("trip")}`,
      "",
      "Notes:",
      String(fd.get("notes") || ""),
    ];
    const subject = encodeURIComponent("TripPack free trial");
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:forge7408@agentmail.to?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <main className="lp-shell lp-page">
      <Link href="/" className="lp-back">← TripPack</Link>
      <h1 className="lp-section-title">Free trial</h1>
      <p className="lp-section-lead">
        First Trip Completeness Sheet free for the first 10 schools or centres.
        No card. Opens email to forge7408@agentmail.to.
      </p>
      <form className="lp-card" onSubmit={onSubmit}>
        <div className="lp-field">
          <label className="lp-label" htmlFor="email">Work email</label>
          <input className="lp-input" id="email" name="email" type="email" required />
        </div>
        <div className="lp-field">
          <label className="lp-label" htmlFor="org">School or outdoor centre</label>
          <input className="lp-input" id="org" name="org" required />
        </div>
        <div className="lp-field">
          <label className="lp-label" htmlFor="trip">Next trip (rough)</label>
          <input className="lp-input" id="trip" name="trip" placeholder="Month + activity" />
        </div>
        <div className="lp-field">
          <label className="lp-label" htmlFor="notes">Anything we should know</label>
          <textarea className="lp-input" id="notes" name="notes" rows={3} />
        </div>
        <button type="submit" className="lp-btn lp-btn-primary">Request free sheet</button>
        {sent && <p style={{ marginTop: 12, fontSize: 14, color: "var(--lp-slate-600)" }}>Opening your email app…</p>}
      </form>
      <p style={{ marginTop: 16, fontSize: 13, color: "var(--lp-slate-500)" }}>
        Prefer the full paid intake? <Link href="/start">Start a trip pack</Link>.
      </p>
    </main>
  );
}
