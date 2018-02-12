'use strict';

define(['lodash', 'config/config', 'services/mockService'], function (_, config, mockService) {
    return {
        save: save,
        load: load,
        clear: clear
    };

    function save(model) {
        window.localStorage.setItem(config.config.localStoragePrefix, JSON.stringify({}));
        for (var prop in model) {
            window.localStorage.setItem(config.config.localStoragePrefix + '.' + prop, JSON.stringify(model[prop]));
        }
    }

    function load(model) {
        if (window.localStorage.getItem(config.config.localStoragePrefix)) {
            model.accounts = JSON.parse(window.localStorage.getItem(config.config.localStoragePrefix + '.accounts'));
            model.transactions = JSON.parse(window.localStorage.getItem(config.config.localStoragePrefix + '.transactions'));
            model.categories = JSON.parse(window.localStorage.getItem(config.config.localStoragePrefix + '.categories')); //{ transactions: {}, budget: {} };//
            //model.categories.transactions.expense = mockService.generateRandomCategories(10);
            //model.categories.transactions.income = mockService.generateRandomCategories(15);
            //model.categories.budget.expense = mockService.generateRandomCategories(10);
            //model.categories.budget.income = mockService.generateRandomCategories(10);
            model.currencies = JSON.parse(window.localStorage.getItem(config.config.localStoragePrefix + '.currencies'));
        } else {
            model = {
                accounts: [],
                transactions: [],
                categories: []
            };
        }
    }

    function clear() {
        window.localStorage.removeItem(config.config.localStoragePrefix);
        window.localStorage.removeItem(config.config.localStoragePrefix + '.accounts');
        window.localStorage.removeItem(config.config.localStoragePrefix + '.transactions');
        window.localStorage.removeItem(config.config.localStoragePrefix + '.categories');
        window.localStorage.removeItem(config.config.localStoragePrefix + '.currencies');
    }
});
