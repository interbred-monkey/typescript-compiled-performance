require('esbuild').build({
  entryPoints: [
    './typescript/main.js',
    './typescript/services/http.service.ts',
  ],
  outdir: './esbuild-build',
  minify: true,
  target: 'es2019',
  platform: 'node',
  format: 'cjs',
});
