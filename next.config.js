/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**.githubusercontent.com',
			},
			{
				protocol: 'https',
				hostname: '**.googleusercontent.com',
			},
		],
	},
}

//lh3.googleusercontent.com

module.exports = nextConfig
