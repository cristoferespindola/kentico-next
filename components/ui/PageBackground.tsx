import Image from "next/image";

export default function PageBackground() {
  return (
    <div className="absolute inset-0 h-full w-full">
      <Image 
        src="/assets/banner.webp" 
        alt="Page Background" 
        fill 
        className="object-cover" 
        style={{ maxHeight: '99%' }}
      />
      <div className="absolute inset-0 w-full h-full" style={{
        background: 'linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.3) 75%, rgba(0,0,0,0.6) 85%, rgba(0,0,0,0.8) 92%, #000 100%)',
      }} />
      <div className="absolute inset-0 w-full h-full" style={{
        background: 'linear-gradient(77deg, rgba(0, 0, 0, .6), transparent 85%)',
            bottom: 0,
        left: 0,
        opacity: 1,
        position: 'absolute',
        right: 0,
        top: 0,
        transition: 'opacity .5s',
      }} />
    </div>
  );
}