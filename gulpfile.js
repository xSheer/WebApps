var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat'); 
var uglify = require('gulp-uglify-es').default;
var rename = require('gulp-rename'); 
var babel = require('gulp-babel');
var ts = require('gulp-typescript');
var tslint = require("gulp-tslint");

gulp.task('scripts', function() { 
    return gulp.src('built/local/*.js')
        //concat might be not necessary anymore
        .pipe(concat('script.js')) 
        .pipe(gulp.dest('dist')) 
        .pipe(rename('script-min.js')) 
        .pipe(uglify()) 
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});

gulp.task('babel', function() {
    return gulp.src(
      [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'dist/script-min.js'
      ])
      .pipe(babel())
      .pipe(gulp.dest('compiled'))
});

gulp.task('watch', function(){
    browserSync.init({
        server: './'
    }, function(){
        //necessary becourse of two params needed -> else error!
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

gulp.task('default', gulp.series(['transpile', 'tslint', 'scripts', 'babel', 'watch'], function() { 
    console.log("Gulp default is running!");
}));

// { 
//     target: "es6",  //transpile into es5 to see the magic of babel
//     module: "es6", //necessary with import/export of classes
//     noImplicitAny: true,
//     out: 'output.js' 
// }