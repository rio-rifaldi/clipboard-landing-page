import {Config} from "tailwindcss";

export default {
	content: ["./index.html", "./main.js"],
	theme: {
		extend: {
			colors: {
				"Dark-Grayish-Blue": "hsl(210, 10%, 33%)",
				"Grayish-Blue": "hsl(201, 11%, 66%)",
			},
			backgroundColor: {
				"ios-btn-hover": "#1e9483",
				"mac-btn-hover": "#4d5ccc",
				"Strong-Cyan": "hsl(171, 66%, 44%)",
				"Light-Blue": "hsl(233, 100%, 69%)",
				"Dark-Grayish-Blue": "hsl(210, 10%, 33%)",
				"Grayish-Blue": "hsl(201, 11%, 66%)",
			},
		},
	},
	plugins: [],
} satisfies Config;
