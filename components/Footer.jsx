"use client";
import { motion } from "framer-motion";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
	const socialLinks = [
		{ icon: faGithub, href: "https://github.com/Karimkusin88", label: "GitHub" },
		{ icon: faLinkedin, href: "https://linkedin.com/in/ubayrahmathidayat", label: "LinkedIn" },
		{ icon: faInstagram, href: "https://instagram.com/ubay.rh", label: "Instagram" },
	];

	return (
		<footer
			className="flex flex-col items-center mt-5 overflow-hidden"
			style={{ color: "var(--color-text-secondary)" }}>
			{/* CTA Section */}
			<div
				className="flex flex-col items-center justify-center min-h-[50vh] relative w-full"
				style={{ borderBottom: "1px solid var(--color-border)" }}>
				{/* Background glow */}
				<div
					className="absolute inset-0 pointer-events-none"
					style={{
						background:
							"radial-gradient(ellipse at center bottom, rgba(124,92,191,0.08) 0%, transparent 60%)",
					}}
				/>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-xs uppercase tracking-[6px] mb-4"
					style={{ color: "var(--color-accent-light)" }}>
					Let&apos;s Connect
				</motion.p>

				<Link href="/#contact">
					<motion.h2
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.1 }}
						viewport={{ once: true }}
						whileHover={{ scale: 1.02 }}
						className="text-3xl md:text-5xl lg:text-6xl font-bold text-center leading-tight tracking-tight transition-colors duration-300 group flex items-center gap-4"
						style={{ color: "var(--color-text-primary)", fontFamily: "var(--font-jost)" }}>
						<span className="hover:text-white transition-colors duration-300">
							Ada project keren?
						</span>
						<motion.span
							className="inline-flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full flex-shrink-0"
							whileHover={{ x: 6 }}
							style={{ background: "linear-gradient(135deg, #7c5cbf, #a07de0)" }}>
							<FontAwesomeIcon
								icon={faArrowRight}
								className="w-4 h-4 md:w-5 md:h-5 text-white"
							/>
						</motion.span>
					</motion.h2>
				</Link>

				<motion.p
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					viewport={{ once: true }}
					className="mt-6 text-sm text-center max-w-md"
					style={{ color: "var(--color-text-muted)" }}>
					Gue terbuka buat kolaborasi, freelance, atau sekadar ngobrol soal tech & konstruksi.
				</motion.p>
			</div>

			{/* Bottom Footer */}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.2 }}
				viewport={{ once: true }}
				className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-4 px-8 py-8">
				{/* Copyright */}
				<p
					className="text-xs"
					style={{ color: "var(--color-text-muted)" }}>
					© 2025 Ubay Rahmat Hidayat. All rights reserved.
				</p>

				{/* Social Icons */}
				<div className="flex items-center gap-5">
					{socialLinks.map(({ icon, href, label }) => (
						<motion.a
							key={label}
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={label}
							whileHover={{ y: -3, scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							className="transition-colors duration-300"
							style={{ color: "var(--color-text-muted)" }}
							onMouseEnter={(e) =>
								(e.currentTarget.style.color = "var(--color-accent-light)")
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.color = "var(--color-text-muted)")
							}>
							<FontAwesomeIcon
								icon={icon}
								className="w-5 h-5"
							/>
						</motion.a>
					))}
				</div>

				{/* Made with */}
				<p
					className="text-xs flex items-center gap-1"
					style={{ color: "var(--color-text-muted)" }}>
					Made with
					<span style={{ color: "#e84393" }}>♥</span>
					using Next.js
				</p>
			</motion.div>
		</footer>
	);
}
