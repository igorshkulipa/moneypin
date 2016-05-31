((app) => {
    app.LayoutMenu =
      ng.core.Component({
          selector: 'layout-menu',
          templateUrl: 'src/layout/menu/menu.html',
      })
      .Class({
          constructor: () => {
          }
      });
})(window.app || (window.app = {}));