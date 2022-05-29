const Contact = () => {
    return (
        <div className="snap-start text-center h-screen flex flex-col justify-center items-center space-y-14 bg-black">
            <h1 className="text-gray-900 text-5xl font-arima font-medium">
                Contact Me
            </h1>
            <form
                className="flex flex-col p-20 bg-blue-900 rounded-xl space-y-3"
                action="/send-data-here"
                method="post"
            >
                <label
                    className="font-arima text-xl text-medium text-slate-100 self-start"
                    for="first"
                >
                    First name:
                </label>
                <input
                    className="rounded focus:border-transparent px-20"
                    type="text"
                    id="first"
                    name="first"
                />
                <label
                    className="font-arima text-xl text-medium text-slate-100 self-start"
                    for="last"
                >
                    Last name:
                </label>
                <input
                    className="rounded focus:border-transparent px-20"
                    type="text"
                    id="last"
                    name="last"
                />
                <label
                    className="font-arima text-xl text-medium text-slate-100 self-start"
                    for="email"
                >
                    E-mail:
                </label>
                <input
                    className="rounded focus:border-transparent px-20"
                    type="text"
                    id="email"
                    name="email"
                />
                <label
                    className="font-arima text-xl text-medium text-slate-100 self-start"
                    for="message"
                >
                    Message:
                </label>
                <textarea className="py-3"></textarea>
                <button
                    className="p-4 bg-slate-200 rounded hover:bg-slate-100 text-medium font-arima text-xl"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;
