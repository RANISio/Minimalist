var gulp = require('gulp');
var inlinesource = require('gulp-inline-source');

gulp.task('inlinefy', function() {
  gulp.src('./src/templates/*.hbs')
      .pipe(inlinesource())
      .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch('assets/**', ['inlinefy'])
});
