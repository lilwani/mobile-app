export default {
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    testPathIgnorePatterns: [
        '/node_modules/',
        '<rootDir>/src/__tests__/util/testUtil.jsx',
        '<rootDir>/src/__tests__/util/setup.js',
    ],
    testEnvironment: 'jest-fixed-jsdom',
    setupFilesAfterEnv: ['./src/__tests__/util/setup.js'],
};
