import type { Options } from "tsup";

const env = process.env.NODE_ENV;

export const tsup: Options = {
  splitting: false,
  clean: true, // clean up the dist folder
  dts: true, // generate dts files
  format: ["esm"], // generate cjs and esm files
  minify: env === "production",
  bundle: env === "production",
  skipNodeModulesBundle: true,
  entryPoints: ["src/index.ts"],
  watch: env === "development",
  target: "esnext",
  outDir: env === "production" ? "dist" : "lib",
  entry: ["src/**/*.ts", "src/**/*.js"], //include all files under src
};
