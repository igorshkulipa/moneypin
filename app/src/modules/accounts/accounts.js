define(['knockout', 'jquery', 'storage/dataStorage', 'services/mockService', 'model/model', 'helpers/utils', 'types/account', 'services/saveLoadService'],
    (ko, $, dataStorage, mockService, model, utils, Account, saveLoadService) => {

        var _model = {};
        _model.accounts = ko.observableArray(model.accounts);

        var viewModel = {
            strings: {
                title: ko.observable('Accounts'),
                description: ko.observable('Accounts and general information')
            },
            methods: {
                isEven: () => {
                    return true;
                },
                isBank: (account) => { return account.type == 'bank'; },
                isCash: (account) => { return account.type == 'cash'; },
                isVisa: (account) => { return account.type == 'visa'; },
                isMastercard: (account) => { return account.type == 'mastercard'; },
                isPaypal: (account) => { return account.type == 'paypal'; },
                isTypeUndefined: (account) => { return !account.type || account.type.length == 0; },
                newAccount: () => {
                    var account = new Account();
                    _model.accounts.push(account);
                    _model.accounts.valueHasMutated();
                },
                save: () => {
                    saveLoadService.save(model);
                },
            },
            accounts: _model.accounts,
            selectedView: ko.observable('viewAccount'),
            selectedAccount: ko.observable(),
            resetSelectedAccount: () => {
                viewModel.selectedAccount({});
                viewModel.methods.save();
            },
            inputClick: ($data, $event) => {
                $event.stopPropagation();
                return false;
            },
        };

        viewModel.templateToUse = function ($data) {
            return $data === viewModel.selectedAccount() ? 'editAccount' : 'viewAccount';
        }.bind(viewModel);

        return viewModel;

        function isEven(number) {
            return !!(parseInt(number) % 2);
        }
    });