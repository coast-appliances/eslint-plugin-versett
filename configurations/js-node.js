"use strict";

module.exports = {
  parser: "babel-eslint",
  plugins: ["import"],
  extends: [
    require.resolve("../configurations/eslint-all"),
    require.resolve("../rules/jest/on"),
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  env: {
    es6: true,
    jest: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js"]
      }
    }
  },
  rules: {}
};
