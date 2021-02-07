module.exports = {
  presets: [
    ['@babel/env', {
      targets: {
        chrome: '87',
      },
    }],
    '@babel/react',
    '@babel/typescript',
  ],
};
