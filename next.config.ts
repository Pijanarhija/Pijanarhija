/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export", // Enables static site generation
	trailingSlash: true, // Ensures compatibility with Netlify routing
	images: {
		unoptimized: true, // Disables image optimization for static export
	},
};

export default nextConfig;
