'use strict';

define(['lodash', 'knockout'], function (_, ko) {
    return {
        isFunction: isFunction,
        toKoObject: toKoObject,
        toKoArray: toKoArray,
        toPlainObject: toPlainObject
    };

    function isFunction(obj) {
        return obj && obj.constructor && obj.call && obj.apply;
    }

    function isArray(obj) {
        return obj && (obj.length != 0 || obj.length == 0) && obj.forEach;
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
        _.forEach(plainArray, function (elem) {
            result.push(toKoObject(elem));
        });
        return ko.observableArray(result);
    }

    function toKoObject(plainObject) {
        var result = {};
        if (isArray(plainObject)) {
            return toKoArray(plainObject);
        } else {
            for (var prop in plainObject) {
                if (isFunction(plainObject[prop])) {
                    result[prop] = plainObject[prop];
                } else if (isArray(plainObject[prop])) {
                    result[prop] = ko.observableArray(plainObject[prop]);
                } else {
                    result[prop] = ko.observable(plainObject[prop]);
                }
            }
            return ko.observable(result);
        }
    }
});
