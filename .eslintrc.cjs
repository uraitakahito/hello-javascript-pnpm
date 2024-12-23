//
// eslint-config-airbnb*
//
// > Use eslint v8 until such time as our configs support v9:
// https://github.com/airbnb/javascript/issues/2961
//
// Backwards compatibility utility is available:
// https://eslint.org/blog/2022/08/new-config-system-part-2/#backwards-compatibility-utility
//
// peerDependencies:
// https://github.com/airbnb/javascript/blob/11f986fdc7d6b4c80e396437e9c45c939362bdee/packages/eslint-config-airbnb-base/package.json#L82-L85
//

module.exports = {
  /*
   * https://github.com/eslint/eslintrc/blob/main/conf/environments.js
   */
  env: {
    browser: true,
    es2024: true,
    node: true,
  },

  /*
   * https://eslint.org/docs/v8.x/use/configure/configuration-files#extending-configuration-files
   */
  extends: [
    'eslint:all',
    // airbnb includes React
    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/index.js
    // airbnb-base does not include React
    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/index.js
    'airbnb-base',
    // 'airbnb',
  ],

  overrides: [
    {
      files: ['test/**', 'test-jest/**', 'test-vitest/**'],
      rules: {
        // Magic numbers are frequently used in tests, so disable this rule
        // https://eslint.org/docs/v8.x/rules/no-magic-numbers
        'no-magic-numbers': 'off',
      },
    },
    {
      /*
       * IMPORTANT: `all configuration` is not recommended for production use
       * because it changes with every minor and major version of ESLint. Use it at your own risk.
       * https://eslint.org/docs/v8.x/use/configure/configuration-files#using-eslintall
       */
      extends: ['plugin:jest/all'],
      files: ['test/**', 'test-jest/**'],
      // You can omit the eslint-plugin- prefix
      plugins: ['jest'],
      rules: {
        // https://eslint.org/docs/v8.x/rules/no-hooks
        'jest/no-hooks': 'off',
        // https://github.com/jest-community/eslint-plugin-jest/blob/v28.9.0/docs/rules/prefer-importing-jest-globals.md
        'jest/prefer-importing-jest-globals': 'off',
        // https://github.com/jest-community/eslint-plugin-jest/blob/v28.9.0/docs/rules/require-hook.md
        'jest/require-hook': 'off',
      },
    },
    {
      files: ['jest.config.mjs'],
      rules: {
        'max-len': 'off',
      },
    },
  ],

  parserOptions: {
    // https://eslint.org/docs/v8.x/use/configure/language-options#specifying-parser-options
    ecmaVersion: 2024,
    // https://eslint.org/docs/v8.x/use/configure/language-options#specifying-parser-options
    sourceType: 'module',
  },

  rules: {
    // https://eslint.org/docs/v8.x/rules/capitalized-comments
    'capitalized-comments': 'off',
    // https://eslint.org/docs/v8.x/rules/func-style
    'func-style': 'off',
    // https://eslint.org/docs/v8.x/rules/id-length
    'id-length': 'off',
    // https://eslint.org/docs/v8.x/rules/line-comment-position
    'line-comment-position': 'off',
    // https://eslint.org/docs/v8.x/rules/multiline-comment-style
    'multiline-comment-style': 'off',
    // https://eslint.org/docs/v8.x/rules/no-console
    'no-console': 'off',
    // https://eslint.org/docs/v8.x/rules/no-inline-comments
    'no-inline-comments': 'off',
    // https://eslint.org/docs/latest/rules/no-param-reassign
    // https://github.com/airbnb/javascript/issues/1217
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsForRegex: ['^element'] },
    ],
    // https://eslint.org/docs/v8.x/rules/no-ternary
    'no-ternary': 'off',
    // https://eslint.org/docs/latest/rules/no-underscore-dangle
    'no-underscore-dangle': ['error', { allow: ['__dirname'] }],
    // https://eslint.org/docs/v8.x/rules/one-var
    'one-var': 'off',
  },

  //
  // https://blog.kubosho.com/entries/eslint-plugin-import-error-on-vitest-configuration-file
  //
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
};
