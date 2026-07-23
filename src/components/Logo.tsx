export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 500 500" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <mask id="crescent-mask">
          <rect x="0" y="0" width="500" height="500" fill="white" />
          <circle cx="300" cy="95" r="22" fill="black" />
        </mask>
      </defs>
      
      {/* Background */}
      <circle cx="250" cy="250" r="250" fill="#7a0bc0" />
      
      {/* Bowl Outer */}
      <circle cx="210" cy="250" r="120" fill="white" />
      
      {/* Top Right Cutout to separate bowl from stem */}
      <rect x="210" y="100" width="70" height="150" fill="#7a0bc0" />
      
      {/* Bowl Inner */}
      <circle cx="210" cy="250" r="60" fill="#7a0bc0" />
      
      {/* Stem */}
      <rect x="270" y="130" width="60" height="240" fill="white" />
      
      {/* Crescent Dot */}
      <circle cx="300" cy="75" r="28" fill="white" mask="url(#crescent-mask)" />
      
      {/* Glossy Highlights */}
      <circle cx="165" cy="225" r="6" fill="white" />
      <path d="M 175 205 A 45 45 0 0 1 210 195" stroke="white" strokeWidth="6" strokeLinecap="round" fill="none" />
    </svg>
  );
}
