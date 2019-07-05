'use strict';

const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const uglifyjs = require('gulp-uglify');
// const imagemin = require('gulp-imagemin');
const rev = require('gulp-rev');
const { src, dest } = require('gulp');

const { JS_FILES, SCSS_FILES, IMAGE_FILES, ASSETS_DEST_DIR } = require('./var');

const processImages = () => {
  return src(IMAGE_FILES)
    .pipe(rev())
    .pipe(dest(ASSETS_DEST_DIR))
    .pipe(rev.manifest({ merge: true }))
    .pipe(dest('.'));
};

const processStyles = () => {
  return src(SCSS_FILES)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(rev())
    .pipe(dest(ASSETS_DEST_DIR))
    .pipe(rev.manifest({ merge: true }))
    .pipe(dest('.'));
};

const processScripts = () => {
  return src(JS_FILES)
    .pipe(babel({ presets: [ '@babel/env' ] }))
    .pipe(uglifyjs())
    .pipe(rev())
    .pipe(dest(ASSETS_DEST_DIR))
    .pipe(rev.manifest({ merge: true }))
    .pipe(dest('.'));
};

module.exports = {
  processImages,
  processStyles,
  processScripts,
};
