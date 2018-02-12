define(['knockout', 'router/router'], (ko, router) => {
    return {
        title: ko.observable('Back To Main'),
        backButtonClick: () => {
            router.redirect('main');
        }
    };
});