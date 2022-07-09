import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import alias from '@rollup/plugin-alias';
import dts from 'rollup-plugin-dts';
import pkg from './package.json';
import path from 'path';

const extensions = ['.js', '.ts'];

export default (async () => ([
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'es',
        sourcemap: true,
      },
    ],
    plugins:[
      commonjs(),
      typescript({
        tsconfig: 'tsconfig.json',
        useTsconfigDeclarationDir: true,
        sourcemap: false,
      }),
      resolve({ extensions }),
      uglify(),
      alias({
        entries: [
          {
            find: '@',
            replacement: path.resolve(__dirname, 'src'),
          }
        ]
      }),
      json(),
    ],
    external: (id) => /lodash/.test(id),
    inlineDynamicImports: true,
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.types,
        format: 'cjs',
      },
    ],
    plugins: [
      dts(),
      json(),
      alias({
        entries: [
          {
            find: '@',
            replacement: path.resolve(__dirname, 'src'),
          }
        ]
      }),
    ]
  }
]));