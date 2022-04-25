const {src, dest, watch, parallel} = require('gulp');
const scss  = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');

function browsersync () {
	browserSync.init({
		server: {
			baseDir: 'app/'
		}
	});
}

function sсripts () {
	return src([
		'node_modules/jquery/app/jquery.js',
		'app/js/catalog-bar.js',
		'app/js/sliders.js',
		'app/js/search.js',
		'app/js/item-list.js',
		'app/js/goods.js',
		'app/js/general.js',
		'app/js/popup.js',
		'app/js/cart.js',
		'app/js/header.js',
		'app/js/item/card.js',
	])

	.pipe(concat('main.js'))
	.pipe(dest('app/js'))
	.pipe(browserSync.stream())
}

function min_sсripts () {
	return src([
		'node_modules/jquery/app/jquery.js',
		'app/js/catalog-bar.js',
		'app/js/sliders.js',
		'app/js/search.js',
		'app/js/item-list.js',
		'app/js/goods.js',
		'app/js/general.js',
		'app/js/popup.js',
		'app/js/cart.js',
		'app/js/header.js',
		'app/js/item/card.js',
	])

	.pipe(concat('main.min.js'))
	.pipe(uglify())
	.pipe(dest('dist/js'))
	.pipe(browserSync.stream())
}

function item_sсripts () {
	return src([
		'node_modules/jquery/app/jquery.js',
		'app/js/item/catalog-bar.js',
		'app/js/search.js',
		'app/js/general.js',
		'app/js/item-list.js',
		'app/js/item/card.js',
		'app/js/item/okzoom.js',
		'app/js/item/zoom.js',
		'app/js/item/sliders.js',
		'app/js/item/similar.js',
		'app/js/cart.js',
		'app/js/popup.js',
	])

	.pipe(concat('item.js'))
	.pipe(dest('app/js/item'))
	.pipe(browserSync.stream())
}

function min_item_sсripts () {
	return src([
		'node_modules/jquery/app/jquery.js',
		'app/js/item/catalog-bar.js',
		'app/js/search.js',
		'app/js/general.js',
		'app/js/item-list.js',
		'app/js/item/card.js',
		'app/js/item/okzoom.js',
		'app/js/item/zoom.js',
		'app/js/item/sliders.js',
		'app/js/item/similar.js',
		'app/js/cart.js',
		'app/js/popup.js',
	])

	.pipe(concat('item.min.js'))
	.pipe(uglify())
	.pipe(dest('dist/js/item'))
	.pipe(browserSync.stream())
}

function catalog_sсripts () {
	return src([
		'node_modules/jquery/app/jquery.js',
		'app/js/item-list.js',
		'app/js/goods.js',
		'app/js/popup.js',
		'app/js/cart.js',
		'app/js/catalog-bar.js',
		'app/js/search.js',
		'app/js/general.js',
		'app/js/catalog/general.js',
	])

	.pipe(concat('catalog.js'))
	.pipe(dest('app/js/catalog'))
	.pipe(browserSync.stream())
}

function min_catalog_sсripts () {
	return src([
		'node_modules/jquery/app/jquery.js',
		'app/js/item-list.js',
		'app/js/goods.js',
		'app/js/popup.js',
		'app/js/cart.js',
		'app/js/catalog-bar.js',
		'app/js/search.js',
		'app/js/general.js',
		'app/js/catalog/general.js',
	])

	.pipe(concat('catalog.min.js'))
	.pipe(uglify())
	.pipe(dest('dist/js/catalog'))
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

function min_styles () {
return src('app/scss/style.scss')
	.pipe(scss({outputStyle: 'compressed'}))
	.pipe(concat('style.min.css'))
	.pipe(autoprefixer({
		overrideBrowsersList: ['last 10 version'],
		grid: true
	}))
		
	.pipe(dest('dist/css'))
	.pipe(browserSync.stream()) 
}

function build() {
	return src ([
	'app/fonts/**/*',
	'app/img/**/*',
	'app/js/general.js',
	'app/js/popup.js',
	'app/*.html'
	], {base: 'app'})
	.pipe(dest('dist'))
}

function watching() {
	watch(['app/scss/**/*.scss'], styles);
	watch(['app/scss/**/*.scss'], min_styles);
	watch(['app/js/*.js','app/js/item/card.js','!app/js/main.js'], sсripts);
	watch(['app/js/*.js','app/js/item/card.js','!app/js/main.js', '!dist/js/main.min.js'], min_sсripts);
	watch(['app/js/item/*.js', '!app/js/item/item.js'], item_sсripts);
	watch(['app/js/item/*.js', '!app/js/item/item.js', '!dist/js/item/item.min.js',], min_item_sсripts);
	watch(['app/js/catalog/*.js', '!app/js/catalog/catalog.js'], catalog_sсripts);
	watch(['app/js/catalog/*.js', '!app/js/catalog/catalog.js', '!dist/js/catalog/catalog.min.js'], min_catalog_sсripts);
	watch(['app/*.html']).on('change', browserSync.reload)
}

exports.styles = styles;
exports.min_styles = min_styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.catalog_sсripts = catalog_sсripts;
exports.min_catalog_sсripts = min_catalog_sсripts;
exports.item_sсripts = item_sсripts;
exports.min_item_sсripts = min_item_sсripts;
exports.sсripts = sсripts;
exports.min_sсripts = min_sсripts;
exports.build = build; 

exports.default = parallel(catalog_sсripts, item_sсripts, sсripts, browsersync, watching);
