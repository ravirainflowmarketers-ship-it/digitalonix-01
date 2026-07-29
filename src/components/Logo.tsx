export default function Logo({ className = "" }: { className?: string }) {
  return (
    <img 
      src="/images/logo.webp" 
      alt="Digitalonix Logo"
      width="45"
      height="45"
      className={`h-[35px] md:h-[45px] w-auto object-contain rounded-full ${className}`.trim()} 
    />
  );
}
