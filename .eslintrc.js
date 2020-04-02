module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "plugin:import/typescript"
    ],
    "ignorePatterns": ["**/generated/*.*", "node_modules/", "*.scss"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
        "import/extensions": [2, {
            tsx: "never",
            jsx: "never",
            ts: "never",
            js: "never",
        }],
        "max-len":[1, 200],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["warn", {
            "vars": "all",
            "args": "after-used",
            "ignoreRestSiblings": false
        }],
        "react/no-array-index-key": 0,
        "import/prefer-default-export": 1,
        "react/prop-types": [1, {
            ignore: [
                'children',
            ]
        }]
    }
};