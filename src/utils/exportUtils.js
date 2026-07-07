import { toPng } from "html-to-image";
import jsPDF from "jspdf";

export const CARD_WIDTH_IN = 3.5;
export const CARD_HEIGHT_IN = 2;
const PIXEL_RATIO = 3;

function captureCard(node) {
  return toPng(node, { pixelRatio: PIXEL_RATIO });
}

function triggerDownload(dataUrl, filename) {
  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = filename;
  link.click();
}

export async function exportCardAsPng(node, filename) {
  const dataUrl = await captureCard(node);
  triggerDownload(dataUrl, filename);
}

export async function exportCardAsPdf(node, filename) {
  const dataUrl = await captureCard(node);
  const pdf = new jsPDF({
    orientation: "landscape",
    unit: "in",
    format: [CARD_WIDTH_IN, CARD_HEIGHT_IN],
  });
  pdf.addImage(dataUrl, "PNG", 0, 0, CARD_WIDTH_IN, CARD_HEIGHT_IN);
  pdf.save(filename);
}
