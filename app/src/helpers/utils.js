define(['lodash', 'knockout'], (_, ko) => {
    return {
        isFunction: isFunction,
        toKoObject: toKoObject,
        toPlainObject: toPlainObject
    };

    function isFunction(obj) {
        return (obj && obj.constructor && obj.call && obj.apply);
    }

    function isArray(obj) {
        return (obj && (obj.length != 0 || obj.length == 0));
    }

    function toPlainObject(koObject) {
        var result = {};
        for (var prop in koObject) {
            if (isFunction(koObject[prop])) {
                result[prop] = koObject[prop]();
            } else {
                result[prop] = koObject[prop];
            }
        }
        return result;
    }

    function toKoObject(plainObject) {
        var result;
        if (isArray(plainObject)) {
            result = [];
            _.forEach(plainObject, (o) => {
                result.push(o);
            });
        } else {
            result = {};
            for (var prop in plainObject) {
                result[prop] = ko.observable(plainObject[prop]);
            }
        }
        return result;
    }
});