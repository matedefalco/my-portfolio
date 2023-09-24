import { useState } from "react"
import { Button } from "./ui/button"
import Projects from "@/views/Projects"
import Skills from "@/views/Skills"
import Education from "@/views/Education"

const Portfolio = () => {
	const [activePage, setActivePage] = useState<string>("projects")

	const handlePageChange = (page: string) => {
		setActivePage(page)
	}

	const renderPage = () => {
		switch (activePage) {
			case "projects":
				return <Projects />
			case "skills":
				return <Skills />
			case "education":
				return <Education />
			default:
				return null
		}
	}

	return (
		<div className="flex flex-col items-center gap-4">
			<h1 className="font-extrabold text-3xl">PORTFOLIO</h1>
			<div className="flex justify-between mt-4">
				<Button variant="link" onClick={() => handlePageChange("projects")}>
					Projects
				</Button>
				<Button variant="link" onClick={() => handlePageChange("skills")}>
					Skills
				</Button>
				<Button variant="link" onClick={() => handlePageChange("education")}>
					Education
				</Button>
			</div>
			<div className="flex flex-col">{renderPage()}</div>
		</div>
	)
}

export default Portfolio
