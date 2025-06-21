import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import postcss from 'rollup-plugin-postcss';

const packageJson = require('./package.json');

const config = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: false,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: false,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss(),
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: 'src/index.ts',
    output: [{ file: packageJson.types }],
    plugins: [dts.default()],
    external: [/\.css$/],
  },
];

export default config;
