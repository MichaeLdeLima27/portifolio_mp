const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function styles() {
    return gulp.src('./src/styles/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
}

// 📌 Otimiza Imagens
function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

// 📌 Minifica Scripts JS
function scripts() {
    return gulp.src('./src/scripts/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts'));
}

function videos() {
    return gulp.src('./src/images/**/*.{mp4,avi,mov}')
        .pipe(gulp.dest('./dist/images'));
}

gulp.task('watch', function () {
    gulp.watch('src/styles/**/*.scss', gulp.series(styles));
    gulp.watch('src/images/**/*.{jpg,jpeg,png,gif,svg}', gulp.series(images));
    gulp.watch('src/scripts/**/*.js', gulp.series(scripts));
});

exports.default = gulp.parallel(styles, images, scripts);
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    gulp.watch('./src/images/**/*.{jpg,jpeg,png,gif,svg}', gulp.parallel(images));
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts));
}