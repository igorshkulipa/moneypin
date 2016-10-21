define(['knockout', 'jquery', 'jqeasypiechart', 'storage/dataStorage', 'services/mockService'], (ko, $, $chart, dataStorage, mockService) => {

    var model = {
        strings: {
            title: ko.observable('Main'),
            description: ko.observable('Accounts and general information')
        },
        accounts: dataStorage.getAccounts(),
        methods: {
            isEven: () => {
                return true;
            },
            afterload: init,
            isBank: (account) => { return account.type() == 'bank'; },
            isCash: (account) => { return account.type() == 'cash'; },
            isVisa: (account) => { return account.type() == 'visa'; },
            isMastercard: (account) => { return account.type() == 'mastercard'; },
            isPaypal: (account) => { return account.type() == 'paypal'; },
            isTypeUndefined: (account) => { return !account.type(); },
        }
    };
    model.transactions = [];//mockService.generateRandomTransactions(12, model.accounts);

    return model;

    function init() {
        $('.easypiechart').each(function () {
            var $this = $(this)
              , $data = $this.data()
              , $step = $this.find('.step')
              , $target_value = parseInt($($data.target).text())
              , $value = 0;
            $data.barColor || ($data.barColor = function ($percent) {
                $percent /= 100;
                return "rgb(" + Math.round(200 * $percent) + ", 200, " + Math.round(200 * (1 - $percent)) + ")";
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