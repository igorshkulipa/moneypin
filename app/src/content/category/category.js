((app) => {
    app.ContentCategory =
      ng.core.Component({
          templateUrl: 'src/content/category/category.html'
      })
      .Class({
          constructor: () => { }
      });
})(window.app || (window.app = {}));