
var g = require('gulp');
var s = require('gulp-sass');
var a = require('gulp-autoprefixer');


g.task('scss', function () {
    return g.src('./scss/resume.scss')
        .pipe(s({ outputStyle: 'compressed' }))
        .pipe(a('last 3 versions'))
        .pipe(g.dest('./'));
});

g.task('watch', function () {
    g.watch( './scss/*.scss', ['scss']);
});

g.task('default', ['watch','scss']);