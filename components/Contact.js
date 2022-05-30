const Contact = () => {
    return (
        <div className="snap-start text-center h-screen flex flex-col justify-center items-center space-y-14 bg-black">
            <h1 className="text-gray-100 text-5xl font-arima font-medium ">
                Contact Me
            </h1>
            <div className="md:w-1/3 w-11/12 relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-red-500 rounded-lg blur opacity-75 animate-pulse"></div>
                <form
                    className="flex flex-col bg-slate-800 rounded p-20 border-rose-300 border-2 shadow-lg shadow-green-500/50 relative space-y-3"
                    action="/send-data-here"
                    method="post"
                >
                    <label
                        className="font-arima text-xl text-medium text-slate-100 self-start"
                        htmlFor="first"
                    >
                        First name:
                    </label>
                    <input
                        className="rounded focus:border-transparent px-2"
                        size={"40"}
                        type="text"
                        id="first"
                        name="first"
                    />
                    <label
                        className="font-arima text-xl text-medium text-slate-100 self-start"
                        htmlFor="last"
                    >
                        Last name:
                    </label>
                    <input
                        className="rounded focus:border-transparent px-2"
                        type="text"
                        id="last"
                        name="last"
                    />
                    <label
                        className="font-arima text-xl text-medium text-slate-100 self-start"
                        htmlFor="email"
                    >
                        E-mail:
                    </label>
                    <input
                        className="rounded focus:border-transparent px-2"
                        type="text"
                        id="email"
                        name="email"
                    />
                    <label
                        className="font-arima text-xl text-medium text-slate-100 self-start"
                        htmlFor="message"
                    >
                        Message:
                    </label>
                    <textarea className="my-3 px-2"></textarea>
                    <button
                        className="p-4 bg-slate-200 rounded hover:bg-slate-100 text-medium font-arima text-xl"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
