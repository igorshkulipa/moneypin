define(['knockout'], (ko) => {
    return {
        title: ko.observable('Calendar Module'),
        strings: {
            title: ko.observable('Calendar'),
            description: ko.observable('Calendar Description')
        },
    };
});