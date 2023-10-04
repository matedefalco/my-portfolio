import React from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ProjectProps } from "@/types/IProject"
import { useMediaQuery } from "react-responsive"
import TrimmedText from "@/utils/TrimmedText"

const ProjectComponent: React.FC<ProjectProps> = ({
	name,
	url,
	image,
	description,
	stack,
}) => {
	const isMobile = useMediaQuery({ maxWidth: 767 })
	const maxLetters = isMobile ? 30 : 70

	return (
		<Card className="bg-white dark:bg-[--bg-secondary] min-h-full flex flex-col items-center justify-start text-xs text-slate-400">
			<CardContent className="w-full">
				<div className="flex flex-col items-center justify-center pt-4">
					<img src={image} alt={image} className="object-cover w-full h-40" />
				</div>
			</CardContent>
			<CardFooter className="flex flex-col items-center">
				<div className="flex flex-col items-center justify-center lg:items-start lg:justify-start gap-2 w-full">
					<div className="flex flex-col items-center">
						<a href={url} target="_blank" rel="noopener noreferrer">
							<h1 className="text-sm font-bold hover:underline">{name}</h1>
						</a>
						<TrimmedText
							title={name}
							description={description}
							maxLetters={maxLetters}
						/>
						<div className="flex flex-wrap gap-1 mt-2">
							{stack.map((item) => (
								<span
									key={item}
									className="px-2 py-1 bg-slate-200 text-slate-800 rounded-full text-xs"
								>
									{item}
								</span>
							))}
						</div>
					</div>
				</div>
			</CardFooter>
		</Card>
	)
}

export default ProjectComponent
