var fs = require('fs');
var del = require('del');
var path = require('path');
var gulp = require('gulp');
var watch = require('watch');
var flip = require('css-flip');
var map = require('map-stream');
var gutil = require('gulp-util');
var transform = require('vinyl-transform');
var child_process = require('child_process');

var argv = require('yargs').argv;

var sass = require('gulp-sass');
var bless = require('gulp-bless');
var insert = require('gulp-insert');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var ttf2woff = require('gulp-ttf2woff');
var cssfont64 = require('gulp-cssfont64');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');

var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack-stream');
var dwebpack = require('webpack');

var runSequence = require('run-sequence');

var package = require('./package.json');

var defaultAppName = 'admin';
var production = argv.production ? true : false;
var script_root = 'app/assets/javascripts/react/'
var bundle_root = 'app/assets/javascripts/'
var style_root = 'app/assets/stylesheets/react/'

/* file patterns to watch */
var paths = {
  index: ['server.js'],
  jsx: [script_root + '*.jsx'      , script_root + '**/*.jsx', 
        script_root + '**/**/*.jsx', script_root + '/**/**/**/*.jsx'],
  scss: ['public/fonts/web/*.ttf', 
         style_root + '*.scss', style_root + '**/*.scss', style_root + '**/**/*.scss', 
         style_root + '**/**/**/*.scss', style_root + '**/**/**/**/*.scss',
         style_root + 'global/*.scss', style_root + 'global/**/*.scss', style_root + 'global/**/**/*.scss',
         style_root + 'global/**/**/**/*.scss', style_root + 'global/**/**/**/**/*.scss'],
  ttf: ['public/fonts/dropbox/'+defaultAppName+'/*.ttf']
};

var banner = function() {
  return '/*! '+package.name+' - v'+package.version+' - '+gutil.date(new Date(), "yyyy-mm-dd")+
          ' [copyright: '+package.copyright+']'+' */';
};

function logData() {
  gutil.log(
    gutil.colors.bold(
      gutil.colors.blue.apply(this, arguments)
    )
  );
}

logData('Name :', defaultAppName);
logData('Environment :', (production ? 'Production':'Development'));

/* ---------------------------------- */
/* --------- BEGIN APP:SASS --------- */
/* ---------------------------------- */
gulp.task('sass:app', function() {
  return gulp.src(style_root + '*.scss')
          .pipe(sass({
            // sourceComments: 'normal' // uncomment when https://github.com/sass/node-sass/issues/337 is fixed
          }))
          .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 9'))
          .pipe(insert.prepend(banner()+'\n'))
          .pipe(insert.prepend('@charset "UTF-8";\n'))
          .pipe(gulp.dest('app/assets/stylesheets'))
});

gulp.task('minifycss:app', function() {
  return gulp.src(['public/css/'+defaultAppName+'/raw/ltr/*.css'])
          .pipe(minifycss())
          .pipe(gulp.dest('public/css/'+defaultAppName+'/min/ltr'));
});

gulp.task('bless:app', function() {
  return gulp.src('public/css/'+defaultAppName+'/min/ltr/*.css')
          .pipe(bless())
          .pipe(insert.prepend(banner()+'\n'))
          .pipe(insert.prepend('@charset "UTF-8";\n'))
          .pipe(gulp.dest('public/css/'+defaultAppName+'/blessed/ltr'));
});
/* -------------------------------- */
/* --------- END APP:SASS --------- */
/* -------------------------------- */

var webpackConfig = function(withHotLoader) {
  var loaders = ['react-hot', 'babel-loader?cacheDirectory&stage=1&compact=false'];
  if(!withHotLoader) {
    loaders.shift();
  }

  return {
    cache: true,
    module: {
      loaders: [
        {test: /\.txt$/,
         exclude: /(node_modules|bower_components)/,
         loaders: ['babel-loader']},
        {test: /\package\.json$/,
         exclude: /(node_modules|bower_components)/,
         loaders: ['json']},
        {test: /[\\\\|\/]src[\\\\|\/]jsx[\\\\|\/](.*?)\.txt$/,
         exclude: /(node_modules|bower_components)/,
         loaders: ['raw']},
        {test: /[\\\\|\/]app[\\\\|\/]assets[\\\\|\/]javascripts[\\\\|\/]react[\\\\|\/](.*?)\.json$/,
         exclude: /(node_modules|bower_components)/,
         loaders: ['json']},
        {test: /[\.jsx|\.js]$/,
         exclude: /(node_modules|bower_components)/,
         loaders: loaders}
      ]
    },
    plugins: [
      new dwebpack.DefinePlugin({
        __BACKEND__: JSON.stringify('rails'),
        __APPNAME__: JSON.stringify(defaultAppName)
      })
    ],
    resolve: {
      modulesDirectories: ['node_modules', path.join(script_root)],
      extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
    },
    externals: {
      'react': 'React'
    }
  };
};

gulp.task('react:app', function() {
  var wconfig = webpackConfig();
  return gulp.src(script_root + 'main.jsx')
          .pipe(webpack(wconfig))
          .pipe(rename(defaultAppName +'.js'))
          .pipe(gulp.dest(bundle_root));
});

/* ------------------------------- */
/* ---------- END APP:JS --------- */
/* ------------------------------- */

/* --------------------------------- */
/* ------- BEGIN Base64 CSS -------- */
/* --------------------------------- */
gulp.task('base64-css:convert', function() {
  return gulp.src('public/fonts/dropbox/'+defaultAppName+'/*.ttf')
          .pipe(ttf2woff())
          .pipe(cssfont64())
          .pipe(replace('-Regular;', '; font-weight: normal; font-style: normal;'))
          .pipe(replace('-Bold;', '; font-weight: bold; font-style: normal;'))
          .pipe(replace('-Black;', '; font-weight: 800; font-style: normal;'))
          .pipe(replace('-Light;', '; font-weight: 300; font-style: normal;'))
          .pipe(replace('-Hairline;', '; font-weight: 300; font-style: normal;'))
          .pipe(replace('-Italic;', '; font-weight: normal; font-style: italic;'))
          .pipe(replace('-BoldItalic;', '; font-weight: bold; font-style: italic;'))
          .pipe(replace('-BlackItalic;', '; font-weight: 800; font-style: italic;'))
          .pipe(replace('-LightItalic;', '; font-weight: 300; font-style: italic;'))
          .pipe(replace('-HairlineItalic;', '; font-weight: 200; font-style: italic;'))
          .pipe(replace('font-woff', 'x-font-woff'))
          .pipe(gulp.dest('prebuild/css/fonts/'+defaultAppName));
});

gulp.task('base64-css:concat', ['base64-css:convert'], function() {
  return gulp.src(['prebuild/css/fonts/'+defaultAppName+'/*.css'])
          .pipe(insert.prepend('@charset "UTF-8";\n'))
          .pipe(concat('fonts.css'))
          .pipe(gulp.dest('public/css/fonts/'+defaultAppName))
});

gulp.task('base64-css', ['base64-css:concat'], function(cb) {
  del('prebuild/css', function(err) {
    cb();
  });
});
/* --------------------------------- */
/* --------- END Base64 CSS -------- */
/* --------------------------------- */

process.on('uncaughtException', function(err) {
  throw new Error(err);
});

/* ------------------------------ */
/* --------- GULP TASKS --------- */
/* ------------------------------ */
gulp.task('sass', ['sass:app']);
gulp.task('clean:essentials', ['clean:react']);
gulp.task('minifycss', ['minifycss:app']);
gulp.task('bless', ['bless:app']);

gulp.task('build:css', ['sass']);

gulp.task('build:dev', ['build:css']);

gulp.task('default', function(callback) {
  runSequence('react:app', 'build:css', 'base64-css', ['watch'], callback);
});

gulp.task('development', function(callback) {
  runSequence('react:app', callback);
});

/*BEGIN: ALIASES FOR CERTAIN TASKS (for Watch)*/
gulp.task('build:css:watch', ['build:css'], ready);
gulp.task('rebuild:css', ['build:css'], ready);
gulp.task('base64-css:watch', ['base64-css'], ready);
/*END: ALIASES*/

gulp.task('watch', function() {
  gulp.watch(paths.scss, ['rebuild:css']);
  gulp.watch(paths.ttf, ['base64-css:watch'])
  gulp.watch(paths.jsx.concat(paths.scss), ['development']);
});

function ready() {
  gutil.log(
    gutil.colors.bgMagenta(
      gutil.colors.white(
        gutil.colors.bold('[          STATUS: READY          ]')
      )
    )
  );
}
