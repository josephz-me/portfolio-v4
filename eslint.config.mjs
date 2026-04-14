import { dirname } from "path";
import { fileURLToPath } from "url";
import coreWebVitals from "eslint-config-next/core-web-vitals";
import eslintConfigPrettier from "eslint-config-prettier";

const __dirname = dirname(fileURLToPath(import.meta.url));

const eslintConfig = [
  ...coreWebVitals.map((config) => ({
    ...config,
    settings: {
      ...config.settings,
      next: { ...config.settings?.next, rootDir: __dirname },
    },
  })),
  eslintConfigPrettier,
];

export default eslintConfig;
