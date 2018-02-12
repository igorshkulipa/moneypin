'use strict';

define(['lodash', 'helpers/guid'], function (_, guid) {
    return function (id, name, sign) {
        var object = {
            id: id || guid(),
            name: name || 'US Dollar',
            sign: sign || 'usd'
        };
        return object;
    };
});
