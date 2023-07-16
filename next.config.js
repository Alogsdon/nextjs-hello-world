import path from 'path';
const __dirname = path.resolve();

export default {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  poweredByHeader: false,
  compiler: {
    emotion: {
      sourceMap: true,
      autoLabel: "dev-only",
      labelFormat: "[local]",
      importMap: undefined,
    },
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  runtime: 'edge',
};
