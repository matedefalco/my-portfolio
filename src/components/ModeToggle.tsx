import { Button } from "@/components/ui/button"
import { useTheme } from "@/context/ThemeProvider"

export function ModeToggle() {
	const { theme, setTheme } = useTheme()

	return (
		<Button variant="outline" size="icon">
			<img
				src={theme === "dark" ? "sun.png" : "moonIconLight.png"}
				alt="Theme"
				className="w-5 h-5"
				onClick={() => setTheme(theme === "light" ? "dark" : "light")}
			/>
			<span className="sr-only">Toggle theme</span>
		</Button>
	)
}
