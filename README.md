# typescript-starter-template

This is a starter project for building typescript node applications. Use it as a starting point as it includes pre-packed the following:

-   run in development mode
-   bundle with `webpack` for production mode
-   pre-configured `eslint` code checker and `prettier` code formatter
    -   `pre-commit` configured to apply `prettier` on each commit
-   testing with `jest`
-   package updating with `npm-check-updates`

## Cloning

### Github template (method 1)

The project is a Github template so you can use the `Use this template` button of Github to directly clone it in your own Github collection.

Once you do and clone it locally you may wish to run:

```
yarn install
yarn customize
```

It will allow you to rename the project and remove any references to the original one.

### git clone (method 2)

You can directly run `git clone` to clone the project locally. In that case, you may wish to run:

```
yarn install
yarn detach
```

This will remove the original `origin` from your clone and allow you to rename the project to your willing.

## updates

The project comes with `npm-check-updates` package manager. Run:

```
yarn update
```

to update your `package.json` packages. You then have to run `yarn install` to install the latest updates.

## developing

You can start building your code using `src/index.ts` as the starting point. Run

```
yarn develop
```

To run in development mode. It is run under `ts-node` and will monitor files for any changes and re-run.

## building

Run `yarn build` to build a 'production' version that can be run with `node`.

Production build will be placed under `dist/index.js`.

To run the production code run `yarn start`. It will build the code and run it in `node` environment.

## eslint and prettier

The project comes with pre-configured `eslint` and `prettier`.

To check your source run:

```
yarn lint
```

It will check your code for typescript errors, `eslint` errors but also `prettier` formatting.

If you want to format your project according to `prettier` configuration, run:

```
yarn pretty
```

### pre-commit hook

The project will use `husky` to hook to pre-commit phase. It will run `yarn pretty` in staged files before the actual commit happens.

## testing

The project comes with `jest` framework for testing, preconfigured. Run:

```
yarn test
```

to launch testing. It will also create code coverage report.
