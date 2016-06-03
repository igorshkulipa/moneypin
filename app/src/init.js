require(['knockout', 'jquery', 'layout', 'loader/loader'], function (ko, $, layout, loader) {

    var $rootVM = {
        root: {},
        main: {},
    };
    initApplication();


    function initApplication() {
        loader.loadLayout();
        loader.loadModule('main', $rootVM);
    }
});

require.config({
    baseUrl: './',
    paths: {
        // Libs
        knockout: 'lib/knockout/knockout-3.4.0',
        lodash: 'lib/lodash/lodash',
        jquery: 'lib/jquery/jquery-2.2.4',
        layout: 'lib/layout/app.v2'
    }
});