const assert = require('yeoman-assert');
const { run } = require('yeoman-test');
const { join } = require('path');

describe('generator-dizmo-react:app', function () {
    const generator = join(__dirname, '../generators/app');
    it('yo @dizmo/dizmo-react', () => {
        return run(generator).withOptions({
            'author': 'Dizmo Developer',
            'bundle-id': 'com.dizmo.my_dizmo',
            'email': 'developer@dizmo.com'
        }).then(() => {
            assert.file([
                'assets',
                'assets/Icon-dark.svg',
                'assets/Icon.svg',
                'assets/Preview.png',
                '.eslintrc.json',
                'gulp',
                'gulp/package.js',
                'gulp/tasks',
                'gulp/tasks/build',
                'gulp/tasks/build/assets',
                'gulp/tasks/build/assets/index.js',
                'gulp/tasks/build/assets/watch.js',
                'gulp/tasks/build/dizmo',
                'gulp/tasks/build/dizmo/index.js',
                'gulp/tasks/build/dizmo/watch.js',
                'gulp/tasks/build/help',
                'gulp/tasks/build/help/index.js',
                'gulp/tasks/build/help/watch.js',
                'gulp/tasks/build/index.js',
                'gulp/tasks/build/libraries',
                'gulp/tasks/build/libraries/index.js',
                'gulp/tasks/build/libraries/watch.js',
                'gulp/tasks/build/markup',
                'gulp/tasks/build/markup/index.js',
                'gulp/tasks/build/markup/watch.js',
                'gulp/tasks/build/properties',
                'gulp/tasks/build/properties/index.js',
                'gulp/tasks/build/properties/watch.js',
                'gulp/tasks/build/scripts',
                'gulp/tasks/build/scripts/index.js',
                'gulp/tasks/build/scripts/watch.js',
                'gulp/tasks/build/watch.js',
                'gulp/tasks/clean',
                'gulp/tasks/clean/index.js',
                'gulp/tasks/deploy',
                'gulp/tasks/deploy/index.js',
                'gulp/tasks/deploy/watch.js',
                'gulp/tasks/document',
                'gulp/tasks/document/index.js',
                'gulp/tasks/document/watch.js',
                'gulp/tasks/lint',
                'gulp/tasks/lint/index.js',
                'gulp/tasks/upload',
                'gulp/tasks/upload/index.js',
                'gulp/tasks/watch',
                'gulp/tasks/watch/index.js',
                'gulp/tools',
                'gulp/tools/cli.js',
                'gulp/tools/cli-spinner.js',
                'gulp/tools/run-task.js',
                'gulpfile.js',
                'help',
                'help/en',
                'help/en/help.md',
                'help/en/placeholder-400x275.png',
                '.info.plist',
                'LICENSE',
                '.npmignore',
                'package.json',
                'README.md',
                'src',
                'src/components',
                'src/components/App.scss',
                'src/components/App.js',
                'src/index.html',
                'src/index.js',
                'src/style',
                'src/style/style.scss',
                'webpack.config.js',
                '.yo-rc.json',
            ]);
            assert.jsonFileContent('package.json', {
                'name': 'MyDizmo',
                'description': 'My Dizmo',
                'version': '0.0.0',
                'author': {
                    'name': 'Dizmo Developer',
                    'email': 'developer@dizmo.com'
                },
                'contributors': [
                    {
                        'name': 'Dizmo Developer',
                        'email': 'developer@dizmo.com'
                    }
                ],
                'dizmo': {
                    'settings': {
                        'attributes': {
                            'settings/usercontrols/allowresize': true
                        },
                        'bundle-identifier': 'com.dizmo.my_dizmo',
                        'bundle-name': 'MyDizmo',
                        'category': '',
                        'height': 360,
                        'tags': [
                            'my-dizmo'
                        ],
                        'width': 480
                    },
                    'store': {
                        'host': 'https://store-api.dizmo.com'
                    }
                },
                'dependencies': {
                    '@babel/polyfill': '^7.8.7',
                    'react': '^16.13.1',
                    'react-dom': '^16.13.1'
                },
                'devDependencies': {
                    '@babel/core': '^7.9.6',
                    '@babel/preset-env': '^7.9.6',
                    '@babel/preset-react': '^7.9.4',
                    'ansi-colors': '^4.1.1',
                    'babel-loader': '^8.1.0',
                    'css-loader': '^3.5.3',
                    'eslint-plugin-react': '^7.20.0',
                    'fancy-log': '^1.3.3',
                    'gulp': '^4.0.2',
                    'gulp-copy': '^4.0.1',
                    'gulp-eslint': '^6.0.0',
                    'gulp-htmlmin': '^5.0.1',
                    'gulp-plist': '^0.9.0',
                    'gulp-rename': '^2.0.0',
                    'gulp-ver': '^0.1.0',
                    'gulp-zip': '^5.0.1',
                    'node-sass': '^4.14.1',
                    'rimraf': '^3.0.2',
                    'sass-loader': '^8.0.2',
                    'style-loader': '^1.2.1',
                    'webpack': '^4.43.0',
                    'webpack-stream': '^5.2.1'
                },
                'optionalDependencies': {
                    'closure-webpack-plugin': '^2.3.0',
                    'google-closure-compiler': '^20200504.0.0',
                    'jsdoc': '^3.6.4',
                    'minami': '^1.2.3',
                    'pump': '^3.0.0',
                    'webpack-obfuscator': '^0.28.1'
                },
                'license': 'ISC',
                'private': true,
                'repository': {
                    'type': 'git',
                    'url': ''
                },
                'scripts': {
                    'build': 'node ./gulp/tools/run-task.js',
                    'clean': 'node ./gulp/tools/run-task.js clean',
                    'deploy': 'node ./gulp/tools/run-task.js deploy',
                    'docs': 'node ./gulp/tools/run-task.js docs',
                    'lint': 'node ./gulp/tools/run-task.js lint',
                    'test': 'exit 0',
                    'upload': 'node ./gulp/tools/run-task.js upload',
                    'watch': 'node ./gulp/tools/run-task.js watch'
                }
            });
        });
    });
    it('yo @dizmo/dizmo-react --git', () => {
        return run(generator).withOptions({
            'author': 'Dizmo Developer',
            'bundle-id': 'com.dizmo.my_dizmo',
            'email': 'developer@dizmo.com',
            'git': true
        }).then(() => {
            assert.file([
                '.gitignore'
            ]);
            assert.noFile([
                '.npmignore'
            ]);
        });
    });
});
