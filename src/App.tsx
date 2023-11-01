import { useState } from "react"
import AboutMe from "./components/AboutMe"
import NavBar from "./components/NavBar"
import Portfolio from "./components/Portfolio"
import Presentation from "./components/Presentation"
import Footer from "./components/Footer"
import { motion } from "framer-motion"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"


const App = () => {
	const pages = ["projects", "skills", "education"]
	const [activePageIndex, setActivePageIndex] = useState<number>(0)
	const [isCardActive, setIsCardActive] = useState<boolean>(false)

	const handlePageChange = (pageIndex: number) => {
		setActivePageIndex(pageIndex)
		const element = document.getElementById("portfolio")
		if (element) {
			element.scrollIntoView({ behavior: "smooth" })
		}
	}

	return (
		<main className="flex flex-col w-full min-h-screen items-center">
			<NavBar />
			<Parallax pages={4} className="w-full flex flex-col items-center">
				<ParallaxLayer sticky={{ start: 0.9, end: 3.5 }}></ParallaxLayer>
				{/* Page 1 */}
				<ParallaxLayer
					offset={0}
					speed={1}
					className="flex flex-col items-center"
				>
					<motion.div
						className="flex flex-col h-full items-center justify-center w-[80%]"
						initial={{ opacity: 0, x: -200 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 1.5 }}
					>
						<Presentation
							onClick={(pageIndex) => handlePageChange(pageIndex)}
							activePageIndex={activePageIndex}
						/>
					</motion.div>
				</ParallaxLayer>
				{/* Page 2 */}
				<ParallaxLayer
					offset={1}
					speed={0.5}
					className="w-full flex flex-col items-center"
				>
					<motion.div
						className="flex flex-col h-full items-center justify-center w-[80%]"
						initial={{ opacity: 0, x: 200 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 1.5 }}
					>
						<AboutMe />
					</motion.div>
				</ParallaxLayer>

				{/* Page 3 */}
				<ParallaxLayer
					offset={2}
					speed={0.5}
					className="w-full flex flex-col items-center"
				>
					<motion.div
						className="flex flex-col h-full items-center justify-center w-[80%]"
						initial={{ opacity: 0, x: -200 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 1.5 }}
					>
						<Portfolio activePage={pages[activePageIndex]} />
					</motion.div>
				</ParallaxLayer>

				{/* Page 4 (Footer) */}
				<ParallaxLayer
					offset={3}
					speed={0.5}
					className="flex flex-col items-center"
				>
					<div className="flex flex-col min-w-full">
						<Footer />
					</div>
				</ParallaxLayer>
			</Parallax>
		</main>
	)
}

export default App
