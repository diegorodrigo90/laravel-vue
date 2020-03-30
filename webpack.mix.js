let mix = require('laravel-mix');
var browserSync = require("browser-sync");
var spa = require("browser-sync-spa");

browserSync.use(spa());
browserSync({ open: true });





mix.webpackConfig({
    resolve: {
        alias: {
            "@": path.resolve(
                __dirname,
                "resources/assets/js"
            ),
            "@sass": path.resolve(
                __dirname,
                "resources/assets/sass"
            ),
        }
    }
 });

mix.js('resources/assets/js/app.js', 'public/js')
    .copy('resources/assets/img/', 'public/img/')
   .browserSync('http://localhost:8000');
