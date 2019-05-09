import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'DEMO',
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
    },
  ],
  plugins: [
    typescript({

    }),
  ],
};
