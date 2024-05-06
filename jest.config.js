/** @type {import('jest').Config} */
const config = {
  verbose: true,
  clearMocks: true,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.s?css$': '<rootDir>/tests/fileMock.js',
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/fileMock.js',
    'src/(.*)': '<rootDir>/src/$1',
    'tests/(.*)': '<rootDir>/tests/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.js'],
  testMatch: ['**/?(*.)*(spec|test).[tj]s?(x)'],
};

module.exports = config;
