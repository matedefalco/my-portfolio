import { ChartComponent } from "@/components/Chart"
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card"
import { motion } from "framer-motion"

const getCurrentDateInFormat = () => {
	const today = new Date()
	const year = today.getFullYear()
	const month = (today.getMonth() + 1).toString().padStart(2, "0")
	const day = today.getDate().toString().padStart(2, "0")

	return { year: year, month: month, day: day }
}

const FunCard = () => {
	const currentDate = getCurrentDateInFormat()

	return (
		<motion.div
			initial={{ opacity: 0, x: -200 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ duration: 1.5 }}
		>
			<Card className="bg-white dark:bg-slate-900">
				<CardHeader>
					<CardTitle>👉 How people's life improves when they hire me</CardTitle>
					<CardDescription>
						<p>You can´t fake data</p>
					</CardDescription>
				</CardHeader>
				<CardContent>
					<ChartComponent
						data={[
							{
								time: `${currentDate.year}-${currentDate.month}-${currentDate.day}`,
								value: 33,
							},
							{
								time: `${currentDate.year + 30}-${currentDate.month}-${
									currentDate.day
								}`,
								value: 100,
							},
						]}
					/>
				</CardContent>
			</Card>
		</motion.div>
	)
}

export default FunCard
