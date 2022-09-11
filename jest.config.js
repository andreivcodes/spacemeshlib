/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['dotenv/config'],
  testPathIgnorePatterns: ['./lib'],
  collectCoverage: true,
  coverageDirectory: './tests/coverage',
  collectCoverageFrom: ['./src/*.ts', './src/**/*.ts', '!./src/proto/**/*.ts', '!./src/wasm/*.ts'],
  coverageThreshold: {
    global: {
      lines: 90,
    },
  },
};