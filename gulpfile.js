var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify-es').default;
var ts = require('gulp-typescript');
var tslint = require("gulp-tslint");

gulp.task('scripts', function() { 
    return gulp.src('built/local/*.js')
        .pipe(uglify()) 
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});

// gulp.task('babel', function() {
//     return gulp.src(
//       [
//       'node_modules/babel-polyfill/dist/polyfill.js',
//       'dist/script-min.js'
//       ])
//       .pipe(babel())
//       .pipe(gulp.dest('compiled'))
// });

gulp.task('watch', function(){
    browserSync.init({
        server: './'
    }, function(){
        //necessary because of two params needed -> else error!
    });

    gulp.watch('src/*.ts', gulp.series(['default']));
    gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('tslint', function() { 
    return gulp.src(['src/*.ts', '!node_modules/**'], { base: '.' })
        .pipe(tslint({ }))
        .pipe(tslint.report());    
});

gulp.task('transpile', function(){
    var tsconfig = require("./tsconfig.json");
    return gulp.src('src/*.ts')
    .pipe(ts(tsconfig.compilerOptions))
    .pipe(gulp.dest('built/local'));
})

gulp.task('default', gulp.series(['tslint', 'transpile', 'scripts', 'watch'], function() { 
    console.log("Gulp default is running!");
}));