require(['knockout/knockout-3.4.0'], function (ko) {
    alert('works');
    ko.applyBindings(new appViewModel());
});