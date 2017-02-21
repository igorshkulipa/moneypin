define(['knockout', 'services/mockService'], (ko, mockService) => {
    var model = {
        title: ko.observable('Income and Expenses Module'),
        strings: {
            title: ko.observable('Income and Expenses'),
            description: ko.observable('Income and Expenses Description')
        },
    };
    model.accounts = mockService.generateRandomAccounts(16);
    model.transactions = mockService.generateRandomTransactions(120, model.accounts);

    return model;
});