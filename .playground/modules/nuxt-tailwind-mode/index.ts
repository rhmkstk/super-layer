// ~/modules/nuxt-tailwind-mod/index.ts
import { addTemplate, defineNuxtModule } from "@nuxt/kit";
import { promises as fs } from "fs"; // Import the fs module for file operations
import path from "path"; // Import path module to handle file paths

export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook("tailwindcss:config", (tailwindConfig) => {});

    nuxt.hook("tailwindcss:resolvedConfig", async (resolvedConfig) => {
      const filePath = path.join(
        process.cwd(),
        "resolved-tailwind-config.json"
      ); // Define the file path
      try {
        await fs.writeFile(filePath, JSON.stringify(resolvedConfig, null, 2)); // Write the JSON string to the file
        console.log(`Resolved Tailwind config has been saved to ${filePath}`);
      } catch (error) {
        console.error("Error writing resolved config to file:", error);
      }
    });
  },
});
