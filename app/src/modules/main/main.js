define(['knockout'], (ko) => {
    return {
        strings: {
            home: ko.observable('Sencoiney'),
            title: ko.observable('Main'),
            description: ko.observable('Accounts and general information')
        },
        accounts: [
            {
                type: 'bank',
                name: 'Account 1',
                sum: 44555
            },
            {
                type: 'cash',
                name: 'Account 2',
                sum: 55566
            },
            {
                type: 'visa',
                name: 'Account 3',
                sum: 33444
            },
            {
                type: 'mastercard',
                name: 'Account 4',
                sum: 55444
            },
        ]
    };
});