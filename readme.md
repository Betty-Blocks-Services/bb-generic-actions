# Generic Actions Template (Vanilla 🍦)

This project serves as a starting point for building generic actions in Vanilla JavaScript.

## Dependencies

This template includes the following key dependencies:

- **bun** – Fast test runner.
- **Trunk** – DevEx toolkit to check, test, merge, and monitor your code.
- **Commitizen** - Simplify and structure commit messages
- **cz-conventional-changelog** - Adapter for Commitizen

Check `package.json` for the full list of dependencies.

## Getting Started

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

### 3. Test your code

Create your tests in `__tests__` and test them:

```sh
bun test
```

### 4. Configure publishing

Create a `config.json` in the project root with your `applicationId` and `host`:

```json
{
  "applicationId": "your-application-id",
  "host": "your-host"
}
```

See: https://github.com/bettyblocks/cli/wiki/Functions:Advanced

### 5. Publish your code

To publish your project using the `bb` CLI, use:

```sh
bb functions publish
```

This command will deploy your actions to the appropriate environment.

## Notes

- This template is designed to be modular and easy to extend.
- For more details, check out the bbs CLI documentation.
