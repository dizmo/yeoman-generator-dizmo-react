'use strict';

const fs = require('fs');
const Generator = require('yeoman-generator');
const lodash = require('lodash');
const rimraf = require('rimraf');

module.exports = class extends Generator {
    initializing() {
        this.composeWith(require.resolve(
            '@dizmo/generator-dizmo/generators/app'
        ), {
            arguments: this.arguments, ...this.options,
            typescript: undefined, coffeescript: undefined
        });
        this.composeWith({
            Generator: SubGenerator(this.arguments, this.options),
            path: require.resolve('.')
        });
    }
}
const SubGenerator = (args, opts) => class extends Generator {
    constructor() {
        super(args, opts);
    }
    configuring() {
        this.destinationRoot(process.cwd());
    }
    writing() {
        const pkg = this.fs.readJSON(
            this.destinationPath('package.json')
        );
        const upgrade = Boolean(
            this.options.upgrade && fs.existsSync('package.json')
        );
        if (!upgrade || upgrade) {
            this.fs.copy(
                this.templatePath('gulp/'),
                this.destinationPath('gulp/')
            );
            this.fs.copy(
                this.templatePath('babel.config.js'),
                this.destinationPath('babel.config.js')
            );
        }
        if (!upgrade || upgrade) {
            pkg.devDependencies = sort(
                lodash.assign(pkg.devDependencies, {
                    'browserify-css': '^0.15.0'
                })
            );
            pkg.devDependencies = sort(
                lodash.assign(pkg.devDependencies, {
                    '@babel/preset-react': '^7.0.0',
                    'eslint-plugin-react': '^7.14.3'
                })
            );
            pkg.dependencies = sort(
                lodash.assign(pkg.dependencies, {
                    'react': '^16.9.0',
                    'react-dom': '^16.9.0'
                })
            );
            this.fs.writeJSON(
                this.destinationPath('package.json'), pkg, null, 2
            );
        }
        if (!upgrade) {
            this.fs.copy(
                this.templatePath('src/'),
                this.destinationPath('src/')
            );
            this.fs.copyTpl(
                this.templatePath('src/index.html'),
                this.destinationPath('src/index.html'), {
                    dizmoName: pkg.name
                }
            );
            this.fs.copy(
                this.templatePath('src/components/_gitignore'),
                this.destinationPath('src/components/.gitignore')
            );
            this.fs.copy(
                this.templatePath('_eslintrc.json'),
                this.destinationPath('.eslintrc.json')
            );
        }
        this.conflicter.force = this.options.force || upgrade;
    }
    end() {
        rimraf.sync(
            this.destinationPath('src/components/_gitignore')
        );
        rimraf.sync(
            this.destinationPath('assets/locales')
        );
        rimraf.sync(
            this.destinationPath('src/lib')
        );
    }
};
function sort(object) {
    return Object.entries(object).sort().reduce(
        (a, [k, v]) => { a[k] = v; return a; }, {}
    );
}
