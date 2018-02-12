define(['services/mockService'], (mockService) => {
    var model = {
        accounts: [],
        transactions: [],
        categories: {
            transactions: {
                expense: [],
                income: [],
            },
            budget: {
                expense: [],
                income: []
            }
        },
        currencies: []
    };
    return model;
});