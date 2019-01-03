let gulp = require('gulp');
	rename = require('gulp-rename');
	sass = require('gulp-sass');
	watch = require('gulp-watch');

gulp.task('sass', function() {
	return gulp.src('./src/scss/App.scss')
		.pipe(sass())
		.pipe(gulp.dest('./src'))
		.pipe(rename('App.css'));
});

gulp.task('watch', function() {
	gulp.watch('./src/scss/*.scss', gulp.series('sass'));
});
