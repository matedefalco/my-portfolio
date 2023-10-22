import { useState } from "react"
import AboutMe from "./components/AboutMe"
import NavBar from "./components/NavBar"
import Portfolio from "./components/Portfolio"
import Presentation from "./components/Presentation"
import Footer from "./components/Footer"
import { motion } from "framer-motion"

const App = () => {
	const pages = ["projects", "skills", "education"]
	const [activePageIndex, setActivePageIndex] = useState<number>(0)

	const handlePageChange = (pageIndex: number) => {
		setActivePageIndex(pageIndex)
		const element = document.getElementById("portfolio")
		if (element) {
			element.scrollIntoView({ behavior: "smooth" })
		}
	}

	return (
		<main className="flex flex-col min-h-screen items-center">
			<NavBar />
			<div className="pt-16 flex flex-col items-center w-full gap-8 bg-[--background-color]">
				<motion.div
					className="flex flex-col w-[80%]"
					initial={{ opacity: 0, x: -200 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 1.5 }}
				>
					<Presentation
						onClick={(pageIndex) => handlePageChange(pageIndex)}
						activePageIndex={activePageIndex}
					/>
				</motion.div>
				<motion.div
					className="flex flex-col w-[80%]"
					initial={{ opacity: 0, x: 200 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 1.5 }}
				>
					<AboutMe />
				</motion.div>
				<motion.div
					className="flex flex-col w-[80%]"
					initial={{ opacity: 0, x: -200 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 1.5 }}
				>
					<Portfolio activePage={pages[activePageIndex]} />
				</motion.div>
				<div className="flex flex-col w-full">
					<Footer />
				</div>
			</div>
		</main>
	)
}

export default App
