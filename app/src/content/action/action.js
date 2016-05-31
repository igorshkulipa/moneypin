((app) => {
    app.ContentAction =
      ng.core.Component({
          selector: 'content-action',
          templateUrl: 'src/content/action/action.html'
      })
      .Class({
          constructor: () => { }
      });
})(window.app || (window.app = {}));