require(['knockout', 'jquery', 'layout', 'loader/loader', 'router/router', 'config/config'], (ko, $, layout, loader, router, config) => {

    var $rootVM = {
        root: {},
        main: {},
    };
    initApplication();


    function initApplication() {
        loader.loadLayout()
            .then(() => {
                for (var module in config.modules) {
                    router.add(config.modules[module].name);
                }

                router
                    .init((request, data) => {
                        loader.loadModule(request);
                    }, (request) => {
                        router.redirect('main');
                    });
            });
    }


});

require.config({
    baseUrl: './',
    paths: {
        // Libs
        knockout: 'lib/knockout/knockout-3.4.0',
        lodash: 'lib/lodash/lodash',
        jquery: 'lib/jquery/jquery-2.2.4',
        layout: 'lib/layout/app.v2',
        pager: 'lib/pager/pager',
        crossroads: 'lib/crossroads/crossroads',
        signals: 'lib/signals/signals',
        hasher: 'lib/hasher/hasher'
    }
});