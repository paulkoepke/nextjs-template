import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import cypress from 'eslint-plugin-cypress';
import jestDom from 'eslint-plugin-jest-dom';
import noOnlyTests from 'eslint-plugin-no-only-tests';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const config = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'next',
    'prettier',
  ),
  {
    plugins: {
      'no-only-tests': noOnlyTests,
      'jest-dom': jestDom,
      cypress,
    },
    settings: {},
    rules: {
      'react/prop-types': 'off',
      'react/no-unknown-property': ['error', { ignore: ['jsx'] }],
      'no-only-tests/no-only-tests': 'error',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-use-before-define': 'off',
      'no-const-assign': 'error',
      'cypress/no-force': 'warn',
      'cypress/no-pause': 'error',
      'cypress/no-assigning-return-values': 'error',
      '@typescript-eslint/no-use-before-define': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/explicit-module-boundary-types': [
        'warn',
        { allowHigherOrderFunctions: true },
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },
];

export default config;
