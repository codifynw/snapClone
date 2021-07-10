module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  plugins: ['react', 'prettier', '@typescript-eslint', 'react-hooks'],
  env: {
    browser: true,
    node: true,
    mocha: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'arrow-parens': [2, 'always'],
    'array-callback-return': 1, // 480 - TODO: remove
    'comma-dangle': [2, 'always-multiline'],
    'id-length': [1, {min: 3}], // 286 - TODO: change to 2
    'import/named': 1,
    'import/no-extraneous-dependencies': 1,
    'import/no-mutable-exports': 1,
    'import/prefer-default-export': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/label-has-associated-control': 1,
    'jsx-a11y/label-has-for': 1,
    'jsx-a11y/no-static-element-interactions': 0,
    'no-unused-vars': 1,
    'no-alert': 1,
    'no-console': 1,
    'no-continue': 0,
    'no-param-reassign': [1, {props: false}],
    'no-restricted-syntax': 1,
    'no-underscore-dangle': 0,
    'no-use-before-define': 0,
    'no-return-await': 0,
    'prefer-promise-reject-errors': 0,
    'react/destructuring-assignment': 0,
    'react/forbid-prop-types': [2, {forbid: ['any']}],
    'react/jsx-filename-extension': [
      2,
      {extensions: ['.js', '.jsx', '.tsx']},
    ],
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-max-props-per-line': [2, {maximum: 4}],
    'react/jsx-no-bind': [1, {}], // 109 - TODO: change to 2
    'react/no-array-index-key': 1,
    'react/no-danger': 0,
    'react/prefer-stateless-function': 1,
    'react/require-default-props': 1, // 289 TODO: remove
    'react/button-has-type': 0,
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    camelcase: 'off', // Needs tobe disabled to avoid incorrect matches from @typescript-eslint/camelcase
    '@typescript-eslint/camelcase': ['error', {properties: 'never'}],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-empty-interface': 1,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        'no-use-before-define': 1,
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        '@typescript-eslint/no-triple-slash-reference': 0,
        'spaced-comment': 0,
      },
    },
    {
      files: ['src/**'],
      rules: {
        "no-restricted-imports": ["error", {
          "paths": ['configSecrets', 'api'],
          "patterns": ["*configSecrets*", "*/api/*", "api/*"],
        }],
      }
    },
    {
      "files": ["src/server.js"],
      "rules": {
        "no-restricted-imports": "off"
      }
    }
  ],
  globals: {
    __WEBPACK_DEVELOPMENT_MODE__: true,
    __WEBPACK_IS_CLIENT__: true,
    __WEBPACK_IS_SERVER__: true,
    __WEBPACK_SHOW_DEVTOOLS__: true,
    socket: true,
    webpackIsomorphicTools: true,
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/resolver': {
      node: {
        paths: ['src', 'api', 'node_modules', 'node_modules/@types'],
        extensions: ['', '.json', '.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
};
