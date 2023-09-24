import React from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ProjectProps } from "@/types/IProject"

const ProjectComponent: React.FC<ProjectProps> = ({ name, url, image }) => {
	return (
		<Card>
			<CardContent>
				<div className="flex flex-col items-center justify-center pt-4">
					<img src={image} alt={image} className="object-cover w-full h-40" />
				</div>
			</CardContent>
			<CardFooter>
				<div className="flex flex-col items-center justify-center lg:items-start lg:justify-start  gap-2 w-full">
					<div className="flex flex-col">
						<h1 className="text-sm font-bold">{name}</h1>
						<a
							href={url}
							target="_blank"
							rel="noopener noreferrer"
							className="text-xs text-slate-400 hover:underline"
						>
							{url}
						</a>
					</div>
				</div>
			</CardFooter>
		</Card>
	)
}

export default ProjectComponent
