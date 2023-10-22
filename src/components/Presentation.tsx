import { Button } from "./ui/button"
import { PresentationProps } from "@/types/INavigation"

const Presentation: React.FC<PresentationProps> = ({ onClick }) => {
	return (
		<div
			id="presentation"
			className="flex flex-col items-center lg:items-start w-full min-h-80 gap-4"
		>
			<div className="flex flex-col">
				<p className="text-4xl lg:text-8xl text-slate-400">I'm a</p>
				<h1 className="text-6xl lg:text-8xl font-serif font-black text-[--primary-color]">
					FULL-STACK
				</h1>
				<div className="flex">
					<h1 className="text-6xl lg:text-8xl font-serif font-black">
						DEVELOPER
					</h1>
					<h1 className="text-6xl lg:text-8xl font-serif font-black text-[--primary-color]">
						.
					</h1>
				</div>
			</div>
			<div className="flex gap-2">
				<Button onClick={() => onClick(0)}>Previous Projects</Button>
				<Button onClick={() => onClick(1)} variant="outline">
					Skills
				</Button>
			</div>
		</div>
	)
}

export default Presentation
