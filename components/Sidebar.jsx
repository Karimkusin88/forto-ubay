"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faUser,
	faFolderOpen,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { useFullPage } from "@alvalens/react-fullpage-snap";
import { motion } from "framer-motion";

const navItems = [
	{ icon: faHome, label: "Go to Home section", anchor: "home" },
	{ icon: faUser, label: "Go to About section", anchor: "about" },
	{ icon: faFolderOpen, label: "Go to Projects section", anchor: "projects" },
	{ icon: faEnvelope, label: "Go to Contact section", anchor: "contact" },
];

const Sidebar = () => {
	const { moveTo, activeIndex } = useFullPage();

	return (
		<motion.div
			initial={{ x: -60, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
			className="hidden md:flex fixed z-40 h-auto w-14 flex-col justify-between items-center p-3 left-4 top-1/2 -translate-y-1/2 rounded-2xl gap-2"
			style={{
				background: "rgba(22, 22, 29, 0.85)",
				backdropFilter: "blur(16px)",
				WebkitBackdropFilter: "blur(16px)",
				border: "1px solid rgba(124, 92, 191, 0.2)",
				boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(124,92,191,0.05)",
			}}>
			{navItems.map(({ icon, label, anchor }, index) => {
				const isActive = activeIndex === index;
				return (
					<motion.button
						key={anchor}
						id={`sidebar-nav-${anchor}`}
						whileHover={{ scale: 1.15 }}
						whileTap={{ scale: 0.9 }}
						onClick={() => moveTo(index)}
						aria-label={label}
						title={label}
						className="relative w-9 h-9 flex items-center justify-center rounded-xl transition-all duration-300 group"
						style={{
							background: isActive
								? "linear-gradient(135deg, #7c5cbf 0%, #a07de0 100%)"
								: "transparent",
							color: isActive ? "#fff" : "rgba(153, 148, 179, 0.7)",
							boxShadow: isActive ? "0 4px 15px rgba(124, 92, 191, 0.4)" : "none",
						}}>
						<FontAwesomeIcon
							icon={icon}
							className="w-4 h-4 transition-colors duration-200"
							style={{
								color: isActive ? "#fff" : "inherit",
							}}
						/>

						{/* Tooltip */}
						<span
							className="absolute left-full ml-3 px-2 py-1 text-xs font-medium rounded-md whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
							style={{
								background: "rgba(22, 22, 29, 0.95)",
								color: "var(--color-text-primary)",
								border: "1px solid rgba(124,92,191,0.2)",
							}}>
							{label.replace("Go to ", "").replace(" section", "")}
						</span>
					</motion.button>
				);
			})}

			{/* Active indicator line */}
			<div
				className="absolute right-1 top-3 bottom-3 w-[2px] rounded-full"
				style={{ background: "rgba(124,92,191,0.15)" }}>
				<motion.div
					className="w-full rounded-full"
					style={{
						background: "linear-gradient(to bottom, #7c5cbf, #a07de0)",
						height: `${100 / navItems.length}%`,
					}}
					animate={{
						y: `${activeIndex * 100}%`,
					}}
					transition={{ type: "spring", stiffness: 200, damping: 25 }}
				/>
			</div>
		</motion.div>
	);
};

export default Sidebar;
