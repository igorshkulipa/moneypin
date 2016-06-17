define(['knockout'], (ko) => {
    return {
        title: ko.observable('Budget Module'),
        strings: {
            title: ko.observable('Budget'),
            description: ko.observable('Budget Description')
        },
    };
});