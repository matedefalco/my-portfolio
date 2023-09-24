import React, { useState } from "react"
import { EducationProps } from "@/types/IEducation"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Modal from "./Modal"
import { Button } from "./ui/button"

const EducationComponent: React.FC<EducationProps> = ({
	institutionName,
	title,
	imageSrc,
	date,
	description,
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen)
	}

	return (
		<Card>
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
					<div className="flex flex-col">
						<h1 className="text-sm font-bold">{title}</h1>
						<p className="text-xs text-slate-400">{date}</p>
						<div className="flex items-center gap-1">
							<img src="location.png" alt="Location" className="w-3 h-3" />
							<p className="text-xs">{institutionName}</p>
						</div>
					</div>
					<div className="flex justify-center w-full">
						<Button onClick={toggleModal}>See More</Button>
					</div>
				</div>
			</CardFooter>
			{isModalOpen && (
				<Modal onClose={toggleModal}>
					<div className="flex flex-col gap-2">
						<div className="flex flex-col">
							<h1 className="text-xl font-bold">{title}</h1>
							<p className="text-slate-600">{institutionName}</p>
						</div>
						<p className="text-sm">{description}</p>
					</div>
				</Modal>
			)}
		</Card>
	)
}

export default EducationComponent
