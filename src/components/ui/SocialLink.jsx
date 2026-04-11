// src/components/ui/SocialLink.jsx
export default function SocialLink({ url, icon, alt }) {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noreferrer noopener"
      className="
        opacity-50 border border-white/20 rounded-md p-3 
        hover:opacity-100 hover:border-primary hover:bg-primary/10 
        transition-all duration-200 ease-in-out
        flex items-center justify-center
      "
    >
      <img 
        src={`/icons/${icon}.svg`}
        alt={alt} 
        /* 4. Keep the icon inverted, but remove individual opacity here */
        className="size-7 invert transition-none" 
      />
    </a>
  );
}