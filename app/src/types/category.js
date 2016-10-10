define(['lodash'], (_) => {
    return (id, name, parentId) => {
        var object = {
            id: ko.observable(id),
            name: ko.observable(name),
            parent: ko.observable(parentId),
            children: null
        };
        return object;
    }
});