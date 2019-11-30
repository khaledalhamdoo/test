importScripts('/cache-polyfill.js');


self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('airhorner').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/index.html?homescreen=1',
                '/?homescreen=1',
                '/assets/css/bootstrap.min.css',
                '/assets/css/style.css',
                '/assets/js/bootstrap.min.js',
                '/assets/js/jquery-3.3.1.slim.min.js',
                '/assets/img/logo1.png',
                '/assets/img/bg.png'
            ]);
        })
    );
});