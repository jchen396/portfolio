import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

async function sendEmail(req, res) {
	try {
		//console.log("REQ.BODY", req.body);
		await sendgrid.send({
			to: "support@jackiedev.com", // Your email where you'll receive emails
			from: "support@jackiedev.com", // your website email address here
			subject: `Lead from portfolio website: ${req.body.subject}`,
			html: `<div>
                <h2> You received a messasge from ${req.body.name}, their email is ${req.body.email}. </h2>
                <br/>
                <h3> Message: ${req.body.message} </h3>
            </div>`,
		})
	} catch (error) {
		//console.log(error);
		return res
			.status(error.statusCode || 500)
			.json({ error: error.message });
	}

	return res.status(200).json({ error: "" });
}

export default sendEmail;
