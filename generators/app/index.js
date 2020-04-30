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
        const upgrade = Boolean(
            this.options.upgrade && fs.existsSync('package.json')
        );
        const pkg = this.fs.readJSON(
            this.destinationPath('package.json')
        );
        if (!upgrade || upgrade) {
            this.fs.copy(
                this.templatePath('gulp/'),
                this.destinationPath('gulp/')
            );
            this.fs.copyTpl(
                this.templatePath('webpack.config.js'),
                this.destinationPath('webpack.config.js'), {
                    dizmoName: pkg.name
                }
            );
        }
        if (!upgrade || upgrade) {
            pkg.dependencies = sort(
                lodash.assign(pkg.dependencies, {
                    'react': '^16.13.1',
                    'react-dom': '^16.13.1'
                })
            );
            pkg.devDependencies = sort(
                lodash.assign(pkg.devDependencies, {
                    '@babel/preset-react': '^7.9.4',
                    'eslint-plugin-react': '^7.19.0'
                })
            );
        }
        if (!upgrade || upgrade) {
            pkg.devDependencies = sort(
                lodash.assign(pkg.devDependencies, {
                    'css-loader': '^3.5.3',
                    'node-sass': '^4.14.0',
                    'sass-loader': '^8.0.2',
                    'style-loader': '^1.2.1'
                })
            );
            delete pkg.devDependencies['gulp-sass'];
            delete pkg.devDependencies['gulp-sourcemaps'];
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
                this.templatePath('_eslintrc.json'),
                this.destinationPath('.eslintrc.json')
            );
        }
        this.fs.writeJSON(
            this.destinationPath('package.json'), pkg, null, 2
        );
        this.conflicter.force = this.options.force || upgrade;
    }
    end() {
        rimraf.sync(
            this.destinationPath('gulp/tasks/build/styles')
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
