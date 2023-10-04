import React from "react"
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

interface TrimmedTextProps {
	title: string
	description: string
	maxLetters: number
}

const TrimmedText: React.FC<TrimmedTextProps> = ({
	title,
	description,
	maxLetters,
}) => {
	if (description.length > maxLetters) {
		return (
			<span className="text-center m-auto">
				{description.slice(0, maxLetters)}...
				<AlertDialog>
					<AlertDialogTrigger>
						<button className="text-blue-500 hover:underline ml-2">
							Show more
						</button>
					</AlertDialogTrigger>
					<AlertDialogContent className="h-[90%] w-[80%] overflow-auto flex flex-col justify-center items-center">
						<AlertDialogHeader className="flex flex-col items-center">
							<AlertDialogTitle>{title}</AlertDialogTitle>
							<AlertDialogDescription className="p-2 border-2 bg-slate-100 dark:bg-slate-800 rounded-xl">
								{description}
							</AlertDialogDescription>
						</AlertDialogHeader>
						<AlertDialogFooter>
							<AlertDialogCancel>Close</AlertDialogCancel>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			</span>
		)
	}
	return <span className="text-center m-auto">{description}</span>
}

export default TrimmedText
