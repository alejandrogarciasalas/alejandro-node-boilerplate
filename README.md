# Alejandro's node boilerplate
yet another node boilerplate, for alejandro's personal use and like

inspired by random tidbits of info on the internet and:

- https://github.com/jsynowiec/node-typescript-boilerplate
- https://github.com/w3tecch/express-typescript-boilerplate
- https://github.com/microsoft/TypeScript-Node-Starter

## how to structure everything under `src`
design pattern first, folder structure second.

https://about.sourcegraph.com/go/gophercon-2018-how-do-you-structure-your-go-apps/
https://www.coreycleary.me/project-structure-for-an-express-rest-api-when-there-is-no-standard-way
https://softwareontheroad.com/ideal-nodejs-project-structure/

## Gitignore
copy pasta from
https://github.com/github/gitignore/blob/master/Node.gitignore

## yarn vs npm
let's use yarn because it's faster and as easy to use as npm

## nvm vs volta
volta is supposed to be faster but I don't like how it goes on my package.json plus too lazy to switch since nvm is pretty easy to use too

## typescript and babel
right now we are just using tsc and a tsconfig.json might want to use babel at some point but since this is server code only it doesn't feel as worth it
read more: https://iamturns.com/typescript-babel/

## .vscode
I have these settings on my vscode user settings but they live here for reference or if I ever want to hack together with a friend :)
## Packages

### @types/node
types for node

### @typescript-eslint/eslint-plugin
### @typescript-eslint/parser
### eslint
### eslint-config-prettier
eslint supports multiple eslintrc formats, which is confusing it seems like eslintrc.json with the explicit json extension is the way to go these days
https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-file-formats

if you are using vscode the eslint extension will basically run node_modules/eslint for validation, allow it for all workspaces

note: ts-lint is deprecated in favor of eslint
https://medium.com/palantir/tslint-in-2019-1a144c2317a9

#### on the eslintrc itself
basically this:
https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md

```
parser: '@typescript-eslint/parser' tells ESLint to use the parser package you installed (@typescript-eslint/parser).
This allows ESLint to understand TypeScript syntax.
This is required, or else ESLint will throw errors as it tries to parse TypeScript code as if it were regular JavaScript.
plugins: ['@typescript-eslint'] tells ESLint to load the plugin package you installed (@typescript-eslint/eslint-plugin).
This allows you to use the rules within your codebase.
extends: [ ... ] tells ESLint that your config extends the given configurations.
eslint:recommended is ESLint's inbuilt "recommended" config - it turns on a small, sensible set of rules which lint for well-known best-practices.
plugin:@typescript-eslint/recommended is our "recommended" config - it's just like eslint:recommended, except it only turns on rules from our TypeScript-specific plugin.
```

also this for prettier:
```
Since version 8.0.0 of eslint-config-prettier, all you need to extend is 'prettier'. That includes all plugins. Otherwise for <8.0.0, you need include 'prettier/@typescript-eslint'.
```
that's why we include `eslint-config-prettier`

### dotenv
for loading .env files as shell env variables

### express

we'll use express cuz routes and middlewares

### nodemon

so node server will restart automatically during dev

nodemon acts a replacement wrapper for node so replaceing `node` with `nodemon` will work most of the time

### prettier

pretty ts files

### typescript

~ types ~

#### on the tsconfig itself

we are using node 14 so this should work
https://stackoverflow.com/questions/61305578/what-typescript-configuration-produces-output-closest-to-node-js-14-capabilities/61305579#61305579
