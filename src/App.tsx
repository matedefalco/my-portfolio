import { useState } from "react"
import AboutMe from "./components/AboutMe"
import NavBar from "./components/NavBar"
import Portfolio from "./components/Portfolio"
import Presentation from "./components/Presentation"
import Footer from "./components/Footer"
import { motion } from "framer-motion"
// import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax"

const App = () => {
	const pages = ["projects", "skills", "education"]
	const [activePageIndex, setActivePageIndex] = useState<number>(0)
	// const parallax = useRef<IParallax>(null!)

	const handlePageChange = (pageIndex: number) => {
		setActivePageIndex(pageIndex)
		const element = document.getElementById("portfolio")
		if (element) {
			element.scrollIntoView({ behavior: "smooth" })
		}
	}

	return (
		<main className="flex flex-col w-full min-h-screen items-center gap-16">
			<NavBar />

			{/* Page 1 */}
			<motion.div
				className="flex flex-col w-[80%] items-center h-full gap-8 "
				initial={{ opacity: 0, x: -200 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 1.5 }}
			>
				<Presentation
					onClick={(pageIndex) => handlePageChange(pageIndex)}
					activePageIndex={activePageIndex}
				/>
			</motion.div>

			{/* Page 2 */}
			<motion.div
				className="flex flex-col h-full items-center justify-center w-[80%]"
				initial={{ opacity: 0, x: 200 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 1.5 }}
			>
				<AboutMe />
			</motion.div>

			{/* Page 3 */}
			<motion.div
				className="flex flex-col h-full items-center justify-center w-[80%]"
				initial={{ opacity: 0, x: -200 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 1.5 }}
			>
				<Portfolio activePage={pages[activePageIndex]} />
			</motion.div>

			{/* Page 4 (Footer) */}
			<div className="flex flex-col min-w-full justify-end">
				<Footer />
			</div>
		</main>
	)
}

export default App
