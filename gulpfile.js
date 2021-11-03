const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const browsersync = require('browser-sync').create();

function scssTask() {
  return src('./src/assets/scss/**/*.scss', {sourcemaps: true})
  .pipe(sass({
    outputStyle: 'expanded',
    sourceComments: true
  }))
  .pipe(autoprefixer({
    versions: ['last 2 browsers']
  }))
  .pipe(dest('./src/assets/css/', {sourcemaps: '.'}))
}

// function jsTask() {
//   return src('./src/assets/js/**/*.js', {sourcemaps: true})
//   .pipe(dest('./dist/js', {sourcemaps: '.'}))
// }

function browsersyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: './src/views/'
    }
  });
  cb();
}

function browsersyncReload(cb) {
  browsersync.reload();
  cb();
}

function watchTask() {
  watch('./src/views/*.html', browsersyncReload);
  watch(['./src/assets/scss/**/*.scss'], series(scssTask, browsersyncReload))
  //watch(['./src/assets/js/**/*.js'])
}

exports.default = series(
  scssTask,
  //jsTask,
  watchTask,
  browsersyncServe,
);


/* const gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', () => {
  gulp.src('./src/assets/scss/*.scss')
    .pipe(sass({
      outputStyle: 'expanded',
      sourceComments: true
    }))
    .pipe(autoprefixer({
      versions: ['last 2 browsers']
    }))
    .pipe(gulp.dest('./src/assets/css/'))  
});

gulp.task('default', () => {
  gulp.watch('./src/assets/scss/*.scss', gulp.series('sass'))
}); */