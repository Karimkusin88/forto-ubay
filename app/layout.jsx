import "./globals.css";
import { Poppins, Jost } from "next/font/google";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { Analytics } from "@vercel/analytics/react";
import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	style: ["normal", "italic"],
	display: "swap",
	variable: "--font-poppins",
});

const jost = Jost({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
	variable: "--font-jost",
});

export const metadata = {
	metadataBase: new URL("https://github.com/Karimkusin88"),
	title: "Ubay Rahmat Hidayat | Portofolio",

	description:
		"Ubay Rahmat Hidayat, Multidisciplinary Builder memadukan keahlian Konstruksi Fisik dan Teknologi Web3. Founder & Lead Contractor IYS Works.",

	author: "Ubay Rahmat Hidayat",
	siteUrl: "https://github.com/Karimkusin88",
	applicationName: "Ubay Rahmat Hidayat",

	keywords: [
		"ubay",
		"ubays",
		"karimkusin88",
		"porto-ubay",
	],

	openGraph: {
		type: "website",
		url: "https://github.com/Karimkusin88",
		title: "Ubay Rahmat Hidayat | Portofolio",
		siteName: "Ubay Rahmat Hidayat | Portofolio",
		description: "My name is Ubay Rahmat Hidayat, This is my portofolio website.",
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Ubays Portofolio",
				width: 1200,
				height: 630,
			},
		],
	},
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Ubay Rahmat Hidayat",
	url: "https://github.com/Karimkusin88",
	jobTitle: "Multidisciplinary Builder",
	worksFor: [
		{ "@type": "Organization", name: "IYS Works" }
	],
	alumniOf: {
		"@type": "HighSchool",
		name: "MA Bani Abi Bakar Bungbulang",
	},
	sameAs: [
		"https://github.com/Karimkusin88"
	],
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${poppins.variable} ${jost.variable}`}>
			<body>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				<Chat />
				<Analytics />
			</body>
		</html>
	);
}
