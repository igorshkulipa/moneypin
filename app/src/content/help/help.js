((app) => {
    app.ContentHelp =
      ng.core.Component({
          templateUrl: 'src/content/help/help.html'
      })
      .Class({
          constructor: () => { }
      });
})(window.app || (window.app = {}));