var gulp = require('gulp');
var eslint = require('gulp-eslint');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat'); 
var uglify = require('gulp-uglify-es').default;
var rename = require('gulp-rename'); 
var babel = require('gulp-babel');

gulp.task('scripts', function() { 
    return gulp.src('src/*.js')
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
    gulp.watch('src/*.js', gulp.series(['scripts', 'watch']));
});

gulp.task('lint', function() { 
    return gulp.src(['src/*.js', '!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('serve', gulp.series(['scripts'], function(){
    browserSync.init({
        server: './'
    });

    gulp.watch('src/*.js', gulp.series(['scripts', 'watch', 'lint']));
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch('src/*.js', gulp.series(['lint']));
}));

gulp.task('default', gulp.series(['lint', 'serve', 'babel'], function() { 
    console.log("Gulp hsd!");
}));