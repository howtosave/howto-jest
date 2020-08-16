const {defaults} = require('jest-config');
/**
 * JEST Configuration
 * 
 * See https://jestjs.io/docs/en/configuration
 */
module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "collectCoverageFrom": [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts"
  ],
  "setupFiles": [
    "react-app-polyfill/jsdom"
  ],
  "setupFilesAfterEnv": [
    "<rootDir>/tests/jest.setup.js"
  ],
  "testMatch": [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"
  ],
  "testPathIgnorePatterns": [
    "/node_modules/", "/dist/",
  ],
  "testEnvironment": "jest-environment-jsdom-fourteen",
  "transform": {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
  },
  "transformIgnorePatterns": [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$"
  ],
  "modulePaths": [],
  "moduleNameMapper": {
    "^react-native$": "react-native-web",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
  },
  "moduleFileExtensions": [
    "web.js",
    "js",
    "web.ts",
    "ts",
    "web.tsx",
    "tsx",
    "json",
    "web.jsx",
    "jsx",
    "node"
  ],
  "watchPlugins": [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ],

  // A path to a module which exports an async function that is triggered once before all test suites
  globalSetup: './tests/global-setup.js',
  // A path to a module which exports an async function that is triggered once after all test suites
  globalTeardown: './tests/global-teardown.js',
  // favor of setupFilesAfterEnv in jest 24
  // The test environment that will be used for testing
  //testEnvironment: './tests/custom-node-env.js',
  globals: {
  },
}
