const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const del = require('del')
const newer = require('gulp-newer')
const debug = require('gulp-debug')
const browserSync = require('browser-sync').create();

gulp.task('styles', function () {
  return gulp.src('src/styles/index.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(cleanCss())
    .pipe(gulp.dest('public'));
});

gulp.task('assets', function () {
    return gulp.src('src/assets/**', {since: gulp.lastRun('assets')})
      .pipe(newer('public'))
      .pipe(debug({title: 'assets'}))
      .pipe(gulp.dest('public'));
});

gulp.task('clean', function () {
    return del('public');
});

gulp.task('build', gulp.series(
    'clean',
    gulp.parallel('styles', 'assets')
));

gulp.task('watch', function () {
    gulp.watch('src/styles/**/*.*', gulp.series('styles'));
    gulp.watch('src/assets/**/*.*', gulp.series('assets'));
});

gulp.task('serve', function () {
    browserSync.init({
        server: 'public'
    });
    browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});

gulp.task('dev', 
    gulp.series('build', gulp.parallel('watch', 'serve'))
);