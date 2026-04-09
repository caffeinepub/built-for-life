import { Button } from "@/components/ui/button";
import { Download, Loader2 } from "lucide-react";
import { useState } from "react";

interface PdfDownloadButtonProps {
  className?: string;
  size?: "default" | "sm" | "lg";
}

export function PdfDownloadButton({
  className = "",
  size = "default",
}: PdfDownloadButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    if (isGenerating) return;
    setIsGenerating(true);

    try {
      const [{ default: jsPDF }, { default: html2canvas }] = await Promise.all([
        import("jspdf"),
        import("html2canvas"),
      ]);

      const pages = document.querySelectorAll<HTMLElement>(".pdf-page");
      if (pages.length === 0) {
        console.error("No .pdf-page elements found");
        return;
      }

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });
      const pdfWidth = 210;
      const pdfHeight = 297;

      for (let i = 0; i < pages.length; i++) {
        const page = pages[i];
        const canvas = await html2canvas(page, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: "#ffffff",
          windowWidth: 794,
          logging: false,
        });

        const imgData = canvas.toDataURL("image/jpeg", 0.92);

        if (i > 0) {
          pdf.addPage();
        }

        pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
      }

      pdf.save("BuiltForLife_6WeekProgram.pdf");
    } catch (err) {
      console.error("PDF generation failed:", err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={isGenerating}
      size={size}
      data-ocid="download-pdf-btn"
      className={`bg-accent hover:bg-accent/90 text-white font-body font-semibold tracking-wide uppercase text-xs border-0 rounded-sm transition-smooth ${className}`}
      style={{ backgroundColor: "#C9A84C", color: "#ffffff" }}
    >
      {isGenerating ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Generating PDF…
        </>
      ) : (
        <>
          <Download className="w-4 h-4 mr-2" />
          Download PDF
        </>
      )}
    </Button>
  );
}
