import { Button } from "@/components/ui/button"
import { ModeToggle } from "./ModeToggle"

const NavBar = () => {
	return (
		<div className="flex justify-between items-center w-full p-6 lg:p-4 border-b-2 sticky top-0 bg-white dark:bg-slate-900 z-50">
			<div className="flex gap-2 items-center">
				<img src="sukaDfCrypto.png" alt="Suka" className="w-12 h-12" />
				<p>Mateo</p>
			</div>
			<div className="flex gap-2 items-center">
				<ModeToggle />
				<a href="mailto:mateodefalco1@gmail.com" target="_blank">
					<Button variant="outline">CONTACT</Button>
				</a>
			</div>
		</div>
	)
}

export default NavBar
