define(['knockout', 'jquery', 'jqeasypiechart', 'services/saveLoadService', 'storage/dataStorage', 'router/router', 'types/account'], (ko, $, $chart, saveLoadService, dataStorage, router, Account) => {

    var model = {
        strings: {
            title: ko.observable('Accounts'),
            description: ko.observable('Edit Accounts'),
            newAccountLabel: ko.observable('Add New'),
            saveAccountLabel: ko.observable('Save')
        },
        accounts: dataStorage.getAccounts(),
        methods: {
            newAccount: () => {
                var newAccount = new Account();
                dataStorage.newAccount(newAccount);
                model.accounts.valueHasMutated();
            },
            saveAccount: () => {
                saveLoadService.save();
            },
            isEven: () => {
                return true;
            },
            afterload: () => { },
            isBank: (account) => { return account.type() == 'bank'; },
            isCash: (account) => { return account.type() == 'cash'; },
            isVisa: (account) => { return account.type() == 'visa'; },
            isMastercard: (account) => { return account.type() == 'mastercard'; },
            isPaypal: (account) => { return account.type() == 'paypal'; },
            isTypeUndefined: (account) => { return !account.type(); },
        }
    };

    return model;
});