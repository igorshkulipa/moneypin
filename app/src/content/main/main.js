define(['knockout', 'jquery', 'jqeasypiechart', 'storage/dataStorage', 'services/mockService', 'model/model', 'helpers/utils', 'types/account', 'services/saveLoadService'],
    (ko, $, $chart, dataStorage, mockService, model, utils, Account, saveLoadService) => {

        var _model = {};
        _model.accounts = ko.observableArray(model.accounts);
        var viewModel = {
            strings: {
                title: ko.observable('Accounts'),
                description: ko.observable('Accounts and general information')
            },
            //accounts: utils.toKoObject(model.accounts),
            methods: {
                isEven: () => {
                    return true;
                },
                afterload: init,
                isBank: (account) => { return account.type == 'bank'; },
                isCash: (account) => { return account.type == 'cash'; },
                isVisa: (account) => { return account.type == 'visa'; },
                isMastercard: (account) => { return account.type == 'mastercard'; },
                isPaypal: (account) => { return account.type == 'paypal'; },
                isTypeUndefined: (account) => { return !account.type || account.type.length == 0; },
                newAccount: () => {
                    var account = new Account();
                    account.templateToUse = function (item) {
                        return item === viewModel.selectedAccount() ? 'edit' : viewModel.selectedView();
                    }.bind(account);
                    _model.accounts.push(account);
                    _model.accounts.valueHasMutated();
                },
                save: () => {
                    saveLoadService.save(model);
                },
            },
            accounts: _model.accounts,
            selectedView: ko.observable("details"),
            selectedAccount: ko.observable()
        };

        for (var i = 0; i < viewModel.accounts.length; i++) {
            viewModel.accounts[i].templateToUse = function (item) {
                return item === viewModel.selectedAccount() ? 'edit' : viewModel.selectedView();
            }.bind(viewModel.accounts[i]);
        }

        viewModel.templateToUse = function (item) {
            return item === viewModel.selectedAccount() ? 'edit' : viewModel.selectedView();
        }.bind(viewModel);

        return viewModel;

        function init() {
            $('.easypiechart').each(function () {
                var $this = $(this)
                  , $data = $this.data()
                  , $step = $this.find('.step')
                  , $target_value = parseInt($($data.target).text())
                  , $value = 0;
                $data.barColor || ($data.barColor = function ($percent) {
                    $percent /= 100;
                    var red = 109;
                    var green = (110 + Math.round(14 * $percent));
                    var blue = 85;
                    return "rgb(" + red + "," + green + "," + blue + ")";
                }
                );
                $data.onStep = function (value) {
                    $value = value;
                    $step.text(parseInt(value));
                    $data.target && $($data.target).text(parseInt(value) + $target_value);
                }
                $data.onStop = function () {
                    $target_value = parseInt($($data.target).text());
                    $data.update && setTimeout(function () {
                        $this.data('easyPieChart').update(100 - $value);
                    }, $data.update);
                }
                jQuery(this).easyPieChart($data);
            });
        }

        function isEven(number) {
            return !!(parseInt(number) % 2);
        }
    });