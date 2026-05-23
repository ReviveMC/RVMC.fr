import gulp from "gulp";
import htmlmin from "gulp-htmlmin";
import cleanCSS from "gulp-clean-css";
import { deleteAsync } from "del";

function clean() {
    return deleteAsync(["build"]);
}

function html() {
    return gulp.src("src/**/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("build"));
}

function css() {
    return gulp.src("src/**/*.css")
        .pipe(cleanCSS())
        .pipe(gulp.dest("build"));
}

function images() {
    return gulp.src("src/img/**/*")
        .pipe(gulp.dest("build/img"));
}

function watchFiles() {
    gulp.watch("src/**/*.html", html);
    gulp.watch("src/**/*.css", css);
    gulp.watch("src/img/**/*", images);
}

export const build = gulp.series(
    clean,
    gulp.parallel(html, css, images)
);

export const watch = gulp.series(build, watchFiles);

export default build;