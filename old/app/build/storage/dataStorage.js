'use strict';

define(['lodash', 'knockout', 'types/account', 'helpers/utils'], function (_, ko, Account, utils) {
    var data = {
        accounts: ko.observableArray([])
    };

    return {
        init: init,
        newAccount: newAccount,
        updateAccount: updateAccount,
        removeAccount: removeAccount,
        getAccounts: getAccounts,
        getPlainAccounts: getPlainAccounts,
        loadAccounts: loadAccounts
    };

    function init() {
        data = {
            accounts: ko.observableArray([])
        };
    }

    function newAccount(account) {
        account = account || new Account();
        data.accounts().push(account);
    }

    function updateAccount(account) {
        var index = data.accounts().findIndex(function (elem, index, array) {
            if (elem.id == account.id) return true;else return false;
        });
        if (index >= 0) data.accounts()[index] = account;
    }

    function removeAccount(account) {
        var index = data.accounts().findIndex(function (elem, index, array) {
            if (elem.id == account.id) return true;else return false;
        });
        if (index >= 0) data.accounts().splice(index, 1);
    }

    function getAccounts() {
        return data.accounts;
    }

    function getPlainAccounts() {
        var result = [];
        _.forEach(data.accounts(), function (account) {
            result.push(account.toPlainObject());
        });
        return result;
    }

    function loadAccounts(accounts) {
        data.accounts = utils.toKoArray(accounts);
    }
});
