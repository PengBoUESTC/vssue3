const gulp = require('gulp');
const through = require('through2');
const stylus = require('gulp-stylus');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const { pathSrc, pathDist, banner } = require('./util');

function makeStyleTask(input, output) {
  async function styleTask() {
    return gulp
      .src([
        pathSrc(`styles/${input}.styl`),
        require.resolve('github-markdown-css'),
      ])
      .pipe(stylus())
      .pipe(postcss([autoprefixer()]))
      .pipe(concat(`${output}.css`))
      .pipe(
        through.obj(function(file, encoding, callback) {
          file.contents = Buffer.concat([Buffer.from(banner), file.contents]);
          this.push(file);
          return callback();
        })
      )
      .pipe(gulp.dest(pathDist()))
      .pipe(postcss([cssnano()]))
      .pipe(rename(`${output}.min.css`))
      .pipe(gulp.dest(pathDist()));
  }

  styleTask.displayName = `style:${output}`;

  return styleTask;
}

gulp.task(
  'style',
  gulp.series(
    gulp.parallel([
      makeStyleTask('index', 'vssue'),
      makeStyleTask('index.rtl', 'vssue.rtl'),
    ])
  )
);

gulp.task('default', gulp.series('style'));
