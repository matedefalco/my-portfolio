"use client"

import { useEffect, useState } from "react"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../components/ui/form"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import emailjs from "@emailjs/browser"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const ContactForm = () => {
	const [emailSent, setEmailSent] = useState<string | undefined>(undefined)
	const [emailSentMessage, setEmailSentMessage] = useState("")
	useEffect(() => emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY), [])

	const formSchema = z.object({
		name: z.string().min(2).max(50),
		mail: z.string().email(),
		message: z.string().min(2).max(300),
	})

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			mail: "",
			message: "",
		},
	})

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			const templateParams = {
				to_name: "Mateo",
				from_name: values.name,
				from_mail: values.mail,
				message: values.message,
			}

			const response = await emailjs.send(
				import.meta.env.VITE_EMAILJS_GMAIL_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_GMAIL_TEMPLATE_ID,
				templateParams,
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY
			)
			console.log("SUCCESS!", response)
			setEmailSentMessage("Your email was sent successfully.")
			setEmailSent("sent")
		} catch (error) {
			console.error("FAILED...", error)
			setEmailSent("error")
			setEmailSentMessage(
				"Your email could not be sent successfully.	Please try again."
			)
		}
	}

	useEffect(() => {
		if (emailSent !== undefined) {
			const timeout = setTimeout(() => {
				setEmailSent(undefined)
				setEmailSentMessage("")
			}, 3000)
			return () => clearTimeout(timeout)
		}
	}, [emailSent])

	return (
		<Form {...form}>
			<form
				id="contact-form"
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-4 rounded-xl p-4 bg-gradient-to-b from-blue-700 to-indigo-700"
			>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input placeholder="Name" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="mail"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder="Email" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Message</FormLabel>
							<FormControl>
								<Input placeholder="Leave a messsage" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="flex flex-col items-center lg:items-start">
					<Button type="submit" variant="outline">
						Submit
					</Button>
				</div>
			</form>
			{emailSent === "sent" && (
				<Alert>
					<AlertTitle>Great!</AlertTitle>
					<AlertDescription>{emailSentMessage}</AlertDescription>
				</Alert>
			)}
			{emailSent === "error" && (
				<Alert>
					<AlertTitle>Error</AlertTitle>
					<AlertDescription>{emailSentMessage}</AlertDescription>
				</Alert>
			)}
		</Form>
	)
}

export default ContactForm
