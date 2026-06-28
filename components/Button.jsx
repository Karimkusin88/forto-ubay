// IMPROVED Button component with premium accent styling
const Button = ({ children, variation, ...props }) => (
	<button
		{...props}
		className={`relative font-semibold rounded-xl px-8 py-2.5 transition-all duration-300 ease-in-out overflow-hidden group ${
			variation === "primary"
				? "text-white shadow-lg"
				: "border text-sm"
		}`}
		style={
			variation === "primary"
				? {
						background: "linear-gradient(135deg, #7c5cbf 0%, #a07de0 100%)",
						boxShadow: "0 4px 20px rgba(124, 92, 191, 0.35)",
					}
				: {
						borderColor: "rgba(124, 92, 191, 0.4)",
						color: "var(--color-accent-light)",
						background: "transparent",
					}
		}
		onMouseEnter={(e) => {
			if (variation === "primary") {
				e.currentTarget.style.boxShadow = "0 6px 28px rgba(124, 92, 191, 0.55)";
				e.currentTarget.style.transform = "translateY(-1px)";
			} else {
				e.currentTarget.style.borderColor = "rgba(124, 92, 191, 0.8)";
				e.currentTarget.style.background = "rgba(124, 92, 191, 0.1)";
			}
		}}
		onMouseLeave={(e) => {
			if (variation === "primary") {
				e.currentTarget.style.boxShadow = "0 4px 20px rgba(124, 92, 191, 0.35)";
				e.currentTarget.style.transform = "translateY(0)";
			} else {
				e.currentTarget.style.borderColor = "rgba(124, 92, 191, 0.4)";
				e.currentTarget.style.background = "transparent";
			}
		}}>
		{/* Shimmer effect for primary button */}
		{variation === "primary" && (
			<span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none" />
		)}
		<span className="relative z-10">{children}</span>
	</button>
);

export default Button;
