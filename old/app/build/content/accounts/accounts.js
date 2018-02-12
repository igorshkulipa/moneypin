'use strict';

define(['knockout', 'jquery', 'storage/dataStorage', 'services/mockService', 'model/model', 'helpers/utils', 'types/account', 'services/saveLoadService'], function (ko, $, dataStorage, mockService, model, utils, Account, saveLoadService) {

    var _model = {};
    _model.accounts = ko.observableArray(model.accounts);

    var viewModel = {
        strings: {
            title: ko.observable('Accounts'),
            description: ko.observable('Accounts and general information')
        },
        methods: {
            isEven: function isEven() {
                return true;
            },
            isBank: function isBank(account) {
                return account.type == 'bank';
            },
            isCash: function isCash(account) {
                return account.type == 'cash';
            },
            isVisa: function isVisa(account) {
                return account.type == 'visa';
            },
            isMastercard: function isMastercard(account) {
                return account.type == 'mastercard';
            },
            isPaypal: function isPaypal(account) {
                return account.type == 'paypal';
            },
            isTypeUndefined: function isTypeUndefined(account) {
                return !account.type || account.type.length == 0;
            },
            newAccount: function newAccount() {
                var account = new Account();
                _model.accounts.push(account);
                _model.accounts.valueHasMutated();
            },
            save: function save() {
                saveLoadService.save(model);
            }
        },
        accounts: _model.accounts,
        selectedView: ko.observable('viewAccount'),
        selectedAccount: ko.observable(),
        resetSelectedAccount: function resetSelectedAccount() {
            viewModel.selectedAccount({});
            viewModel.methods.save();
        },
        inputClick: function inputClick($data, $event) {
            $event.stopPropagation();
            return false;
        }
    };

    viewModel.templateToUse = function ($data) {
        return $data === viewModel.selectedAccount() ? 'editAccount' : 'viewAccount';
    }.bind(viewModel);

    return viewModel;

    function isEven(number) {
        return !!(parseInt(number) % 2);
    }
});
