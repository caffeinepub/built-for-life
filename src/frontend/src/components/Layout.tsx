import type { ReactNode } from "react";
import { PdfDownloadButton } from "./PdfDownloadButton";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const brandingUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Sticky Header */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{ backgroundColor: "#1A2744", borderColor: "#C9A84C22" }}
        data-ocid="site-header"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <div className="flex flex-col leading-tight">
            <span
              className="font-display font-bold text-lg tracking-widest uppercase"
              style={{ color: "#C9A84C", letterSpacing: "0.18em" }}
            >
              BUILT FOR LIFE
            </span>
            <span
              className="font-body text-xs tracking-wide hidden sm:block"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              6-Week Program for Men 35+
            </span>
          </div>
          <PdfDownloadButton />
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 bg-background">{children}</main>

      {/* Footer */}
      <footer
        className="border-t py-6 px-4"
        style={{ backgroundColor: "#1A2744", borderColor: "#C9A84C22" }}
      >
        <div
          className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          <span>
            © {year}. Built with love using{" "}
            <a
              href={brandingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-accent transition-colors duration-200"
              style={{ color: "#C9A84C" }}
            >
              caffeine.ai
            </a>
          </span>
          <span
            className="font-display tracking-widest text-xs"
            style={{ color: "#C9A84C" }}
          >
            BUILT FOR LIFE
          </span>
        </div>
      </footer>
    </div>
  );
}
