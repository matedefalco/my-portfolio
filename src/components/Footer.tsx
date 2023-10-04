import contactDB from "../../contactInfo.json"
import ContactForm from "./ContactForm"
import {
	AiFillPhone,
	AiFillLinkedin,
	AiFillMail,
	AiFillGithub,
} from "react-icons/ai"
import { IoLocationSharp } from "react-icons/io5"

const Footer = () => {
	return (
		<div className="flex flex-col gap-8 items-center bg-slate-200 dark:bg-slate-900 p-8">
			<h1 className="font-extrabold text-2xl">CONTACT</h1>
			<div className="flex flex-col lg:flex-row px-16 items-start justify-between gap-8 lg:gap-0">
				<div className="flex flex-col w-full lg:w-[45%] gap-4 items-center lg:items-start text-center lg:text-start mx-auto lg:mx-0">
					<h2 className="text-xl font-bold ">Drop a message</h2>
					<p>
						I'd love to hear from you! Feel free to reach out with any
						questions, comments, or just to say hello. I'm here to help!
					</p>
					<ul className="flex flex-col items-center lg:items-start gap-2">
						{contactDB.contact.map((contact) => (
							<li key={contact.name} className="flex gap-2">
								{contact.name === "Phone" && <AiFillPhone size={24} />}
								{contact.name === "LinkedIn" && <AiFillLinkedin size={24} />}
								{contact.name === "GitHub" && <AiFillGithub size={24} />}
								{contact.name === "Mail" && <AiFillMail size={24} />}
								{contact.name === "Location" && <IoLocationSharp size={24} />}
								{contact.name === "GitHub" || contact.name === "LinkedIn" ? (
									<a
										href={contact.value}
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-gray-700 hover:underline"
									>
										<p>{contact.value}</p>
									</a>
								) : contact.name === "Mail" ? (
									<a
										href={`mailto:${contact.value}`}
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-gray-700 hover:underline"
									>
										<p>{contact.value}</p>
									</a>
								) : (
									<p>{contact.value}</p>
								)}
							</li>
						))}
					</ul>
				</div>
				<div className="flex flex-col gap-4 w-full lg:w-[45%]">
					<ContactForm />
				</div>
			</div>
		</div>
	)
}

export default Footer
