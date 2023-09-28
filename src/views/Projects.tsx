import projectsData from "../../projects.json"
import ProjectComponent from "@/components/ProjectComponent"

const Projects = () => {
	return (
		<div id="projects">
			<ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
				{projectsData.projectsList.map((project, index) => (
					<li key={index} className="">
						<ProjectComponent
							name={project.name}
							url={project.url}
							image={project.image}
						/>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Projects
