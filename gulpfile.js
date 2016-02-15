var gulp = require('gulp'),
	connect = require('gulp-connect');
 
gulp.task('webserver', function() {
	connect.server({
    	livereload: true,
    	port : 5002
  	});
});
gulp.task('default', ['webserver']);
