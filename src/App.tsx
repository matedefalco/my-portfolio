import AboutMe from "./components/AboutMe"
import NavBar from "./components/NavBar"
import Presentation from "./components/Presentation"
import { motion } from "framer-motion"

const App = () => {
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
					<Presentation />
				</motion.div>
				<motion.div
					className="flex flex-col w-[80%]"
					initial={{ opacity: 0, x: 200 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1 }}
				>
					<AboutMe />
				</motion.div>
			</div>
		</main>
	)
}

export default App
