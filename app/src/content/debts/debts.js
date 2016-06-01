((app) => {
    app.ContentDebts =
      ng.core.Component({
          templateUrl: 'src/content/debts/debts.html'
      })
      .Class({
          constructor: () => { }
      });
})(window.app || (window.app = {}));