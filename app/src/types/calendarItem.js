define(['lodash'], (_) => {
    return (id, name, parentId, accountId, sum, categoryId, toRemind) => {
        var object = {
            id: ko.observable(id),
            description: ko.observable(name),
            user: ko.observable(parentId),
            account: ko.observable(accountId),
            sum: ko.observable(sum),
            category: ko.observable(categoryId),
            remind:ko.observable(toRemind)
        };
        return object;
    }
});