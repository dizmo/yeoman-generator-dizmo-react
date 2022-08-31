'use strict';

const fs = require('fs');
const Generator = require('yeoman-generator');
const lodash = require('lodash');
const rimraf = require('rimraf');

module.exports = class extends Generator {
    initializing() {
        const app = this.composeWith(require.resolve(
            '@dizmo/generator-dizmo/generators/app'
        ), {
            arguments: this.arguments, ...this.options,
            typescript: undefined, coffeescript: undefined
        });
        const sub = this.composeWith({
            Generator: SubGenerator(this.arguments, this.options)(app),
            path: require.resolve('.')
        });
    }
}
const SubGenerator = (args, opts) => (app) => class extends Generator {
    constructor() {
        super(args, opts);
    }
    configuring() {
        this.destinationRoot(app.destinationRoot());
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
                    'react': '^18.2.0',
                    'react-dom': '^18.2.0'
                })
            );
            pkg.devDependencies = sort(
                lodash.assign(pkg.devDependencies, {
                    '@babel/preset-react': '^7.18.6',
                    'eslint-plugin-react': '^7.31.1'
                })
            );
        }
        if (!upgrade || upgrade) {
            pkg.script = sort(
                lodash.assign(pkg.scripts, {
                    'test': 'exit 0'
                })
            );
        }
        if (!upgrade || upgrade) {
            delete pkg.devDependencies['gulp-sass'];
            delete pkg.devDependencies['gulp-sourcemaps'];
        }
        if (!upgrade || upgrade) {
            delete pkg.optionalDependencies['chai'];
            delete pkg.optionalDependencies['chai-spies'];
            delete pkg.optionalDependencies['ignore-styles'];
            delete pkg.optionalDependencies['jsdom'];
            delete pkg.optionalDependencies['jsdom-global'];
            delete pkg.optionalDependencies['mocha'];
        }
        if (!upgrade) {
            this.fs.copy(
                this.templatePath('source/'),
                this.destinationPath('source/')
            );
            this.fs.copyTpl(
                this.templatePath('source/index.html'),
                this.destinationPath('source/index.html'), {
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
        this.env.conflicter.force = this.options.force || upgrade;
    }
    end() {
        rimraf.sync(
            this.destinationPath('gulp/tasks/build/styles')
        );
        rimraf.sync(
            this.destinationPath('assets/locales')
        );
        rimraf.sync(
            this.destinationPath('source/lib')
        );
        rimraf.sync(
            this.destinationPath('test')
        );
        rimraf.sync(
            this.destinationPath('webpack.config.test.js')
        );
    }
};
function sort(object) {
    return Object.entries(object).sort().reduce(
        (a, [k, v]) => { a[k] = v; return a; }, {}
    );
}
