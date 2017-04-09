'use strict'

var gulp = require('gulp')
var concat = require('gulp-concat')
var sass = require('gulp-sass')

gulp.task('sass', function () {
  return gulp.src('./scss/main.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('main.css'))
  .pipe(gulp.dest('./static/css'))
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(concat('main.min.css'))
  .pipe(gulp.dest('./static/css'))
})

gulp.task('copy', function () {
  return gulp.src('./node_modules/simple-line-icons/css/simple-line-icons.css')
  .pipe(gulp.dest('./static/css'))
})

gulp.task('copy-font', function () {
  return gulp.src('./node_modules/simple-line-icons/fonts/*')
  .pipe(gulp.dest('./static/fonts'))
})

// Watching SCSS files
gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass'])
})

gulp.task('default', ['copy','copy-font','sass:watch'])
