((app) => {
    app.ContentBudget =
      ng.core.Component({
          templateUrl: 'src/content/budget/budget.html'
      })
      .Class({
          constructor: () => { }
      });
})(window.app || (window.app = {}));