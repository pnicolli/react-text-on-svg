import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

export default {
  entry: 'src/index.js',
  format: 'umd',
  moduleName: 'TextOnSvg',
  plugins: [
    resolve(),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'prop-types': [ 'string' ]
      }
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    uglify({}, minify)
  ],
  external: ['react'],
  globals: {
    react: 'React'
  },
  dest: 'dist/index.js'
};
