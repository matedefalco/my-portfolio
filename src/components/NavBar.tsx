import { Button } from "@/components/ui/button"
import { ModeToggle } from "./ModeToggle"

const NavBar = () => {
	const handleScroll = () => {
		const element = document.getElementById("footer")
		if (element) {
			element.scrollIntoView({ behavior: "smooth" })
		}
	}

	return (
		<div className="flex justify-between items-center w-full p-6 lg:p-4 border-b-2 sticky top-0 bg-white dark:bg-slate-900 z-50">
			<div className="flex gap-2 items-center">
				<img
					src="./files/icons/sukaDfCrypto.png"
					alt="Suka"
					className="w-12 h-12"
				/>
				<p className="text-xl lg:text-2xl">Mateo De Falco</p>
			</div>
			<div className="flex gap-2 items-center">
				<ModeToggle />
				<Button
					variant="outline"
					className="bg-[--primary-color]"
					onClick={handleScroll}
				>
					CONTACT
				</Button>
			</div>
		</div>
	)
}

export default NavBar
