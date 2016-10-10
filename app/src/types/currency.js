define(['lodash'], (_) => {
    return (id, name) => {
        var object = {
            id: ko.observable(id),
            name: ko.observable(name)
        };
        return object;
    }
});