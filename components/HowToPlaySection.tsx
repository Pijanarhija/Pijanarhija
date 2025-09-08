import Image from "next/image";
import howToPlayText from "../public/assets/how-to-play-text.svg";
import howToPlayTextMobile from "../public/assets/how-to-play-text-mobile.svg";
import Animations from "./Animations";

interface HowToPlay {
	id: number;
	number: string;
	text: string;
}

const howToPlayData: HowToPlay[] = [
	{
		id: 1,
		number: "1",
		text: "Шпилот стави го во средина со лицето надолу.",
	},
	{
		id: 2,
		number: "2",
		text: "Кругот се движи во насока на часовникот, а прв почнува на овој кој најбргу му се ближи роденден.",
	},
	{
		id: 3,
		number: "3",
		text: "Извлечи карта. Прочитај ја на глас. Направи го тоа што го кажува картата.",
	},
	{
		id: 4,
		number: "4",
		text: "Оној кој најмногу ке испие на крај ја добива титулата “Пијанархист”.",
	},
	{
		id: 5,
		number: "5",
		text: "Дополнитени правила во правилникот на самата игра.",
	},
];

const HowToPlaySection = () => {
	return (
		<section className="py-16 md:py-24 lg:py-36" id="како-се-игра">
			<div className="container mx-auto px-4 lg:px-6 max-w-[700px]">
				<div className="relative lg:w-fit">
					<Animations delay={0.3}>
						<h2 className="uppercase text-dark max-w-[383px]">
							Како се игра пијандисани?
						</h2>

						<div className="absolute max-lg:bottom-1/2 max-lg:translate-y-1/2 lg:-bottom-12 right-0 sm:right-[30%] lg:-right-6 max-[400px]:hidden">
							<Image src={howToPlayText} alt="icon" className="max-lg:hidden" />
							<Image
								src={howToPlayTextMobile}
								alt="icon"
								className="lg:hidden"
							/>
						</div>
					</Animations>
				</div>

				<div className="grid grid-cols-1 gap-8 pt-10 lg:pt-20">
					{howToPlayData.map((data) => (
						<div key={data.id} className="flex items-center gap-4 lg:gap-6">
							<div className="size-[36px] sm:size-[55px] flex items-center flex-shrink-0 justify-center bg-accent rounded-md md:rounded-2xl xl:rounded-[22px]">
								<Animations delay={0.2}>
									<h6 className="text-white text-xl sm:text-4xl">
										{data.number}
									</h6>
								</Animations>
							</div>

							<Animations delay={0.3}>
								<p className="text-[#333333] text-balance">{data.text}</p>
							</Animations>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HowToPlaySection;
