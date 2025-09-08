"use client";

import Image from "next/image";
import heroBg from "../public/assets/home/hero-bg.webp";
import heroImg from "../public/assets/home/hero-img.webp";
import shippingText1 from "../public/assets/home/shipping-icon-1.svg";
import shippingText2 from "../public/assets/home/shipping-icon-2.svg";
import patternHero from "../public/assets/pattern-hero.svg";
import patternHeroMobile from "../public/assets/pattern-hero-mobile.svg";
import Animations from "./Animations";
import Button from "./Button";
import ImageAnimations from "./ImageAnimations";

const HeroSection = () => {
	return (
		<section className="relative overflow-hidden">
			<div className="relative container mx-auto px-4 lg:px-6 z-10">
				<div className="grid lg:grid-cols-12 gap-10 items-start pt-[166px]">
					<div className="col-span-6 xl:col-span-5 lg:pt-20 pb-[200px] sm:pb-[160px] lg:pb-16 xl:pb-32 flex flex-col max-lg:items-center max-lg:justify-center">
						<Animations delay={0.5}>
							<h1
								className="text-white text-[40px] md:text-5xl xl:text-[64px] uppercase pb-5 sm:pb-6 xl:pb-8 lg:max-w-[620px] max-lg:text-center overflow-hidden text-balance"
								id="heading"
							>
								Хаос, забава и хумор, спакувано во една кутија!
							</h1>
						</Animations>
						<Animations delay={0.7}>
							<span className="text-base sm:text-lg xl:text-2xl text-light-300 font-medium max-lg:text-center max-lg:max-w-[400px]">
								Друштвена игра за пиење, инспирана од локалните стереотипи и
								македонската култура!
							</span>
						</Animations>
						<Animations delay={0.7}>
							<div className="w-fit pt-8 xl:pt-10">
								<Button text="Нарачај Сега!" link="#контакт" />
							</div>
						</Animations>
						<Animations delay={0.7}>
							<div className="mt-4 lg:pl-4">
								<Image src={shippingText2} alt="icon" />
							</div>
						</Animations>
					</div>
					<div className="col-span-6 xl:col-span-7 max-lg:hidden h-full w-full">
						<ImageAnimations delay={0.3}>
							<Image
								src={heroImg}
								alt="image of a girl drinking bear"
								className="max-xl:h-full max-xl:w-full max-w-[700px]"
							/>
						</ImageAnimations>
					</div>
				</div>
				<div className="absolute tight-4 lg:right-10 top-32 max-lg:hidden">
					<Image src={shippingText1} alt="icon" />
				</div>
			</div>

			<div className="absolute bottom-0 left-0 z-20 w-full h-auto max-sm:w-[250%]">
				<Image
					src={patternHero}
					alt="icon"
					className="w-full h-auto max-lg:hidden"
				/>
				<Image
					src={patternHeroMobile}
					alt="icon"
					className="w-full h-auto lg:hidden"
				/>
			</div>
			<div className="absolute top-0 left-0 w-full h-full overflow-hidden">
				<Image
					src={heroBg}
					alt="hero image"
					className="h-full w-full object-cover"
					priority
					placeholder="blur"
				/>
			</div>
		</section>
	);
};

export default HeroSection;
