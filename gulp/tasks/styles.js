module.exports = function() {
  $.gulp.task('styles:build', () => {
    return $.gulp.src('src/static/sass/main.scss')
      .pipe($.plag.plumber())
      .pipe($.plag.sourcemaps.init())
      .pipe($.plag.sass())
      .pipe($.plag.autoprefixer({
        browsers: ['last 10 versions'],
        cascade: false
      }))
      .on("error", $.plag.notify.onError({
        message: "Error: <%= error.message %>",
        title: "style"
      }))
      .pipe($.plag.csso())
      .pipe($.plag.rename('styles.min.css'))
      .pipe($.plag.sourcemaps.write())
      .pipe($.plag.plumber.stop())
      .pipe($.gulp.dest('build/static/css'))
      .pipe($.bs.reload({
        stream: true
      }));
  })

  $.gulp.task('styles:dev', () => {
    return $.gulp.src('src/static/sass/main.scss')
      .pipe($.plag.plumber())
      .pipe($.plag.sass())
      .pipe($.plag.autoprefixer({
        browsers: ['last 10 versions'],
        cascade: false
      }))
      .on("error", $.plag.notify.onError({
        message: "Error: <%= error.message %>",
        title: "style"
      }))
      .pipe($.plag.plumber.stop())
      .pipe($.gulp.dest('build/static/css'))
      .pipe($.bs.reload({
        stream: true
      }));
  })

  $.gulp.task('styles:libs', () => {
    return $.gulp.src(['node_modules/normalize.css/normalize.css'])
      .pipe($.plag.csso())
      .pipe($.plag.rename({
        suffix: '.min'
      }))
      .pipe($.gulp.dest('build/static/libs/css'))
      .pipe($.bs.reload({
        stream: true
      }));
  })
}