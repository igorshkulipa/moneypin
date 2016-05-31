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
