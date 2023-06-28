module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb/hooks',
    'next/core-web-vitals',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
    // 'plugins: [prettier]'
  ],
  'overrides': [
    {
      'files': ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
      'rules': {
        'storybook/hierarchy-separator': 'error',
        'storybook/default-exports': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      'files': ['**/mocks/*.ts'],
      'rules': {
        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export': 'off',
      },
    },
    {
      'files': ['*.@(queries|requests).ts'],
      'rules': {
        'import/prefer-default-export': 'off',
      },
    },
    {
      'files': ['**/utils/*.*'],
      'rules': {
        'import/prefer-default-export': 'off',
      },
    },
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': ['react', '@typescript-eslint', 'prettier'],
  'rules': {
    'prettier/prettier': 'error',
    'linebreak-style': ['error', 'unix'],
    'semi': ['error', 'always'],
    'no-console': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        'argsIgnorePattern': '^_',
        'varsIgnorePattern': '^_',
        'caughtErrorsIgnorePattern': '^_',
      },
    ],
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/no-empty-interface': 'off',
    'no-underscore-dangle': ['error', { 'allow': ['id'] }],
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['draftState'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never',
        '': 'never',
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        'extensions': ['.tsx', '.stories.tsx'],
      },
    ],
    'react/function-component-definition': [
      2,
      {
        'namedComponents': 'arrow-function',
        'unnamedComponents': 'arrow-function',
      },
    ],
    'react/prop-types': 'off',
    'no-nested-ternary': 'off',
    'react/no-unstable-nested-components': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
  'settings': {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx'],
      },
      'typescript': {},
    },
  },
};
