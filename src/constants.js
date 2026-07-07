export const SOCIAL_PLATFORMS = [
  { id: "linkedin", label: "LinkedIn", placeholder: "linkedin.com/in/username" },
  { id: "github", label: "GitHub", placeholder: "github.com/username" },
  { id: "twitter", label: "Twitter / X", placeholder: "x.com/username" },
  { id: "email", label: "Email", placeholder: "you@example.com" },
  { id: "website", label: "Website", placeholder: "yoursite.com" },
  { id: "phone", label: "Phone", placeholder: "+1 555 123 4567" },
];

export const TEMPLATE_OPTIONS = [
  { id: "minimal", label: "Minimal" },
  { id: "modern", label: "Modern" },
  { id: "bold", label: "Bold Block" },
  { id: "split", label: "Split Duo" },
  { id: "elegant", label: "Elegant" },
  { id: "emblem", label: "Emblem" },
];

export const ACCENT_COLORS = [
  { id: "indigo", hex: "#6d5efc" },
  { id: "emerald", hex: "#1fa97a" },
  { id: "coral", hex: "#f2634a" },
  { id: "slate", hex: "#334155" },
  { id: "gold", hex: "#b8860b" },
  { id: "midnight", hex: "#201a4d" },
];

export const FONT_OPTIONS = [
  { id: "sans", label: "Modern Sans", css: "system-ui, 'Segoe UI', Roboto, Arial, sans-serif" },
  { id: "serif", label: "Classic Serif", css: "Georgia, 'Times New Roman', Times, serif" },
  { id: "mono", label: "Mono", css: "ui-monospace, 'SF Mono', Consolas, 'Cascadia Code', monospace" },
  { id: "display", label: "Bold Display", css: "'Trebuchet MS', Verdana, Arial, sans-serif" },
];

export const BACKGROUND_OPTIONS = [
  { id: "solid", label: "Solid" },
  { id: "gradient", label: "Gradient" },
  { id: "pattern", label: "Pattern" },
];

export function getFontStack(fontId) {
  return FONT_OPTIONS.find((font) => font.id === fontId)?.css ?? FONT_OPTIONS[0].css;
}

export function getSubtitle(title, company) {
  return [title, company].filter(Boolean).join(" · ");
}

export function getFilledLinks(links) {
  return SOCIAL_PLATFORMS.filter((platform) => links[platform.id]?.trim());
}

export function getInitials(name) {
  const trimmed = name?.trim();
  if (!trimmed) return "?";
  return trimmed
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
}
