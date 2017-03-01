define(['services/mockService'], (mockService) => {
    var model = {
        accounts: [],
        transactions: [],
        categories: {
            expense: {},
            income: {},
            budget: {}
        },
        currencies: []
    };
    return model;
});