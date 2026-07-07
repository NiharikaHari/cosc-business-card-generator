import { useState } from "react";
import { exportCardAsPng, exportCardAsPdf } from "../utils/exportUtils";

function slugify(name) {
  const slug = name
    ?.trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug ? `business-card-${slug}` : "business-card";
}

export default function ExportBar({ cardRef, name }) {
  const [isExporting, setIsExporting] = useState(false);
  const [exportError, setExportError] = useState("");

  async function handleExport(exportFn, extension) {
    if (!cardRef.current) return;
    setIsExporting(true);
    setExportError("");
    try {
      await exportFn(cardRef.current, `${slugify(name)}.${extension}`);
    } catch {
      setExportError("Couldn't export the card. Please try again.");
    } finally {
      setIsExporting(false);
    }
  }

  return (
    <div className="export-bar">
      {exportError && <p className="form-error">{exportError}</p>}
      <div className="export-bar-actions">
        <button
          type="button"
          disabled={isExporting}
          onClick={() => handleExport(exportCardAsPng, "png")}
        >
          Download PNG
        </button>
        <button
          type="button"
          disabled={isExporting}
          onClick={() => handleExport(exportCardAsPdf, "pdf")}
        >
          Download PDF
        </button>
      </div>
    </div>
  );
}
