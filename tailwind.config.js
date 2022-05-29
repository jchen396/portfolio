module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                neue: ["Comic Neue", "cursive"],
                arima: ["Arima Madurai", "cursive"],
            },
            transitionProperty: {
                height: "height",
            },
            colors: {
                black: "#18191c",
                lightBlack: "#18181b",
                twitch: "#5c16c5",
            },
            backgroundImage: {
                "split-purple-black":
                    "linear-gradient(to bottom, #5c16c5 50%, #18191c 50%);",
            },
        },
    },
    plugins: [],
};
