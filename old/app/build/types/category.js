'use strict';

define(['lodash', 'helpers/guid'], function (_, guid) {
    return function (id, name, parentId) {
        var object = {
            id: id || guid(),
            name: name || '',
            parent: parentId || null,
            subcategories: []
        };
        return object;
    };
});
