module.exports = {
    testEnvironment: 'node',
    // Prevents Jest from complaining of open handles
    globalTeardown: '<rootDir>/test-teardown-globals.js',
    testTimeout: 20000

  };