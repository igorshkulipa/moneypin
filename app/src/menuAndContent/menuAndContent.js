((app) => {
    app.MenuAndContent =
      ng.core.Component({
          selector: 'menu-and-content',
          templateUrl: 'src/menuAndContent/menuAndContent.html',
          directives: [ng.router.ROUTER_DIRECTIVES],
          providers: [ng.router.ROUTER_PROVIDERS, ng.http.HTTP_PROVIDERS]
      })
      .Class({
          constructor: () => {
          },
          actionHandler: ($event) => {
              $event.preventDefault();
              alert('action');
          }
      });
    app.MenuAndContent = ng.router.RouteConfig([
            { path: '/', component: app.ContentMain, as: 'Default', useAsDefault: true },
            { path: '/main', component: app.ContentMain, as: 'Main' },
            { path: '/expenses', component: app.ContentExpenses, as: 'Expenses' },
            { path: '/budget', component: app.ContentBudget, as: 'Budget' },
            { path: '/debts', component: app.ContentDebts, as: 'Debts' },
            { path: '/calendar', component: app.ContentCalendar, as: 'Calendar' },
            { path: '/analysis', component: app.ContentAnalysis, as: 'Analysis' },
            { path: '/category', component: app.ContentCategory, as: 'Category' },
            { path: '/settings', component: app.ContentSettings, as: 'Settings' },
            { path: '/help', component: app.ContentHelp, as: 'Help' }
    ])(app.MenuAndContent);
})(window.app || (window.app = {}));