'use strict';

module.exports = {
  extends: ['eslint-config-airbnb-base'].map(require.resolve),
  plugins: ['chai-friendly'],
  rules: {
    'func-names': 'off',
    'prefer-rest-params': 'off',
    'react/require-extension' : 'off',
    'import/no-extraneous-dependencies' : 'off',

    // Tidy things up for Node.js
    // 'arrow-body-style': ['error', 'always']
    'function-paren-newline': ['error', 'consistent'],
    'no-multi-str': 'off',
    'no-use-before-define': 'off',
    'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
    'prefer-destructuring': [
      'error', {
        'VariableDeclarator': {
          'array': false,
          'object': false
        },
        'AssignmentExpression': {
          'array': false,
          'object': false
        }
      },
      {
        'enforceForRenamedProperties': false
      }
    ],
    'comma-dangle': [
      'error', {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'imports': 'always-multiline',
        'exports': 'always-multiline',
        'functions': 'never',
      },
    ],
    // use chai-friendly version of no-unused-expressions
    'no-unused-expressions': 'off',
    'chai-friendly/no-unused-expressions': 'error',
  },
  env: {
   'mocha': true
  }
};
