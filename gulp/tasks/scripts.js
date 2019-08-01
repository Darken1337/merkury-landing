module.exports = function() {
  $.gulp.task('scripts:dev', () => {
    return $.gulp.src('src/static/js/main.js')
          .pipe($.plag.plumber())
          .pipe($.plag.plumber.stop())
          .pipe($.gulp.dest('build/static/js'))
          .pipe($.bs.reload({
            stream: true
          }))
  })

  $.gulp.task('scripts:build', () => {
    return $.gulp.src('src/static/js/main.js')
      .pipe($.plag.plumber())
      .pipe($.plag.plumber.stop())
      .pipe($.uglify())
      .pipe($.plag.rename('main.min.js'))
      .pipe($.gulp.dest('build/static/js'))
  })

  $.gulp.task('scripts-lib', () => {
    return $.gulp.src(['node_modules/moveto/dist/moveTo.min.js'])
      .pipe($.gulp.dest('build/static/libs/js'))
  })
}