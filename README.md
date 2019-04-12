# 前端工程化
## 什么是工程化
小作坊 v.s. 工程化

|  | 小作坊 | 工程化 |
| :------| ------: | :--------: |
| 代码管理 | QQ传 | git/svn |
| 部署代码 | 登录机器手动操作 | 一键部署 |
| 代码质量 | 靠自觉 | 工具+review |
| 性能优化 | 靠感觉 | 数据上报 |
| 需求管理 | 下周上线 | 任务管理 |
工程化的核心：
 1. 自动化--能用机器做的，绝不留给人做(人类易出错)
 2. 工业化--铁打的营盘，流水的兵(没有任何人是独一无二的，所有人都是可替代的)
 
## 测试覆盖率
 1. 配置
 2. 代码覆盖率 vs 函数覆盖率 vs 分支覆盖率
 3. 覆盖率高不意味着没有BUG, 但是覆盖率低一定有很多BUG
 4. 测试的好处--方便代码进行进化(重构)
### jest.config.js配置信息
```
  // 生成测试覆盖率报告(命令行中显示)
  collectCoverage: true,
  reporters: ["default"],
  // 需要收集单元测试覆盖率的 目录正则
  collectCoverageFrom: ["lib/**/*.{ts,tsx}", "!**/node_modules/**"],
  // Jest输出覆盖率信息文件的目录
  coverageDirectory: 'coverage',
  // Jest在编写覆盖率报告时使用的记者名称列表。 可以使用任何伊斯坦布尔记者
  coverageReporters: ['text', 'lcov'],
```
然后在 根目录下 生成 coverage 目录


## 持续集成
 1. 目前比较流行的持续集成工具
 2. 配置 **Circle CI**
    + 自动测试
    + 自动打包
    + 自动发布
 3. 给自己的项目添加小徽标

### 安装jest-junit 报告 测试结果
```
// 添加 jest-junit 生成 xml格式的 测试报告
reporters: ["default", "jest-junit"],
```
### package.json新增script
JEST_JUNIT_OUTPUT=./test-results/jest/results.xml 是为了让 circle ci 认识这个目录，从而显示测试报告
```
"scripts": {
  "ci": "cross-env NODE_ENV=test JEST_JUNIT_OUTPUT=./test-results/jest/results.xml jest --config=jest.config.js",
},
```
### 创建 Circle CI 的配置文件
在 根目录下创建 .circleci 目录，然后创建 config.yml

### push 代码
### circle ci 官网 执行

## 发布第一版 npm 包

+ yarn build 打包
+ 修改package.json
    + dist 目录下的所有文件 都需要发布
    ```
      "files": [
        "/dist/**/*"
      ],
    ```
+ npmjs.org 官网 注册账号
+ yarn publish/npm publish


## deploy.sh 自动更新版本号
```sh
npm version $1 && \
git push
```
npm version patch : 打补丁

npm version minor : 版本升级

## circleci tag filter
目前项目每次git push后， circleci 都会执行 workflow 即自动测试，打包，发布

我们可以通过 git tag 来控制 circleci 是否执行
配置 .circleci/config.yml
```yml
# 工作流： 任务的执行顺序
workflows:
  version: 2
  build_accept_deploy:
    jobs:
      - prepare
      - build:
          requires: # 当前任务的前置依赖
            - test
      - test:
          requires:
            - prepare
      - publish:
          requires:
            - build
          filters: # 过滤条件 符合以下条件的 才会执行 publish job 
            tags:
              only: /^v[0-9]+(\.[0-9]+)*/ # 只有 以 v开头接一串数字的 tag提交  才会执行 publish
            branches:
              ignore: /.*/ # 忽略所有的 分支 提交
```              