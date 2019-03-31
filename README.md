# 前端工程化

## 单元测试覆盖率
### jest.config.js配置信息
```
  // 生成测试覆盖率报告(命令行中显示)
  collectCoverage: true,
  // 生成junit.xml 测试报告
  reporters: ["default", "jest-junit"],
  // 需要收集单元测试覆盖率的 目录正则
  collectCoverageFrom: ["lib/**/*.{ts,tsx}", "!**/node_modules/**"],
  // Jest输出覆盖率信息文件的目录
  coverageDirectory: 'coverage',
  // Jest在编写覆盖率报告时使用的记者名称列表。 可以使用任何伊斯坦布尔记者
  coverageReporters: ['text', 'lcov'],
```
### package.json新增script
```
"scripts": {
  "ci": "cross-env NODE_ENV=test JEST_JUNIT_OUTPUT=./test-results/jest/results.xml jest --config=jest.config.js",
},
```
