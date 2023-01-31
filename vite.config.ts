import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@components": path.resolve(__dirname, "./src/components"),
			"@adapters": path.resolve(__dirname, "./src/adapters"),
			"@context": path.resolve(__dirname, "./src/context"),
			"@intercepts": path.resolve(__dirname, "./src/intercepts"),
			"@hook": path.resolve(__dirname, "./src/hook"),
			"@models": path.resolve(__dirname, "./src/models"),
			"@pages": path.resolve(__dirname, "./src/pages"),
			"@services": path.resolve(__dirname, "./src/services"),
			"@utilities": path.resolve(__dirname, "./src/utilities"),
			"@styled": path.resolve(__dirname, "./src/styled-components"),
			"@fireBS": path.resolve(__dirname, "./src/firebase"),
			"@rdx": path.resolve(__dirname, "./src/redux"),
		},
	},
});
