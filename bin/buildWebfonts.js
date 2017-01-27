#!/usr/bin/env node
var glob = require('glob');
var path = require('path');
var webfontsGenerator = require('webfonts-generator');

var SRC = path.resolve('./assets/svg/*.svg');

var TEMPLATE = process.argv[2];

glob(SRC, function(error, files) {
  webfontsGenerator({
    files: files,
    dest: path.resolve('./assets/fonts'),
    fontName: 'rfont',
    css: true,
    cssDest: path.resolve('./assets/fonts/rfont.css'),
    cssFontsUrl: '/fonts',
    cssTemplate: TEMPLATE,
    html: true,
    types: ['svg', 'ttf', 'woff', 'eot'],
    normalize: true,
  });
});
