import buble from 'rollup-plugin-buble';
import { uglify } from 'rollup-plugin-uglify';

export default [
  {
    input: 'src/vnoc.js',
    output: {
      file: 'dist/vnoc.js',
      format: 'cjs'
    },
    plugins: [buble()]
  },
  {
    input: 'src/vnoc.js',
    output: {
      name: 'vnoc',
      file: 'dist/vnoc.min.js',
      format: 'umd'
    },
    plugins: [buble(), uglify()]
  }
];
