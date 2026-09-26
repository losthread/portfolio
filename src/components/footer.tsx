import Image from "next/image";

const socialLinks = [
	{
		href: "https://github.com/losthread",
		label: "GitHub",
		icon: "/github.svg",
	},
	{
		href: "https://x.com/losthr3ad",
		label: "Twitter",
		icon: "/twitter.svg",
	},
	{
		href: "mailto:parthnaik.office@gmail.com",
		label: "Mail",
		icon: "/mail.svg",
	},
];

export default function Footer() {
	return (
		<footer className="mt-5 lg:mt-0 flex justify-center gap-5 py-5 max-lg:gap-2 max-lg:py-3">
      <a
        href="https://threadlocked.xyz/"
        target="_blank"
        rel="noreferrer"
        className="relative inline-flex shrink-0 items-center justify-center rounded-lg p-1"
      >
        <Image
          src="/dark-webring.png"
          alt="ThreadLocked"
          width={112}
          height={40}
          className="h-10 w-28 object-contain"
        />
      </a>
			{socialLinks.map(({ href, label, icon }) => (
				<a
					key={label}
					href={href}
					target={href.startsWith("mailto:") ? undefined : "_blank"}
					rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
					aria-label={label}
					className="group relative inline-flex items-center justify-center gap-3 rounded-lg px-5 py-3 text-base font-medium text-foreground transition-all duration-300 ease-out max-lg:px-3 max-lg:py-2"
				>
					<span className="pointer-events-none absolute inset-0 origin-center scale-x-0 rounded-md bg-foreground/10 opacity-0 transition-all duration-300 ease-out group-hover:scale-x-100 group-hover:opacity-100 dark:bg-accent/40" />
					<Image
						src={icon}
						alt=""
						width={24}
						height={24}
						className="relative z-10 size-6 object-contain dark:invert"
					/>
					<span className="relative z-10 max-lg:hidden">{label}</span>
				</a>
			))}


		</footer>
	);
}