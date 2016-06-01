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
            $event.preventDefault();
            alert('action');
        }
    });
    app.MenuAndContent = ng.router.RouteConfig([{ path: '/', component: app.ContentMain, as: 'Default', useAsDefault: true }, { path: '/main', component: app.ContentMain, as: 'Main' }, { path: '/expenses', component: app.ContentExpenses, as: 'Expenses' }, { path: '/budget', component: app.ContentBudget, as: 'Budget' }, { path: '/debts', component: app.ContentDebts, as: 'Debts' }, { path: '/calendar', component: app.ContentCalendar, as: 'Calendar' }, { path: '/analysis', component: app.ContentAnalysis, as: 'Analysis' }, { path: '/category', component: app.ContentCategory, as: 'Category' }, { path: '/settings', component: app.ContentSettings, as: 'Settings' }, { path: '/help', component: app.ContentHelp, as: 'Help' }])(app.MenuAndContent);
})(window.app || (window.app = {}));

},{}]},{},[1,2,3,4,5,6,7,8,9,10,12,11,13,14,15])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvZXM1L2NvbnRlbnQvYW5hbHlzaXMvYW5hbHlzaXMuanMiLCJhcHAvZXM1L2NvbnRlbnQvYnVkZ2V0L2J1ZGdldC5qcyIsImFwcC9lczUvY29udGVudC9jYWxlbmRhci9jYWxlbmRhci5qcyIsImFwcC9lczUvY29udGVudC9jYXRlZ29yeS9jYXRlZ29yeS5qcyIsImFwcC9lczUvY29udGVudC9kZWJ0cy9kZWJ0cy5qcyIsImFwcC9lczUvY29udGVudC9leHBlbnNlcy9leHBlbnNlcy5qcyIsImFwcC9lczUvY29udGVudC9oZWxwL2hlbHAuanMiLCJhcHAvZXM1L2NvbnRlbnQvbWFpbi9tYWluLmpzIiwiYXBwL2VzNS9jb250ZW50L3NldHRpbmdzL3NldHRpbmdzLmpzIiwiYXBwL2VzNS9pbml0LmpzIiwiYXBwL2VzNS9sYXlvdXQvbWVudUZvb3Rlci9tZW51Rm9vdGVyLmpzIiwiYXBwL2VzNS9sYXlvdXQvbWVudS9tZW51LmpzIiwiYXBwL2VzNS9sYXlvdXQvcHJvamVjdC9wcm9qZWN0LmpzIiwiYXBwL2VzNS9sYXlvdXQvdG9wL3RvcC5qcyIsImFwcC9lczUvbWVudUFuZENvbnRlbnQvbWVudUFuZENvbnRlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoYXBwKSB7XG4gICAgYXBwLkNvbnRlbnRBbmFseXNpcyA9IG5nLmNvcmUuQ29tcG9uZW50KHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdzcmMvY29udGVudC9hbmFseXNpcy9hbmFseXNpcy5odG1sJ1xuICAgIH0pLkNsYXNzKHtcbiAgICAgICAgY29uc3RydWN0b3I6IGZ1bmN0aW9uIGNvbnN0cnVjdG9yKCkge31cbiAgICB9KTtcbn0pKHdpbmRvdy5hcHAgfHwgKHdpbmRvdy5hcHAgPSB7fSkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKGFwcCkge1xuICAgIGFwcC5Db250ZW50QnVkZ2V0ID0gbmcuY29yZS5Db21wb25lbnQoe1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3NyYy9jb250ZW50L2J1ZGdldC9idWRnZXQuaHRtbCdcbiAgICB9KS5DbGFzcyh7XG4gICAgICAgIGNvbnN0cnVjdG9yOiBmdW5jdGlvbiBjb25zdHJ1Y3RvcigpIHt9XG4gICAgfSk7XG59KSh3aW5kb3cuYXBwIHx8ICh3aW5kb3cuYXBwID0ge30pKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uIChhcHApIHtcbiAgICBhcHAuQ29udGVudENhbGVuZGFyID0gbmcuY29yZS5Db21wb25lbnQoe1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3NyYy9jb250ZW50L2NhbGVuZGFyL2NhbGVuZGFyLmh0bWwnXG4gICAgfSkuQ2xhc3Moe1xuICAgICAgICBjb25zdHJ1Y3RvcjogZnVuY3Rpb24gY29uc3RydWN0b3IoKSB7fVxuICAgIH0pO1xufSkod2luZG93LmFwcCB8fCAod2luZG93LmFwcCA9IHt9KSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoYXBwKSB7XG4gICAgYXBwLkNvbnRlbnRDYXRlZ29yeSA9IG5nLmNvcmUuQ29tcG9uZW50KHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdzcmMvY29udGVudC9jYXRlZ29yeS9jYXRlZ29yeS5odG1sJ1xuICAgIH0pLkNsYXNzKHtcbiAgICAgICAgY29uc3RydWN0b3I6IGZ1bmN0aW9uIGNvbnN0cnVjdG9yKCkge31cbiAgICB9KTtcbn0pKHdpbmRvdy5hcHAgfHwgKHdpbmRvdy5hcHAgPSB7fSkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKGFwcCkge1xuICAgIGFwcC5Db250ZW50RGVidHMgPSBuZy5jb3JlLkNvbXBvbmVudCh7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnc3JjL2NvbnRlbnQvZGVidHMvZGVidHMuaHRtbCdcbiAgICB9KS5DbGFzcyh7XG4gICAgICAgIGNvbnN0cnVjdG9yOiBmdW5jdGlvbiBjb25zdHJ1Y3RvcigpIHt9XG4gICAgfSk7XG59KSh3aW5kb3cuYXBwIHx8ICh3aW5kb3cuYXBwID0ge30pKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uIChhcHApIHtcbiAgICBhcHAuQ29udGVudEV4cGVuc2VzID0gbmcuY29yZS5Db21wb25lbnQoe1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3NyYy9jb250ZW50L2V4cGVuc2VzL2V4cGVuc2VzLmh0bWwnXG4gICAgfSkuQ2xhc3Moe1xuICAgICAgICBjb25zdHJ1Y3RvcjogZnVuY3Rpb24gY29uc3RydWN0b3IoKSB7fVxuICAgIH0pO1xufSkod2luZG93LmFwcCB8fCAod2luZG93LmFwcCA9IHt9KSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoYXBwKSB7XG4gICAgYXBwLkNvbnRlbnRIZWxwID0gbmcuY29yZS5Db21wb25lbnQoe1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3NyYy9jb250ZW50L2hlbHAvaGVscC5odG1sJ1xuICAgIH0pLkNsYXNzKHtcbiAgICAgICAgY29uc3RydWN0b3I6IGZ1bmN0aW9uIGNvbnN0cnVjdG9yKCkge31cbiAgICB9KTtcbn0pKHdpbmRvdy5hcHAgfHwgKHdpbmRvdy5hcHAgPSB7fSkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKGFwcCkge1xuICAgIGFwcC5Db250ZW50TWFpbiA9IG5nLmNvcmUuQ29tcG9uZW50KHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdzcmMvY29udGVudC9tYWluL21haW4uaHRtbCdcbiAgICB9KS5DbGFzcyh7XG4gICAgICAgIGNvbnN0cnVjdG9yOiBmdW5jdGlvbiBjb25zdHJ1Y3RvcigpIHt9XG4gICAgfSk7XG59KSh3aW5kb3cuYXBwIHx8ICh3aW5kb3cuYXBwID0ge30pKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uIChhcHApIHtcbiAgICBhcHAuQ29udGVudFNldHRpbmdzID0gbmcuY29yZS5Db21wb25lbnQoe1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3NyYy9jb250ZW50L3NldHRpbmdzL3NldHRpbmdzLmh0bWwnXG4gICAgfSkuQ2xhc3Moe1xuICAgICAgICBjb25zdHJ1Y3RvcjogZnVuY3Rpb24gY29uc3RydWN0b3IoKSB7fVxuICAgIH0pO1xufSkod2luZG93LmFwcCB8fCAod2luZG93LmFwcCA9IHt9KSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoYXBwKSB7XG4gICAgdmFyIEFwcENvbXBvbmVudHMgPSBbJ0xheW91dFRvcCcsICdMYXlvdXRQcm9qZWN0JywgJ0xheW91dE1lbnVGb290ZXInLCAnQ29udGVudE1haW4nLCAnQ29udGVudEV4cGVuc2VzJywgJ0NvbnRlbnRCdWRnZXQnLCAnQ29udGVudERlYnRzJywgJ0NvbnRlbnRDYWxlbmRhcicsICdDb250ZW50QW5hbHlzaXMnLCAnQ29udGVudENhdGVnb3J5JywgJ0NvbnRlbnRTZXR0aW5ncycsICdDb250ZW50SGVscCddO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG5nLnBsYXRmb3JtLmJyb3dzZXIuYm9vdHN0cmFwKGFwcC5NZW51QW5kQ29udGVudCwgW25nLnJvdXRlci5ST1VURVJfQklORElOR1MsIG5nLmNvcmUuYmluZChuZy5yb3V0ZXIuTG9jYXRpb25TdHJhdGVneSkudG9DbGFzcyhuZy5yb3V0ZXIuSGFzaExvY2F0aW9uU3RyYXRlZ3kpXSk7XG4gICAgICAgIF8uZm9yRWFjaChBcHBDb21wb25lbnRzLCBmdW5jdGlvbiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICBpZiAoYXBwLmhhc093blByb3BlcnR5KGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgICAgICBuZy5wbGF0Zm9ybS5icm93c2VyLmJvb3RzdHJhcChhcHBbY29tcG9uZW50XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSkod2luZG93LmFwcCB8fCAod2luZG93LmFwcCA9IHt9KSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoYXBwKSB7XG4gICAgYXBwLkxheW91dE1lbnVGb290ZXIgPSBuZy5jb3JlLkNvbXBvbmVudCh7XG4gICAgICAgIHNlbGVjdG9yOiAnbGF5b3V0LW1lbnUtZm9vdGVyJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdzcmMvbGF5b3V0L21lbnVGb290ZXIvbWVudUZvb3Rlci5odG1sJ1xuICAgIH0pLkNsYXNzKHtcbiAgICAgICAgY29uc3RydWN0b3I6IGZ1bmN0aW9uIGNvbnN0cnVjdG9yKCkge31cbiAgICB9KTtcbn0pKHdpbmRvdy5hcHAgfHwgKHdpbmRvdy5hcHAgPSB7fSkpO1xuIiwiLy8oKGFwcCkgPT4ge1xuLy8gICAgYXBwLkxheW91dE1lbnUgPVxuLy8gICAgICBuZy5jb3JlLkNvbXBvbmVudCh7XG4vLyAgICAgICAgICBzZWxlY3RvcjogJ2xheW91dC1tZW51Jyxcbi8vICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc3JjL2xheW91dC9tZW51L21lbnUuaHRtbCcsXG4vLyAgICAgICAgICBkaXJlY3RpdmVzOiBbbmcucm91dGVyLlJPVVRFUl9ESVJFQ1RJVkVTXSxcbi8vICAgICAgICAgIHByb3ZpZGVyczogW25nLnJvdXRlci5ST1VURVJfUFJPVklERVJTLCBuZy5odHRwLkhUVFBfUFJPVklERVJTXSxcbi8vICAgICAgfSlcbi8vICAgICAgLkNsYXNzKHtcbi8vICAgICAgICAgIGNvbnN0cnVjdG9yOiBbbmcucm91dGVyLlJvdXRlciwgKHJvdXRlcikgPT4ge1xuLy8gICAgICAgICAgICAgIC8vYXBwLnJvdXRlciA9IHJvdXRlcjtcbi8vICAgICAgICAgIH1dLFxuLy8gICAgICAgICAgaHJlZkNsaWNrOiAoJGV2ZW50LCBzdGF0ZSkgPT4ge1xuLy8gICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgICAgICAgIGFwcC5yb3V0ZXIubmF2aWdhdGVCeVVybChzdGF0ZSlcbi8vICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuLy8gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlcycsIHJlcyk7XG4vLyAgICAgICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgICAgLmNhdGNoKChleCkgPT4ge1xuLy8gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXgnLCBleCk7XG4vLyAgICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgICB9XG4vLyAgICAgIH0pO1xuLy99KSh3aW5kb3cuYXBwIHx8ICh3aW5kb3cuYXBwID0ge30pKTtcblwidXNlIHN0cmljdFwiO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKGFwcCkge1xuICAgIGFwcC5MYXlvdXRQcm9qZWN0ID0gbmcuY29yZS5Db21wb25lbnQoe1xuICAgICAgICBzZWxlY3RvcjogJ2xheW91dC1wcm9qZWN0JyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdzcmMvbGF5b3V0L3Byb2plY3QvcHJvamVjdC5odG1sJ1xuICAgIH0pLkNsYXNzKHtcbiAgICAgICAgY29uc3RydWN0b3I6IGZ1bmN0aW9uIGNvbnN0cnVjdG9yKCkge31cbiAgICB9KTtcbn0pKHdpbmRvdy5hcHAgfHwgKHdpbmRvdy5hcHAgPSB7fSkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKGFwcCkge1xuICAgIGFwcC5MYXlvdXRUb3AgPSBuZy5jb3JlLkNvbXBvbmVudCh7XG4gICAgICAgIHNlbGVjdG9yOiAnbGF5b3V0LXRvcCcsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnc3JjL2xheW91dC90b3AvdG9wLmh0bWwnXG4gICAgfSkuQ2xhc3Moe1xuICAgICAgICBjb25zdHJ1Y3RvcjogZnVuY3Rpb24gY29uc3RydWN0b3IoKSB7fVxuICAgIH0pO1xufSkod2luZG93LmFwcCB8fCAod2luZG93LmFwcCA9IHt9KSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoYXBwKSB7XG4gICAgYXBwLk1lbnVBbmRDb250ZW50ID0gbmcuY29yZS5Db21wb25lbnQoe1xuICAgICAgICBzZWxlY3RvcjogJ21lbnUtYW5kLWNvbnRlbnQnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3NyYy9tZW51QW5kQ29udGVudC9tZW51QW5kQ29udGVudC5odG1sJyxcbiAgICAgICAgZGlyZWN0aXZlczogW25nLnJvdXRlci5ST1VURVJfRElSRUNUSVZFU10sXG4gICAgICAgIHByb3ZpZGVyczogW25nLnJvdXRlci5ST1VURVJfUFJPVklERVJTLCBuZy5odHRwLkhUVFBfUFJPVklERVJTXVxuICAgIH0pLkNsYXNzKHtcbiAgICAgICAgY29uc3RydWN0b3I6IGZ1bmN0aW9uIGNvbnN0cnVjdG9yKCkge30sXG4gICAgICAgIGFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIGFjdGlvbkhhbmRsZXIoJGV2ZW50KSB7XG4gICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGFsZXJ0KCdhY3Rpb24nKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGFwcC5NZW51QW5kQ29udGVudCA9IG5nLnJvdXRlci5Sb3V0ZUNvbmZpZyhbeyBwYXRoOiAnLycsIGNvbXBvbmVudDogYXBwLkNvbnRlbnRNYWluLCBhczogJ0RlZmF1bHQnLCB1c2VBc0RlZmF1bHQ6IHRydWUgfSwgeyBwYXRoOiAnL21haW4nLCBjb21wb25lbnQ6IGFwcC5Db250ZW50TWFpbiwgYXM6ICdNYWluJyB9LCB7IHBhdGg6ICcvZXhwZW5zZXMnLCBjb21wb25lbnQ6IGFwcC5Db250ZW50RXhwZW5zZXMsIGFzOiAnRXhwZW5zZXMnIH0sIHsgcGF0aDogJy9idWRnZXQnLCBjb21wb25lbnQ6IGFwcC5Db250ZW50QnVkZ2V0LCBhczogJ0J1ZGdldCcgfSwgeyBwYXRoOiAnL2RlYnRzJywgY29tcG9uZW50OiBhcHAuQ29udGVudERlYnRzLCBhczogJ0RlYnRzJyB9LCB7IHBhdGg6ICcvY2FsZW5kYXInLCBjb21wb25lbnQ6IGFwcC5Db250ZW50Q2FsZW5kYXIsIGFzOiAnQ2FsZW5kYXInIH0sIHsgcGF0aDogJy9hbmFseXNpcycsIGNvbXBvbmVudDogYXBwLkNvbnRlbnRBbmFseXNpcywgYXM6ICdBbmFseXNpcycgfSwgeyBwYXRoOiAnL2NhdGVnb3J5JywgY29tcG9uZW50OiBhcHAuQ29udGVudENhdGVnb3J5LCBhczogJ0NhdGVnb3J5JyB9LCB7IHBhdGg6ICcvc2V0dGluZ3MnLCBjb21wb25lbnQ6IGFwcC5Db250ZW50U2V0dGluZ3MsIGFzOiAnU2V0dGluZ3MnIH0sIHsgcGF0aDogJy9oZWxwJywgY29tcG9uZW50OiBhcHAuQ29udGVudEhlbHAsIGFzOiAnSGVscCcgfV0pKGFwcC5NZW51QW5kQ29udGVudCk7XG59KSh3aW5kb3cuYXBwIHx8ICh3aW5kb3cuYXBwID0ge30pKTtcbiJdfQ==
