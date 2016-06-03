require(['knockout', 'jquery', 'layout', 'load/load'], function (ko, $, layout, load) {
    var rootViewModel = {
    };

    load.loadLayout();

    ko.applyBindings(rootViewModel);
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