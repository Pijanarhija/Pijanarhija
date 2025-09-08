interface ButtonProps {
	text: string;
	link: string;
}

const Button = ({ text, link }: ButtonProps) => {
	return (
		<a
			href={link}
			className="flex items-center justify-center w-full bg-dark group"
		>
			<div className="bg-dark w-full h-full relative overflow-hidden px-9 py-3 group-hover:shadow-md group-hover:-rotate-12 transition-all duration-300 ease-in-out">
				<span className="relative z-10 text-white text-lg font-bold group-hover:text-accent transition-colors duration-300 ease-in-out">
					{text}
				</span>

				<div className="absolute bottom-0 left-0 w-full h-0 bg-white group-hover:h-full transition-all duration-300 ease-in-out"></div>
			</div>
		</a>
	);
};

export default Button;
