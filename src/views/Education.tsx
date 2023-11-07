import EducationComponent from "@/components/EducationComponent"
import educationData from "../../education.json"

const Education = () => {
	return (
		<div id="education">
			<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{educationData.educationBG.map((education, index) => (
					<li key={index} className="">
						<EducationComponent
							institutionName={education.institutionName}
							imageSrc={`./files/education/${education.image}`}
							title={education.title}
							date={education.date}
							description={education.description}
						/>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Education
