'use strict';

define(['services/mockService'], function (mockService) {
    var model = {
        accounts: [],
        transactions: [],
        categories: {
            transactions: {
                expense: [],
                income: []
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
