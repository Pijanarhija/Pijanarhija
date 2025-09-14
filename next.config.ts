/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export", // Enables static site generation
	trailingSlash: true, // Ensures compatibility with Netlify's routing
	images: {
		unoptimized: true, // Disables Next.js image optimization for static export
	},
};

export default nextConfig;
