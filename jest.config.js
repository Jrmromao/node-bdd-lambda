module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/handlers/**/*.js',
    '!**/coverage/**',
    '!**/dist/**',
    '!<rootDir>/handlers/**/*.test.js',
  ],
  coveragePathIgnorePatterns: ['index.js', '<rootDir>/handlers/utils/logger.js'],
  coverageReporters: ['text', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  // testResultsProcessor: 'jest-json-reporter',
  roots: ['<rootDir>'],
  testMatch: ['<rootDir>/handlers/**/*.steps.js', '<rootDir>/handlers/**/*.test.js'],
};
