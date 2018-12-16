'use strict';
const gutil = require('gulp-util');
const through = require('through2');
const Jsdom = require('jsdom').JSDOM;
const Templater = require('./../../src/templater.js');

module.exports = function (options) {
    // Какие-то действия с опциями. Например, проверка их существования,
  // задание значения по умолчанию и т.д.


  return through.obj(function(file, enc, done) {
    // Если файл не существует
    if (file.isNull()) {
      cb(null, file);
      return;
    }
    
    // Если файл представлен потоком
    if (file.isStream()) {
      cb(new gutil.PluginError('gulp-example-plugin', 'Streaming not supported'));
      return;
    }
    const fileContent = file.contents.toString()
    const dom = new Jsdom(fileContent);

    var templater = new Templater(dom.window.document.body);
    for (var key in options.tags) {
      templater.addTag(key, options.tags[key]);
    }
    templater.run();
    file.contents = new Buffer(dom.window.document.documentElement.outerHTML);
    
    // Возвращаем обработанный файл для следующего плагина
    this.push(file);
    done();
  });
    
};