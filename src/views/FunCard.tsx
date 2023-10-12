import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { createChart } from "lightweight-charts"

const FunCard = () => {
	const chart = createChart(document.body, { width: 400, height: 300 })
	const lineSeries = chart.addLineSeries()
	lineSeries.setData([{ time: "2019-04-11", value: 80.01 }])
	return (
		<motion.div
			initial={{ opacity: 0, x: -200 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ duration: 1.5 }}
		>
			<Card>
				<CardHeader>
					<CardTitle>
						👉 How people´s life improve´s when they hire me
					</CardTitle>
				</CardHeader>
				<CardContent>
					<p>Card Content</p>
				</CardContent>
			</Card>
		</motion.div>
	)
}

export default FunCard
