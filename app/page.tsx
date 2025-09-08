import Image from "next/image";
import AboutSection from "@/components/AboutSection";
import CharactersSection from "@/components/CharactersSection";
import ContactSection from "@/components/ContactSection";
import FaqSection from "@/components/FaqSection";
import HeroSection from "@/components/HeroSection";
import HowToPlaySection from "@/components/HowToPlaySection";
import InfoSection from "@/components/InfoSection";
import SponsorSection from "@/components/SponsorSection";
import WhatYouGet from "@/components/WhatYouGet";
import aboutPattern from "../public/assets/about-pattern.webp";
import cardsPattern from "../public/assets/cards-pattern.webp";
import contactPattern from "../public/assets/contact-pattern.webp";
import howtoplayPattern from "../public/assets/howtoplay-pattern.webp";
import infoPattern from "../public/assets/info-pattern.webp";
import sponsorPattern from "../public/assets/sponsor-pattern.webp";
import whatyougetPattern from "../public/assets/whatyouget-pattern.webp";

export default function Home() {
	return (
		<main>
			<HeroSection />
			<AboutSection />
			<section className="bg-accent">
				<Image
					src={aboutPattern}
					alt="paper pattern"
					className="h-auto w-full max-sm:w-[200%]"
				/>
			</section>
			<CharactersSection />
			<section className="bg-accent">
				<Image
					src={cardsPattern}
					alt="paper pattern"
					className="h-auto w-full max-sm:w-[400%]"
				/>
			</section>
			<HowToPlaySection />
			<section className="bg-accent">
				<Image
					src={howtoplayPattern}
					alt="paper pattern"
					className="h-auto w-full max-sm:w-[200%]"
				/>
			</section>
			<WhatYouGet />
			<section className="bg-accent">
				<Image
					src={whatyougetPattern}
					alt="paper pattern"
					className="h-auto w-full max-sm:w-[400%]"
				/>
			</section>
			<InfoSection />
			<section className="bg-accent">
				<Image
					src={infoPattern}
					alt="paper pattern"
					className="h-auto w-full max-sm:w-[200%]"
				/>
			</section>
			<ContactSection />
			<section className="bg-accent">
				<Image
					src={contactPattern}
					alt="paper pattern"
					className="h-auto w-full max-sm:w-[400%]"
				/>
			</section>
			<FaqSection />
			<SponsorSection />
			<section className="bg-accent">
				<Image
					src={sponsorPattern}
					alt="paper pattern"
					className="h-auto w-full max-sm:w-[400%]"
				/>
			</section>
		</main>
	);
}
