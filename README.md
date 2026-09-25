# C-Lingo · 关务 AI 辅助系统

> 让跨境贸易语言不再是障碍 —— 智能翻译 · AI 咨询 · 术语记忆，一体化关务专业平台

## 🌟 项目概述

C-Lingo 是一款面向关务行业的 AI 辅助系统产品原型。针对关务工作中专业术语多、翻译门槛高、标准难查找等痛点，C-Lingo 提供集 **智能翻译、AI 咨询、术语库管理、记忆库** 于一体的专业解决方案。

本项目为高保真交互原型，完整展示了产品的核心功能与界面设计。

### ✨ 核心亮点

- 🎯 **专业精准** — 基于关务专业语料训练，远超通用翻译工具的行业准确率
- 💬 **AI 智能咨询** —— 24 小时关务顾问，所有回答均附标准依据，可溯源查证
- 📚 **企业级术语库** — 自定义术语管理，统一翻译口径，团队协作更高效
- 🧠 **翻译记忆引擎** — 历史翻译自动记忆，重复内容零成本复用
- 🏢 **管理后台** — 用户、角色、语料、模型全方位企业级管理能力

---

## 🎯 功能模块

### 用户端

| 模块          | 说明                                       |
| ----------- | ---------------------------------------- |
| **AI 智能咨询** | 多轮对话式关务咨询，支持 SN/T 行业标准问答，回答附标准溯源         |
| **文档翻译**    | 支持 PDF / Word / Excel 多格式翻译，保留原排版，术语自动匹配 |
| **文本翻译**    | 轻量即译，中英双向，内置关务专业术语引擎                     |
| **术语库管理**   | 企业级术语库，支持批量导入导出，团队共享协作                   |
| **翻译记忆库**   | 自动记忆历史翻译，相似内容智能推荐复用                      |
| **翻译历史**    | 完整翻译记录，多维搜索回溯，一键批量导出                     |

### 管理后台

| 模块        | 说明                  |
| --------- | ------------------- |
| **用户管理**  | 用户账号创建、编辑、禁用，支持批量操作 |
| **角色管理**  | 灵活的角色权限体系，支持自定义角色   |
| **语料库管理** | 企业语料统一管理，持续优化模型效果   |
| **标准管理**  | SN/T 等行业标准录入与维护     |
| **模型配置**  | 多模型切换与参数调优，适配不同业务场景 |

---

## 🛠️ 技术栈

- **前端框架**：Vue 3 + Vite
- **UI 组件**：Element Plus
- **样式方案**：CSS3 / CSS Variables
- **图标系统**：Lucide Icons
- **字体**：IBM Plex Sans / Playfair Display / JetBrains Mono
- **构建产物**：单文件打包（inlined assets）

> 本仓库为原型构建产物与作品集落地页的静态展示版本。

---

## 📁 项目结构

```
c-lingo-portfolio/
├── index.html              # 项目落地页（作品集首页）
├── css/
│   └── style.css           # 落地页样式
├── js/
│   └── main.js             # 落地页交互逻辑
├── images/                 # 落地页与 README 用截图
│   ├── screenshot-login.jpg
│   ├── screenshot-consult.jpg
│   ├── screenshot-translate.jpg
│   ├── screenshot-text-translate.jpg
│   ├── screenshot-glossary.jpg
│   ├── screenshot-memory.jpg
│   ├── screenshot-history.jpg
│   └── screenshot-admin.jpg
├── prototype/              # 产品原型（拆分后）
│   ├── index.html          # 原型入口
│   ├── css/
│   │   └── app.css         # 原型样式
│   ├── js/
│   │   └── app.js          # 原型主脚本（ES Module）
│   └── assets/images/      # 原型静态资源
└── README.md               # 项目说明文档
```

---

## 🚀 本地运行

由于原型使用了 ES Module (`type="module"`)，需要通过 HTTP 服务器访问，不能直接双击打开 HTML 文件。

### 方式一：Python（推荐，无需安装）

```bash
# 在项目根目录下运行
python3 -m http.server 8080

# 然后访问
# 落地页: http://localhost:8080
# 原型:   http://localhost:8080/prototype/
```

### 方式二：Node.js

```bash
npx serve .

# 或
npx http-server . -p 8080
```

### 方式三：VS Code 插件

安装 **Live Server** 插件，右键 `index.html` → `Open with Live Server`。

---

## 🌐 部署到 GitHub Pages

1. 将本项目推送到 GitHub 仓库
2. 进入仓库 Settings → Pages
3. Source 选择 `Deploy from a branch`
4. Branch 选择 `main` / `root`，保存
5. 等待部署完成后访问 `https://<your-username>.github.io/<repo-name>/`

---

## 🎨 设计说明

### 设计理念

- **专业导向** — 深度贴合关务行业场景，不是通用 AI 工具的简单套壳
- **效率优先** — 核心功能 3 步触达，减少操作路径，提升工作效率
- **视觉统一** — 蓝色主调传递专业可信，模块化界面降低认知成本

### 配色系统

| 颜色  | 色值                    | 用途           |
| --- | --------------------- | ------------ |
| 主色调 | `#3b82f6`             | 品牌色、主按钮、重点强调 |
| 辅助色 | `#8b5cf6`             | 渐变点缀、装饰元素    |
| 背景色 | `#0a0e1a` / `#0f172a` | 深色背景层级       |
| 文字色 | `#f1f5f9` / `#94a3b8` | 主文字 / 次要文字   |

---

## 📝 关于原型

这是一个产品设计原型，用于展示产品交互流程与界面设计。原型中的数据均为模拟数据，不代表最终产品形态。

原型账号（演示用）：

- 手机号：`13800138000`
- 密码：任意填写即可登录

---

## 📄 License

This project is for portfolio demonstration purposes only.
