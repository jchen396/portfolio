module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                orbit: {
                    "0%": {
                        transform: "rotateZ(0deg) translate(500px)",
                        opacity: "0",
                    },
                    "100%": {
                        transform: "rotateZ(360deg) translate(500px)",
                        opacity: "0",
                    },
                    "50%": {
                        opacity: "1",
                    },
                    "10%": {
                        opacity: "0",
                    },
                    "85%": {
                        opacity: "0",
                    },
                    "20%": {
                        opacity: "1",
                    },
                    "75%": {
                        opacity: "1",
                    },
                },
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
            },
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
            animation: {
                fadeIn: "fadeIn 1s ease-in forwards",
                orbit: "orbit 3s infinite linear",
            },
        },
    },
    variants: {
        animation: ["motion-safe"],
    },
    plugins: [],
};
