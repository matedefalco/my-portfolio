import { useState, useRef } from "react"
import AboutMe from "./components/AboutMe"
import NavBar from "./components/NavBar"
import Portfolio from "./components/Portfolio"
import Presentation from "./components/Presentation"
import Footer from "./components/Footer"
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax"

const App = () => {
	const pages = ["projects", "skills", "education"]
	const [activePageIndex, setActivePageIndex] = useState<number>(0)
	const parallax = useRef<IParallax>(null!)

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
			<Parallax
				pages={4}
				ref={parallax}
				style={{
					bottom: "0",
					left: "0",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				{/* Page 1 */}
				<ParallaxLayer
					offset={0}
					speed={1}
					style={{
						display: "flex",
						flexDirection: "column",
						height: "100%",
						justifyItems: "center",
						justifyContent: "center",
						width: "80%",
					}}
				>
					<Presentation
						onClick={(pageIndex) => handlePageChange(pageIndex)}
						activePageIndex={activePageIndex}
					/>
				</ParallaxLayer>
				{/* Page 2 */}
				<ParallaxLayer
					offset={1}
					speed={0.5}
					style={{
						display: "flex",
						flexDirection: "column",
						height: "100%",
						justifyItems: "center",
						justifyContent: "center",
						width: "80%",
					}}
				>
					<AboutMe />
				</ParallaxLayer>

				{/* Page 3 */}
				<ParallaxLayer
					offset={2}
					speed={0.2}
					style={{
						display: "flex",
						flexDirection: "column",
						height: "100%",
						justifyItems: "center",
						justifyContent: "center",
						width: "80%",
					}}
				>
					<Portfolio activePage={pages[activePageIndex]} />
				</ParallaxLayer>

				{/* Page 4 (Footer) */}
				<ParallaxLayer
					offset={4}
					factor={0.2}
					speed={0.4}
					style={{
						display: "flex",
						flexDirection: "column",
						height: "100%",
						justifyItems: "center",
						justifyContent: "center",
						width: "80%",
					}}
				>
					<Footer />
				</ParallaxLayer>
			</Parallax>
		</main>
	)
}

export default App
