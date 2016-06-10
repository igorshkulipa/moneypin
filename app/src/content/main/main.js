define(['knockout', 'jquery', 'jqeasypiechart'], (ko, $, $chart) => {

    return {
        strings: {
            title: ko.observable('Main'),
            description: ko.observable('Accounts and general information')
        },
        accounts: [
            {
                type: 'bank',
                name: 'Account 1',
                sum: 44555,
                percent: 75,
            },
            {
                type: 'cash',
                name: 'Account 2 Cash',
                sum: 55566,
                percent: 50,
            },
            {
                type: 'visa',
                name: 'Account 3 Very Long Account Name With Spaces to Definetely Fit Some more than One Line',
                sum: 33444,
                percent: 100,
            },
            {
                type: 'mastercard',
                name: 'Account_Very_Long_Account_Name_Without_Any_Space_Or_Other_Separator',
                sum: 55444,
                percent: 0,
            },
            {
                type: 'paypal',
                name: 'Account 5',
                sum: 556699,
                percent: 25,
            },
            {
                type: 'visa',
                name: 'Account 6',
                sum: 33222,
                percent: 10,
            },
        ],
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
        }
    };


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