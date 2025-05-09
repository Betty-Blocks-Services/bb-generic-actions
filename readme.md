# Generic Actions Template (Vanilla 🍦)

This project serves as a starting point for building generic actions in Vanilla JavaScript.

## 📦 Dependencies

This template includes the following key dependencies:

- **Jest** – Testing framework.
- **esbuild** – Fast JavaScript bundler.
- **Trunk** – DevEx toolkit to check, test, merge, and monitor your code.
- **Commitizen** - Simplify and structure commit messages
- **cz-conventional-changelog** - Adapter for Commitizen

Check `package.json` for the full list of dependencies.

## 🚀 Getting Started

### 1. Install Dependencies

First, install the necessary dependencies:

```sh
npm install
```

### 2. Add new functions

You can add new functions using the `bb` CLI.

```sh
bb functions new <name>
```

### 3. Create & Run Tests

Create your tests in the `/__tests__` directory.

Use the following naming conventions for your tests:

```text
functionname.test.js
```

#### Running tests

Tests are run with Jest:

```sh
npm test
```

### 4. Publishing

To publish your project using the `bb` CLI, use:

```sh
bb functions publish
```

This command will deploy your actions to the appropriate environment.

### Notes

- This template is designed to be modular and easy to extend.
- Feel free to modify jest.config.js to suit your project’s needs.

Happy coding! 🚀
