import Footer from "@/components/Footer";

export const metadata = {
  title: "About | Ubays",
  description:
    "Ubay Rahmat Hidayat, Multidisciplinary Builder memadukan keahlian Konstruksi Fisik dan Teknologi Web3. Founder & Lead Contractor IYS Works. Lulusan MA Bani Abi Bakar Bungbulang.",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
