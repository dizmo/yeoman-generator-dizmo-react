let gulp = require('gulp');
gulp.task('styles:watch', function () {
    gulp.watch('src/**/*.scss', gulp.series('styles'));
});
