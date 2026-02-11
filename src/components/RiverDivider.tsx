export default function RiverDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`w-full overflow-hidden ${flip ? 'rotate-180' : ''}`} style={{ height: '40px', marginTop: '-1px', marginBottom: '-1px' }}>
      <svg
        viewBox="0 0 1440 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        {/* Primary flow line */}
        <path
          d="M0 20 C240 8, 480 32, 720 20 C960 8, 1200 32, 1440 20"
          stroke="url(#riverGrad1)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
        {/* Secondary subtle line */}
        <path
          d="M0 24 C300 14, 600 34, 900 22 C1100 14, 1300 28, 1440 22"
          stroke="url(#riverGrad2)"
          strokeWidth="0.8"
          fill="none"
          opacity="0.3"
        />
        <defs>
          <linearGradient id="riverGrad1" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="20%" stopColor="#1a3a5c" />
            <stop offset="50%" stopColor="#2a5a8c" />
            <stop offset="80%" stopColor="#1a3a5c" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="riverGrad2" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor="#1a3a5c" />
            <stop offset="70%" stopColor="#1a3a5c" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
