import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/context/ThemeProvider"

export function ModeToggle() {
	const { theme, setTheme } = useTheme()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon">
					<img
						src={theme === "dark" ? "sun.png" : "moonIconLight.png"}
						alt="Theme"
						className="w-5 h-5"
					/>
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => setTheme("light")}>
					Light
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("dark")}>
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("system")}>
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
