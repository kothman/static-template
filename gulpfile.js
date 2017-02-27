var gulp = require("gulp");
var beautify = require("gulp-html-beautify");
var concat = require("gulp-concat");
var fileinclude = require("gulp-file-include");
var sass = require("gulp-sass");
var csso = require("gulp-csso");
var sourcemaps = require("gulp-sourcemaps");
var uglify = require("gulp-uglify");
var watch = require("gulp-watch");

var root = "src";
var dest = "./release/";

gulp.task("default", ["js", "sass", "html", "watch"]);

gulp.task("js", function() {
    var path = root + "/js/";
    gulp.src([path + "smooth-scroll.min.js", path + "app.js"])
        .pipe(concat("app.js"))
	.pipe(uglify())
	.pipe(gulp.dest(dest));
});

gulp.task("sass", function() {
    var path = root + "/sass/";
    gulp.src(path + "app.scss")
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(csso())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(dest));
    
});

gulp.task("html", function() {
    var path = root + "/html/pages/**/*";
    gulp.src(path)
	.pipe(fileinclude({
	    basepath: "./src/html/elements/"
	}))
	.pipe(beautify())
	.pipe(gulp.dest(dest));
});

gulp.task("watch", function() {
    gulp.watch(root + "/js/*.js", ["js"]);
    gulp.watch(root + "/sass/*.scss", ["sass"]);
    gulp.watch(root + "/html/**/*", ["html"]);
})
