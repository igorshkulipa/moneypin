'use strict';

(function (app) {
    app.AppRouter = ng.core.Component({
        selector: 'app-router',
        templateUrl: 'src/router/router.html',
        directives: [ng.router.ROUTER_DIRECTIVES],
        providers: [ng.router.ROUTER_PROVIDERS, ng.http.HTTP_PROVIDERS]
    }).Class({
        constructor: [ng.router.Router, function (router) {
            router.config([{ path: '/', component: app.ContentAction, as: 'Main' }, { path: '/action', component: app.ContentAction, as: 'Action', useAsDefault: true }]);
        }]
    });
})(window.app || (window.app = {}));
