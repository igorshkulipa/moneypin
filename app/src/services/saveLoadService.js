define(['lodash', 'config/config'], (_, config) => {
    return {
        save: save,
        load: load,
        clear: clear
    };

    function save(model) {
        window.localStorage.setItem(config.localStoragePrefix, JSON.stringify({}));
        for (var prop in model) {
            window.localStorage.setItem(config.localStoragePrefix + '.' + prop, JSON.stringify(model[prop]));
        }
    }

    function load(model) {
        if (window.localStorage.getItem(config.localStoragePrefix)) {
            model.accounts = JSON.parse(window.localStorage.getItem(config.localStoragePrefix + '.accounts'));
            model.transactions = JSON.parse(window.localStorage.getItem(config.localStoragePrefix + '.transactions'));
            model.categories = JSON.parse(window.localStorage.getItem(config.localStoragePrefix + '.categories'));
        } else {
            model = {
                accounts: [],
                transactions: [],
                categories: []
            };
        }
    }

    function clear() {
        window.localStorage.removeItem(config.localStoragePrefix);
        window.localStorage.removeItem(config.localStoragePrefix + '.accounts');
        window.localStorage.removeItem(config.localStoragePrefix + '.transactions');
        window.localStorage.removeItem(config.localStoragePrefix + '.categories');
    }
});