const gulp = require('gulp');
const less = require('gulp-less-sourcemap');
const cleancss = require('gulp-clean-css');

const LessPluginAutoprefix = require('less-plugin-autoprefix'),
      autoprefix = new LessPluginAutoprefix({
        browsers: ['last 2 version', 'safari 5', 'ie 8']
      });

gulp.task('compile', function() {
  gulp.src('less/links.less')
    .pipe(
    less({ plugins: [autoprefix], sourceMap: {sourceMapFileInline: true} })
      .on('error', function(err){ console.log(err); })
    )
    .pipe(gulp.dest('css'));
});

gulp.task('makedemo', function() {
  gulp.src('css/links.css')
    .pipe(gulp.dest('docs'));
});

gulp.task('watch', function() {
  gulp.watch('less/*.less', ['compile']);
});

gulp.task('default', ['compile', 'makedemo', 'watch'], function() {

});
