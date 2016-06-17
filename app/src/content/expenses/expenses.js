define(['knockout'], (ko) => {
    return {
        title: ko.observable('Income and Expenses Module'),
        strings: {
            title: ko.observable('Income and Expenses'),
            description: ko.observable('Income and Expenses Description')
        },
    };
});