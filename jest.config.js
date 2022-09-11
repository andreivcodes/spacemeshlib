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
  coverageReporters: ['json', 'json-summary', ['text', { file: 'coverage.txt' }]],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputName: './tests/coverage/junit.xml',
      },
    ],
  ],
  coverageThreshold: {
    global: {
      lines: 90,
    },
  },
};
