import { Button } from "./ui/button"
import { PresentationProps } from "@/types/INavigation"

const Presentation: React.FC<PresentationProps> = ({ onClick }) => {
	return (
		<div id="presentation" className="flex flex-col w-full min-h-80">
			<p className="text-2xl text-slate-400">I'm a</p>
			<h1 className="text-4xl font-serif font-black">FRONT-END</h1>
			<h1 className="text-4xl font-serif font-black">DEVELOPER</h1>
			<div className="flex gap-2">
				<Button onClick={() => onClick(1)}>Previous Projects</Button>
				<Button onClick={() => onClick(2)} variant="outline">
					Skills
				</Button>
			</div>
		</div>
	)
}

export default Presentation
