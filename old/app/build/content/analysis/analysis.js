'use strict';

define(['knockout'], function (ko) {
    return {
        title: ko.observable('Analysis Module'),
        strings: {
            title: ko.observable('Analysis'),
            description: ko.observable('Some Chart Stuff')
        }
    };
});
