import { Button } from "./ui/button"

const AboutMe = () => {
	const handleResumeClick = () => {
		const resumeUrl = "CurriculumMateo-English.pdf"
		window.open(resumeUrl, "_blank")
	}

	return (
		<div className="flex flex-col lg:flex-row gap-8">
			<img
				src="public/Mateo.png"
				alt="Profile Image"
				className="h-80 w-auto border-4 rounded-full"
			/>
			<div className="flex flex-col gap-4 justify-center">
				<h2 className="font-extrabold">ABOUT ME</h2>
				<p className="text-slate-500">
					Hello, I'm Mateo, a{" "}
					<b className="dark:text-white">full-stack web developer</b> with a
					lifelong passion for technology. Over the past few years, I've
					dedicated myself to refining my skills through a diverse range of{" "}
					<b className="dark:text-white">freelance and individual projects</b>.
					Additionally, I have a solid foundation in{" "}
					<b className="dark:text-white">
						blockchain and decentralized technologies
					</b>
					. I strongly believe in the importance of continuous{" "}
					<b className="dark:text-white">learning</b>, and I'm committed to
					staying updated with the latest advancements in the field.
				</p>
				<div className="flex gap-2 justify-center lg:justify-start">
					<a
						href="https://www.linkedin.com/in/mateo-de-falco/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-500 hover:text-gray-700"
					>
						<Button variant="outline">LinkedIn</Button>
					</a>
					<a
						href="https://github.com/matedefalco"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-500 hover:text-gray-700"
					>
						<Button variant="outline">GitHub</Button>
					</a>
					<Button onClick={handleResumeClick}>Resume</Button>
				</div>
			</div>
		</div>
	)
}

export default AboutMe
