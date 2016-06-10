require(['knockout', 'jquery', 'layout', 'loader/loader', 'router/router', 'config/config'], (ko, $, layout, loader, router, config) => {

    var $rootVM = {
    };
    initApplication();


    function initApplication() {
        loader.loadLayout();
        loader.loadModals();

        for (var content in config.content) {
            router.add(config.content[content].name);
        }

        router
            .init((request, data) => {
                loader.loadModule(config.content[request], $rootVM)
                .then(() => {
                    var animationName = 'fadeInRight';
                    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                    $('#' + config.config.main.position).addClass('animated ' + animationName).one(animationEnd, function () {
                        $('#' + config.config.main.position).removeClass('animated ' + animationName);
                    });
                });
            }, (request) => {
                router.redirect('main');
            });
    }

    function actionHandler() {
        alert('action');
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
        hasher: 'lib/hasher/hasher',
        jqeasypiechart: 'lib/jquery/jquery.easy-pie-chart',
        jqsparkline: 'lib/jquery/jquery.sparkline.min',
        jqui: 'lib/jquery/jquery-ui',
        remodal: 'lib/remodal/remodal'
    }
});