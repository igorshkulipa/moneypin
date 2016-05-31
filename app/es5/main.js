'use strict';

(function (app) {
    var AppComponents = ['ContentAction', 'LayoutTop', 'LayoutProject', 'LayoutMenu', 'LayoutMenuFooter'];
    document.addEventListener('DOMContentLoaded', function () {
        _.forEach(AppComponents, function (component) {
            if (app.hasOwnProperty(component)) {
                ng.platform.browser.bootstrap(app[component]);
            }
        });
        ng.platform.browser.bootstrap(app.AppRouter, [ng.router.ROUTER_BINDINGS, ng.core.bind(ng.router.LocationStrategy).toClass(ng.router.HashLocationStrategy)]);
    });
})(window.app || (window.app = {}));
