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
		<footer className="mt-auto flex flex-wrap justify-center gap-5 py-5">
			{socialLinks.map(({ href, label, icon }) => (
				<a
					key={label}
					href={href}
					target={href.startsWith("mailto:") ? undefined : "_blank"}
					rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
					aria-label={label}
					className="relative inline-flex group items-center justify-center gap-3 rounded-lg px-5 py-3 text-base font-medium text-foreground transition-all duration-300 ease-out"
				>
					<span className="absolute inset-0 rounded-md bg-foreground/10 dark:bg-accent/40 scale-90 opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100 pointer-events-none" />
					<Image
						src={icon}
						alt=""
						width={24}
						height={24}
						className="relative z-10 size-6 object-contain dark:invert"
					/>
					<span className="relative z-10">{label}</span>
				</a>
			))}
		</footer>
	);
}