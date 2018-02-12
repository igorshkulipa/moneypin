'use strict';

define(['knockout'], function (ko) {
    return {
        title: ko.observable('Help Module'),
        strings: {
            title: ko.observable('Help'),
            description: ko.observable('Help Description')
        }
    };
});
