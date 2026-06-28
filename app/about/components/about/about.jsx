import Image from "next/image";
import Card from "./spotify/card";
import { motion } from "framer-motion";
import Me1 from "@/public/image/ubay1.jpg";
import Me2 from "@/public/image/ubay3.jpg";
import Me3 from "@/public/image/ubay2.jpg";
import Hr from "@/components/Hr";

function Title() {
	return (
		<div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start ">
				<Hr variant="long"></Hr>
				<h1 className="text-3xl font-bold mt-3">Who Am I?</h1>
			</div>
		</div>
	);
}

export default function About() {
	return (
		<>
			<Title />
			<div className="relative mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
				<div className="flex justify-center items-start flex-col mb-5 ">
					<div className="images relative w-full  aspect-square">
						<div className="absolute top-28 left-10 w-[50%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{ opacity: 0, scale: 0.5, x: 100 }}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								className="relative w-full h-full">
								<Image
									src={Me1}
									alt="Ubays"
									fill
									sizes="(max-width: 768px) 80vw, 40vw"
									className="object-cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
						<div className="absolute top-16 right-28 w-[30%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									x: -100,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								transition={{ delay: 0.3 }}
								className="relative w-full h-full">
								<Image
									src={Me2}
									alt="Ubays"
									fill
									sizes="(max-width: 768px) 60vw, 25vw"
									className="object-cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
						<div className="absolute bottom-16 right-20 w-[40%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									x: -100,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								transition={{
									delay: 0.5,
								}}
								className="relative w-full h-full">
								<Image
									src={Me3}
									alt="Ubays"
									fill
									sizes="(max-width: 768px) 80vw, 35vw"
									className="object-cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
					</div>
				</div>
				<motion.div
					className="flex justify-center items-start flex-col mb-5 md:px-10"
					initial={{
						opacity: 0,
						x: 200,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						delay: 0.5,

						type: "spring",
					}}>
					<h2 className="text-2xl font-bold tracking-wider mb-3">
						Ubay Rahmat Hidayat
					</h2>
					<p className="text-gray-300 text-justify title text-lg leading-relaxed">
						Saya adalah seorang{" "}
						<span className="text-white font-medium">
							Multidisciplinary Builder
						</span>{" "}
						yang menggabungkan keahlian fisik (hard-skills lapangan) dengan teknologi digital secara otodidak. Memulai karir di dunia konstruksi tepat setelah lulus Madrasah Aliyah pada 2015, saya tidak segan terjun langsung menangani proyek kelistrikan, *drywall*, dan pemeliharaan interior.
						<br />
						<br />
						Jam terbang yang panjang membawa saya dipercaya terlibat dalam mega-proyek berskala nasional di bawah naungan BUMN seperti{" "}
						<span className="text-white font-medium">
							PT Adhi Karya
						</span>{" "}
						dan{" "}
						<span className="text-white font-medium">
							PT Waskita Karya
						</span>
						, serta PLTU Lombok. Kini, saya menuangkan pengalaman kepemimpinan lapangan tersebut dengan mendirikan bisnis kontraktor mandiri,{" "}
						<span className="text-white font-medium">
							IYS Works
						</span>.
						<br />
						<br />
						Meski berakar di dunia konstruksi fisik, rasa ingin tahu yang tinggi mendorong saya belajar memprogram. Berbekal mental pekerja keras, saya berhasil merancang dan mendeploy berbagai Decentralized Apps (DApps), Staking Dashboards, hingga antarmuka DEX berbasis Web3. Bagi saya, baik menginstalasi kelistrikan rumit maupun menulis kode *React*, intinya tetap sama:{" "}
						<span className="text-white font-medium">
							membangun pondasi yang kokoh dan memberikan solusi yang nyata.
						</span>
					</p>
					<Card />
				</motion.div>
			</div>
		</>
	);
}
