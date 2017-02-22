define(['lodash'], (_) => {
    return (id, name, parentId, accountId, sum, categoryId, toRemind) => {
        var object = {
            id: id,
            description: name,
            account: accountId,
            sum: sum,
            category: categoryId,
            remind: toRemind
        };
        return object;
    }
});