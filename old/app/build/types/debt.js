'use strict';

define(['lodash'], function (_) {
    return function (id, accountId, date, personName, description, returnDate) {
        var object = {
            id: id,
            account: accountId,
            date: date,
            person: personName,
            description: description,
            returnDate: returnDate
        };
        return object;
    };
});
