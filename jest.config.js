module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  collectCoverageFrom: [
    'src/**/*.{js,ts,tsx,jsx,mjs}',
    '!src/store/**/*.{js,ts,tsx,jsx,mjs}',
    '!src/utils/**/*.{js,ts,tsx,jsx,mjs}'
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: '<rootDir>/coverage',

  roots: [
    "<rootDir>/src"
  ],

  transform: {
    "^.+\\.ts(x)?$": "ts-jest"
  },

  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy"
  },

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx'],

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: ['./config/enzyme.config.js'],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],

  // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
  testURL: 'http://localhost',

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: ['<rootDir>/../node_modules/'],
  
  // Indicates whether each individual test should be reported during the run
  verbose: false,

};
