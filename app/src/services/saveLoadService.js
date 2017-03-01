define(['lodash', 'config/config', 'services/mockService'], (_, config, mockService) => {
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
            model.categories = JSON.parse(window.localStorage.getItem(config.config.localStoragePrefix + '.categories'));
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