define(['knockout'], (ko) => {
    return {
        title: ko.observable('Debts Module'),
        strings: {
            title: ko.observable('Debts'),
            description: ko.observable('Debts Description')
        },
    };
});