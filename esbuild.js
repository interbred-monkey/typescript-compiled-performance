require('esbuild').build({
  entryPoints: ['./src/main.js', './src/services/http.service.ts'],
  outdir: './builds/esbuild',
  minify: true,
  target: 'es2019',
  platform: 'node',
  format: 'cjs',
});
