(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function (app) {
    app.ContentAnalysis = ng.core.Component({
        templateUrl: 'src/content/analysis/analysis.html'
    }).Class({
        constructor: function constructor() {}
    });
})(window.app || (window.app = {}));

},{}],2:[function(require,module,exports){
'use strict';

(function (app) {
    app.ContentBudget = ng.core.Component({
        templateUrl: 'src/content/budget/budget.html'
    }).Class({
        constructor: function constructor() {}
    });
})(window.app || (window.app = {}));

},{}],3:[function(require,module,exports){
'use strict';

(function (app) {
    app.ContentCalendar = ng.core.Component({
        templateUrl: 'src/content/calendar/calendar.html'
    }).Class({
        constructor: function constructor() {}
    });
})(window.app || (window.app = {}));

},{}],4:[function(require,module,exports){
'use strict';

(function (app) {
    app.ContentCategory = ng.core.Component({
        templateUrl: 'src/content/category/category.html'
    }).Class({
        constructor: function constructor() {}
    });
})(window.app || (window.app = {}));

},{}],5:[function(require,module,exports){
'use strict';

(function (app) {
    app.ContentDebts = ng.core.Component({
        templateUrl: 'src/content/debts/debts.html'
    }).Class({
        constructor: function constructor() {}
    });
})(window.app || (window.app = {}));

},{}],6:[function(require,module,exports){
'use strict';

(function (app) {
    app.ContentExpenses = ng.core.Component({
        templateUrl: 'src/content/expenses/expenses.html'
    }).Class({
        constructor: function constructor() {}
    });
})(window.app || (window.app = {}));

},{}],7:[function(require,module,exports){
'use strict';

(function (app) {
    app.ContentHelp = ng.core.Component({
        templateUrl: 'src/content/help/help.html'
    }).Class({
        constructor: function constructor() {}
    });
})(window.app || (window.app = {}));

},{}],8:[function(require,module,exports){
'use strict';

(function (app) {
    app.ContentMain = ng.core.Component({
        templateUrl: 'src/content/main/main.html'
    }).Class({
        constructor: function constructor() {}
    });
})(window.app || (window.app = {}));

},{}],9:[function(require,module,exports){
'use strict';

(function (app) {
    app.ContentSettings = ng.core.Component({
        templateUrl: 'src/content/settings/settings.html'
    }).Class({
        constructor: function constructor() {}
    });
})(window.app || (window.app = {}));

},{}],10:[function(require,module,exports){
'use strict';

(function (app) {
    var AppComponents = ['LayoutTop', 'LayoutProject', 'LayoutMenuFooter', 'ContentMain', 'ContentExpenses', 'ContentBudget', 'ContentDebts', 'ContentCalendar', 'ContentAnalysis', 'ContentCategory', 'ContentSettings', 'ContentHelp'];
    document.addEventListener('DOMContentLoaded', function () {
        ng.platform.browser.bootstrap(app.MenuAndContent, [ng.router.ROUTER_BINDINGS, ng.core.bind(ng.router.LocationStrategy).toClass(ng.router.HashLocationStrategy)]);
        _.forEach(AppComponents, function (component) {
            if (app.hasOwnProperty(component)) {
                ng.platform.browser.bootstrap(app[component]);
            }
        });
    });
})(window.app || (window.app = {}));

},{}],11:[function(require,module,exports){
'use strict';

(function (app) {
    app.LayoutMenuFooter = ng.core.Component({
        selector: 'layout-menu-footer',
        templateUrl: 'src/layout/menuFooter/menuFooter.html'
    }).Class({
        constructor: function constructor() {}
    });
})(window.app || (window.app = {}));

},{}],12:[function(require,module,exports){
//((app) => {
//    app.LayoutMenu =
//      ng.core.Component({
//          selector: 'layout-menu',
//          templateUrl: 'src/layout/menu/menu.html',
//          directives: [ng.router.ROUTER_DIRECTIVES],
//          providers: [ng.router.ROUTER_PROVIDERS, ng.http.HTTP_PROVIDERS],
//      })
//      .Class({
//          constructor: [ng.router.Router, (router) => {
//              //app.router = router;
//          }],
//          hrefClick: ($event, state) => {
//              $event.preventDefault();
//              app.router.navigateByUrl(state)
//                  .then((res) => {
//                      console.log('res', res);
//                  })
//              .catch((ex) => {
//                  console.log('ex', ex);
//              });
//          }
//      });
//})(window.app || (window.app = {}));
"use strict";

},{}],13:[function(require,module,exports){
'use strict';

(function (app) {
    app.LayoutProject = ng.core.Component({
        selector: 'layout-project',
        templateUrl: 'src/layout/project/project.html'
    }).Class({
        constructor: function constructor() {}
    });
})(window.app || (window.app = {}));

},{}],14:[function(require,module,exports){
'use strict';

(function (app) {
    app.LayoutTop = ng.core.Component({
        selector: 'layout-top',
        templateUrl: 'src/layout/top/top.html'
    }).Class({
        constructor: function constructor() {}
    });
})(window.app || (window.app = {}));

},{}],15:[function(require,module,exports){
'use strict';

(function (app) {
    app.MenuAndContent = ng.core.Component({
        selector: 'menu-and-content',
        templateUrl: 'src/menuAndContent/menuAndContent.html',
        directives: [ng.router.ROUTER_DIRECTIVES],
        providers: [ng.router.ROUTER_PROVIDERS, ng.http.HTTP_PROVIDERS]
    }).Class({
        constructor: function constructor() {},
        actionHandler: function actionHandler($event) {
            $event.stopPropagation();
            $event.preventDefault();
            alert('action');
        }
    });
    app.MenuAndContent = ng.router.RouteConfig([{ path: '/', component: app.ContentMain, as: 'Default', useAsDefault: true }, { path: '/main', component: app.ContentMain, as: 'Main' }, { path: '/expenses', component: app.ContentExpenses, as: 'Expenses' }, { path: '/budget', component: app.ContentBudget, as: 'Budget' }, { path: '/debts', component: app.ContentDebts, as: 'Debts' }, { path: '/calendar', component: app.ContentCalendar, as: 'Calendar' }, { path: '/analysis', component: app.ContentAnalysis, as: 'Analysis' }, { path: '/category', component: app.ContentCategory, as: 'Category' }, { path: '/settings', component: app.ContentSettings, as: 'Settings' }, { path: '/help', component: app.ContentHelp, as: 'Help' }])(app.MenuAndContent);
})(window.app || (window.app = {}));

},{}]},{},[1,2,3,4,5,6,7,8,9,10,12,11,13,14,15])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvZXM1L2NvbnRlbnQvYW5hbHlzaXMvYW5hbHlzaXMuanMiLCJhcHAvZXM1L2NvbnRlbnQvYnVkZ2V0L2J1ZGdldC5qcyIsImFwcC9lczUvY29udGVudC9jYWxlbmRhci9jYWxlbmRhci5qcyIsImFwcC9lczUvY29udGVudC9jYXRlZ29yeS9jYXRlZ29yeS5qcyIsImFwcC9lczUvY29udGVudC9kZWJ0cy9kZWJ0cy5qcyIsImFwcC9lczUvY29udGVudC9leHBlbnNlcy9leHBlbnNlcy5qcyIsImFwcC9lczUvY29udGVudC9oZWxwL2hlbHAuanMiLCJhcHAvZXM1L2NvbnRlbnQvbWFpbi9tYWluLmpzIiwiYXBwL2VzNS9jb250ZW50L3NldHRpbmdzL3NldHRpbmdzLmpzIiwiYXBwL2VzNS9pbml0LmpzIiwiYXBwL2VzNS9sYXlvdXQvbWVudUZvb3Rlci9tZW51Rm9vdGVyLmpzIiwiYXBwL2VzNS9sYXlvdXQvbWVudS9tZW51LmpzIiwiYXBwL2VzNS9sYXlvdXQvcHJvamVjdC9wcm9qZWN0LmpzIiwiYXBwL2VzNS9sYXlvdXQvdG9wL3RvcC5qcyIsImFwcC9lczUvbWVudUFuZENvbnRlbnQvbWVudUFuZENvbnRlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uIChhcHApIHtcbiAgICBhcHAuQ29udGVudEFuYWx5c2lzID0gbmcuY29yZS5Db21wb25lbnQoe1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3NyYy9jb250ZW50L2FuYWx5c2lzL2FuYWx5c2lzLmh0bWwnXG4gICAgfSkuQ2xhc3Moe1xuICAgICAgICBjb25zdHJ1Y3RvcjogZnVuY3Rpb24gY29uc3RydWN0b3IoKSB7fVxuICAgIH0pO1xufSkod2luZG93LmFwcCB8fCAod2luZG93LmFwcCA9IHt9KSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoYXBwKSB7XG4gICAgYXBwLkNvbnRlbnRCdWRnZXQgPSBuZy5jb3JlLkNvbXBvbmVudCh7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnc3JjL2NvbnRlbnQvYnVkZ2V0L2J1ZGdldC5odG1sJ1xuICAgIH0pLkNsYXNzKHtcbiAgICAgICAgY29uc3RydWN0b3I6IGZ1bmN0aW9uIGNvbnN0cnVjdG9yKCkge31cbiAgICB9KTtcbn0pKHdpbmRvdy5hcHAgfHwgKHdpbmRvdy5hcHAgPSB7fSkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKGFwcCkge1xuICAgIGFwcC5Db250ZW50Q2FsZW5kYXIgPSBuZy5jb3JlLkNvbXBvbmVudCh7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnc3JjL2NvbnRlbnQvY2FsZW5kYXIvY2FsZW5kYXIuaHRtbCdcbiAgICB9KS5DbGFzcyh7XG4gICAgICAgIGNvbnN0cnVjdG9yOiBmdW5jdGlvbiBjb25zdHJ1Y3RvcigpIHt9XG4gICAgfSk7XG59KSh3aW5kb3cuYXBwIHx8ICh3aW5kb3cuYXBwID0ge30pKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uIChhcHApIHtcbiAgICBhcHAuQ29udGVudENhdGVnb3J5ID0gbmcuY29yZS5Db21wb25lbnQoe1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3NyYy9jb250ZW50L2NhdGVnb3J5L2NhdGVnb3J5Lmh0bWwnXG4gICAgfSkuQ2xhc3Moe1xuICAgICAgICBjb25zdHJ1Y3RvcjogZnVuY3Rpb24gY29uc3RydWN0b3IoKSB7fVxuICAgIH0pO1xufSkod2luZG93LmFwcCB8fCAod2luZG93LmFwcCA9IHt9KSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoYXBwKSB7XG4gICAgYXBwLkNvbnRlbnREZWJ0cyA9IG5nLmNvcmUuQ29tcG9uZW50KHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdzcmMvY29udGVudC9kZWJ0cy9kZWJ0cy5odG1sJ1xuICAgIH0pLkNsYXNzKHtcbiAgICAgICAgY29uc3RydWN0b3I6IGZ1bmN0aW9uIGNvbnN0cnVjdG9yKCkge31cbiAgICB9KTtcbn0pKHdpbmRvdy5hcHAgfHwgKHdpbmRvdy5hcHAgPSB7fSkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKGFwcCkge1xuICAgIGFwcC5Db250ZW50RXhwZW5zZXMgPSBuZy5jb3JlLkNvbXBvbmVudCh7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnc3JjL2NvbnRlbnQvZXhwZW5zZXMvZXhwZW5zZXMuaHRtbCdcbiAgICB9KS5DbGFzcyh7XG4gICAgICAgIGNvbnN0cnVjdG9yOiBmdW5jdGlvbiBjb25zdHJ1Y3RvcigpIHt9XG4gICAgfSk7XG59KSh3aW5kb3cuYXBwIHx8ICh3aW5kb3cuYXBwID0ge30pKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uIChhcHApIHtcbiAgICBhcHAuQ29udGVudEhlbHAgPSBuZy5jb3JlLkNvbXBvbmVudCh7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnc3JjL2NvbnRlbnQvaGVscC9oZWxwLmh0bWwnXG4gICAgfSkuQ2xhc3Moe1xuICAgICAgICBjb25zdHJ1Y3RvcjogZnVuY3Rpb24gY29uc3RydWN0b3IoKSB7fVxuICAgIH0pO1xufSkod2luZG93LmFwcCB8fCAod2luZG93LmFwcCA9IHt9KSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoYXBwKSB7XG4gICAgYXBwLkNvbnRlbnRNYWluID0gbmcuY29yZS5Db21wb25lbnQoe1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3NyYy9jb250ZW50L21haW4vbWFpbi5odG1sJ1xuICAgIH0pLkNsYXNzKHtcbiAgICAgICAgY29uc3RydWN0b3I6IGZ1bmN0aW9uIGNvbnN0cnVjdG9yKCkge31cbiAgICB9KTtcbn0pKHdpbmRvdy5hcHAgfHwgKHdpbmRvdy5hcHAgPSB7fSkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKGFwcCkge1xuICAgIGFwcC5Db250ZW50U2V0dGluZ3MgPSBuZy5jb3JlLkNvbXBvbmVudCh7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnc3JjL2NvbnRlbnQvc2V0dGluZ3Mvc2V0dGluZ3MuaHRtbCdcbiAgICB9KS5DbGFzcyh7XG4gICAgICAgIGNvbnN0cnVjdG9yOiBmdW5jdGlvbiBjb25zdHJ1Y3RvcigpIHt9XG4gICAgfSk7XG59KSh3aW5kb3cuYXBwIHx8ICh3aW5kb3cuYXBwID0ge30pKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uIChhcHApIHtcbiAgICB2YXIgQXBwQ29tcG9uZW50cyA9IFsnTGF5b3V0VG9wJywgJ0xheW91dFByb2plY3QnLCAnTGF5b3V0TWVudUZvb3RlcicsICdDb250ZW50TWFpbicsICdDb250ZW50RXhwZW5zZXMnLCAnQ29udGVudEJ1ZGdldCcsICdDb250ZW50RGVidHMnLCAnQ29udGVudENhbGVuZGFyJywgJ0NvbnRlbnRBbmFseXNpcycsICdDb250ZW50Q2F0ZWdvcnknLCAnQ29udGVudFNldHRpbmdzJywgJ0NvbnRlbnRIZWxwJ107XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbmcucGxhdGZvcm0uYnJvd3Nlci5ib290c3RyYXAoYXBwLk1lbnVBbmRDb250ZW50LCBbbmcucm91dGVyLlJPVVRFUl9CSU5ESU5HUywgbmcuY29yZS5iaW5kKG5nLnJvdXRlci5Mb2NhdGlvblN0cmF0ZWd5KS50b0NsYXNzKG5nLnJvdXRlci5IYXNoTG9jYXRpb25TdHJhdGVneSldKTtcbiAgICAgICAgXy5mb3JFYWNoKEFwcENvbXBvbmVudHMsIGZ1bmN0aW9uIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgIGlmIChhcHAuaGFzT3duUHJvcGVydHkoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgICAgIG5nLnBsYXRmb3JtLmJyb3dzZXIuYm9vdHN0cmFwKGFwcFtjb21wb25lbnRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KSh3aW5kb3cuYXBwIHx8ICh3aW5kb3cuYXBwID0ge30pKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uIChhcHApIHtcbiAgICBhcHAuTGF5b3V0TWVudUZvb3RlciA9IG5nLmNvcmUuQ29tcG9uZW50KHtcbiAgICAgICAgc2VsZWN0b3I6ICdsYXlvdXQtbWVudS1mb290ZXInLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3NyYy9sYXlvdXQvbWVudUZvb3Rlci9tZW51Rm9vdGVyLmh0bWwnXG4gICAgfSkuQ2xhc3Moe1xuICAgICAgICBjb25zdHJ1Y3RvcjogZnVuY3Rpb24gY29uc3RydWN0b3IoKSB7fVxuICAgIH0pO1xufSkod2luZG93LmFwcCB8fCAod2luZG93LmFwcCA9IHt9KSk7XG4iLCIvLygoYXBwKSA9PiB7XG4vLyAgICBhcHAuTGF5b3V0TWVudSA9XG4vLyAgICAgIG5nLmNvcmUuQ29tcG9uZW50KHtcbi8vICAgICAgICAgIHNlbGVjdG9yOiAnbGF5b3V0LW1lbnUnLFxuLy8gICAgICAgICAgdGVtcGxhdGVVcmw6ICdzcmMvbGF5b3V0L21lbnUvbWVudS5odG1sJyxcbi8vICAgICAgICAgIGRpcmVjdGl2ZXM6IFtuZy5yb3V0ZXIuUk9VVEVSX0RJUkVDVElWRVNdLFxuLy8gICAgICAgICAgcHJvdmlkZXJzOiBbbmcucm91dGVyLlJPVVRFUl9QUk9WSURFUlMsIG5nLmh0dHAuSFRUUF9QUk9WSURFUlNdLFxuLy8gICAgICB9KVxuLy8gICAgICAuQ2xhc3Moe1xuLy8gICAgICAgICAgY29uc3RydWN0b3I6IFtuZy5yb3V0ZXIuUm91dGVyLCAocm91dGVyKSA9PiB7XG4vLyAgICAgICAgICAgICAgLy9hcHAucm91dGVyID0gcm91dGVyO1xuLy8gICAgICAgICAgfV0sXG4vLyAgICAgICAgICBocmVmQ2xpY2s6ICgkZXZlbnQsIHN0YXRlKSA9PiB7XG4vLyAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgICAgICAgICAgYXBwLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHN0YXRlKVxuLy8gICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVzJywgcmVzKTtcbi8vICAgICAgICAgICAgICAgICAgfSlcbi8vICAgICAgICAgICAgICAuY2F0Y2goKGV4KSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdleCcsIGV4KTtcbi8vICAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgIH1cbi8vICAgICAgfSk7XG4vL30pKHdpbmRvdy5hcHAgfHwgKHdpbmRvdy5hcHAgPSB7fSkpO1xuXCJ1c2Ugc3RyaWN0XCI7XG4iLCIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoYXBwKSB7XG4gICAgYXBwLkxheW91dFByb2plY3QgPSBuZy5jb3JlLkNvbXBvbmVudCh7XG4gICAgICAgIHNlbGVjdG9yOiAnbGF5b3V0LXByb2plY3QnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3NyYy9sYXlvdXQvcHJvamVjdC9wcm9qZWN0Lmh0bWwnXG4gICAgfSkuQ2xhc3Moe1xuICAgICAgICBjb25zdHJ1Y3RvcjogZnVuY3Rpb24gY29uc3RydWN0b3IoKSB7fVxuICAgIH0pO1xufSkod2luZG93LmFwcCB8fCAod2luZG93LmFwcCA9IHt9KSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoYXBwKSB7XG4gICAgYXBwLkxheW91dFRvcCA9IG5nLmNvcmUuQ29tcG9uZW50KHtcbiAgICAgICAgc2VsZWN0b3I6ICdsYXlvdXQtdG9wJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdzcmMvbGF5b3V0L3RvcC90b3AuaHRtbCdcbiAgICB9KS5DbGFzcyh7XG4gICAgICAgIGNvbnN0cnVjdG9yOiBmdW5jdGlvbiBjb25zdHJ1Y3RvcigpIHt9XG4gICAgfSk7XG59KSh3aW5kb3cuYXBwIHx8ICh3aW5kb3cuYXBwID0ge30pKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uIChhcHApIHtcbiAgICBhcHAuTWVudUFuZENvbnRlbnQgPSBuZy5jb3JlLkNvbXBvbmVudCh7XG4gICAgICAgIHNlbGVjdG9yOiAnbWVudS1hbmQtY29udGVudCcsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnc3JjL21lbnVBbmRDb250ZW50L21lbnVBbmRDb250ZW50Lmh0bWwnLFxuICAgICAgICBkaXJlY3RpdmVzOiBbbmcucm91dGVyLlJPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICAgICAgcHJvdmlkZXJzOiBbbmcucm91dGVyLlJPVVRFUl9QUk9WSURFUlMsIG5nLmh0dHAuSFRUUF9QUk9WSURFUlNdXG4gICAgfSkuQ2xhc3Moe1xuICAgICAgICBjb25zdHJ1Y3RvcjogZnVuY3Rpb24gY29uc3RydWN0b3IoKSB7fSxcbiAgICAgICAgYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gYWN0aW9uSGFuZGxlcigkZXZlbnQpIHtcbiAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYWxlcnQoJ2FjdGlvbicpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgYXBwLk1lbnVBbmRDb250ZW50ID0gbmcucm91dGVyLlJvdXRlQ29uZmlnKFt7IHBhdGg6ICcvJywgY29tcG9uZW50OiBhcHAuQ29udGVudE1haW4sIGFzOiAnRGVmYXVsdCcsIHVzZUFzRGVmYXVsdDogdHJ1ZSB9LCB7IHBhdGg6ICcvbWFpbicsIGNvbXBvbmVudDogYXBwLkNvbnRlbnRNYWluLCBhczogJ01haW4nIH0sIHsgcGF0aDogJy9leHBlbnNlcycsIGNvbXBvbmVudDogYXBwLkNvbnRlbnRFeHBlbnNlcywgYXM6ICdFeHBlbnNlcycgfSwgeyBwYXRoOiAnL2J1ZGdldCcsIGNvbXBvbmVudDogYXBwLkNvbnRlbnRCdWRnZXQsIGFzOiAnQnVkZ2V0JyB9LCB7IHBhdGg6ICcvZGVidHMnLCBjb21wb25lbnQ6IGFwcC5Db250ZW50RGVidHMsIGFzOiAnRGVidHMnIH0sIHsgcGF0aDogJy9jYWxlbmRhcicsIGNvbXBvbmVudDogYXBwLkNvbnRlbnRDYWxlbmRhciwgYXM6ICdDYWxlbmRhcicgfSwgeyBwYXRoOiAnL2FuYWx5c2lzJywgY29tcG9uZW50OiBhcHAuQ29udGVudEFuYWx5c2lzLCBhczogJ0FuYWx5c2lzJyB9LCB7IHBhdGg6ICcvY2F0ZWdvcnknLCBjb21wb25lbnQ6IGFwcC5Db250ZW50Q2F0ZWdvcnksIGFzOiAnQ2F0ZWdvcnknIH0sIHsgcGF0aDogJy9zZXR0aW5ncycsIGNvbXBvbmVudDogYXBwLkNvbnRlbnRTZXR0aW5ncywgYXM6ICdTZXR0aW5ncycgfSwgeyBwYXRoOiAnL2hlbHAnLCBjb21wb25lbnQ6IGFwcC5Db250ZW50SGVscCwgYXM6ICdIZWxwJyB9XSkoYXBwLk1lbnVBbmRDb250ZW50KTtcbn0pKHdpbmRvdy5hcHAgfHwgKHdpbmRvdy5hcHAgPSB7fSkpO1xuIl19
