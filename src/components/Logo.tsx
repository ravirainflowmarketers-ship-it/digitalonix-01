export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 500 500" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <mask id="crescent-mask">
          <rect x="0" y="0" width="500" height="500" fill="white" />
          <circle cx="330" cy="95" r="32" fill="black" />
        </mask>
      </defs>
      
      {/* Background */}
      <circle cx="250" cy="250" r="250" fill="#7a0bc0" />
      
      {/* The 'd' shape */}
      <g fill="white">
        {/* Stem */}
        <rect x="300" y="130" width="60" height="140" />
        {/* Outer Bowl */}
        <circle cx="250" cy="270" r="110" />
      </g>
      
      {/* Inner Bowl Cutout (purple) */}
      <circle cx="250" cy="270" r="50" fill="#7a0bc0" />
      
      {/* Crescent Dot */}
      <circle cx="330" cy="72" r="32" fill="white" mask="url(#crescent-mask)" />
      
      {/* Glossy Highlights (Purple cutouts on the white bowl) */}
      <path d="M 210 201 A 80 80 0 0 0 181 230" stroke="#7a0bc0" strokeWidth="10" strokeLinecap="round" fill="none" />
      <circle cx="173" cy="249" r="6" fill="#7a0bc0" />
    </svg>
  );
}
