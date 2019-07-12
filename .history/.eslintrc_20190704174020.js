module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  globals: {
    describe: true,
    expect: true,
    it: true,
    module: true,
    require: true,
    __dirname: true,
    exports: true,
    graphql: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'standard'],
  rules: {
    'react/prop-types': 0
  }
}
