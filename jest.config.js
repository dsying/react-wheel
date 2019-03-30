/**
 * @Description: Jest 单元测试的配置文件
 * @author Ding Sheng
 * @date 2019-03-15
*/
// https://jestjs.io/docs/en/configuration.html 官网配置
module.exports = {
  verbose: true, // 显示所有的错误
  collectCoverage: true, //生成测试覆盖率报告
  reporters: ["default"],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'], //模块使用的文件扩展名数组。 如果您需要模块而未指定文件扩展名，则这些是Jest将按从左到右的顺序查找的扩展名
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json',
    },
  },
  moduleNameMapper: { // rootDir 默认为 jest.config.js 或者 package.json 所在目录， 如果没找到 package.json 则为 pwd(当前目录)
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/__mocks__/file-mock.js",
    "\\.(css|scss)$": "identity-obj-proxy",
  },
  testMatch: ['<rootDir>/**/__tests__/**/*.unit.(jsx|tsx)'], // 匹配上的文件都要执行测试
  transform: {
    "^.+unit\\.jsx?$": "babel-jest",
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFilesAfterEnv: ["<rootDir>test/setupTests.js"],
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"]
}