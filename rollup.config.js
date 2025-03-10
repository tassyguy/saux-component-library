import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "src/index.tsx",
    output: [
      { file: "dist/index.cjs.js", format: "cjs", sourcemap: true },
      { file: "dist/index.esm.js", format: "esm", sourcemap: true }
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser()
    ],
    external: ["react", "react-dom"]
  },
  {
    input: "dist/types/index.d.ts",
    output: { file: "dist/index.d.ts", format: "esm" },
    plugins: [dts()]
  }
];