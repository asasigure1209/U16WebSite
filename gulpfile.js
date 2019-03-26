const { task, src, dest, watch } = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const uglify = require('gulp-uglify')

const SASS_PATH = 'src/sass/**/*.sass'
const JS_PATH = 'src/js/**/*.js'
const SASS_OUTPUT_PATH = './dist/css'
const JS_OUTPUT_PATH = './dist/js'

task('sass', () => {
    return src(SASS_PATH)
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(dest(SASS_OUTPUT_PATH))
})

task('js', () => {
    return src(JS_PATH)
        .pipe(uglify())
        .pipe(dest(JS_OUTPUT_PATH))
})

task('default', () => {
    watch(SASS_PATH, task('sass'))
    watch(JS_PATH, task('js'))
})
