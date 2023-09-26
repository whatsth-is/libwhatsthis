// rollup.config.js

import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

export default {
	input: 'src/main.ts',
	output: {
		file: 'dist/main.js',
		format: 'esm',
		sourcemap: true,
	},
	plugins: [
		resolve(),
		commonjs(),
		typescript({
			tsconfig: 'tsconfig.json',
			declaration: true,
		}),
	],
	external: ['react', 'react-dom'],
};
