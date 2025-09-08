import Image from "next/image";
import checkIcon from "../public/assets/check.svg";
import whatYouGetImage from "../public/assets/what-you-get.webp";
import whatYouGetMobile from "../public/assets/what-you-get-mobile.webp";
import Animations from "./Animations";
import ImageAnimations from "./ImageAnimations";

interface WhatYouGet {
	text: string;
	id: number;
}

const whatYouGetData: WhatYouGet[] = [
	{
		id: 1,
		text: "70+ Уникатно илустрирани карти полни со локален хумор, и предизвици!",
	},
	{
		id: 2,
		text: "Игра која не здосадува! Секоја партија носи ново искуство и забава!",
	},
	{
		id: 3,
		text: "Совршена за родендени, викенди, собиранки и дружби!",
	},
	{
		id: 4,
		text: "Совршен поклон за ваш другар\\ка, партнер!",
	},
];

const WhatYouGet = () => {
	return (
		<section className="relative overflow-hidden bg-accent py-16 md:py-24 lg:py-36">
			<div className="container mx-auto px-4 lg:px-6">
				<div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
					<div className="lg:col-span-5">
						<Animations delay={0.3}>
							<h2 className="uppercase text-light-100 pb-12">Што добиваш?</h2>
						</Animations>
						<div className="flex flex-col gap-4">
							{whatYouGetData.map((data: WhatYouGet) => (
								<div key={data.id} className="flex items-start gap-4">
									<Animations delay={0.3}>
										<Image src={checkIcon} alt="check icon" />
									</Animations>
									<Animations delay={0.3}>
										<p className="text-light-300">{data.text}</p>
									</Animations>
								</div>
							))}
						</div>
					</div>
					<div className="lg:col-span-7">
						<ImageAnimations delay={0.3}>
							<Image
								src={whatYouGetImage}
								alt="image of the cards"
								className="w-full h-auto max-lg:hidden"
							/>
						</ImageAnimations>
						<ImageAnimations delay={0.3}>
							<Image
								src={whatYouGetMobile}
								alt="image of the cards"
								className="w-full h-auto lg:hidden"
							/>
						</ImageAnimations>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhatYouGet;
