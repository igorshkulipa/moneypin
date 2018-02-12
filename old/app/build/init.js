'use strict';

require(['knockout', 'jquery', 'layout', 'loader/loader', 'router/router', 'config/config'], function (ko, $, layout, loader, router, config) {

    var $rootVM = {};
    initApplication();

    function initApplication() {
        loader.loadLayout();
        loader.loadModals();
        loader.loadData();

        for (var content in config.content) {
            router.add(config.content[content].name);
        }

        router.init(function (request, data) {
            var module = null;
            for (var prop in config.content) {
                if (config.content[prop].path == request) module = config.content[prop];
            }
            if (module) {
                loader.loadModule(module, $rootVM).then(function () {
                    //var animationName = 'fadeInRight';
                    //var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                    //$('#' + config.config.main.position).addClass('animated ' + animationName).one(animationEnd, function () {
                    //    $('#' + config.config.main.position).removeClass('animated ' + animationName);
                    //});
                });
            }
        }, function (request) {
            router.redirect('tab-accounts');
        });
    }
});

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery']
        }
    },
    baseUrl: './',
    paths: {
        // Libs
        knockout: 'lib/knockout/knockout-3.4.0',
        lodash: 'lib/lodash/lodash',
        jquery: 'lib/jquery/jquery.min',
        bootstrap: 'lib/bootstrap/bootstrap.min',
        crossroads: 'lib/crossroads/crossroads',
        signals: 'lib/signals/signals',
        hasher: 'lib/hasher/hasher'
    }
});
