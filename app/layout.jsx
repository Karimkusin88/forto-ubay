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
	// FIXED: metadataBase sekarang mengarah ke URL deploy lo (ganti dengan URL Vercel lo yang sebenarnya)
	metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://forto-ubay.vercel.app"),
	title: "Ubay Rahmat Hidayat | Portofolio",

	description:
		"Ubay Rahmat Hidayat, Multidisciplinary Builder memadukan keahlian Konstruksi Fisik dan Teknologi Web3. Founder & Lead Contractor IYS Works.",

	author: "Ubay Rahmat Hidayat",

	keywords: [
		"Ubay Rahmat Hidayat",
		"Portfolio",
		"Web Developer",
		"Web3",
		"IYS Works",
		"Konstruksi",
		"Next.js",
	],

	openGraph: {
		title: "Ubay Rahmat Hidayat | Portofolio",
		description:
			"Multidisciplinary Builder — Konstruksi Fisik & Teknologi Web3. Founder & Lead Contractor IYS Works.",
		type: "website",
		locale: "id_ID",
	},

	twitter: {
		card: "summary_large_image",
		title: "Ubay Rahmat Hidayat | Portofolio",
		description: "Multidisciplinary Builder — Konstruksi Fisik & Teknologi Web3.",
	},
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="id"
			className={`${poppins.variable} ${jost.variable}`}>
			<body>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				<Chat />
				<Analytics />
			</body>
		</html>
	);
}
