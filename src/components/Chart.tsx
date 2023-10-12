import { createChart, ColorType, ISeriesApi } from "lightweight-charts"
import { useEffect, useRef } from "react"
import { useTheme } from "@/context/ThemeProvider"

interface ChartComponentProps {
	data: { time: string; value: number }[]
	colors?: {
		lineColor?: string
		areaTopColor?: string
		areaBottomColor?: string
	}
}

export const ChartComponent: React.FC<ChartComponentProps> = (props) => {
	const { theme } = useTheme()
	const {
		data,
		colors: {
			lineColor = "#2962FF",
			areaTopColor = "#2962FF",
			areaBottomColor = "rgba(41, 98, 255, 0.28)",
		} = {},
	} = props

	const textColor = theme === "light" ? "black" : "white"

	const chartContainerRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		let chart: ReturnType<typeof createChart> | null = null

		if (chartContainerRef.current) {
			const handleResize = () => {
				if (chart && chartContainerRef.current) {
					chart.applyOptions({ width: chartContainerRef.current.clientWidth })
				}
			}

			chart = createChart(chartContainerRef.current, {
				layout: {
					background: {
						type: ColorType.Solid,
						color: theme === "light" ? "white" : "black",
					},
					textColor,
				},
				width: chartContainerRef.current.clientWidth,
				height: 300,
			})

			chart.timeScale().fitContent()

			const series: ISeriesApi<"Area"> = chart.addAreaSeries({
				lineColor,
				topColor: areaTopColor,
				bottomColor: areaBottomColor,
			})

			series.applyOptions({
				priceFormat: {
					type: "volume",
				},
			})

			series.setData(data)

			window.addEventListener("resize", handleResize)

			return () => {
				window.removeEventListener("resize", handleResize)

				if (chart) {
					chart.remove()
				}
			}
		}
	}, [data, theme, lineColor, textColor, areaTopColor, areaBottomColor])

	return <div ref={chartContainerRef} />
}
