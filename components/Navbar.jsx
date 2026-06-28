"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const navVariant = {
	open: {
		clipPath: "circle(2000px at calc(100% - 40px) 40px)",
		transition: {
			type: "tween",
			duration: 0.5,
			ease: [0.22, 1, 0.36, 1],
		},
	},
	closed: {
		clipPath: "circle(0px at calc(100% - 40px) 40px)",
		transition: {
			delay: 0.3,
			type: "tween",
			duration: 0.3,
			ease: [0.4, 0, 1, 1],
		},
	},
};

const itemVariants = {
	open: (custom) => ({
		opacity: 1,
		x: 0,
		transition: {
			delay: custom,
			type: "tween",
			duration: 0.3,
			ease: [0.22, 1, 0.36, 1],
		},
	}),
	closed: {
		opacity: 0,
		x: -80,
		transition: {
			type: "tween",
			duration: 0.2,
		},
	},
};

const navLinks = [
	{ href: "/", label: "Home", delay: 0.1 },
	{ href: "/about", label: "About", delay: 0.18 },
	{ href: "/projects", label: "Projects", delay: 0.26 },
	{ href: "/#contact", label: "Contact", delay: 0.34 },
];

const NavItems = ({ isNavOpen, setIsNavOpen }) => {
	const handleItemClick = () => {
		setIsNavOpen(false);
	};

	return (
		<>
			<motion.div
				className={`fixed z-[45] w-full h-screen flex items-center justify-center overflow-hidden`}
				variants={navVariant}
				animate={isNavOpen ? "open" : "closed"}
				initial={false}>
				{/* IMPROVED: Dark overlay dengan accent gradient, bukan plain gray-700 */}
				<div
					className="relative flex flex-col items-center space-x-8 min-h-[100vh] min-w-[100vw]"
					style={{
						background: "linear-gradient(135deg, #0f0f13 0%, #1a1426 60%, #0f0f13 100%)",
						opacity: 0.97,
					}}>
					{/* Decorative glow orb */}
					<div
						className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
						style={{
							background: "radial-gradient(circle, rgba(124,92,191,0.15) 0%, transparent 70%)",
						}}
					/>

					<div className="flex flex-col items-center justify-center min-h-screen gap-10 z-10">
						{/* Nav Logo / Name */}
						<motion.div
							custom={0.05}
							variants={itemVariants}
							animate={isNavOpen ? "open" : "closed"}
							className="mb-4 text-center">
							<span
								className="text-xs uppercase tracking-[8px] font-medium"
								style={{ color: "var(--color-accent-light)" }}>
								Navigation
							</span>
						</motion.div>

						{/* Nav Links */}
						<nav className="flex flex-col items-center gap-6">
							{navLinks.map(({ href, label, delay }) => (
								<motion.div
									key={href}
									custom={delay}
									variants={itemVariants}
									animate={isNavOpen ? "open" : "closed"}>
									<Link
										href={href}
										onClick={handleItemClick}
										className="group relative text-4xl md:text-5xl font-semibold transition-colors duration-300"
										style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-jost)" }}>
										<span className="group-hover:text-white transition-colors duration-300">
											{label}
										</span>
										{/* Accent underline on hover */}
										<span
											className="absolute -bottom-1 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300"
											style={{ background: "var(--gradient-accent)" }}
										/>
									</Link>
								</motion.div>
							))}
						</nav>

						{/* Social links in nav */}
						<motion.div
							custom={0.45}
							variants={itemVariants}
							animate={isNavOpen ? "open" : "closed"}
							className="mt-8 flex gap-6">
							<a
								href="https://github.com/Karimkusin88"
								target="_blank"
								rel="noopener noreferrer"
								className="text-sm transition-colors duration-300"
								style={{ color: "var(--color-text-muted)" }}
								onMouseEnter={(e) => (e.target.style.color = "var(--color-accent-light)")}
								onMouseLeave={(e) => (e.target.style.color = "var(--color-text-muted)")}>
								GitHub
							</a>
							<span style={{ color: "var(--color-text-muted)" }}>·</span>
							<a
								href="https://linkedin.com/in/ubayrahmathidayat"
								target="_blank"
								rel="noopener noreferrer"
								className="text-sm transition-colors duration-300"
								style={{ color: "var(--color-text-muted)" }}
								onMouseEnter={(e) => (e.target.style.color = "var(--color-accent-light)")}
								onMouseLeave={(e) => (e.target.style.color = "var(--color-text-muted)")}>
								LinkedIn
							</a>
						</motion.div>
					</div>
				</div>
			</motion.div>

			{/* Close backdrop */}
			{isNavOpen && (
				<div
					className="fixed inset-0 z-[44]"
					onClick={handleItemClick}
				/>
			)}
		</>
	);
};

const Navbar = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<>
			<NavItems
				isNavOpen={isNavOpen}
				setIsNavOpen={setIsNavOpen}
			/>

			{/* IMPROVED: Navbar top bar dengan glassmorphism */}
			<nav
				className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4"
				style={{
					background: isNavOpen
						? "transparent"
						: "linear-gradient(to bottom, rgba(15,15,19,0.95) 0%, rgba(15,15,19,0) 100%)",
					transition: "background 0.3s ease",
				}}>
				{/* Logo / Name */}
				<Link
					href="/"
					className="relative z-[46] text-sm font-semibold tracking-widest uppercase transition-colors duration-300"
					style={{ color: isNavOpen ? "var(--color-text-primary)" : "var(--color-text-primary)" }}>
					<span style={{ color: "var(--color-accent-light)" }}>U</span>bay
				</Link>

				{/* Burger Button */}
				<button
					id="navbar-toggle"
					className="relative z-[46] flex flex-col justify-center items-center gap-[5px] w-8 h-8 cursor-pointer group"
					onClick={() => setIsNavOpen((prev) => !prev)}
					aria-label="Toggle navigation menu"
					aria-expanded={isNavOpen}>
					<span
						className="block h-[2px] w-6 transition-all duration-300 rounded-full"
						style={{
							background: "var(--color-text-primary)",
							transform: isNavOpen ? "translateY(7px) rotate(45deg)" : "none",
						}}
					/>
					<span
						className="block h-[2px] w-4 transition-all duration-300 rounded-full"
						style={{
							background: "var(--color-accent-light)",
							opacity: isNavOpen ? 0 : 1,
							transform: isNavOpen ? "scaleX(0)" : "none",
						}}
					/>
					<span
						className="block h-[2px] w-6 transition-all duration-300 rounded-full"
						style={{
							background: "var(--color-text-primary)",
							transform: isNavOpen ? "translateY(-7px) rotate(-45deg)" : "none",
						}}
					/>
				</button>
			</nav>
		</>
	);
};

export default Navbar;
