const { src, dest, watch, parallel} = require('gulp');
const scss  = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');

function browsersync () {
	browserSync.init({
		server: {
			baseDir: 'app/'
		}
	});
}

	
function images () {
	return src('app/img/**/*')
	.pipe(imagemin([
		imagemin.gifsicle({interlaced: true}),
		imagemin.mozjpeg({quality: 75, progressive: true}),
		imagemin.optipng({optimizationLevel: 5}),
		imagemin.svgo({
			plugins: [
				{removeViewBox: true},
				{cleanupIDs: false}
			]
		})
	]))
	.pipe(dest('app/img'))
}
	

function sсripts () {
	return src([
		'node_modules/jquery/app/jquery.js',
		'app/js/menu.js',
		'app/js/catalog-bar.js',
		'app/js/sliders.js',
		'app/js/search.js',
		'app/js/catalog.js',
		'app/js/goods.js',
		'app/js/general.js',
	])

	.pipe(concat('main.js'))
	.pipe(dest('app/js'))
	.pipe(browserSync.stream())
}

function item_sсripts () {
	return src([
		'node_modules/jquery/app/jquery.js',
		'app/js/menu.js',
		'app/js/item/catalog-bar.js',
		'app/js/search.js',
		'app/js/catalog.js',
		'app/js/general.js',
		'app/js/item/okzoom.js',
		'app/js/item/zoom.js',
		'app/js/item/sliders.js',
	])

	.pipe(concat('item.js'))
	.pipe(dest('app/js/item'))
	.pipe(browserSync.stream())
}

function styles () {
return src('app/scss/style.scss')
	.pipe(scss({outputStyle: 'expanded'}))
	.pipe(concat('style.css'))
	.pipe(autoprefixer({
		overrideBrowsersList: ['last 10 version'],
		grid: true
	}))
		
	.pipe(dest('app/css'))
	.pipe(browserSync.stream()) 
}

function watching() {
	watch(['app/scss/**/*.scss'], styles);
	watch(['app/js/*.js','!app/js/main.js'], sсripts);
	watch(['app/js/item/*.js', '!app/js/item/item.js'], item_sсripts);
	watch(['app/*.html']).on('change', browserSync.reload)
}
	
exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.item_sсripts = item_sсripts;
exports.sсripts = sсripts;
exports.images = images;

exports.default = parallel(item_sсripts, sсripts, browsersync, watching);
