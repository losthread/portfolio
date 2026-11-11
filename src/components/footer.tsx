import Image from "next/image";

const socialLinks = [
	{
		href: "https://github.com/losthread",
		label: "GitHub",
		icon: "/github.svg",
		invertInDark: true,
	},
	{
		href: "https://x.com/losthr3ad",
		label: "Twitter",
		icon: "/twitter.svg",
		invertInDark: true,
	},
	{
		href: "mailto:Parthnaik.office@gmail.com",
		label: "Mail",
		icon: "/mail.svg",
		invertInDark: true,
	},
	{
		href: "https://discord.com/users/1187065490867245146",
		label: "Discord",
		icon: "/discord.svg",
		invertInDark: false,
	},
];

export default function Footer() {
	return (
		<footer className="lg:mt-4 flex flex-col justify-center gap-4 max-lg:gap-4 max-lg:py-3">
			<section className="flex w-full min-w-0 flex-row flex-wrap items-center justify-center gap-8">
				{socialLinks.map(({ href, label, icon, invertInDark }) => (
					<a
						key={label}
						href={href}
						target={href.startsWith("mailto:") ? undefined : "_blank"}
						rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
						aria-label={label}
						className="group relative inline-flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-base font-medium text-foreground transition-all duration-300 ease-out max-lg:px-3 max-lg:py-2"
					>
						<span className="pointer-events-none absolute inset-0 origin-center scale-x-0 rounded-md bg-foreground/10 opacity-0 transition-all duration-300 ease-out group-hover:scale-x-100 group-hover:opacity-100 dark:bg-accent/40" />
						<Image
							src={icon}
							alt=""
							width={24}
							height={24}
							className={`relative z-10 size-7 lg:size-7 object-contain${invertInDark ? " dark:invert" : ""}`}
						/>
						<span className="relative z-10 max-lg:hidden">{label}</span>
					</a>
				))}
			</section>

			<section className="flex items-center justify-center gap-5 lg:gap-7">
				<a href="https://ring.seggs.lol/redirect?from=losthread&dir=prev" className="font-sans dark:font-jetbrains-mono underline lg:no-underline text-sm lg:text-base text-muted-foreground px-3 py-2 transition-colors hover:text-black hover:dark:text-white hover:-translate-y-px transition-all:ease-out">← prev</a>
				<a href="https://ring.seggs.lol/random" className="font-sans dark:font-jetbrains-mono underline lg:no-underline text-sm lg:text-base text-muted-foreground px-3 py-2 transition-colors hover:text-black hover:dark:text-white hover:-translate-y-px transition-all:ease-out">random</a>
				<a href="https://ring.seggs.lol/redirect?from=losthread&dir=next" className="font-sans dark:font-jetbrains-mono underline lg:no-underline text-sm lg:text-base text-muted-foreground px-3 py-2 transition-colors hover:text-black hover:dark:text-white hover:-translate-y-px transition-all:ease-out">next →</a>
			</section>
		</footer>
	);
}