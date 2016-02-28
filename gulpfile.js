var gulp = require('gulp');
var sass = require('gulp-sass');

var config = {
    publicDir: './public',
};

gulp.task('css', function() {
    return gulp.src('./tonic.scss')
    .pipe(gulp.dest(config.publicDir + '/css'));
});


gulp.task('default', ['css']);