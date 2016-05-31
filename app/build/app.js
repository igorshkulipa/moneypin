(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function (app) {
    app.ContentAction = ng.core.Component({
        //selector: 'content-action',
        templateUrl: 'src/content/action/action.html'
    }).Class({
        constructor: function constructor() {}
    });
})(window.app || (window.app = {}));

},{}],2:[function(require,module,exports){
'use strict';

(function (app) {
    app.LayoutMenuFooter = ng.core.Component({
        selector: 'layout-menu-footer',
        templateUrl: 'src/layout/menuFooter/menuFooter.html'
    }).Class({
        constructor: function constructor() {}
    });
})(window.app || (window.app = {}));

},{}],3:[function(require,module,exports){
'use strict';

(function (app) {
    app.LayoutMenu = ng.core.Component({
        selector: 'layout-menu',
        templateUrl: 'src/layout/menu/menu.html'
    }).Class({
        constructor: function constructor() {}
    });
})(window.app || (window.app = {}));

},{}],4:[function(require,module,exports){
'use strict';

(function (app) {
    app.LayoutProject = ng.core.Component({
        selector: 'layout-project',
        templateUrl: 'src/layout/project/project.html'
    }).Class({
        constructor: function constructor() {
            console.log('layout-project layout-project');
        }
    });
})(window.app || (window.app = {}));

},{}],5:[function(require,module,exports){
'use strict';

(function (app) {
    app.LayoutTop = ng.core.Component({
        selector: 'layout-top',
        templateUrl: 'src/layout/top/top.html'
    }).Class({
        constructor: function constructor() {}
    });
})(window.app || (window.app = {}));

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{}]},{},[1,3,2,4,5,6,7])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvZXM1L2NvbnRlbnQvYWN0aW9uL2FjdGlvbi5qcyIsImFwcC9lczUvbGF5b3V0L21lbnVGb290ZXIvbWVudUZvb3Rlci5qcyIsImFwcC9lczUvbGF5b3V0L21lbnUvbWVudS5qcyIsImFwcC9lczUvbGF5b3V0L3Byb2plY3QvcHJvamVjdC5qcyIsImFwcC9lczUvbGF5b3V0L3RvcC90b3AuanMiLCJhcHAvZXM1L21haW4uanMiLCJhcHAvZXM1L3JvdXRlci9yb3V0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uIChhcHApIHtcbiAgICBhcHAuQ29udGVudEFjdGlvbiA9IG5nLmNvcmUuQ29tcG9uZW50KHtcbiAgICAgICAgLy9zZWxlY3RvcjogJ2NvbnRlbnQtYWN0aW9uJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdzcmMvY29udGVudC9hY3Rpb24vYWN0aW9uLmh0bWwnXG4gICAgfSkuQ2xhc3Moe1xuICAgICAgICBjb25zdHJ1Y3RvcjogZnVuY3Rpb24gY29uc3RydWN0b3IoKSB7fVxuICAgIH0pO1xufSkod2luZG93LmFwcCB8fCAod2luZG93LmFwcCA9IHt9KSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoYXBwKSB7XG4gICAgYXBwLkxheW91dE1lbnVGb290ZXIgPSBuZy5jb3JlLkNvbXBvbmVudCh7XG4gICAgICAgIHNlbGVjdG9yOiAnbGF5b3V0LW1lbnUtZm9vdGVyJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdzcmMvbGF5b3V0L21lbnVGb290ZXIvbWVudUZvb3Rlci5odG1sJ1xuICAgIH0pLkNsYXNzKHtcbiAgICAgICAgY29uc3RydWN0b3I6IGZ1bmN0aW9uIGNvbnN0cnVjdG9yKCkge31cbiAgICB9KTtcbn0pKHdpbmRvdy5hcHAgfHwgKHdpbmRvdy5hcHAgPSB7fSkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKGFwcCkge1xuICAgIGFwcC5MYXlvdXRNZW51ID0gbmcuY29yZS5Db21wb25lbnQoe1xuICAgICAgICBzZWxlY3RvcjogJ2xheW91dC1tZW51JyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdzcmMvbGF5b3V0L21lbnUvbWVudS5odG1sJ1xuICAgIH0pLkNsYXNzKHtcbiAgICAgICAgY29uc3RydWN0b3I6IGZ1bmN0aW9uIGNvbnN0cnVjdG9yKCkge31cbiAgICB9KTtcbn0pKHdpbmRvdy5hcHAgfHwgKHdpbmRvdy5hcHAgPSB7fSkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKGFwcCkge1xuICAgIGFwcC5MYXlvdXRQcm9qZWN0ID0gbmcuY29yZS5Db21wb25lbnQoe1xuICAgICAgICBzZWxlY3RvcjogJ2xheW91dC1wcm9qZWN0JyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdzcmMvbGF5b3V0L3Byb2plY3QvcHJvamVjdC5odG1sJ1xuICAgIH0pLkNsYXNzKHtcbiAgICAgICAgY29uc3RydWN0b3I6IGZ1bmN0aW9uIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xheW91dC1wcm9qZWN0IGxheW91dC1wcm9qZWN0Jyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pKHdpbmRvdy5hcHAgfHwgKHdpbmRvdy5hcHAgPSB7fSkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKGFwcCkge1xuICAgIGFwcC5MYXlvdXRUb3AgPSBuZy5jb3JlLkNvbXBvbmVudCh7XG4gICAgICAgIHNlbGVjdG9yOiAnbGF5b3V0LXRvcCcsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnc3JjL2xheW91dC90b3AvdG9wLmh0bWwnXG4gICAgfSkuQ2xhc3Moe1xuICAgICAgICBjb25zdHJ1Y3RvcjogZnVuY3Rpb24gY29uc3RydWN0b3IoKSB7fVxuICAgIH0pO1xufSkod2luZG93LmFwcCB8fCAod2luZG93LmFwcCA9IHt9KSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoYXBwKSB7XG4gICAgdmFyIEFwcENvbXBvbmVudHMgPSBbJ0NvbnRlbnRBY3Rpb24nLCAnTGF5b3V0VG9wJywgJ0xheW91dFByb2plY3QnLCAnTGF5b3V0TWVudScsICdMYXlvdXRNZW51Rm9vdGVyJ107XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgXy5mb3JFYWNoKEFwcENvbXBvbmVudHMsIGZ1bmN0aW9uIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgIGlmIChhcHAuaGFzT3duUHJvcGVydHkoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgICAgIG5nLnBsYXRmb3JtLmJyb3dzZXIuYm9vdHN0cmFwKGFwcFtjb21wb25lbnRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIG5nLnBsYXRmb3JtLmJyb3dzZXIuYm9vdHN0cmFwKGFwcC5BcHBSb3V0ZXIsIFtuZy5yb3V0ZXIuUk9VVEVSX0JJTkRJTkdTLCBuZy5jb3JlLmJpbmQobmcucm91dGVyLkxvY2F0aW9uU3RyYXRlZ3kpLnRvQ2xhc3Mobmcucm91dGVyLkhhc2hMb2NhdGlvblN0cmF0ZWd5KV0pO1xuICAgIH0pO1xufSkod2luZG93LmFwcCB8fCAod2luZG93LmFwcCA9IHt9KSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoYXBwKSB7XG4gICAgYXBwLkFwcFJvdXRlciA9IG5nLmNvcmUuQ29tcG9uZW50KHtcbiAgICAgICAgc2VsZWN0b3I6ICdhcHAtcm91dGVyJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdzcmMvcm91dGVyL3JvdXRlci5odG1sJyxcbiAgICAgICAgZGlyZWN0aXZlczogW25nLnJvdXRlci5ST1VURVJfRElSRUNUSVZFU10sXG4gICAgICAgIHByb3ZpZGVyczogW25nLnJvdXRlci5ST1VURVJfUFJPVklERVJTLCBuZy5odHRwLkhUVFBfUFJPVklERVJTXVxuICAgIH0pLkNsYXNzKHtcbiAgICAgICAgY29uc3RydWN0b3I6IFtuZy5yb3V0ZXIuUm91dGVyLCBmdW5jdGlvbiAocm91dGVyKSB7XG4gICAgICAgICAgICByb3V0ZXIuY29uZmlnKFt7IHBhdGg6ICcvJywgY29tcG9uZW50OiBhcHAuQ29udGVudEFjdGlvbiwgYXM6ICdNYWluJyB9LCB7IHBhdGg6ICcvYWN0aW9uJywgY29tcG9uZW50OiBhcHAuQ29udGVudEFjdGlvbiwgYXM6ICdBY3Rpb24nLCB1c2VBc0RlZmF1bHQ6IHRydWUgfV0pO1xuICAgICAgICB9XVxuICAgIH0pO1xufSkod2luZG93LmFwcCB8fCAod2luZG93LmFwcCA9IHt9KSk7XG4iXX0=
