'use strict';

define(['knockout'], function (ko) {
    return {
        title: ko.observable('Budget Module'),
        strings: {
            title: ko.observable('Budget'),
            description: ko.observable('Budget Description')
        }
    };
});
