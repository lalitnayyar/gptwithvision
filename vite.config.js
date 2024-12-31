import { defineConfig } from "vite";
import { config } from "dotenv";

config();

export default defineConfig({
  define: {
    'process.env.OPENAI_API_KEY': JSON.stringify(process.env.OPENAI_API_KEY)
  },
  plugins: []
});