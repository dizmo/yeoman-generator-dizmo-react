const gulp = require('gulp');

require('./help');
require('./assets');
require('./scripts');
require('./markup');
require('./properties');
require('./libraries');
require('./dizmo');

gulp.task('build', gulp.series(
    'lint',
    'clean',
    gulp.parallel(
        'help',
        'assets',
        'scripts',
        'markup',
        'properties',
        'libraries'
    ),
    'dizmo'
));
