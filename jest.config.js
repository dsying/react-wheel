/**
 * @Description: Jest 单元测试的配置文件
 * @author Ding Sheng
 * @date 2019-03-15
*/
// https://jestjs.io/docs/en/configuration.html 官网配置
module.exports = {
  verbose: true,
  clearMocks: false,
  collectCoverage: false,
  reporters: ["default"],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json',
    },
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/__mocks__/file-mock.js",
  },
  testMatch: ['<rootDir>/**/__tests__/**/*.unit.(jsx|tsx)'],
  transform: {
    "^.+unit\\.(jsx)$": "babel-jest",
    '^.+\\.(tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ["<rootDir>test/setupTests.js"],
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"]
}