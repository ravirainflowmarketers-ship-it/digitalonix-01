

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <img 
      src={"/images/logo.webp"} 
      alt="Digitalonix Logo" 
      className={`${className} object-contain`} 
    />
  );
}
