var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var scss = require('gulp-sass');
var pug = require('gulp-pug');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var del = require('del');
var runSequence = require('run-sequence');
var watch = require('gulp-watch');
var htmlbeautify = require('gulp-html-beautify');
const gulpif = require('gulp-if');
const emitty = require('emitty').setup('src/pug', 'pug');

// SVG sprites
var svgmin = require('gulp-svgmin');
var cheerio = require('gulp-cheerio');
var replace = require('gulp-replace');
var svgSprite = require('gulp-svgsprite');
var rename = require('gulp-rename');

// Images
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

// HTML, CSS, JS
var usemin = require('gulp-usemin');
var htmlclean = require('gulp-htmlclean');
var uglify = require("gulp-uglify"); // Сжатие JS
var minifyCss = require("gulp-minify-css"); // Сжатие CSS
var rev = require('gulp-rev');

// Запускаем browserSync и следим за файлами
gulp.task('server', function() {

	browserSync.init({
		server: { baseDir: './docs/'},
	});

	// Параметр для Emitty
	global.watch = true;

	// gulp 4 + Emitty
	gulp.watch('./src/pug/**/*.pug', gulp.series('pug', reload))
		.on('all', (event, filepath) => {
			global.emittyChangedFile = filepath;
		});

	// --- gulp 3 --- //
	// watch('./src/pug/**/*.*', function(){
	// 	gulp.start('pug-watch');
	// });

	watch('./src/scss/**/*.scss').on('change', gulp.series('styles'));
	watch('./src/js/**/*.js').on('change', gulp.series('copy:js'));
	watch('./src/libs/**/*.*').on('change', gulp.series('copy:libs-local'));
	watch(['./src/img/**/*.*', '!./src/img/svg-for-sprites/**/*.svg']).on('change', gulp.series('copy:img'));
	watch('./src/img/svg/*.svg').on('change', gulp.series('svg'));

	// emitty.load({}) // Загружает предыдущее состояние хранилища
	// emitty.scan().then(() => {
	//   console.log(emitty.keys()); // Ключи хранилища (пути файлов)
	//   console.log(emitty.storage()); // Само хранилище

	// });

});

// Запускаем перезагрузку именно так иначе browserSynk виснет после первой перезагрузки
function reload(done) {
    browserSync.reload();
    done();
}


gulp.task('styles', function() {
	return gulp.src('./src/scss/main.scss')
	.pipe(plumber({
		errorHandler: notify.onError(function(err){
			return {
				title: 'Styles',
				message: err.message
			}
		})
	}))
	.pipe(sourcemaps.init())
	.pipe(scss())
	.pipe(autoprefixer({
		browsers: ['last 6 versions'],
		cascade: false
	}))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./docs/css'))
	.pipe(browserSync.stream());
});

// --- gulp 3 --- //
// Ждет окончания компиляции (Pug) и обновляет страницу
// gulp.task('pug-watch', ['pug'], function(done) {
// 	browserSync.reload();
// 	done();
// })
// Компиляция
// gulp.task('pug', function() {
// 	return gulp.src('./src/pug/pages/**/*.pug')
// 	.pipe(plumber({
// 		errorHandler: notify.onError(function(err){
// 			return {
// 				title: 'Pug',
// 				message: err.message
// 			}
// 		})
// 	}))
// 	.pipe(pug())
// 	.pipe(htmlbeautify(htmlbeautifyOptions))
// 	.pipe(gulp.dest('./docs'));
// });


// gulp 4 - При повторной сборке с browserSync и emitty
gulp.task('pug', () =>
	new Promise((resolve, reject) => {

		emitty.scan(global.emittyChangedFile).then(() => {

			// if (global.emittyChangedFile) {
			// 	console.log(emitty.resolver.getDependencies(global.emittyChangedFile));
			// }
			// console.log(global.emittyChangedFile);
			// console.log(global.watch);

			gulp.src('./src/pug/pages/**/*.pug')
				.pipe(plumber({
					errorHandler: notify.onError(function(err){
						return {
							title: 'Pug',
							message: err.message
						}
					})
				}))
				.pipe(gulpif(global.watch, emitty.filter(global.emittyChangedFile)))
				.pipe(pug())
				.pipe(htmlbeautify(htmlbeautifyOptions))
				.pipe(gulp.dest('./docs'))
				.on('end', resolve)
				.on('error', reject);
				// .pipe(browserSync.stream({once:true}));

		});
	})
);

// gulp 4 - На старте без browserSynk и emitty
gulp.task('pug-start', function() {

	return gulp.src('./src/pug/pages/**/*.pug')
	.pipe(plumber({
		errorHandler: notify.onError(function(err){
			return {
				title: 'Pug',
				message: err.message
			}
		})
	}))
	.pipe(pug())
	.pipe(htmlbeautify(htmlbeautifyOptions))
	.pipe(gulp.dest('./docs'));

});

var htmlbeautifyOptions = {
    "indent_size": 1,
    "indent_char": "	",
    "eol": "\n",
    "indent_level": 0,
    "indent_with_tabs": true,
    "preserve_newlines": false,
    "max_preserve_newlines": 10,
    "jslint_happy": false,
    "space_after_anon_function": false,
    "brace_style": "collapse",
    "keep_array_indentation": false,
    "keep_function_indentation": false,
    "space_before_conditional": true,
    "break_chained_methods": false,
    "eval_code": false,
    "unescape_strings": false,
    "wrap_line_length": 0,
    "wrap_attributes": "auto",
    "wrap_attributes_indent_size": 4,
    "end_with_newline": false
};

gulp.task('svg', function() {
	return gulp.src('./src/img/svg-for-sprites/*.svg')
	.pipe(svgmin({
		js2svg: {
			pretty: true
		}
	}))
	.pipe(cheerio({
		run: function($) {
			$('[fill]').removeAttr('fill');
			$('[stroke]').removeAttr('stroke');
			$('[style]').removeAttr('style');
		},
		parserOptions: { xmlMode: true }
	}))
	.pipe(replace('&gt;', '>'))
	.pipe(svgSprite({
		mode: {
			symbol: {
				sprite: "sprite.svg"
			}
		}
	}))
	.pipe(rename('sprite.svg'))
	.pipe(gulp.dest('./docs/img'));
});

gulp.task('copy:libs', function(callback) {

    gulp.src('node_modules/jquery/dist/**/*.*')
		.pipe(gulp.dest('./docs/libs/jquery'));

	gulp.src('node_modules/bootstrap-4-grid/css/**/*.*')
		.pipe(gulp.dest('./docs/libs/bootstrap-4-grid'))

	gulp.src('node_modules/normalize.css/normalize.css')
		.pipe(gulp.dest('./docs/libs/normalize-css/'))

	callback()
});

gulp.task('copy:libs-local', function(callback) {
	gulp.src('./src/libs/**/*.*')
		.pipe(gulp.dest('./docs/libs/'))
	callback()
});

gulp.task('copy:img', function() {
	return gulp.src(['./src/img/**/*.*', '!./src/img/svg-for-sprites/**/*.svg'], {since: gulp.lastRun('copy:img')})
		.pipe(gulp.dest('./docs/img'))
		.pipe(browserSync.stream());
});

gulp.task('copy:js', function() {
	return gulp.src('./src/js/**/*.*', {since: gulp.lastRun('copy:js')})
		.pipe(gulp.dest('./docs/js'))
		.pipe(browserSync.stream());
});

gulp.task('copy:fonts', function() {
	return gulp.src('./src/fonts/**/*.*', {since: gulp.lastRun('copy:fonts')})
		.pipe(gulp.dest('./docs/fonts'))
		.pipe(browserSync.stream());
});

gulp.task('clean:docs', function() {
    return del('./docs');
});

gulp.task('copy:docs:files', function(callback) {
    gulp.src('./src/php/**/*.*')
        .pipe(gulp.dest('./docs/php/'))
    gulp.src('./src/files/**/*.*')
        .pipe(gulp.dest('./docs/files/'))
	gulp.src('./src/fonts/**/*.*')
	    .pipe(gulp.dest('./docs/fonts/'))
	callback()
});

//--- gulp 4 ---///
gulp.task('default',
    gulp.series('clean:docs',
    	gulp.parallel('styles', 'pug-start', 'svg', 'copy:libs', 'copy:libs-local', 'copy:img', 'copy:fonts', 'copy:js'),
       	'server'
	)
);

gulp.task('docs',
	gulp.series('clean:docs',
		gulp.parallel('styles', 'pug-start', 'svg', 'copy:libs', 'copy:libs-local', 'copy:img', 'copy:fonts', 'copy:js')
	)
);

//--- gulp 3 ---///
// gulp.task('default', function(callback){
//     runSequence(
//     	'clean:docs',
//     	['styles', 'pug', 'svg', 'copy:libs', 'copy:libs-local', 'copy:img', 'copy:fonts', 'copy:js'],
//     	'server',
// 		callback
//     )
// });
