export default function CallButton() {
  return (
    <a
      href="tel:+2348064551684"
      aria-label="Call us now"
      onClick={(e) => { e.preventDefault(); (window as any).gtag_report_conversion('tel:+2348064551684'); }}
      className="call-fab"
    >
      <span className="fab-label">Call Us</span>
      <span className="fab-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          width="24"
          height="24"
          aria-hidden="true"
        >
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
        </svg>
      </span>
    </a>
  );
}
