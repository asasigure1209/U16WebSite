const { task, src, dest, watch, parallel } = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const uglify = require('gulp-uglify')
const browser = require('browser-sync')

const SASS_PATH = 'src/sass/**/*.sass'
const JS_PATH = 'src/js/**/*.js'
const SASS_OUTPUT_PATH = './dist/css'
const JS_OUTPUT_PATH = './dist/js'
const HTML_OUTPUT_PATH = './dist'

task('server', () => {
    return  browser({
        server: {
            baseDir: HTML_OUTPUT_PATH
        }
    })
})

task('sass', () => {
    return src(SASS_PATH)
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(dest(SASS_OUTPUT_PATH))
        .pipe(browser.reload({stream: true}))
})

task('js', () => {
    return src(JS_PATH)
        .pipe(uglify())
        .pipe(dest(JS_OUTPUT_PATH))
        .pipe(browser.reload({stream: true}))
})

task('watch', () => {
    watch(SASS_PATH, task('sass'))
    watch(JS_PATH, task('js'))
}) 

task('default', parallel(
    'server',
    'watch'
))
