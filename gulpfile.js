var gulp = require('gulp');
var sass = require('gulp-sass');

// gulp.task('mytask', function() {
//     return gulp.src('source-files')
//     .pipe(plugin())
//     .pipe(gulp.dest('folder'))
//   });


sass.compiler = require('node-sass');
 
gulp.task('scss', function () {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass({outputStyle:'compressed'}))
    .pipe(gulp.dest('dist/css'));
});
 
gulp.task('scss:watch', function () {
  gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'));
});