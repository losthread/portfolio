export default function ContactCard({ icon, social, username, url }) {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 border rounded-lg py-3 px-4 transition-all duration-300 hover:border-primary hover:bg-primary/10"  
    >
      <img 
        src={`/icons/${icon}.svg`} 
        alt={`${social} icon`}  
        className="invert h-7 opacity-60 transition-opacity group-hover:opacity-100"
      />
      <div>
        <h5 className="text-sm transition-colors group-hover:text-primary">
          {social}
        </h5>
        <p className="text-xs text-muted-foreground">
          {username}
        </p>
      </div>
    </a>
  );
}