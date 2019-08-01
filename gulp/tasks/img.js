module.exports = function() {
	
  $.gulp.task('img:dev', () => {
    return $.gulp.src('src/static/img/*.{png, jpeg, gif}')
      .pipe($.gulp.dest('build/static/img'));
  });
}