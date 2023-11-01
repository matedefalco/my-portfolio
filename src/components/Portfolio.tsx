import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import Projects from "@/views/Projects"
import Skills from "@/views/Skills"
import Education from "@/views/Education"
import { PortfolioProps } from "@/types/INavigation"

const pages = [
	{ name: "Projects", route: "projects" },
	{ name: "Education", route: "education" },
	{ name: "Stack", route: "skills" },
]

const Portfolio: React.FC<PortfolioProps> = ({ activePage }) => {
	const [activeTab, setActiveTab] = useState("projects")

	useEffect(() => {
		setActiveTab(activePage)
	}, [activePage])

	const handleTabChange = (tab: string) => {
		setActiveTab(tab)
	}

	return (
		<div id="portfolio" className="flex flex-col items-center gap-4">
			<h1 className="font-extrabold text-3xl font-serif">PORTFOLIO</h1>
			<div className="flex justify-between items-center mt-4 border rounded-lg py-2 px-4 bg-[--primary-color]">
				{pages.map((page, index) => (
					<Button
						key={index}
						variant="link"
						onClick={() => handleTabChange(pages[index].route)}
						className={
							activeTab === pages[index].route
								? "text-lg text-white dark:text-white font-bold"
								: "text-md text-gray-300 dark:text-gray-300"
						}
					>
						{page.name}
					</Button>
				))}
			</div>
			<div className="flex flex-col z-0">
				{activeTab === "projects" ? <Projects /> : null}
				{activeTab === "skills" ? <Skills /> : null}
				{activeTab === "education" ? <Education /> : null}
			</div>
		</div>
	)
}

export default Portfolio
