const gulp = require('gulp');

gulp.task('scripts:watch', () =>
    gulp.watch(['src/**/*.(js|css|sass|scss)'], gulp.series('scripts'))
);
