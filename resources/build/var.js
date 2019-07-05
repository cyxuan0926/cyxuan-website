'use strict';

const ASSETS_DIR = [ '../public' ];
const TEMPLATE_FILES = [ '../view/**/*.njk' ];
const SCSS_FILES = [ `${ASSETS_DIR}/**/*.scss` ];
const JS_FILES = [ `${ASSETS_DIR}/**/*.js` ];
const SPRITE_FILES = [ `${ASSETS_DIR}/images/sprite/*.+(png|jpg|svg)` ];
const IMAGE_FILES = [
  `${ASSETS_DIR}/**/*.+(png|jpg|gif|svg)`,
  `!${SPRITE_FILES}`,
];

const ASSETS_DEST_DIR = '../../app/public';
const TEMPLATE_DEST_DIR = '../../app/view';

module.exports = {
  ASSETS_DIR,
  TEMPLATE_FILES,
  JS_FILES,
  SCSS_FILES,
  SPRITE_FILES,
  IMAGE_FILES,
  ASSETS_DEST_DIR,
  TEMPLATE_DEST_DIR,
};
