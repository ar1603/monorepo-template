module.exports = {
  verbose: true,
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/jest.js'],
  roots: ['./src'],
  testEnvironment: 'jsdom',
  coverageReporters: ['lcov'],
  coverageDirectory: './coverage',
  collectCoverageFrom: [
    'src/**/*.ts',
    'src/**/*.tsx',
    '!src/**/index.ts',
    '!src/**/index.tsx',
    '!src/**/App.tsx',
    '!src/components/MdPreview/utils.ts',
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules'],
  transform: {
    '.+\\.(css|scss|png|jpg|jpeg|svg|md)$': 'jest-transform-stub',
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
  // "coverageThreshold": {
  //   "global": {
  //     "branches": 70,
  //     "functions": 70,
  //     "lines": 70,
  //     "statements": -50
  //   }
  // }
};
