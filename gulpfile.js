const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const clean = require('gulp-clean');
const copy = require('gulp-copy');

// 📌 Limpa a pasta dist
function cleanDist() {
    return gulp.src('dist', { allowEmpty: true, read: false })
        .pipe(clean());
}

// 📌 Compila SCSS para CSS
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

// 📌 Move Vídeos para `dist`
function videos() {
    return gulp.src('./src/videos/**/*')
        .pipe(gulp.dest('./dist/videos'));
}

// 📌 Copia os arquivos JSON de tradução para a pasta dist
function copyLocales() {
    return gulp.src('./src/locales/*.json')
        .pipe(copy('dist/locales', { prefix: 2 }));
}

// 📌 Tarefa de Watch (Observa mudanças nos arquivos)
function watchFiles() {
    gulp.watch('./src/styles/**/*.scss', styles);
    gulp.watch('./src/images/**/*', images);
    gulp.watch('./src/scripts/**/*.js', scripts);
    gulp.watch('./src/videos/**/*', videos);
    gulp.watch('./src/locales/*.json', copyLocales);
}

// 📌 Tarefas exportadas
exports.clean = cleanDist;
exports.styles = styles;
exports.images = images;
exports.scripts = scripts;
exports.videos = videos;
exports.copyLocales = copyLocales;
exports.watch = watchFiles;
exports.default = gulp.series(cleanDist, gulp.parallel(styles, images, scripts, videos, copyLocales), watchFiles);