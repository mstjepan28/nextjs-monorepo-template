## Installing dependencies

After cloning the project, install the dependencies with

```bash
yarn workspaces focus -A
```

the command installs dependencies from every workspace in the monorepo

* * *

## Running the dev server

After the dependencies have been installed, run the dev server for the 'app1' application with 

```bash
yarn app1 #defined in root package.json
```

this command run the 'app1' command defined in the root package.json which is just a alias for the command

```bash
yarn workspace @apps/application_1 dev
```

* * *

- **yarn**: yarn package manager

- **workspace**: This is an option of the yarn command that allows you to run a command in a workspace of a Yarn monorepo.

- **@apps/application_1**: Name of the workspace that the command will be executed in. The name of the workspace is defined in the package.json file of the workspace

- **dev**: script from the package.json file of the target workspace to be executed

* * *

## Other commands

List all the workspaces in the monorepo 

```bash
yarn workspaces list
```

* * *

## How to make a new shared module

In the shared folder create a new folder with the name of the module.

The folder should contain:
- **package.json**
- **src folder**
  - **index.ts**
  - **files/folders with your code**


**Package.json**
```json
{
  "name": "@shared/module_name",
  "private": true,
  "main": "./src",
  "peerDependencies": {
    // other modules used in this one
    "@shared/module_name_1": "*"
  }
}
```

**./src/index.ts**

Defines the exports of a module:

```typescript
import { FunctionToExport } from "path/to/function/in/module";
import { ComponentToExport } from "path/to/component/in/module";

export { FunctionToExport, ComponentToExport }
```

