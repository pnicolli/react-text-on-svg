import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

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
      },
      sourceMap: false
    }),
    babel({
      exclude: 'node_modules/**'
    })
  ],
  external: ['react'],
  globals: {
    react: 'React'
  },
  dest: 'dist/index.js'
};
