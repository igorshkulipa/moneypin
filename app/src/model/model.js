define(['services/mockService'], (mockService) => {
    var model = {
        accounts: mockService.generateRandomAccounts(5),
        transactions: [],
        categories: []
    };
    return model;
});