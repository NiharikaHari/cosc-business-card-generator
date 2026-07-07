const PATHS = {
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="7" y1="10" x2="7" y2="17" />
      <circle cx="7" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
      <path d="M11 17v-4a2 2 0 0 1 4 0v4" />
      <line x1="11" y1="10" x2="11" y2="17" />
    </>
  ),
  github: (
    <path d="M9 19c-4 1-4-2-6-2m12 4v-3.5c0-1 .1-1.4-.5-2 2-.2 4-1 4-4.5a3.5 3.5 0 0 0-1-2.5 3.3 3.3 0 0 0-.1-2.5s-.9-.3-3 1a10.4 10.4 0 0 0-5.4 0c-2.1-1.3-3-1-3-1a3.3 3.3 0 0 0-.1 2.5 3.5 3.5 0 0 0-1 2.5c0 3.5 2 4.3 4 4.5-.4.4-.5.9-.5 1.5v3.5" />
  ),
  twitter: (
    <>
      <line x1="4" y1="4" x2="20" y2="20" />
      <line x1="20" y1="4" x2="4" y2="20" />
    </>
  ),
  email: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 6l10 7 10-7" />
    </>
  ),
  website: (
    <>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </>
  ),
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  ),
};

export default function Icon({ name, size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
