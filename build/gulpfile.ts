
import { series, src, dest } from 'gulp';
import cleanCss from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import path from "path";
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import { withTaskName, run } from "./utils"
import { themeRoot, buildOutput, pkgRoot, projRoot } from './utils/paths'
import ts from "gulp-typescript";
import concat from 'gulp-concat';
const sass = gulpSass(dartSass);

function compile() {
    return src(path.resolve(themeRoot, './*.scss'))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCss())
        .pipe(dest(path.resolve(buildOutput, 'style')));
}

function handleScss() {
    return src([path.resolve(themeRoot, './*.scss'), `!${path.resolve(themeRoot, './theme.scss')}`])
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(concat('index.css'))
        .pipe(autoprefixer())
        .pipe(cleanCss())
        .pipe(dest(path.resolve(buildOutput, 'style')));
}

function handleTs() {
    const tsConfig = path.resolve(projRoot, "tsconfig.json");
    return src(path.resolve(pkgRoot, '**/*.ts'))
        .pipe(
            ts.createProject(tsConfig, {
                declaration: true,
                strict: false,
            })()
        )
        .on('error', function () { process.exit(1) })
        .pipe(dest(path.resolve(buildOutput)));
}

function copyVue() {
    return src(path.resolve(pkgRoot, '**/*.vue'))
        .pipe(dest(path.resolve(buildOutput)));
}

export default series(
    withTaskName("clean", async () => run('rm -rf ./dist')),
    compile,
    handleScss,
    handleTs,
    copyVue,
);