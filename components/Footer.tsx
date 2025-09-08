import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import logo from "../public/assets/logo.png";
import Animations from "./Animations";
import Button from "./Button";
import ImageAnimations from "./ImageAnimations";

const footerLinks = [
	{
		id: 1,
		label: "За Играта",
		link: "#за-играта",
	},
	{
		id: 2,
		label: "Карактери",
		link: "#карактери",
	},
	{
		id: 3,
		label: "Како се Игра",
		link: "#како-се-игра",
	},
	{
		id: 4,
		label: "Цена и Достава",
		link: "#цена-и-достава",
	},
	{
		id: 5,
		label: "Контакт",
		link: "#контакт",
	},
];

const Footer = () => {
	return (
		<footer className="bg-accent overflow-x-hidden">
			<div className="container mx-auto px-4 lg:px-6 py-16 md:py-24 lg:py-36">
				<div className="flex flex-col md:flex-row items-start md:justify-between gap-10">
					<div className="">
						<ImageAnimations delay={0.3}>
							<Image src={logo} alt="company logo" />
						</ImageAnimations>
						<Animations delay={0.3}>
							<p className="pt-4 text-white/80 max-w-[500px]">
								Бесплатна достава до врата за 1-5 работни дена. Исплатата се
								врши на рака кога ке ви стигне нарачката.
							</p>
						</Animations>

						<div className="w-fit pt-8">
							<Button text="Нарачај Сега!" link="#контакт" />
						</div>
					</div>
					<div className="flex flex-col gap-12">
						<div className="grid max-[550px]:grid-cols-1 grid-cols-3 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-6 gap-x-6 xl:gap-x-16">
							{footerLinks.map((link) => (
								<a
									key={link.id}
									href={link.link}
									className="text-xl font-semibold text-white/80 hover:text-white transition-colors duration-300 ease-in-out"
								>
									<Animations delay={0.3}>
										<span>{link.label}</span>
									</Animations>
								</a>
							))}
						</div>
						<div className="flex max-[550px]:flex-col max-[550px]:items-start items-center justify-between max-[550px]:gap-6 gap-4">
							<div className="flex gap-4">
								<Link href="#">
									<Animations delay={0.3}>
										<IoLogoInstagram className="text-3xl text-white/80 hover:text-white transition-colors duration-300 ease-in-out" />
									</Animations>
								</Link>
								<Link href="#">
									<Animations delay={0.3}>
										<FaTiktok className="text-3xl text-white/80 hover:text-white transition-colors duration-300 ease-in-out" />
									</Animations>
								</Link>
								<Link href="#">
									<Animations delay={0.3}>
										<FaFacebook className="text-3xl text-white/80 hover:text-white transition-colors duration-300 ease-in-out" />
									</Animations>
								</Link>
							</div>

							<Link
								href="mailto:pijanarhija@gmail.com"
								className="text-base sm:text-lg text-white/80 hover:text-white font-semibold transition-colors duration-300 ease-in-out"
							>
								pijanarhija@gmail.com
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
