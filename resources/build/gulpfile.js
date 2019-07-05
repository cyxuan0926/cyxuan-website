'use strict';

const { series, watch } = require('gulp');
const baseTasks = require('./tasks.base');
const devTasks = require('./tasks.dev');
const prodTasks = require('./tasks.prod');

const {
  TEMPLATE_FILES,
  JS_FILES,
  SCSS_FILES,
  SPRITE_FILES,
  IMAGE_FILES,
} = require('./var');

// TODO: 压缩图片

const _watch = () => {
  watch(JS_FILES, devTasks.processScripts);
  watch(SCSS_FILES, devTasks.processStyles);
  watch(IMAGE_FILES, devTasks.processImages);
  watch(SPRITE_FILES, baseTasks.processSprite);
  watch(TEMPLATE_FILES, baseTasks.processTemplates);
};

const dev = () => {
  series(
    baseTasks.clearDest,
    baseTasks.processSprite,
    devTasks.processImages,
    devTasks.processStyles,
    devTasks.processScripts,
    baseTasks.processTemplates,
    baseTasks.browserRefresh
  )();
  _watch();
};

const prod = done => {
  series(
    baseTasks.clearDest,
    baseTasks.processSprite,
    prodTasks.processImages,
    prodTasks.processStyles,
    prodTasks.processScripts,
    baseTasks.reversionTpl,
    baseTasks.reversionCss
  )();
  done();
};

module.exports = {
  default: dev,
  'build:dev': dev,
  'build:prod': prod,
};
