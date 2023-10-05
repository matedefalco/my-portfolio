import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import Projects from "@/views/Projects"
import Skills from "@/views/Skills"
import Education from "@/views/Education"
import { PortfolioProps } from "@/types/INavigation"

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
			<h1 className="font-extrabold text-3xl">PORTFOLIO</h1>
			<div className="flex justify-between items-center mt-4 border rounded-lg py-2 px-4">
				<Button
					variant="link"
					onClick={() => handleTabChange("skills")}
					className={
						activeTab === "skills"
							? "text-lg text-gray-800 dark:text-white font-bold"
							: "text-md text-gray-500 dark:text-gray-500"
					}
				>
					Stack
				</Button>
				<Button
					variant="link"
					onClick={() => handleTabChange("projects")}
					className={
						activeTab === "projects"
							? "text-lg text-gray-800 dark:text-white font-bold"
							: "text-md text-gray-500 dark:text-gray-500"
					}
				>
					Projects
				</Button>
				<Button
					variant="link"
					onClick={() => handleTabChange("education")}
					className={
						activeTab === "education"
							? "text-lg text-gray-800 dark:text-white font-bold"
							: "text-md text-gray-500 dark:text-gray-500"
					}
				>
					Education
				</Button>
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
