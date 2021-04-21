module.exports = {
  extends: ["airbnb-typescript-prettier"],
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  plugins: ["filenames"],
  ignorePatterns: [".eslintrc.js", "src/types/generated"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        singleQuote: false,
        printWidth: 80,
        bracketSpacing: true,
        jsxBracketSameLine: false,
        tabWidth: 2,
        semi: true,
      },
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "jsx-a11y/anchor-is-valid": 0, // NextJS Link component expects an a tag without an HREF
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": 0,
    "react/button-has-type": 0,
    "react/require-default-props": 0,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: ["ts", "tsx"],
      },
    ],

    "import/no-unresolved": "error",
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["**/*.stories.tsx"] },
    ],
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: [
          ["builtin", "external"],
          "internal",
          ["parent", "sibling", "index"],
          "unknown",
        ],
        alphabetize: { order: "asc" },
        pathGroups: [
          {
            pattern: "styles/**",
            group: "internal",
            position: "after",
          },
          { group: "builtin", pattern: "react", position: "before" },
          { group: "builtin", pattern: "next", position: "before" },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
      },
    ],
  },
  overrides: [
    {
      files: ["*.ts"],
      rules: {
        "filenames/match-regex": [2, "^[a-z-.]+$", true],
      },
    },
    {
      files: ["*.tsx"],
      rules: {
        "filenames/match-regex": [2, "^[A-Z][a-z].+(?:[A-Z][a-z].+)*$", true],
      },
    },
    {
      files: ["src/index.tsx", "src/serviceWorker.ts", "src/setupTests.ts"],
      rules: {
        "filenames/match-regex": "off",
      },
    },
  ],
};
