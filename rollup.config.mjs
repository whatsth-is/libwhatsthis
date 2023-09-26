// rollup.config.js

import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

export default {
	input: 'src/main.ts',
	output: {
		file: 'dist/main.js',
		format: 'cjs', // CommonJS format for compatibility with React
	},
	plugins: [
		resolve(),
		commonjs(),
		typescript({
			tsconfig: 'tsconfig.json',
			declaration: true,
		}),
	],
	external: ['react', 'react-dom'], // Declare React and ReactDOM as external dependencies
};
