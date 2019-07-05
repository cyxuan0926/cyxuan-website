'use strict';

const { src, dest } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');

const { JS_FILES, SCSS_FILES, IMAGE_FILES, ASSETS_DEST_DIR } = require('./var');

const processImages = () => {
  return src(IMAGE_FILES).pipe(dest(ASSETS_DEST_DIR));
};

const processStyles = () => {
  return src(SCSS_FILES)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./sourcemaps'))
    .pipe(dest(ASSETS_DEST_DIR));
};

const processScripts = () => {
  return src(JS_FILES)
    .pipe(sourcemaps.init())
    .pipe(babel({ presets: [ '@babel/env' ] }))
    .pipe(sourcemaps.write('./sourcemaps'))
    .pipe(dest(ASSETS_DEST_DIR));
};

module.exports = {
  processImages,
  processStyles,
  processScripts,
};
