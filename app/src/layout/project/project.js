((app) => {
    app.LayoutProject =
      ng.core.Component({
          selector: 'layout-project',
          templateUrl: 'src/layout/project/project.html'
      })
      .Class({
          constructor: () => {
          }
      });
})(window.app || (window.app = {}));