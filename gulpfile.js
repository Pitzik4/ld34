var gulp = require('gulp');

var rollup = require('rollup-stream');
var npm = require('rollup-plugin-npm');
var cjs = require('rollup-plugin-commonjs');
var babel = require('gulp-babel');
var sass = require('gulp-sass');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');


gulp.task('js', function() {
  return rollup({
    entry: './js/main.js',
    plugins: [
      npm({
        jsnext: true,
        main: true
      }),
      cjs({
        include: 'node_modules/**'
      })
    ]
  })
  .pipe(source('main.js', './js'))
  .pipe(buffer())
  .pipe(babel({ presets: ['es2015'] }))
  .pipe(gulp.dest('./dist'));
});

gulp.task('sass', function() {
  return gulp.src('./sass/**/*.sass')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./dist'));
});

gulp.task('assets', function() {
  return gulp.src('./assets/**/*')
  .pipe(gulp.dest('./dist'));
});


gulp.task('watch', function() {
  gulp.watch('./js/**/*', ['js']);
  gulp.watch('./sass/**/*', ['sass']);
  gulp.watch('./assets/**/*', ['assets']);
});

gulp.task('default', ['assets', 'sass', 'js']);
