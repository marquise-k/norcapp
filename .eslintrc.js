module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["airbnb", "airbnb/hooks"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "arrow-parens": "off",
        "comma-dangle": "off",
        "space-before-function-paren": "off",
        "no-trailing-spaces": "off"
    }
};