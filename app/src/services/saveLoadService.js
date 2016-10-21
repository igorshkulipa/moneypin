define(['lodash', 'storage/dataStorage', 'helpers/utils'], (_, dataStorage, utils) => {
    return {
        save: save,
        load: load,
        clear: clear
    };

    function save() {
        window.localStorage.setItem('sencoiney', JSON.stringify({}));
        var accounts = dataStorage.getPlainAccounts();
        window.localStorage.setItem('sencoiney.accounts', JSON.stringify(utils.toPlainObject(accounts)));
    }

    function load() {
        if (window.localStorage.getItem('sencoiney')) {
            dataStorage.loadAccounts(JSON.parse(window.localStorage.getItem('sencoiney.accounts')));
        } else {
            dataStorage.init();
        }
    }

    function clear() {
        window.localStorage.removeItem('sencoiney');
        window.localStorage.removeItem('sencoiney.accounts');
    }
});