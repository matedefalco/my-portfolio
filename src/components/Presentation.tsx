import { Button } from "./ui/button"

const Presentation = () => {
	return (
		<div className="flex flex-col w-full min-h-80">
			<p className="text-2xl text-slate-400">I`m a</p>
			<h1 className="text-4xl font-serif font-black">FRONT-END</h1>
			<h1 className="text-4xl font-serif font-black">DEVELOPER</h1>
			<div className="flex gap-2">
				<Button>Previous Projects</Button>
				<Button>Skills</Button>
			</div>
		</div>
	)
}

export default Presentation
