[![NPM version](https://badge.fury.io/js/%40dizmo%2Fgenerator-dizmo-react.svg)](https://npmjs.org/package/@dizmo/generator-dizmo-react)
[![Build Status](https://travis-ci.org/dizmo/yeoman-generator-dizmo-react.svg?branch=master)](https://travis-ci.org/dizmo/yeoman-generator-dizmo-react)

# @dizmo/generator-dizmo-react

Sub-generator to create dizmo projects with support for [react]: This package is meant to be used in composition with the main [@dizmo/generator-dizmo] package.

[react]: https://reactjs.org/

## Package Installation

```sh
npm install -g yo
```

```sh
npm install -g @dizmo/generator-dizmo-react
```

**Note:** On most operating systems the `-g` option (shortcut for `--global`) requires super user (administrator) rights. Due to security considerations however, avoid using such a privileged account and see the [FAQ] to be able to install global packages as a *regular* user.

[FAQ]: https://github.com/dizmo/yeoman-generator-dizmo#i-cannot-install-yo-globally-with-npm-install--g

## Project Generation

```sh
yo @dizmo/dizmo-react [--git]
```

## CLI Help

```sh
yo @dizmo/dizmo-react --help
```

## Project Upgrade

```sh
npm upgrade -g @dizmo/generator-dizmo-react
```

Then, within an existing project:

```sh
yo @dizmo/dizmo-react --upgrade
```

## Further Information

See the description of the main [@dizmo/generator-dizmo] package for a more exhaustive documentation.

[@dizmo/generator-dizmo]: https://www.npmjs.com/package/@dizmo/generator-dizmo
