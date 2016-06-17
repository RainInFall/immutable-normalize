var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var ava = require('gulp-ava');
var cover = require('gulp-coverage');

gulp.task('build', function(){
  return gulp.src("src/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("all.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"));
});

gulp.task("test", function () {
  return gulp.src("test/**/*.js")
    .pipe(ava());
});

gulp.task('default', ['build', 'test']);
