import skills from "../../skills.json"
import SkillComponent from "@/components/SkillComponent"
const Skills = () => {
	return (
		<div id="skills">
			<ul className="grid grid-cols-2 lg:grid-cols-3 gap-4">
				{skills.skillsDB.map((skill, index) => (
					<li key={index} className="">
						<SkillComponent
							technology={skill.technology}
							skills={skill.skills}
							logo={`./files/stack/${skill.logo}`}
						/>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Skills
