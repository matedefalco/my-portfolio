import React from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ProjectProps } from "@/types/IProject"
import { useMediaQuery } from "react-responsive"

const ProjectComponent: React.FC<ProjectProps> = ({ name, url, image }) => {
	const isMobile = useMediaQuery({ maxWidth: 767 })

	return (
		<Card className="bg-white dark:bg-[--bg-secondary] min-h-full flex flex-col justify-start">
			<CardContent>
				<div className="flex flex-col items-center justify-center pt-4">
					<img src={image} alt={image} className="object-cover w-full h-40" />
				</div>
			</CardContent>
			<CardFooter>
				<a
					href={url}
					target="_blank"
					rel="noopener noreferrer"
					className="text-xs text-slate-400 hover:underline"
				>
					<div className="flex flex-col items-center justify-center lg:items-start lg:justify-start gap-2 w-full">
						<div className="flex flex-col">
							<h1 className="text-sm text-white font-bold">{name}</h1>
							{!isMobile && <p className="text-xs text-slate-400">{url}</p>}
						</div>
					</div>
				</a>
			</CardFooter>
		</Card>
	)
}

export default ProjectComponent
