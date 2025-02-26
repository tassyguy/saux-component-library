import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

export default [
  {
    input: "src/index.tsx",
    output: [
      { file: "dist/index.cjs.js", format: "cjs" },
      { file: "dist/index.esm.js", format: "esm" }
    ],
    plugins: [resolve(), commonjs(), typescript({ tsconfig: "./tsconfig.json" })],
    external: ["react", "react-dom"]
  },
  {
    input: "dist/types/index.d.ts",
    output: { file: "dist/index.d.ts", format: "esm" },
    plugins: [dts()]
  }
];
