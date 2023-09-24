import NavBar from "./components/NavBar"
import Presentation from "./components/Presentation"
import { motion } from "framer-motion"

const App = () => {
	return (
		<main className="flex flex-col min-h-screen items-center">
			<NavBar />
			<motion.div
				className="flex flex-col w-[80%]"
				initial={{ opacity: 0, x: -200 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 1 }}
			>
				<Presentation />
			</motion.div>
		</main>
	)
}

export default App
