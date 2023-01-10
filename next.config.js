module.exports = {
  eslint: {
    dirs: ['src'],
  },
  output: 'standalone',
  distDir: 'build',
  experimental: {
    // Defaults to 50MB
    isrMemoryCacheSize: 0,
  },
};
