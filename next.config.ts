/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export", // Ensures static site generation
	trailingSlash: true, // Aligns with Netlify’s static routing
	images: {
		unoptimized: true, // Disables image optimization for static export
	},
	// Disable Turbopack to ensure Webpack is used for stable static export
	experimental: {
		turbo: false,
	},
};

export default nextConfig;
