module.exports = {
    roots: ['<rootDir>/src'],
    collectCoverageFrom: [
        'src/**/*.{js,jsx}',
        '!**/.eslintrc.cjs',
        '!**/*.config.{js,cjs}',
        '!**/node_modules/**',
    ],
    coverageReporters: ['lcov', 'text'],
    setupFilesAfterEnv: ['jest-extended'],
    testEnvironment: 'jsdom',
    modulePaths: ['<rootDir>/src'],
    transform: {
        '^.+\\.(js|jsx)$': ['@swc/jest'],
    },
    transformIgnorePatterns: [
        '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs)$',
        '^.+\\.module\\.(css|sass|scss)$',
    ],
    moduleFileExtensions: [
        'js',
        'json',
        'jsx',
        'node',
    ],
    watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
    resetMocks: true,
};