'use strict';

const { src, dest, watch } = require('gulp');
const del = require('del');
const spritesmith = require('gulp.spritesmith');
const revRewrite = require('gulp-rev-rewrite');
const browserSync = require('browser-sync').create();

const {
  ASSETS_DIR,
  TEMPLATE_FILES,
  SPRITE_FILES,
  ASSETS_DEST_DIR,
  TEMPLATE_DEST_DIR,
} = require('./var');

const clearDest = () =>
  del([ ASSETS_DEST_DIR, TEMPLATE_DEST_DIR ], { force: true });

// 生成雪碧图
const processSprite = () => {
  return src(SPRITE_FILES)
    .pipe(
      spritesmith({
        imgName: 'images/sprite.png',
        cssName: 'styles/_sprite.scss',
        cssFormat: 'scss',
        padding: 6,
        algorithm: 'binary-tree',
      })
    )
    .pipe(dest(ASSETS_DIR));
};

const processTemplates = () => {
  return src(TEMPLATE_FILES).pipe(dest(TEMPLATE_DEST_DIR));
};

const reversionTpl = () => {
  return src(TEMPLATE_FILES)
    .pipe(
      revRewrite({
        replaceInExtensions: [ '.njk' ],
        manifest: src('rev-manifest.json'),
        // modifyReved: filename => filename.replace(/^\S+(\/public\S+)$/, '$1'),
      })
    )
    .pipe(dest(TEMPLATE_DEST_DIR));
};

const reversionCss = () => {
  return src(`${ASSETS_DEST_DIR}/**/*.css`)
    .pipe(
      revRewrite({
        replaceInExtensions: [ '.css' ],
        manifest: src('rev-manifest.json'),
      })
    )
    .pipe(dest(ASSETS_DEST_DIR));
};

// 自动刷新浏览器
const browserRefresh = () => {
  browserSync.init({
    proxy: 'localhost:8001',
  });

  watch([ ASSETS_DEST_DIR, TEMPLATE_DEST_DIR ]).on('change', browserSync.reload);
};

module.exports = {
  browserRefresh,
  clearDest,
  processSprite,
  processTemplates,
  reversionTpl,
  reversionCss,
};
