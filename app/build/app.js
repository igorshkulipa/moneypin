(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function (app) {
    app.ContentAction = ng.core.Component({
        selector: 'content-action',
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
    });
})(window.app || (window.app = {}));

},{}]},{},[1,3,2,4,5,6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvZXM1L2NvbnRlbnQvYWN0aW9uL2FjdGlvbi5qcyIsImFwcC9lczUvbGF5b3V0L21lbnVGb290ZXIvbWVudUZvb3Rlci5qcyIsImFwcC9lczUvbGF5b3V0L21lbnUvbWVudS5qcyIsImFwcC9lczUvbGF5b3V0L3Byb2plY3QvcHJvamVjdC5qcyIsImFwcC9lczUvbGF5b3V0L3RvcC90b3AuanMiLCJhcHAvZXM1L21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uIChhcHApIHtcbiAgICBhcHAuQ29udGVudEFjdGlvbiA9IG5nLmNvcmUuQ29tcG9uZW50KHtcbiAgICAgICAgc2VsZWN0b3I6ICdjb250ZW50LWFjdGlvbicsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnc3JjL2NvbnRlbnQvYWN0aW9uL2FjdGlvbi5odG1sJ1xuICAgIH0pLkNsYXNzKHtcbiAgICAgICAgY29uc3RydWN0b3I6IGZ1bmN0aW9uIGNvbnN0cnVjdG9yKCkge31cbiAgICB9KTtcbn0pKHdpbmRvdy5hcHAgfHwgKHdpbmRvdy5hcHAgPSB7fSkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKGFwcCkge1xuICAgIGFwcC5MYXlvdXRNZW51Rm9vdGVyID0gbmcuY29yZS5Db21wb25lbnQoe1xuICAgICAgICBzZWxlY3RvcjogJ2xheW91dC1tZW51LWZvb3RlcicsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnc3JjL2xheW91dC9tZW51Rm9vdGVyL21lbnVGb290ZXIuaHRtbCdcbiAgICB9KS5DbGFzcyh7XG4gICAgICAgIGNvbnN0cnVjdG9yOiBmdW5jdGlvbiBjb25zdHJ1Y3RvcigpIHt9XG4gICAgfSk7XG59KSh3aW5kb3cuYXBwIHx8ICh3aW5kb3cuYXBwID0ge30pKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uIChhcHApIHtcbiAgICBhcHAuTGF5b3V0TWVudSA9IG5nLmNvcmUuQ29tcG9uZW50KHtcbiAgICAgICAgc2VsZWN0b3I6ICdsYXlvdXQtbWVudScsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnc3JjL2xheW91dC9tZW51L21lbnUuaHRtbCdcbiAgICB9KS5DbGFzcyh7XG4gICAgICAgIGNvbnN0cnVjdG9yOiBmdW5jdGlvbiBjb25zdHJ1Y3RvcigpIHt9XG4gICAgfSk7XG59KSh3aW5kb3cuYXBwIHx8ICh3aW5kb3cuYXBwID0ge30pKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uIChhcHApIHtcbiAgICBhcHAuTGF5b3V0UHJvamVjdCA9IG5nLmNvcmUuQ29tcG9uZW50KHtcbiAgICAgICAgc2VsZWN0b3I6ICdsYXlvdXQtcHJvamVjdCcsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnc3JjL2xheW91dC9wcm9qZWN0L3Byb2plY3QuaHRtbCdcbiAgICB9KS5DbGFzcyh7XG4gICAgICAgIGNvbnN0cnVjdG9yOiBmdW5jdGlvbiBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsYXlvdXQtcHJvamVjdCBsYXlvdXQtcHJvamVjdCcpO1xuICAgICAgICB9XG4gICAgfSk7XG59KSh3aW5kb3cuYXBwIHx8ICh3aW5kb3cuYXBwID0ge30pKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uIChhcHApIHtcbiAgICBhcHAuTGF5b3V0VG9wID0gbmcuY29yZS5Db21wb25lbnQoe1xuICAgICAgICBzZWxlY3RvcjogJ2xheW91dC10b3AnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3NyYy9sYXlvdXQvdG9wL3RvcC5odG1sJ1xuICAgIH0pLkNsYXNzKHtcbiAgICAgICAgY29uc3RydWN0b3I6IGZ1bmN0aW9uIGNvbnN0cnVjdG9yKCkge31cbiAgICB9KTtcbn0pKHdpbmRvdy5hcHAgfHwgKHdpbmRvdy5hcHAgPSB7fSkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKGFwcCkge1xuICAgIHZhciBBcHBDb21wb25lbnRzID0gWydDb250ZW50QWN0aW9uJywgJ0xheW91dFRvcCcsICdMYXlvdXRQcm9qZWN0JywgJ0xheW91dE1lbnUnLCAnTGF5b3V0TWVudUZvb3RlciddO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF8uZm9yRWFjaChBcHBDb21wb25lbnRzLCBmdW5jdGlvbiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICBpZiAoYXBwLmhhc093blByb3BlcnR5KGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgICAgICBuZy5wbGF0Zm9ybS5icm93c2VyLmJvb3RzdHJhcChhcHBbY29tcG9uZW50XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSkod2luZG93LmFwcCB8fCAod2luZG93LmFwcCA9IHt9KSk7XG4iXX0=
