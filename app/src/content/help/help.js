define(['knockout'], (ko) => {
    return {
        title: ko.observable('Help Module'),
        strings: {
            title: ko.observable('Help'),
            description: ko.observable('Help Description')
        },
    };
});