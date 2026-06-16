// components/Chat.jsx
"use client"
import Link from "next/link";

// Simple static chat button that opens an email to the site owner.
export default function Chat() {
	return (
		<div style={{ position: "fixed", right: 16, bottom: 16, zIndex: 50 }}>
			<Link
				href="mailto:ubayrahmat@iys.works?subject=Halo&body=Hai%20Ubay,"
				aria-label="Kirim email ke Ubay"
				legacyBehavior
			>
				<a
					style={{
						display: "flex",
						alignItems: "center",
						gap: 10,
						padding: "12px 16px",
						background: "#111827",
						color: "#fff",
						borderRadius: 9999,
						boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
						textDecoration: "none",
						fontWeight: 600,
					}}
				>
					<span style={{ width: 40, height: 40, borderRadius: 9999, background: "#fff", color: "#111827", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>UB</span>
					<span>Butuh bantuan?</span>
				</a>
			</Link>
		</div>
	);
}
