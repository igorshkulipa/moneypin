'use strict';

define(['knockout', 'router/router'], function (ko, router) {
    return {
        title: ko.observable('Back To Main'),
        backButtonClick: function backButtonClick() {
            router.redirect('main');
        }
    };
});
