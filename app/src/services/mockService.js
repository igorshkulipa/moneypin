define(['lodash', 'types/account', 'helpers/guid'], (_, Account, guid) => {
    return {
        generateRandomAccounts: generateRandomAccounts
    };

    function generateRandomAccounts(count) {
        var result = [];

        for (var i = 0; i < count; i++) {
            var id = guid();
            var type = Math.round(Math.random() * 5);
            var name = 'Account Name ' + Math.round(Math.random() * 100).toString() + ((Math.round(Math.random() * 100) > 50) ? ' Account Additional Name' : '');
            var goal = Math.round(Math.random() * 1000000);
            var sum = Math.round(Math.random() * 1000000);
            var element = new Account(id, type, name, goal, sum);
            result.push(element);
        };
        return result;
    }
});