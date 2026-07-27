import logoImage from '@/assets/images/logo.webp';

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <img 
      src={logoImage} 
      alt="Digitalonix Logo" 
      className={`${className} object-contain`} 
    />
  );
}
