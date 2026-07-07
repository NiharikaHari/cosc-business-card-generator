const STORAGE_KEY = "business-card-draft";

const DEFAULT_STATE = {
  name: "",
  imageDataUrl: null,
  links: {
    linkedin: "",
    github: "",
    twitter: "",
    email: "",
    website: "",
    phone: "",
  },
  template: "minimal",
  accentColor: "#6d5efc",
};

export function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_STATE,
      ...parsed,
      links: { ...DEFAULT_STATE.links, ...parsed.links },
    };
  } catch {
    return DEFAULT_STATE;
  }
}

export function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return null;
  } catch {
    return "Couldn't save — your browser's storage is full. Try a smaller photo.";
  }
}
