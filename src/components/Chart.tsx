import { createChart, ColorType, ISeriesApi } from "lightweight-charts"
import { useEffect, useRef } from "react"

interface ChartComponentProps {
	data: { time: string; value: number }[]
	colors?: {
		backgroundColor?: string
		lineColor?: string
		textColor?: string
		areaTopColor?: string
		areaBottomColor?: string
	}
}

export const ChartComponent: React.FC<ChartComponentProps> = (props) => {
	const {
		data,
		colors: {
			backgroundColor = "white",
			lineColor = "#2962FF",
			textColor = "black",
			areaTopColor = "#2962FF",
			areaBottomColor = "rgba(41, 98, 255, 0.28)",
		} = {},
	} = props

	const chartContainerRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		if (chartContainerRef.current) {
			const handleResize = () => {
				if (chart && chartContainerRef.current) {
					chart.applyOptions({ width: chartContainerRef.current.clientWidth })
				}
			}

			const chart = createChart(chartContainerRef.current, {
				layout: {
					background: { type: ColorType.Solid, color: backgroundColor },
					textColor,
				},
				width: chartContainerRef.current.clientWidth,
				height: 300,
			})

			chart.timeScale().fitContent()

			// Cambia el tipo de serie de "Candlestick" a "Area" aquí
			const newSeries: ISeriesApi<"Area"> = chart.addAreaSeries({
				lineColor,
				topColor: areaTopColor,
				bottomColor: areaBottomColor,
			})

			newSeries.setData(data)

			window.addEventListener("resize", handleResize)

			return () => {
				window.removeEventListener("resize", handleResize)

				if (chart) {
					chart.remove()
				}
			}
		}
	}, [
		data,
		backgroundColor,
		lineColor,
		textColor,
		areaTopColor,
		areaBottomColor,
	])

	return <div ref={chartContainerRef} />
}
