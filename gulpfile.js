
/* Переменные */

const {src, dest, watch, parallel} = require('gulp');
const scss  = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');


/* Браузер */

function browsersync () {
	browserSync.init({
		server: {
			baseDir: 'app/'
		}
	});
}


/* Скрипты */

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

function catalog_sсripts () {
	return src([
		'node_modules/jquery/app/jquery.js',
		'app/js/item-list.js',
		'app/js/catalog/goods.js',
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
		'app/js/catalog/goods.js',
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



/* Стили */

function main_styles () {
	return src('app/scss/main-page/style.scss')
	.pipe(scss({outputStyle: 'expanded'}))
	.pipe(concat('style.css'))
	.pipe(autoprefixer({
		overrideBrowsersList: ['last 10 version'],
		grid: true
	}))
		
	.pipe(dest('app/css/main-page'))
	.pipe(browserSync.stream()) 
}
	
function main_min_styles () {
	return src('app/scss/main-page/style.scss')
	.pipe(scss({outputStyle: 'compressed'}))
	.pipe(concat('style.min.css'))
	.pipe(autoprefixer({
		overrideBrowsersList: ['last 10 version'],
		grid: true
	}))
		
	.pipe(dest('dist/css/main-page'))
	.pipe(browserSync.stream()) 
}

function catalog_styles () {
	return src('app/scss/pages/catalog/style.scss')
	.pipe(scss({outputStyle: 'expanded'}))
	.pipe(concat('style.css'))
	.pipe(autoprefixer({
		overrideBrowsersList: ['last 10 version'],
		grid: true
	}))
		
	.pipe(dest('app/css/pages/catalog'))
	.pipe(browserSync.stream()) 
}

function catalog_min_styles () {
	return src('app/scss/pages/catalog/style.scss')
	.pipe(scss({outputStyle: 'compressed'}))
	.pipe(concat('style.min.css'))
	.pipe(autoprefixer({
		overrideBrowsersList: ['last 10 version'],
		grid: true
	}))
		
	.pipe(dest('dist/css/pages/catalog'))
	.pipe(browserSync.stream()) 
}

function confident_styles () {
	return src('app/scss/pages/confident/style.scss')
	.pipe(scss({outputStyle: 'expanded'}))
	.pipe(concat('style.css'))
	.pipe(autoprefixer({
		overrideBrowsersList: ['last 10 version'],
		grid: true
	}))
		
	.pipe(dest('app/css/pages/confident'))
	.pipe(browserSync.stream()) 
}

function confident_min_styles () {
	return src('app/scss/pages/confident/style.scss')
	.pipe(scss({outputStyle: 'compressed'}))
	.pipe(concat('style.min.css'))
	.pipe(autoprefixer({
		overrideBrowsersList: ['last 10 version'],
		grid: true
	}))
		
	.pipe(dest('dist/css/pages/confident'))
	.pipe(browserSync.stream()) 
}

function contacts_styles () {
	return src('app/scss/pages/contacts/style.scss')
	.pipe(scss({outputStyle: 'expanded'}))
	.pipe(concat('style.css'))
	.pipe(autoprefixer({
		overrideBrowsersList: ['last 10 version'],
		grid: true
	}))
		
	.pipe(dest('app/css/pages/contacts'))
	.pipe(browserSync.stream()) 
}

function contacts_min_styles () {
	return src('app/scss/pages/contacts/style.scss')
	.pipe(scss({outputStyle: 'compressed'}))
	.pipe(concat('style.min.css'))
	.pipe(autoprefixer({
		overrideBrowsersList: ['last 10 version'],
		grid: true
	}))
		
	.pipe(dest('dist/css/pages/contacts'))
	.pipe(browserSync.stream()) 
}

function delivery_styles () {
	return src('app/scss/pages/delivery/style.scss')
	.pipe(scss({outputStyle: 'expanded'}))
	.pipe(concat('style.css'))
	.pipe(autoprefixer({
		overrideBrowsersList: ['last 10 version'],
		grid: true
	}))
		
	.pipe(dest('app/css/pages/delivery'))
	.pipe(browserSync.stream()) 
}

function delivery_min_styles () {
	return src('app/scss/pages/delivery/style.scss')
	.pipe(scss({outputStyle: 'compressed'}))
	.pipe(concat('style.min.css'))
	.pipe(autoprefixer({
		overrideBrowsersList: ['last 10 version'],
		grid: true
	}))
		
	.pipe(dest('dist/css/pages/delivery'))
	.pipe(browserSync.stream()) 
}

function guarantee_styles () {
	return src('app/scss/pages/guarantee/style.scss')
	.pipe(scss({outputStyle: 'expanded'}))
	.pipe(concat('style.css'))
	.pipe(autoprefixer({
		overrideBrowsersList: ['last 10 version'],
		grid: true
	}))
		
	.pipe(dest('app/css/pages/guarantee'))
	.pipe(browserSync.stream()) 
}

function guarantee_min_styles () {
	return src('app/scss/pages/guarantee/style.scss')
	.pipe(scss({outputStyle: 'compressed'}))
	.pipe(concat('style.min.css'))
	.pipe(autoprefixer({
		overrideBrowsersList: ['last 10 version'],
		grid: true
	}))
		
	.pipe(dest('dist/css/pages/guarantee'))
	.pipe(browserSync.stream()) 
}

function item_styles () {
	return src('app/scss/pages/item/style.scss')
	.pipe(scss({outputStyle: 'expanded'}))
	.pipe(concat('style.css'))
	.pipe(autoprefixer({
		overrideBrowsersList: ['last 10 version'],
		grid: true
	}))
		
	.pipe(dest('app/css/pages/item'))
	.pipe(browserSync.stream()) 
}

function item_min_styles () {
	return src('app/scss/pages/item/style.scss')
	.pipe(scss({outputStyle: 'compressed'}))
	.pipe(concat('style.min.css'))
	.pipe(autoprefixer({
		overrideBrowsersList: ['last 10 version'],
		grid: true
	}))
		
	.pipe(dest('dist/css/pages/item'))
	.pipe(browserSync.stream()) 
}

function payment_styles () {
	return src('app/scss/pages/payment/style.scss')
	.pipe(scss({outputStyle: 'expanded'}))
	.pipe(concat('style.css'))
	.pipe(autoprefixer({
		overrideBrowsersList: ['last 10 version'],
		grid: true
	}))
		
	.pipe(dest('app/css/pages/payment'))
	.pipe(browserSync.stream()) 
}

function payment_min_styles () {
	return src('app/scss/pages/payment/style.scss')
	.pipe(scss({outputStyle: 'compressed'}))
	.pipe(concat('style.min.css'))
	.pipe(autoprefixer({
		overrideBrowsersList: ['last 10 version'],
		grid: true
	}))
		
	.pipe(dest('dist/css/pages/payment'))
	.pipe(browserSync.stream()) 
}

function sales_styles () {
	return src('app/scss/pages/sales/style.scss')
	.pipe(scss({outputStyle: 'expanded'}))
	.pipe(concat('style.css'))
	.pipe(autoprefixer({
		overrideBrowsersList: ['last 10 version'],
		grid: true
	}))
		
	.pipe(dest('app/css/pages/sales'))
	.pipe(browserSync.stream()) 
}

function sales_min_styles () {
	return src('app/scss/pages/sales/style.scss')
	.pipe(scss({outputStyle: 'compressed'}))
	.pipe(concat('style.min.css'))
	.pipe(autoprefixer({
		overrideBrowsersList: ['last 10 version'],
		grid: true
	}))
		
	.pipe(dest('dist/css/pages/sales'))
	.pipe(browserSync.stream()) 
}

function signup_styles () {
	return src('app/scss/pages/signup/style.scss')
	.pipe(scss({outputStyle: 'expanded'}))
	.pipe(concat('style.css'))
	.pipe(autoprefixer({
		overrideBrowsersList: ['last 10 version'],
		grid: true
	}))
		
	.pipe(dest('app/css/pages/signup'))
	.pipe(browserSync.stream()) 
}

function signup_min_styles () {
	return src('app/scss/pages/signup/style.scss')
	.pipe(scss({outputStyle: 'compressed'}))
	.pipe(concat('style.min.css'))
	.pipe(autoprefixer({
		overrideBrowsersList: ['last 10 version'],
		grid: true
	}))
		
	.pipe(dest('dist/css/pages/signup'))
	.pipe(browserSync.stream()) 
}

/* Папка dist */

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


/* Слежение */

function watching() {
	watch(['app/scss/**/*.scss'], main_styles);
	watch(['app/scss/**/*.scss'], main_min_styles);
	watch(['app/scss/**/*.scss'], catalog_styles);
	watch(['app/scss/**/*.scss'], catalog_min_styles);
	watch(['app/scss/**/*.scss'], confident_styles);
	watch(['app/scss/**/*.scss'], confident_min_styles);
	watch(['app/scss/**/*.scss'], contacts_styles);
	watch(['app/scss/**/*.scss'], contacts_min_styles);
	watch(['app/scss/**/*.scss'], delivery_styles);
	watch(['app/scss/**/*.scss'], delivery_min_styles);
	watch(['app/scss/**/*.scss'], guarantee_styles);
	watch(['app/scss/**/*.scss'], guarantee_min_styles);
	watch(['app/scss/**/*.scss'], item_styles);
	watch(['app/scss/**/*.scss'], item_min_styles);
	watch(['app/scss/**/*.scss'], payment_styles);
	watch(['app/scss/**/*.scss'], payment_min_styles);
	watch(['app/scss/**/*.scss'], sales_styles);
	watch(['app/scss/**/*.scss'], sales_min_styles);
	watch(['app/scss/**/*.scss'], signup_styles);
	watch(['app/scss/**/*.scss'], signup_min_styles);

	watch(['app/js/*.js', '!app/js/main.js'], sсripts);
	watch(['app/js/*.js', '!app/js/main.js', '!dist/js/main.min.js'], min_sсripts);
	watch(['app/js/*.js', 'app/js/catalog/*.js', '!app/js/catalog/catalog.js'], catalog_sсripts);
	watch(['app/js/*.js', 'app/js/catalog/*.js', '!app/js/catalog/catalog.js', '!dist/js/catalog/catalog.min.js'], min_catalog_sсripts);
	watch(['app/js/*.js', 'app/js/item/*.js', '!app/js/item/item.js'], item_sсripts);
	watch(['app/js/*.js', 'app/js/item/*.js', '!app/js/item/item.js', '!dist/js/item/item.min.js',], min_item_sсripts);


	watch(['app/*.html']).on('change', browserSync.reload)
}


/* Итог */

exports.main_styles = main_styles;
exports.main_min_styles = main_min_styles;
exports.catalog_styles = catalog_styles;
exports.catalog_min_styles = catalog_min_styles;
exports.confident_styles = confident_styles;
exports.confident_min_styles = confident_min_styles;
exports.contacts_styles = contacts_styles;
exports.contacts_min_styles = contacts_min_styles;
exports.delivery_styles = delivery_styles;
exports.delivery_min_styles = delivery_min_styles;
exports.guarantee_styles = guarantee_styles;
exports.guarantee_min_styles = guarantee_min_styles;
exports.item_styles = item_styles;
exports.item_min_styles = item_min_styles;
exports.payment_styles = payment_styles;
exports.payment_min_styles = payment_min_styles;
exports.sales_styles = sales_styles;
exports.sales_min_styles = sales_min_styles;
exports.signup_styles = signup_styles;
exports.signup_min_styles = signup_min_styles;

exports.watching = watching;
exports.browsersync = browsersync;

exports.sсripts = sсripts;
exports.min_sсripts = min_sсripts;
exports.catalog_sсripts = catalog_sсripts;
exports.min_catalog_sсripts = min_catalog_sсripts;
exports.item_sсripts = item_sсripts;
exports.min_item_sсripts = min_item_sсripts;


exports.build = build; 

exports.default = parallel(sсripts, catalog_sсripts, item_sсripts, browsersync, watching);
