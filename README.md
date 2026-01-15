# 技术栈

- React 全家桶 + Zustand + TypeScript + Vite5 + ESLint + Prettier + husky + commitlint

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
  - styles：存放全局样式文件。
  - apis：存放与后端 API 交互的代码。
  - components：存放可复用的组件。
  - hooks：存放自定义的 React Hooks。
  - views：存放页面级组件。
  - routes：存放路由配置文件。
  - services：存放与后端交互的服务层代码。
  - types：存放 TypeScript 类型定义文件。
  - constants：存放常量定义文件。
  - context：存放 React 上下文相关的代码。
  - layout：存放布局组件，如导航栏、侧边栏等。
  - store：存放状态管理相关的代码，使用 Zustand 实现。
  - utils：存放工具函数和辅助方法。
- index.html：应用的 HTML 入口文件。
- manifest.json：应用的清单文件，用于配置应用的元数据。
- service-worker.js：应用的服务工作线程文件，用于实现离线缓存和推送通知等功能。
- sw.js：应用的服务工作线程文件，用于实现离线缓存和推送通知等功能。
- sw.js.map：应用的服务工作线程文件的映射文件，用于调试。
- vite-env.d.ts：Vite 的类型声明文件。
- vite.config.ts：Vite 的配置文件。
- README.md：项目的自述文件。
- .gitignore：Git 忽略文件，用于指定哪些文件不被版本控制。
- commitlint.config.js：commitlint 配置文件，用于规范提交信息。
- package.json：项目的依赖配置文件。
- tsconfig.json：TypeScript 配置文件。
- tsconfig.node.json：TypeScript 节点配置文件，用于配置 Node.js 环境下的编译选项。针对的是 vite.config.ts 文件。
- tsconfig.app.json：TypeScript 应用配置文件，用于配置应用的编译选项。针对的是 src 目录下的文件。
- pnpm-lock.yaml：pnpm 的锁定文件，用于确保依赖版本一致。
- .env：环境变量配置文件，用于存储敏感信息。
- .env.production：生产环境的环境变量配置文件。
- .env.development：开发环境的环境变量配置文件。
- .eslintrc.js：ESLint 配置文件。
- .prettierrc：Prettier 配置文件，用于格式化代码。
- .husky：husky 配置目录，用于存放 Git 钩子脚本。
- .husky/pre-commit：husky 预提交钩子脚本，用于在提交前运行 ESLint 检查。
- .husky/commit-msg：husky 提交信息钩子脚本，用于在提交信息中运行 commitlint 检查。
- .husky/pre-push：husky 预推送钩子脚本，用于在推送前运行测试。
- .husky/post-commit：husky 提交后钩子脚本，用于在提交后运行其他任务。
- .husky/post-merge：husky 合并后钩子脚本，用于在合并后运行其他任务。
- .git：Git 版本控制目录。
- node_modules：项目依赖目录。
- dist：构建输出目录。
- .vscode：VSCode 编辑器配置目录。
- .idea：IDEA 编辑器配置目录。
- .DS_Store：macOS 系统生成的隐藏文件。

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

# 项目介绍

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
