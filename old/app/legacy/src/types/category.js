define(['lodash', 'helpers/guid'], (_, guid) => {
    return (id, name, parentId) => {
        var object = {
            id: id || guid(),
            name: name || '',
            parent: parentId || null,
            subcategories: []
        };
        return object;
    }
});