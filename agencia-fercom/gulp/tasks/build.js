/**
 * gulp build
 */

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function (cb) {
  runSequence('serve', ['sass', 'js', 'images', 'fonts'], cb);
});
