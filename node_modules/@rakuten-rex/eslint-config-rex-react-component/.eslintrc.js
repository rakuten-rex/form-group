module.exports = {
  extends: ['airbnb', 'plugin:jest/recommended'],
  parser: 'babel-eslint',
  rules: {
    'jsx-a11y/label-has-for': [0],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: 'either',
        depth: 25,
      },
    ],
  },
};
