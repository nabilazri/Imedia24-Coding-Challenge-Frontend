module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        "^.+\\.(js|jsx)$": "babel-jest",
        '^.+\\.ts?$': 'ts-jest'
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    testMatch: ['**/__tests__/*.js?(x)']
}