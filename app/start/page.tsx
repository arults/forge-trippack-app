"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function StartTrip() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const lines = [
      "TripPack trip intake",
      "",
      `Email: ${fd.get("email")}`,
      `School / centre: ${fd.get("org")}`,
      `Role: ${fd.get("role")}`,
      `Trip date: ${fd.get("date")}`,
      `Venue / activity: ${fd.get("venue")}`,
      `Group size: ${fd.get("size")}`,
      "",
      "What's still missing:",
      String(fd.get("missing") || ""),
    ];
    const subject = encodeURIComponent(`TripPack trip — ${fd.get("venue") || "outdoor"}`);
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:forge7408@agentmail.to?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <main className="lp-shell lp-page">
      <Link href="/" className="lp-back">← TripPack</Link>
      <h1 className="lp-section-title">Start a trip pack</h1>
      <p className="lp-section-lead">
        Full intake for a paid Completeness Sheet. Opens email to forge7408@agentmail.to.
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
          <label className="lp-label" htmlFor="role">Your role</label>
          <input className="lp-input" id="role" name="role" placeholder="EOTC coordinator / bookings" />
        </div>
        <div className="lp-field">
          <label className="lp-label" htmlFor="date">Trip date</label>
          <input className="lp-input" id="date" name="date" type="date" />
        </div>
        <div className="lp-field">
          <label className="lp-label" htmlFor="venue">Venue / activity</label>
          <input className="lp-input" id="venue" name="venue" placeholder="e.g. Sai Kung coasteering day" />
        </div>
        <div className="lp-field">
          <label className="lp-label" htmlFor="size">Group size</label>
          <input className="lp-input" id="size" name="size" placeholder="students + staff" />
        </div>
        <div className="lp-field">
          <label className="lp-label" htmlFor="missing">What's still missing</label>
          <textarea className="lp-input" id="missing" name="missing" rows={4} placeholder="Consent, medical, allergies, ratios…" />
        </div>
        <button type="submit" className="lp-btn lp-btn-primary">Email intake</button>
        {sent && <p style={{ marginTop: 12, fontSize: 14, color: "var(--lp-slate-600)" }}>Opening your email app…</p>}
      </form>
    </main>
  );
}
