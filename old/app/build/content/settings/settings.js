'use strict';

define(['knockout'], function (ko) {
    return {
        title: ko.observable('Settings Module'),
        strings: {
            title: ko.observable('Settings'),
            description: ko.observable('Settings Description')
        }
    };
});
