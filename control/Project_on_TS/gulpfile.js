'use strict';
const {src, dest, watch, series} = require('gulp');
const less = require('gulp-less');
// const cssmin = require('gulp-cssmin');
// const rename = require('gulp-rename');
// const watchLess = require('gulp-watch-less');


exports.less = function() {
    return src('./src/css/styles.less') // берем наш объединенный less файл из папки
        // .pipe(watchLess('./src/css/*.less')) // отслеживаем все изменения в файлах less
        .pipe(less()) // преобразуем его в css ...
        // .pipe(cssmin()) // минифицируем наш css
        // .pipe(rename({suffix: '.min'})) // переименовываем в min.css
        .pipe(dest('./dist')); // размещаем в папку dist
}

exports.watch = function () {
    watch('./src/css/*.less', series('less'));
};