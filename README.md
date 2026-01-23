# 项目介绍

- 这是一个通用后台管理系统项目，包括技术栈选型、项目结构设计、功能模块划分、权限管理、数据可视化等。

# 技术栈

- React18/19：利用 React18/19 最新版本的特性，如 并发模式(Concurrent Mode)、状态同步(State Sync) 等，提高应用的性能和用户体验。
- TypeScript：使用 TypeScript 增加代码的类型安全性和可维护性，减少运行时错误和调试时间。
- Vite5：利用 Vite5 最新版本的特性，如 快速的冷启动、热模块替换(HMR) 等，提高开发效率和用户体验。
- ESLint + Prettier：使用 ESLint 检查代码质量和风格，使用 Prettier 格式化代码，保持代码的一致性和可读性。
- husky + commitlint：使用 husky 配置 Git 钩子，使用 commitlint 检查提交信息的格式，确保团队成员遵循一致的提交规范。
- Zustand：使用 Zustand 进行状态管理，简单、灵活、高效，适用于中小型应用。
- React 全家桶：包括 React、ReactDOM、React Router、React Query 等，提供了开发后台管理系统所需的基础功能。
- React Query：利用 React Query 进行数据获取和缓存，简化了异步数据操作的流程，提高了应用的性能和用户体验。
- React Icons：使用 React Icons 提供常用的图标组件，方便在应用中添加图标。
- Antd：使用 Antd 提供丰富的 UI 组件，如按钮、表格、表单等，快速构建界面。

# 项目结构设计

- 划分模块：将项目划分为多个模块，如用户管理、权限管理、数据可视化等，每个模块独立负责自己的功能和状态管理。
- 组件化划分：采用组件化开发，将每个功能模块拆分为可复用的组件，提高代码的复用性和可维护性。
- 目录结构：采用清晰的目录结构，如 src/components、src/hooks 等，方便开发者查找和修改代码。

# 功能模块划分

- 用户管理：包括用户注册、登录、用户列表、用户详情、用户权限等功能。
- 权限管理：实现基于角色的权限管理系统，确保不同的用户拥有不同的操作权限。
- 数据可视化：使用图表库，如 ECharts、AntV 等，实现数据的可视化展示。展示关键业务指标，帮助用户更好地理解和分析数据。

# 权限管理

- 用户认证：使用 JWT（JSON Web Tokens）或 OAuth 等进行用户认证，保障系统的安全性，确保用户的身份和权限。
- 角色管理：定义不同角色，如管理员、普通用户等，并为每个角色分配不同的权限，实现细粒度的权限控制。
- 路由守卫：使用 React Router 的路由守卫功能，根据用户的角色和权限控制访问的页面。

# 数据可视化

- 图表库：选择合适的图表库，根据业务需求展示不同类型的图表，如折线图、柱状图、饼图等。
- 实时数据更新：使用 Websockets 等技术实现实时数据更新，确保数据的及时性和准确性。

# 主题定制

- 提供主题定制功能，让用户根据需求调整系统的颜色和样式，提高系统的个性化和用户体验。

# 国际化

- 提供国际化支持，使用 React-intl 或 i18next 等库，支持多语言切换和国际化。

# 测试和部署

- 单元测试和集成测试：编写单元测试和集成测试，确保代码的正确性和稳定性。
- 持续集成和持续部署：使用 CI/CD 工具，如 Jenkins、GitLab CI 等，自动化构建和部署应用，确保快速交付和持续集成。

# 监控和日志

- 监控系统：集成监控工具，如 Prometheus、Grafana 等，实时监控系统的运行状态和性能指标。
- 日志记录：集成日志记录系统，收集和分析系统运行时的日志信息，帮助开发者快速定位和解决问题。

## 业务需求

- 提供一个通用的后台管理系统，满足不同业务场景的需求。
- 用户管理：需要管理公司内部的员工信息，包括基本信息、职务、权限等。系统需要支持用户的增删改查操作。
- 权限管理：由于公司部分众多，需要一个灵活的权限管理系统，能够根据不同的角色和权限控制用户对系统的访问。确保敏感信息仅对授权的用户可见。
- 数据可视化：公司需要实时监控业务指标和关键数据，通过可视化图表展示各个部门的绩效和趋势，一边及时作出决策。
- 国际化：系统需要支持多语言切换，提供国际化支持，确保用户可以根据自己的语言环境使用系统。
- 主题定制：为了适应不同部门和用户喜好，系统需要提供主题定制功能，允许用户根据自己的需求自定义系统的外观和风格。

# 开发流程

1、BRD(业务需求文档)：详细描述系统的业务需求，包括功能需求、非功能需求等。关注的是“我们需要做什么以及为什么要做”。
2、PRD(产品需求文档)：细化 BRD 中的功能需求，包括用户界面设计、交互流程等。关注的是“我们需要怎么做以及做出来的产品应该是什么样子”。
3、需求内审：对 PRD 进行内审，确保需求的准确性和完整性。
4、产品研发评审(前端/后端一起参与)：对 PRD 进行评审，确保需求的可行性和合理性。
5、开发排期：根据需求和开发工作量，制定详细的项目排期计划。
6、技术评审：对技术方案进行评审，确保技术的可行性和合理性。包括前后端技术选型、架构设计等。
7、开发实现：根据技术评审结果，进行系统的开发和实现。

- 接口文档定义(前后端一起)：根据需求，定义前端和后端之间的接口规范，包括接口地址、请求方法、请求参数、响应数据等。
- 文档评审：前后端开发人员对接口文档进行评审，确保文档的准确性和完整性。
- 前端代码实现：根据接口文档，前端开发人员根据需求实现前端代码，包括页面布局、组件开发、事件处理、自测等。
- 后端代码实现：根据接口文档，后端开发人员根据需求实现后端代码，包括路由定义、数据库操作、业务逻辑、自测等。
- 接口联调测试：前后端开发人员在开发过程中，与后端开发人员合作，确保前端和后端的接口能够正常通信。确保接口的正确性和稳定性。
- 前端/后端代码评审：前后端开发人员对各自的代码进行评审，确保代码质量和规范。
- 前端/后端代码集成测试：在开发完成后，前后端开发人员合作，进行系统的集成测试，确保前端和后端的代码能够正常工作 together。确保系统的功能和性能符合需求。
  8、接口联调：在开发过程中，与后端开发人员合作，确保前端和后端的接口能够正常通信。
  9、自测/提测：在开发完成后，进行自测，确保系统的功能和性能符合需求。同时，与测试团队合作，进行系统的测试和提测。
  10、QA/修复 bug：在系统上线前，进行全面的测试和质量 assurance，修复发现的 bug 和问题。
  11、pre 环境验收：预生产环境测试，在系统上线前，进行预环境验收测试，确保系统的功能和性能符合需求。包括功能确认、性能测试、安全测试、兼容性测试、用户验收测试、回归测试等。
  12、需求上线：在系统测试通过后，将系统部署到生产环境，确保用户可以正常访问和使用。
  13、产品/业务验收：在系统上线后，与业务方合作，进行产品/业务验收测试，确保系统的功能和性能符合业务需求。

# 开发规范

- 代码风格统一：使用 ESLint 和 Prettier 统一代码风格，确保代码的一致性和可读性。
- 命名规范：使用驼峰命名法命名组件、变量、函数等，保持命名的一致性和可读性。
- 代码注释：在代码中添加必要的注释，包括函数、类、模块等，以提高代码的可读性和可维护性。
- 代码格式化：使用 Prettier 自动格式化代码，保持代码的一致性和可读性。
- 代码质量：编写高质量的代码，遵循最佳实践和编码规范，确保代码的可读性、可维护性和可扩展性。
- 代码规范：遵循 React 官方的代码规范，包括组件命名、文件结构、代码缩进等。

# RBAC(基于角色的访问控制)

- 它是一种权限管理机制，通过用户、角色、权限三者之间的关系进行灵活的权限分配
- 用户(User)：系统中的实际操作人员，可以是员工、管理员等。通常由唯一的`user_id`标识
- 角色(Role)：一组权限的集合，代表用户在系统中的职责和权限范围，例如管理员、普通用户、财务人员等。每个角色由唯一的`role_id`标识
- 权限(Permission)：系统中的具体操作或资源，用户通过角色来获取权限，例如查看用户列表、编辑用户、删除订单等。每个权限由唯一的`permission_id`标识
- 关系：用户和角色是多对多的关系，一个用户可以拥有多个角色，一个角色也可以分配给多个用户。角色和权限是多对多的关系，一个角色可以包含多个权限，一个权限也可以被多个角色使用。

# React 特点

- 组件化开发：将应用拆分成多个组件，每个组件负责自己的状态和渲染逻辑，组件之间通过 props 进行通信。使代码更易于维护和复用。
- 虚拟 DOM：React 使用虚拟 DOM 来高效地更新真实 DOM，从而提高性能。
- 单向数据流：React 采用单向数据流的模式，即数据只能从父组件流向子组件，避免了复杂的状态管理和数据同步问题。
- 声明式渲染：React 使用声明式的方式描述界面，开发者只需要关注描述界面的逻辑，而不需要直接操作 DOM。
- 高效的渲染机制：React 采用了高效的渲染机制，只更新需要变化的部分，避免了不必要的 DOM 操作，提高了渲染性能。
- 组件库丰富：React 有一个庞大的组件库生态系统，提供了许多常用的组件，如表单、导航栏、弹窗等，开发者可以直接使用这些组件，减少开发工作量。
- 社区活跃：React 社区非常活跃，有许多开发者贡献代码、分享经验和解决问题。这使得 React 成为一个非常有价值的前端开发框架。
- 跨平台开发：React 可以用于开发 Web 应用、移动应用（如 React Native）和桌面应用（如 Electron）等。
- 性能优化：React 提供了一些性能优化的工具和技术，如使用 React.memo 对组件进行缓存、使用 React.lazy 进行代码分割等，以提高应用的性能。
- 类型检查：React 支持使用 TypeScript 进行类型检查，提供了更好的代码质量和开发体验。
- 生态系统完善：React 有一个庞大的生态系统，包括许多工具、库和框架，如 React Router、Redux、MobX 等，这些工具和库可以帮助开发者更轻松地构建复杂的应用。

# Zustand 状态管理

- Zustand 是一个轻量级的状态管理库，它基于 React Hooks 实现。
- 它提供了一个简单的 API，使得状态管理变得更加容易。
- Zustand 支持全局状态和局部状态，开发者可以根据需要选择合适的状态管理方式。
- 它具有高度的可扩展性，开发者可以根据自己的需求自定义状态管理逻辑。
- Zustand 还支持中间件，开发者可以使用中间件来添加额外的功能，如日志记录、状态持久化等。
- Zustand 的性能表现优秀，它使用了高效的算法来更新状态，避免了不必要的渲染。
- Zustand 的 API 简洁明了，易于学习和使用。
- 它不需要额外的依赖，可以与其他库和框架无缝集成。

# 创建项目

- pnpm create vite
- 项目名称：react-admin
- 选择 React
- 选择 TypeScript + SWC
- 进入项目目录
  - cd react-admin
  - 设置淘宝镜像 npm config set registry https://registry.npmmirror.com/
- 安装依赖
  - pnpm install
  - 建议安装 eslint8 版本，因为 eslint9 版本与 typescript 5 版本不兼容
- 启动项目
  - pnpm dev

# 项目结构

- public：存放静态资源，如图片、字体等。它会被 Vite 直接复制到输出的根目录下， 可以直接通过 URL 访问，并且不会被编译。
- src
  - assets：存放静态资源，如图片、字体等。
  - App.tsx：应用的根组件。
  - main.tsx：入口文件，负责渲染应用。
  - vite-env.d.ts：Vite 的类型声明文件，用于支持 TypeScript。
  - apis：存放与后端 API 交互的代码。
  - components：存放可复用的组件。
  - hooks：存放自定义的 React Hooks。
  - views：存放页面级组件。
  - router：存放路由配置文件。
  - types：存放 TypeScript 类型定义文件。
  - layout：存放布局组件，如导航栏、侧边栏等。
  - store：存放状态管理相关的代码，使用 Zustand 实现。
  - utils：存放工具函数和辅助方法。
- index.html：应用的 HTML 入口文件。
- README.md：项目的自述文件。
- .gitignore：Git 忽略文件，用于指定哪些文件不被版本控制。
- commitlint.config.js：commitlint 配置文件，用于规范提交信息。
- package.json：项目的依赖配置文件。
- tsconfig.json：TypeScript 配置文件。
- tsconfig.node.json：TypeScript 节点配置文件，用于配置 Node.js 环境下的编译选项。针对的是 vite.config.ts 文件。
- tsconfig.app.json：TypeScript 应用配置文件，用于配置应用的编译选项。针对的是 src 目录下的文件。
- pnpm-lock.yaml：pnpm 的锁定文件，用于确保依赖版本一致。
- .env.production：生产环境的环境变量配置文件。
- .env.development：开发环境的环境变量配置文件。
- .eslint.config.js：ESLint 配置文件。
- .prettierrc：Prettier 配置文件，用于格式化代码。
- .husky：husky 配置目录，用于存放 Git 钩子脚本。
- .husky/pre-commit：husky 预提交钩子脚本，用于在提交前运行 ESLint 检查。
- .husky/commit-msg：husky 提交信息钩子脚本，用于在提交信息中运行 commitlint 检查。
- .husky/pre-push：husky 预推送钩子脚本，用于在推送前运行测试。
- .husky/post-commit：husky 提交后钩子脚本，用于在提交后运行其他任务。
- .husky/post-merge：husky 合并后钩子脚本，用于在合并后运行其他任务。
- node_modules：项目依赖目录。

# 安装依赖

```bash
pnpm install react-dom zustand @types/react-dom eslint prettier husky --save-dev
```

# 配置 ESLint 和 Prettier

1. 在项目根目录下创建 `.eslintrc.js` 文件，并添加以下内容：
   ```javascript
   module.exports = {
     root: true,
     parser: "@typescript-eslint/parser",
     plugins: ["@typescript-eslint"],
     extends: [
       "plugin:@typescript-eslint/recommended",
       "plugin:react/recommended",
       "plugin:react-hooks/recommended",
       "plugin:jsx-a11y/recommended",
       "plugin:prettier/recommended",
     ],
     rules: {
       "prettier/prettier": "error",
     },
   };
   ```
2. 在项目根目录下创建 `.prettierrc` 文件，并添加以下内容：
   ```json
   {
     "semi": true,
     "singleQuote": true,
     "printWidth": 80,
     "tabWidth": 2,
     "trailingComma": "es5"
   }
   ```

# 配置 husky 钩子

1. 安装 husky 依赖：
   ```bash
   npm install husky --save-dev
   ```
2. 初始化 husky 配置：
   ```bash
   npx husky install
   ```
3. 添加 pre-commit 钩子：
   ```bash
   npx husky add .husky/pre-commit "npm run lint"
   ```
   这将在每次提交前运行 ESLint 进行代码检查。

# 运行项目

```bash
npm start
```

# 构建项目

```bash
npm run build
```

# 运行 ESLint 检查

```bash
npm run lint
```

# 运行 Prettier 格式化代码

```bash
npm run format
```

## useEffect 钩子 和 useLayoutEfect 钩子的区别

- useEffect 钩子在组件渲染完成后执行，而 useLayoutEffect 钩子在组件渲染完成前执行。
- useLayoutEffect 钩子的执行时机更早，因此在使用时需要注意性能问题。
- 通常情况下，推荐使用 useEffect 钩子。
- 如果需要在组件渲染完成后立即执行某些操作，例如操作 DOM 元素的位置或大小，建议使用 useLayoutEffect 钩子。
- 注意：useLayoutEffect 钩子在每次组件渲染时都会执行，因此在使用时需要注意性能问题。它是同步执行的，会阻塞组件的渲染。
- useEffect 钩子是异步执行的，不会阻塞组件的渲染。

# void never any unknown 类型的区别及使用场景

- 类型 `void` 表示一个函数没有返回值，或者说返回的是 `undefined`。
- 类型 `never` 表示一个函数永远不会有返回值，或者说永远不会执行到函数的末尾。通常用于表示一个函数抛出异常或者无限循环。
- 类型 `any` 表示一个变量可以是任意类型，相当于关闭了类型检查。
- 类型 `unknown` 表示一个变量可以是任意类型，但是在使用前需要进行类型检查或类型断言。
- 使用场景：
- 当函数的返回值类型不确定时，使用 `unknown` 类型。
- 当函数的返回值类型确定为 `void` 时，使用 `void` 类型。
- 当函数的返回值类型确定为 `never` 时，使用 `never` 类型。
- 当变量的类型不确定时，使用 `any` 类型。
- 当变量的类型确定为 `unknown` 时，使用 `unknown` 类型。
- 示例：
- 函数没有返回值，使用 `void` 类型：
  ```typescript
  function logMessage(message: string): void {
    console.log(message);
  }
  ```
  - 函数永远不会有返回值，使用 `never` 类型：
  ```typescript
  function throwError(message: string): never {
    throw new Error(message);
  }
  ```
  - 变量可以是任意类型，关闭了类型检查，使用 `any` 类型：
  ```typescript
  let value: any = "hello";
  value = 123;
  console.log(value); // 123
  ```
  - 变量可以是任意类型，但是在使用前需要进行类型检查或类型断言，使用 `unknown` 类型：
  ```typescript
  function handleValue(value: unknown) {
    if (typeof value === "string") {
      console.log(value.toUpperCase());
    } else if (typeof value === "number") {
      console.log(value.toFixed(2));
    } else {
      console.log("Unknown value type");
    }
  }
  ```

# 类型断言

- 类型断言是一种告诉编译器某个变量的类型的方法，它可以在编译时检查类型错误。
- 类型断言有两种形式：尖括号语法和 as 语法。
- 示例：

```typescript
let value: unknown = "hello";
let length: number = (value as string).length;
let length2: number = (<string>value).length;
```

# 类型守卫

- 类型守卫是一种在运行时检查变量类型的方法，它可以在代码中根据变量的类型执行不同的操作。
- 类型守卫有两种形式：typeof 类型守卫和 instanceof 类型守卫。
- 示例：

```typescript
function handleValue(value: unknown) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (typeof value === "number") {
    console.log(value.toFixed(2));
  } else {
    console.log("Unknown value type");
  }
}
function handleValue1(value: unknown) {
  if (value instanceof Date) {
    console.log(value.toISOString());
  } else {
    console.log("Unknown value type");
  }
}
// 类型守卫的注意事项
// - 类型守卫只能在运行时检查变量的类型，不能在编译时检查类型错误。
// - 类型守卫只能用于确定变量的类型，不能用于转换变量的类型。
// - 类型守卫只能用于确定变量的类型，不能用于确定变量的属性或方法。
```

# 类型推断

- 类型推断是一种根据变量的使用上下文自动推断变量类型的方法，它可以在编译时检查类型错误。
- 类型推断有两种形式：上下文类型推断和基于赋值的类型推断。
- 示例：

```typescript
let value = "hello"; // 类型推断为 string
let length = value.length; // 类型推断为 number
function handleValue(value: unknown) {
  if (typeof value === "string") {
    let length: number = value.length; // 类型推断为 number
  }
}
// 类型推断的注意事项
// - 类型推断只能在变量的使用上下文推断类型，不能在变量的赋值上下文推断类型。
// - 类型推断只能用于确定变量的类型，不能用于确定变量的属性或方法。
```

# 类型别名

- 类型别名是一种为类型定义一个新的名称的方法，它可以在代码中使用新的名称来代替原始类型。
- 类型别名可以用于简化复杂的类型定义，提高代码的可读性。
- 示例：

```typescript
type Point = {
  x: number;
  y: number;
};
// 类型别名可以用于定义联合类型
type Union = string | number;
// 类型别名可以用于定义交叉类型
type Intersection = {
  a: number;
} & {
  b: string;
};
// 类型别名可以用于定义元组类型
type Tuple = [number, string];
// 类型别名可以用于定义枚举类型
enum Color {
  Red,
  Green,
  Blue,
}
type ColorAlias = typeof Color;
// 类型别名可以用于定义映射类型
type Mapped = {
  [key in Color]: string;
};
// 类型别名可以用于定义条件类型
type Conditional = T extends U ? X : Y;
// 类型别名可以用于定义索引签名
type Indexed = {
  [key: string]: number;
};
// 类型别名可以用于定义泛型类型
type Generic<T> = {
  value: T;
};
// 类型别名的注意事项
// - 类型别名只能用于定义新的类型，不能用于定义新的变量。
// - 类型别名只能用于定义对象类型，不能用于定义原始类型。
// - 类型别名只能用于定义简单的类型，不能用于定义复杂的类型。
```

# 类型别名和接口的区别

- 类型别名和接口都可以用于定义新的类型，但是它们有一些区别。
- 类型别名可以用于定义新的类型，也可以用于定义新的变量。
- 类型别名可以用于定义对象类型，也可以用于定义原始类型。
- 类型别名可以用于定义简单的类型，也可以用于定义复杂的类型。
- 类型别名可以用于定义联合类型和交叉类型。
- 类型别名可以用于定义元组类型和枚举类型。
- 类型别名可以用于定义映射类型和条件类型。
- 类型别名可以用于定义索引签名和泛型类型。
- 接口只能用于定义新的类型，不能用于定义新的变量。
- 接口只能用于定义对象类型。
- 接口只能用于定义简单的类型。

# 交叉类型

- 交叉类型是一种将多个类型合并为一个类型的方法，它可以在代码中使用新的类型来代替原始类型。
- 交叉类型可以用于合并多个类型的属性和方法，形成一个新的类型。
- 示例：

```typescript
type Person = {
  name: string;
  age: number;
};
type Employee = {
  id: number;
  department: string;
};
type PersonEmployee = Person & Employee;
let personEmployee: PersonEmployee = {
  name: "张三",
  age: 30,
  id: 123456,
  department: "IT",
};
```

# 联合类型

- 联合类型是一种将多个类型合并为一个类型的方法，它可以在代码中使用新的类型来代替原始类型。
- 联合类型可以用于合并多个类型的属性和方法，形成一个新的类型。
- 示例：

```typescript
type Union = string | number;
let value: Union = "hello";
value = 123;
```

# 枚举类型

- 枚举类型是一种将多个常量值合并为一个类型的方法，它可以在代码中使用新的类型来代替原始类型。
- 枚举类型可以用于合并多个常量值的属性和方法，形成一个新的类型。
- 示例：

```typescript
enum Color {
  Red,
  Green,
  Blue,
}
type ColorAlias = typeof Color;
let color: ColorAlias = Color.Red;
```

# 映射类型

- 映射类型是一种将一个类型的属性映射为另一个类型的属性的方法，它可以在代码中使用新的类型来代替原始类型。
- 映射类型可以用于合并多个类型的属性和方法，形成一个新的类型。
- 示例：

```typescript
type Mapped = {
  [key in Color]: string;
};
```

# 条件类型

- 条件类型是一种根据类型参数的条件来确定类型的方法，它可以在代码中使用新的类型来代替原始类型。
- 条件类型可以用于合并多个类型的属性和方法，形成一个新的类型。
- 示例：

```typescript
type Conditional = T extends U ? X : Y;
```

# 索引签名

- 索引签名是一种将多个属性映射为一个类型的方法，它可以在代码中使用新的类型来代替原始类型。
- 索引签名可以用于合并多个属性的属性和方法，形成一个新的类型。
- 示例：

```typescript
type Indexed = {
  [key: string]: number;
};
```

# 泛型类型

- 泛型类型是一种将一个类型参数化的方法，它可以在代码中使用新的类型来代替原始类型。
- 泛型类型可以用于合并多个类型的属性和方法，形成一个新的类型。
- 示例：

```typescript
type Generic<T> = {
  value: T;
};
```

# keyof 操作符

- keyof 操作符是一种将一个类型的属性名合并为一个联合类型的方法，它可以在代码中使用新的类型来代替原始类型。
- keyof 操作符可以用于合并多个属性的属性和方法，形成一个新的类型。
- 示例：

```typescript
type Point = {
  x: number;
  y: number;
};
type PointKeys = keyof Point; // "x" | "y"
```

# typeof 操作符

- typeof 操作符是一种将一个变量的类型合并为一个类型的方法，它可以在代码中使用新的类型来代替原始类型。
- typeof 操作符可以用于合并多个变量的属性和方法，形成一个新的类型。
- 示例：

```typescript
let value = "hello";
type ValueType = typeof value; // string
```

# in 操作符

- in 操作符是一种将一个属性名合并为一个类型的方法，它可以在代码中使用新的类型来代替原始类型。
- in 操作符可以用于合并多个属性的属性和方法，形成一个新的类型。
- 示例：

```typescript
type Point = {
  x: number;
  y: number;
};
type PointKeys = keyof Point; // "x" | "y"
```

# ts 内置的高级类型

- ts 内置了一些高级类型，它们可以在代码中使用新的类型来代替原始类型。
- 这些高级类型包括交叉类型、联合类型、枚举类型、映射类型、条件类型、索引签名、泛型类型、keyof 操作符、typeof 操作符、in 操作符等。
- 这些高级类型可以用于合并多个类型的属性和方法，形成一个新的类型。
- 示例：

```typescript
type Point = {
  x: number;
  y: number;
};
type PointKeys = keyof Point; // "x" | "y"
type PointValues = {
  [key in PointKeys]: Point[key];
};
```

# TypeScript 类型工具函数

- TypeScript 提供了一些类型工具函数，它们可以在代码中使用新的类型来代替原始类型。
- 这些类型工具函数包括 Partial、Required、Readonly、Pick、Omit、Extract、Exclude、NonNullable、Record、TupleToObject 等。
- 这些类型工具函数可以用于合并多个类型的属性和方法，形成一个新的类型。
- 示例：

```typescript
// Partial：将一个类型的所有属性都变为可选的。
// Required：将一个类型的所有属性都变为必填的。
// Readonly：将一个类型的所有属性都变为只读的。
// Pick：从类型中选取部分属性。
// Omit：从类型中排除部分属性。
// Extract：提取类型中共同的属性。
// Exclude：排除类型中共同的属性。
// NonNullable：将类型中的 null 和 undefined 排除掉。
// Record：将一个类型的属性名和值合并为一个对象。
// TupleToObject：将一个元组类型转换为一个对象类型。
type Point = {
  x: number;
  y: number;
};
type PartialPoint = Partial<Point>; // { x?: number | undefined; y?: number | undefined; }
type RequiredPoint = Required<Point>; // { x: number; y: number; }
type ReadonlyPoint = Readonly<Point>; // { readonly x: number; readonly y: number; }
type PickPoint = Pick<Point, "x">; // { x: number; }
type OmitPoint = Omit<Point, "x">; // { y: number; }
type ExtractPoint = Extract<"x" | "y", "x">; // "x"
type ExcludePoint = Exclude<"x" | "y", "x">; // "y"
type NonNullablePoint = NonNullable<Point>; // { x: number; y: number; }
type RecordPoint = Record<"x" | "y", number>; // { x: number; y: number; }
type TupleToObjectPoint = TupleToObject<["x", "y"]>; // { x: "x"; y: "y"; }
type TupleToObjectPoint = TupleToObject<["x", "y"], number>; // { x: number; y: number; }
```

# TypeScript 内置的高级类型和类型工具函数的区别

- TypeScript 内置的高级类型和类型工具函数都可以在代码中使用新的类型来代替原始类型。但是，它们的用途和使用方式有所不同。 内置的高级类型主要用于合并多个类型的属性和方法，形成一个新的类型。类型工具函数主要用于操作类型参数，形成一个新的类型。

# 性能优化

- 打包结果分析工具
  > pnpm i rollup-plugin-visualizer --save-dev,在 vite.config.ts 中引入插件进行配置
  > pnpm i vite-plugin-inspect --save-dev,在 vite.config.ts 中引入插件进行配置
- 路由懒加载：使用 React.lazy 和 React.Suspense 函数实现路由懒加载，避免在初始加载时加载所有路由组件。
- 拆包分包：将应用程序拆分成多个小的包，每个包只包含应用程序的一部分功能。这可以减少应用程序的初始加载时间，并且可以在需要时动态加载其他包。
- 预加载：preload 会优先加载资源，以便页面渲染时能立即使用；prefetch 则是在空闲时间预加载应用程序的某些部分，以便在需要时可以快速访问它们。

```typescript
import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";
import Inspect from "vite-plugin-inspect";
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        // manualChunks{
        //   "react-vendor": ["react", "react-dom", "react-router-dom"],
        //   "antd-vendor": ["antd"],
        //   "echarts-vendor": ["echarts"],
        // },
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
  plugins: [
    Inspect(),
    visualizer({
      open: true,
      filename: "stats.html",
    }),
  ],
});
```
