import React from "react"
import { EducationProps } from "@/types/IEducation"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "./ui/button"

const EducationComponent: React.FC<EducationProps> = ({
	institutionName,
	title,
	imageSrc,
	date,
	description,
}) => {
	return (
		<Card className="bg-white dark:bg-[--bg-secondary] min-h-full flex flex-col justify-start">
			<CardContent>
				<div className="flex flex-col items-center justify-center pt-4">
					<img
						src={imageSrc}
						alt={imageSrc}
						className="object-cover w-full h-40"
					/>
				</div>
			</CardContent>
			<CardFooter>
				<div className="flex flex-col items-center justify-center lg:items-start lg:justify-start  gap-2 w-full">
					<div className="flex flex-col items-center lg:items-start">
						<h1 className="text-sm font-bold">{title}</h1>
						<p className="text-xs text-slate-400">{date}</p>
						<div className="flex items-center gap-1">
							<img src="location.png" alt="Location" className="w-3 h-3" />
							<p className="text-xs">{institutionName}</p>
						</div>
					</div>
					<div className="flex justify-center w-full">
						<AlertDialog>
							<AlertDialogTrigger>
								<Button>See more</Button>
							</AlertDialogTrigger>
							<AlertDialogContent>
								<AlertDialogHeader>
									<AlertDialogTitle>{title}</AlertDialogTitle>
									<AlertDialogDescription>{description}</AlertDialogDescription>
								</AlertDialogHeader>
								<AlertDialogFooter>
									<AlertDialogCancel>Close</AlertDialogCancel>
								</AlertDialogFooter>
							</AlertDialogContent>
						</AlertDialog>
					</div>
				</div>
			</CardFooter>
		</Card>
	)
}

export default EducationComponent
