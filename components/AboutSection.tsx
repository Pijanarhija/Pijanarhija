import Image from "next/image";
import aboutImage from "../public/assets/about-image.webp";
import aboutText from "../public/assets/about-the-game-text.svg";
import Animations from "./Animations";
import ImageAnimations from "./ImageAnimations";

interface AboutData {
	id: number;
	title: string;
	text: string;
	delay: number;
}
const aboutData: AboutData[] = [
	{
		id: 1,
		title: "Што е Пијанархија?",
		text: "Пијанархија е друштвена игра со карти за пиење инспирирана од локалните стереотипи кои ги среќаваме во нашето секојдневие.",
		delay: 0.3,
	},
	{
		id: 2,
		title: "Приказната",
		text: "Добредојде во држава водена од алкохол, галама и хумор. Премиерот е исчезнат, законите не важат и сите имаат теорија за сé. Бабата се кара во бус, шмизлата се слика а гасерот се трка по булевари.",
		delay: 0.4,
	},
	{
		id: 3,
		title: "Твојата Мисија",
		text: "Во овој хаос, ти и твоето друштво мора да ги преживеете правилата кои останаа да важат, а тоа се правилата на народот. Издржи до крај со пијачка во рака, карти на маса и мноооогу смеење!",
		delay: 0.5,
	},
];

const AboutSection = () => {
	return (
		<section className="py-16 md:py-24 lg:py-36" id="за-играта">
			<div className="container mx-auto px-4 lg:px-6">
				<div className="grid lg:grid-cols-2 xl:grid-cols-11 gap-[67px] lg:gap-2 items-center">
					<div className="xl:col-span-5">
						<ImageAnimations delay={0.5}>
							<Image
								src={aboutImage}
								alt="deck of cards"
								className="max-sm:scale-105"
							/>
						</ImageAnimations>
					</div>
					<div className="relative xl:col-span-6 flex flex-col gap-6 xl:gap-8">
						<div className="lg:absolute lg:-top-10 lg:-left-12">
							<Image src={aboutText} alt="icon" />
						</div>
						{aboutData.map((data: AboutData) => (
							<div key={data.id} className="">
								<Animations delay={data.delay}>
									<h3 className="text-accent uppercase pb-3">{data.title}</h3>
									<p className="text-[#333333]">{data.text}</p>
								</Animations>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
