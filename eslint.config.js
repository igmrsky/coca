import globals from 'globals';
import pluginJs from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
    {
        plugins: {
            prettier: prettierPlugin,
        },
    },
    {
        ignores: ['node_modules', 'dist'],
    },
    pluginJs.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.browser,
                ...globals.es2021,
            },
        },
    },
    {
        files: ['**/*.{js, jsx}'],
        rules: {
            ...eslintConfigPrettier.rules,
            'prettier/prettier': [
                'error',
                {
                    endOfLine: 'auto',
                },
            ],
        },
    },
];
