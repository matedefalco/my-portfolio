import { useState } from "react"
import AboutMe from "./components/AboutMe"
import NavBar from "./components/NavBar"
import Portfolio from "./components/Portfolio"
import Presentation from "./components/Presentation"
import { motion } from "framer-motion"

const App = () => {
	const pages = ["presentation", "projects", "skills"]
	const [activePageIndex, setActivePageIndex] = useState<number>(0)

	const handlePageChange = (pageIndex: number) => {
		setActivePageIndex(pageIndex)
		const element = document.getElementById(pages[pageIndex])
		if (element) {
			element.scrollIntoView({ behavior: "smooth" })
		}
	}

	return (
		<main className="flex flex-col min-h-screen items-center">
			<NavBar />
			<div className="py-16 flex flex-col items-center w-full gap-8">
				<motion.div
					className="flex flex-col w-[80%]"
					initial={{ opacity: 0, x: -200 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1 }}
				>
					<Presentation
						onClick={(pageIndex) => handlePageChange(pageIndex)}
						activePageIndex={activePageIndex}
					/>
				</motion.div>
				<motion.div
					className="flex flex-col w-[80%]"
					initial={{ opacity: 0, x: 200 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1 }}
				>
					<AboutMe />
				</motion.div>
				<motion.div
					className="flex flex-col w-[80%]"
					initial={{ opacity: 0, x: -200 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1 }}
				>
					<Portfolio activePage={pages[activePageIndex]} />
				</motion.div>
			</div>
		</main>
	)
}

export default App
