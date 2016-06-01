((app) => {
    app.ContentCalendar =
      ng.core.Component({
          templateUrl: 'src/content/calendar/calendar.html'
      })
      .Class({
          constructor: () => { }
      });
})(window.app || (window.app = {}));