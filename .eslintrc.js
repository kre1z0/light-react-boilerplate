module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["react", "@typescript-eslint", "tsc", "import", "react-hooks"],
  env: {
    es6: true,
    browser: true,
    amd: true,
    node: true,
  },
  globals: {},
  rules: {
    "tsc/config": [
      2,
      {
        configFile: "./tsconfig.json",
      },
    ],
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/comma-spacing": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    "@typescript-eslint/no-shadow": ["error", { hoist: "all" }],
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-dupe-class-members": "error",
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-extra-semi": "error",
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        ignoreRestSiblings: true,
      },
    ],
    "@typescript-eslint/no-use-before-define": ["warn", "nofunc"],
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/unified-signatures": "warn",
    "@typescript-eslint/no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
      },
    ],
    "@typescript-eslint/no-useless-constructor": "warn",
    "array-bracket-spacing": ["error", "never"],
    "comma-dangle": ["error", "always-multiline"],
    "default-case": "error",
    "dot-notation": "error",
    "eol-last": ["error", "always"],
    eqeqeq: ["warn", "always", { null: "ignore" }],
    "func-style": [
      "error",
      "declaration",
      {
        allowArrowFunctions: true,
      },
    ],
    "guard-for-in": "error",
    "id-length": [
      "error",
      {
        exceptions: ["a", "b", "e", "i", "t", "x", "y", "_"],
        min: 2,
      },
    ],
    indent: "off",
    "key-spacing": "error",
    "keyword-spacing": "error",
    "max-classes-per-file": "error",
    "max-depth": ["error", 3],
    "max-len": [
      "warn",
      {
        code: 120,
        comments: 120,
      },
    ],
    "max-lines-per-function": [
      "warn",
      {
        max: 50,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    "max-lines": [
      "error",
      {
        max: 300,
        skipComments: true,
      },
    ],
    "no-alert": "error",
    "no-cond-assign": ["error", "always"],
    "no-console": [
      "error",
      {
        allow: ["error", "info"],
      },
    ],
    "no-else-return": ["warn", { allowElseIf: false }],
    "no-extra-bind": "error",
    "no-extra-boolean-cast": "warn",
    "no-implied-eval": "error",
    "no-irregular-whitespace": [
      "error",
      {
        skipComments: true,
        skipStrings: true,
        skipTemplates: true,
      },
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0,
      },
    ],
    "no-param-reassign": ["warn", { props: false }],
    "no-plusplus": [
      "error",
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    "no-shadow": "off",
    "no-useless-concat": "error",
    "no-useless-return": "warn",
    "no-unused-expressions": "off",
    "no-useless-constructor": "off",
    "no-var": "warn",
    "object-curly-spacing": ["error", "always"],
    "object-shorthand": [
      "warn",
      "always",
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] },
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: "directive", next: "*" },
      { blankLine: "any", prev: "directive", next: "directive" },
    ],
    "prefer-arrow-callback": [
      "warn",
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    "prefer-const": [
      "warn",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: true,
      },
    ],
    "prefer-destructuring": [
      "warn",
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: true,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    "prefer-spread": "error",
    "prefer-template": "warn",
    quotes: ["error", "double"],
    radix: "error",
    "react/display-name": "off",
    "react/prop-types": "off",
    semi: ["error", "always"],
    "spaced-comment": [
      "error",
      "always",
      {
        exceptions: ["-", "+"],
      },
    ],
    yoda: "error",
  },
  overrides: [
    {
      files: ["src/**/*.tsx"],
      rules: {
        "max-lines-per-function": [
          "warn",
          {
            max: 100,
            skipBlankLines: true,
            skipComments: true,
          },
        ],
      },
    },
  ],
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
    "import/extensions": [".ts", ".tsx"],
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"],
        moduleDirectory: ["node_modules", "src"],
      },
    },
  },
};
