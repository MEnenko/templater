'use strict';
const gulp = require('gulp');
const templater = require('./templater.gulp.js');
 

gulp.task('templater', function () {
   
    return gulp
        .src('./templater.html')
        .pipe(templater({
        	tags: {
                'panel': '<div class="panel"><div class="panel-heading">{{heading}}</div><div class="panel-body">{{html}}</div></div>',
                'bootstrap_button':'<button class="{{class}}" type="{{type}}">{{html}}</button>'
            }
        }))
        .pipe(gulp.dest('dist'));  
});