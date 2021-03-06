var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var minifyHTML = require('gulp-minify-html');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
var ngAnnotate = require('gulp-ng-annotate');
var concat = require('gulp-concat');
var templateCache = require('gulp-angular-templatecache');
var autoprefixer = require('gulp-autoprefixer');
var streamqueue = require('streamqueue');

gulp.task('less', function () {
  gulp.src('./src/*.less')
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/'))
    .pipe(minifyCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('js', function() {
  var template = gulp.src('./src/*.html')
    .pipe(minifyHTML())
    .pipe(templateCache({'module': 'angular-hamburglar'}))
    .pipe(rename({
      basename: 'hamburglar',
      suffix: '.template'
    }));

  var js = gulp.src('./src/*.js')
    .pipe(ngAnnotate());

  streamqueue({ objectMode: true }, js, template )
    .pipe(concat('hamburglar.js'))
    .pipe(gulp.dest('./dist/'))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('test', function() {
  return gulp.src('./src/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build', ['js', 'less']);

gulp.task('default', ['test', 'build']);
