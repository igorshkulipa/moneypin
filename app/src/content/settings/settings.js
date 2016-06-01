((app) => {
    app.ContentSettings =
      ng.core.Component({
          templateUrl: 'src/content/settings/settings.html'
      })
      .Class({
          constructor: () => { }
      });
})(window.app || (window.app = {}));