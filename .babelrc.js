module.exports = (api) => {
  const env = api.env(); // process.env.BABEL_ENV || process.env.NODE_ENV || 'production'
  api.cache.never();
  // api.cache.using(() => env)

  const plugins = [
    '@babel/proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/proposal-object-rest-spread',
  ];

  if (env === 'development') {
    plugins.push('react-hot-loader/babel');
  }

  return {
    presets: [
      [
        '@babel/env',
        {
          debug: false,
          loose: false, // более быстрый код, меньше надёжности
          spec: true, // менее быстрый код, больше надёжности
          modules: false, // false || 'auto' = 'esm'
          corejs: '3',
          useBuiltIns: 'usage',
        },
      ],
      '@babel/react',
      '@babel/typescript',
    ],
    plugins,
  };
};
