import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { SkillProps } from "@/types/ISkills"

const SkillComponent: React.FC<SkillProps> = ({ technology, skills, logo }) => {
	return (
		<Card className="bg-white dark:bg-[--bg-secondary] min-h-full flex flex-col justify-start">
			<CardContent className="flex flex-col lg:flex-row gap-4 p-2 justify-center lg:justify-start items-center">
				<img
					src={logo}
					alt={technology}
					className="object-cover w-20 h-20 rounded-full border-2  border-sky-800 "
				/>
				<div className="flex flex-col items-center lg:items-start">
					<h1 className="text-sm font-bold">{technology}</h1>
					<p className="text-xs text-gray-400">{skills}</p>
				</div>
			</CardContent>
		</Card>
	)
}

export default SkillComponent
