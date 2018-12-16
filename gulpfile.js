'use strict';
const gulp = require('gulp');
var uglify = require('gulp-uglify');
 
gulp.task('compress', function () {
    return gulp
        .src('./app/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));  
});