define(['knockout'], (ko) => {
    return {
        title: ko.observable('Category Module'),
        strings: {
            title: ko.observable('Category'),
            description: ko.observable('Category Description')
        },
    };
});