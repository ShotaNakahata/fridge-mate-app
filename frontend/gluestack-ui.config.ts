// frontend/gluestack-ui.config.ts
import { createConfig } from "@gluestack-style/react";

export const gluestackUIConfig = createConfig({
	aliases: {
		bg: "backgroundColor",
		p: "padding",
		px: "paddingHorizontal",
		py: "paddingVertical",
		m: "margin",
		mx: "marginHorizontal",
		my: "marginVertical",
		rounded: "borderRadius",
	},
	tokens: {
		colors: {
			primary: "#3b82f6",
			secondary: "#9333ea",
		},
	},
	components: {},
});

export default gluestackUIConfig;
