((app) => {
    var AppComponents = [
        'ContentAction',
        'LayoutTop',
        'LayoutProject',
        'LayoutMenu',
        'LayoutMenuFooter'
    ];
    document.addEventListener('DOMContentLoaded', function () {
        _.forEach(AppComponents, (component) => {
            if (app.hasOwnProperty(component)) {
                ng.platform.browser.bootstrap(app[component])
            }
        })
    });
})(window.app || (window.app = {}));