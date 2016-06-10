define(['knockout'], (ko) => {
    return {
        title: ko.observable('Settings Module'),
        strings: {
            title: ko.observable('Settings'),
            description: ko.observable('Settings Description')
        },
    };
});