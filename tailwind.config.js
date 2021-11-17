module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			height: {
				small1: "600px",
				small2: "400px",
				big: "800px",
				bigx: "1000px",
				bigxx: "1200px",
				bigxxx: "1200px",
			},
			width: {
				small1: "600px",
				small2: "400px",
				big: "800px",
				bigx: "1000px",
				bigxx: "1200px",
				bigxxx: "1200px",
			},
			colors: {
				mamba: {
					100: "#343434",
				},
				orangy: {
					100: "#FFAD9C",
					200: "#EEEDE7",
				},
				paper: {
					100: "#FEFEFE",
					200: "#F9F4ED",
					300: "#F6EFE4",
					400: "#F3E9DB",
					500: "#F0E4D3",
					600: "#ECDFCA",
					700: "#E9D9C1",
					800: "#E6D4B8",
				},
				greener: {
					100: "#F5F9ED",
					200: "#ECF3DC",
					300: "#D9E6B9",
					400: "#C5DA95",
					500: "#BCD484",
					600: "#9FC14F",
					700: "#5F742F",
					800: "#404D20",
				},
			},
			screens: {
				xs: "300px",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/forms")],
};
