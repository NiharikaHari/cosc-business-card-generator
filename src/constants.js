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
  { id: "classic", label: "Classic" },
];

export const ACCENT_COLORS = [
  { id: "indigo", hex: "#6d5efc" },
  { id: "emerald", hex: "#1fa97a" },
  { id: "coral", hex: "#f2634a" },
  { id: "slate", hex: "#334155" },
  { id: "gold", hex: "#b8860b" },
];

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
