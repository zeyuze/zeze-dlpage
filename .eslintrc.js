module.exports = {
    'env': {
        'browser': true,
        'es2021': false,
        'node': true,
    },
    'extends': [
        'google',
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 12,
        'sourceType': 'module',
    },
    'plugins': [
        '@typescript-eslint',
    ],
    'rules': {
        'indent': [1, 4],
        'space-before-function-paren': 0,
        'max-len': 0,
        'require-jsdoc': 0,
        'object-curly-spacing': [0, 'never'],
    },
};
