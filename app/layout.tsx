import type { Metadata } from "next";
import { Sora } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TripPack — Missing consent. Delayed trip.",
  description:
    "School outdoor-ed trip paperwork pack: parent consent, medical, risk summary, staff ratios. One share link. Free trial. Not legal advice. Not CrewLoop.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={sora.variable}>
        <nav className="lp-nav" aria-label="Primary">
          <div className="lp-nav-inner">
            <Link href="/" className="lp-logo">
              <span className="lp-logo-mark" aria-hidden />
              TripPack
            </Link>
            <div className="lp-nav-links">
              <a href="/#why">Why</a>
              <a href="/#how">How</a>
              <Link href="/sheet">Sample</Link>
            </div>
            <Link href="/trial" className="lp-btn lp-btn-primary">
              Free trial
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
