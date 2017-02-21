define(['knockout', 'jquery', 'jqeasypiechart', 'storage/dataStorage', 'services/mockService'], (ko, $, $chart, dataStorage, mockService) => {

    var model = {
        strings: {
            title: ko.observable('Accounts'),
            description: ko.observable('Accounts and general information')
        },
        accounts: mockService.generateRandomAccounts(15),//dataStorage.getAccounts(),
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
            isTypeUndefined: (account) => { return !account.type() || account.type().length == 0; },
        }
    };
    model.transactions = mockService.generateRandomTransactions(12, model.accounts);

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
                return "rgb(" + Math.round(255 * (1 - $percent)) + "," + Math.round(255 * $percent) + ",80)";
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