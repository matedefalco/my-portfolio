import { Button } from "@/components/ui/button"
import { ModeToggle } from "./ModeToggle"

const NavBar = () => {
	return (
		<div className="fixed top-0 flex justify-between w-full p-4 border-b-2">
			<div className="flex gap-2 items-center">
				<img src="public/sukaDfCrypto.png" alt="Suka" className="w-12 h-12" />
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
