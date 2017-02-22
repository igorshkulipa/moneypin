define(['lodash'], (_) => {
    return (id, name, parentId) => {
        var object = {
            id: id,
            name: name,
            parent: parentId,
            children: null
        };
        return object;
    }
});