"use client";
import Image from "next/image";
import Link from "next/link";
import type { FormEvent } from "react";
import { useState } from "react";
import contactImage from "../public/assets/constact-image.png";
import popupCheck from "../public/assets/popup-check.svg";
import Animations from "./Animations";
import ImageAnimations from "./ImageAnimations";

const ContactSection = () => {
	const [showSuccessPopup, setShowSuccessPopup] = useState(false);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const formData = new FormData(form);

		try {
			const response = await fetch("/", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: new URLSearchParams(formData as any).toString(),
			});

			if (response.ok) {
				form.reset();
				setShowSuccessPopup(true);
			} else {
				console.error("Form submission failed:", response.status);
			}
		} catch (error) {
			console.error("Form submission error:", error);
		}
	};

	const closePopup = () => {
		setShowSuccessPopup(false);
	};

	return (
		<section
			className="relative overflow-hidden bg-accent py-16 md:py-24 lg:py-36"
			id="контакт"
		>
			{/* Hidden form for Netlify detection - IMPORTANT! */}
			<form name="contact" netlify netlify-honeypot="bot-field" hidden>
				<input type="text" name="name" />
				<input type="email" name="email" />
				<input type="text" name="phone" />
				<input type="text" name="city" />
				<input type="text" name="address" />
				<input type="text" name="amount" />
			</form>

			<div className="container mx-auto px-4 lg:px-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 bg-light-100 lg:rounded-xl px-5 md:px-10 py-9 md:py-14">
					<div className="relative h-full w-full overflow-hidden rounded-lg max-lg:hidden">
						<ImageAnimations delay={0.3}>
							<Image
								src={contactImage}
								alt="contact image"
								className="h-full w-full object-cover"
							/>
						</ImageAnimations>
						<div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full">
							<ul className="list-disc flex flex-col gap-1 pl-10 xl:pl-20">
								<Animations delay={0.3}>
									<li className="text-light-100 text-base sm:text-lg">
										Само 690 ден.
									</li>
									<li className="text-light-100 text-base sm:text-lg">
										БЕСПЛАТНА ДОСТАВА Низ цела Македонија!
									</li>
									<li className="text-light-100 text-base sm:text-lg">
										Купи еднаш, играј засекогаш! Бескрајна забавa!
									</li>
								</Animations>
							</ul>
						</div>
					</div>
					<div className="">
						<Animations delay={0.3}>
							<h2 className="text-dark pb-6 uppercase">
								Доста беа досадни вечери!
							</h2>
						</Animations>
						<Animations delay={0.3}>
							<p className="text-[#333333]">
								Време за Пијанархија - Играта што ке посакаш да си ја имал
								порано!
							</p>
						</Animations>
						<form
							name="contact"
							method="POST"
							data-netlify="true"
							data-netlify-honeypot="bot-field"
							onSubmit={handleSubmit}
							className="grid grid-cols-1 sm:grid-cols-5 gap-5 pt-8"
						>
							<input type="hidden" name="form-name" value="contact" />
							<input type="hidden" name="bot-field" />

							<div className="flex flex-col gap-1 sm:col-span-5">
								<Animations delay={0.3}>
									<label htmlFor="name" className="text-dark text-lg">
										Име и Презиме
									</label>
								</Animations>
								<input
									required
									type="text"
									name="name"
									id="name"
									placeholder="ex. Ангел Стојковски "
									className="px-5 py-3 bg-light-300 rounded-[10px] focus outline-accent"
								/>
							</div>
							<div className="flex flex-col gap-1 sm:col-span-3">
								<Animations delay={0.3}>
									<label htmlFor="email" className="text-dark text-lg">
										Е-пошта
									</label>
								</Animations>
								<input
									required
									type="email"
									name="email"
									id="email"
									placeholder="ex. a.stojkovski@gmail.com"
									className="px-5 py-3 bg-light-300 rounded-[10px] focus outline-accent"
								/>
							</div>
							<div className="flex flex-col gap-1 sm:col-span-2">
								<Animations delay={0.3}>
									<label htmlFor="phone" className="text-dark text-lg">
										Тел. број
									</label>
								</Animations>
								<input
									required
									type="text"
									name="phone"
									id="phone"
									placeholder="ex. +389 070 070 070"
									className="px-5 py-3 bg-light-300 rounded-[10px] focus outline-accent"
								/>
							</div>
							<div className="flex flex-col gap-1 sm:col-span-2">
								<Animations delay={0.3}>
									<label htmlFor="city" className="text-dark text-lg">
										Град на живеење
									</label>
								</Animations>
								<input
									required
									type="text"
									name="city"
									id="city"
									placeholder="ex. 1000 Скопје"
									className="px-5 py-3 bg-light-300 rounded-[10px] focus outline-accent"
								/>
							</div>
							<div className="flex flex-col gap-1 sm:col-span-3">
								<Animations delay={0.3}>
									<label htmlFor="address" className="text-dark text-lg">
										Адреса за Достава
									</label>
								</Animations>
								<input
									required
									type="text"
									name="address"
									id="address"
									placeholder="ex. Партизанска 93 / 4-5"
									className="px-5 py-3 bg-light-300 rounded-[10px] focus outline-accent"
								/>
							</div>
							<div className="flex flex-col gap-1 sm:col-span-5">
								<Animations delay={0.3}>
									<label htmlFor="amount" className="text-dark text-lg">
										Количина
									</label>
								</Animations>
								<input
									required
									type="text"
									name="amount"
									id="amount"
									placeholder="ex. 1"
									className="px-5 py-3 bg-light-300 rounded-[10px] focus outline-accent"
								/>
							</div>
							<div className="sm:col-span-5">
								<button
									type="submit"
									className="flex items-center justify-center cursor-pointer w-full bg-accent border border-accent text-xl text-light-100 px-7 py-4 font-bold hover:bg-light-100 hover:text-accent transition-colors duration-300 ease-in-out"
								>
									Оствари нарачка
								</button>
								<div className="sm:col-span-5 pt-6">
									<p className="text-body">
										Бесплатна достава до врата за 1-5 работни дена.
									</p>
									<p className="text-body">
										Исплатата се врши на рака кога ке ви стигне нарачката.
									</p>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>

			{/* Success Popup */}
			{showSuccessPopup && (
				<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
					<div className="bg-light-100 p-8 rounded-lg shadow-lg max-w-md mx-4 relative">
						<button
							type="button"
							onClick={closePopup}
							className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl cursor-pointer"
						>
							×
						</button>
						<div className="text-center">
							<div className="mx-auto flex items-center justify-center pt-10">
								<Image src={popupCheck} alt="check icon" />
							</div>
							<h3 className="text-dark mb-2 text-center uppercase pt-10 pb-5">
								Нарачката е примена!
							</h3>
							<p className="text-body text-center pb-16">
								Ти благодариме! Твојата Пијанархија е во подготовка. Очекувај
								достава за 1–5 дена. Плаќање на рака.
							</p>

							<Link
								href="/"
								className="flex items-center justify-center cursor-pointer w-full bg-[#2DCC70] border border-[#2DCC70] text-xl text-light-100 px-7 py-4 font-bold hover:bg-light-100 hover:text-[#2DCC70] transition-colors duration-300 ease-in-out"
							>
								Назад кон почетна
							</Link>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default ContactSection;
