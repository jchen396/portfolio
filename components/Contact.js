import { useState } from "react";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	//   Form validation state
	const [errors, setErrors] = useState({});

	//   Setting button text on form submission
	const [buttonText, setButtonText] = useState("Send");

	// Setting success or failure messages states
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const [showFailureMessage, setShowFailureMessage] = useState(false);

	// Validation check method
	const handleValidation = () => {
		let tempErrors = {};
		let isValid = true;

		if (name.length <= 0) {
			tempErrors["name"] = true;
			isValid = false;
		}
		if (email.length <= 0) {
			tempErrors["email"] = true;
			isValid = false;
		}
		if (message.length <= 0) {
			tempErrors["message"] = true;
			isValid = false;
		}

		setErrors({ ...tempErrors });
		return isValid;
	};

	//   Handling form submit

	const handleSubmit = async (e) => {
		e.preventDefault();

		let isValidForm = handleValidation();

		if (isValidForm) {
			setButtonText("Sending");
			const res = await fetch("/api/sendgrid", {
				body: JSON.stringify({
					email: email,
					name: name,
					subject: subject,
					message: message,
				}),
				headers: {
					"Content-Type": "application/json",
				},
				method: "POST",
			});

			const { error } = await res.json();
			if (error) {
				console.log(error);
				setShowSuccessMessage(false);
				setShowFailureMessage(true);
				setButtonText("Send");
				return;
			}
			setShowSuccessMessage(true);
			setShowFailureMessage(false);
			setButtonText("Send");
		}
		console.log(name, email, message);
	};

	return (
		<div
			id="contact"
			className="snap-start text-center h-screen flex flex-col justify-center items-center space-y-14"
		>
			<h1 className="relative dark:text-gray-100 md:text-5xl text-4xl font-arima font-medium text-orange-800">
				Leave a message
			</h1>
			<div className="lg:w-1/3 md:w-1/2 w-4/5 relative">
				<div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-red-500 rounded-lg blur opacity-75 animate-pulse"></div>
				<form
					className="flex flex-col dark:bg-slate-800 bg-slate-100 rounded p-20 border-rose-300 border-2 shadow-lg shadow-green-500/50 relative space-y-3"
					action="/send-data-here"
					method="post"
					onSubmit={handleSubmit}
				>
					<label
						className="font-arima text-xl text-medium dark:text-gray-100 text-orange-800 self-start"
						htmlFor="name"
					>
						Full name:
					</label>
					<input
						className="rounded focus:border-transparent px-2"
						type="text"
						name="name"
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
					<label
						className="font-arima text-xl text-medium dark:text-gray-100 text-orange-800 self-start"
						htmlFor="email"
					>
						E-mail:
					</label>

					<input
						className="rounded focus:border-transparent px-2"
						type="email"
						name="email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
					<label
						htmlFor="subject"
						className="font-arima text-xl text-medium dark:text-gray-100 text-orange-800 self-start"
					>
						Subject
					</label>
					<input
						type="text"
						name="subject"
						value={subject}
						onChange={(e) => {
							setSubject(e.target.value);
						}}
						className="rounded focus:border-transparent px-2"
					/>
					<label
						className="font-arima text-xl text-medium dark:text-gray-100 text-orange-800 self-start"
						htmlFor="message"
					>
						Message:
					</label>
					<textarea
						name="message"
						className="my-3 px-2"
						value={message}
						onChange={(e) => {
							setMessage(e.target.value);
						}}
					></textarea>

					<button
						className="px-8 py-2 self-center dark:bg-slate-300 rounded dark:hover:bg-slate-100 bg-orange-500 hover:bg-orange-800 dark:text-black text-gray-100 text-medium font-arima text-xl"
						type="submit"
					>
						{buttonText}
					</button>
					{showSuccessMessage ? (
						<p className="text-green-400">Message sent</p>
					) : null}
					{showFailureMessage ? (
						<p className="text-red-400">Something went wrong</p>
					) : null}
				</form>
			</div>
		</div>
	);
};

export default Contact;
