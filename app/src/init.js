((app) => {
    var AppComponents = [
        'LayoutTop',
        'LayoutProject',
        'LayoutMenuFooter',
        'ContentMain',
        'ContentExpenses',
        'ContentBudget',
        'ContentDebts',
        'ContentCalendar',
        'ContentAnalysis',
        'ContentCategory',
        'ContentSettings',
        'ContentHelp'
    ];
    document.addEventListener('DOMContentLoaded', () => {
        ng.platform.browser.bootstrap(app.MenuAndContent, [ng.router.ROUTER_BINDINGS, ng.core.bind(ng.router.LocationStrategy).toClass(ng.router.HashLocationStrategy)]);
        _.forEach(AppComponents, (component) => {
            if (app.hasOwnProperty(component)) {
                ng.platform.browser.bootstrap(app[component]);
            }
        });
    });
})(window.app || (window.app = {}));