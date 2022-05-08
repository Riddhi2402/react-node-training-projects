const gulp = require('gulp');
// const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const concat = require('gulp-concat');

gulp.task('message', async () => {
  await console.log('gulp is running');
});

const copyFileTask = () => {
  return gulp.src('Files/file.txt').pipe(gulp.dest('dest/files'));
};

// gulp.task('imageMin', () => {
//   gulp.src('images/*').pipe(imagemin()).pipe(gulp.dest('dest/images'));
// });

const minifyTask = () => {
  return gulp.src('Files/*.js').pipe(uglify()).pipe(gulp.dest('dest/files'));
};

const sassTask = () => {
  return gulp.src('Files/*.scss').pipe(sass().on('error', sass.logError)).pipe(gulp.dest('dest/files'));
};

const cleanCssTask = () => {
  return gulp
    .src('Files/*.css')
    .pipe(cleanCSS())
    .pipe(
      rename({
        basename: 'cleancss',
      })
    )
    .pipe(gulp.dest('dest/files'));
};

const concatTask = () => {
  return gulp.src('Files/*.txt').pipe(concat('concatfile.txt')).pipe(gulp.dest('dest/files'));
};

gulp.task('default', async () => {
  await console.log('gulp is running');
});

gulp.task('watch', () => {
  gulp.watch('Files/*.txt', concatTask);
  gulp.watch('Files/*.css', cleanCssTask);
  gulp.watch('Files/*.js', minifyTask);
  gulp.watch('Files/*.scss', sassTask);
  gulp.watch('Files/file.txt', copyFileTask);
});
