define(['lodash', 'knockout'], (_, ko) => {
    return {
        isFunction: isFunction,
        toKoObject: toKoObject,
        toKoArray: toKoArray,
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

    function toKoArray(plainArray) {
        var result = [];
        _.forEach(plainArray, (elem) => {
            result.push(toKoObject(elem));
        });
        return ko.observableArray(result);
    }

    function toKoObject(plainObject) {
        var result = {};
        for (var prop in plainObject) {
            result[prop] = ko.observable(plainObject[prop]);
        }
        return ko.observable(result);
    }
});