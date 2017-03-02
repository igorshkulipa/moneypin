define(['lodash', 'types/account', 'types/transaction', 'types/category', 'helpers/guid', 'helpers/utils'], (_, Account, Transaction, Category, guid, utils) => {
    return {
        generateRandomAccounts: generateRandomAccounts,
        generateRandomTransactions: generateRandomTransactions,
        generateRandomCategories: generateRandomCategories
    };

    function generateRandomAccounts(count) {
        var result = [];

        for (var i = 0; i < count; i++) {
            var id = guid();
            var type = Math.round(Math.random() * 5);
            var name = 'Account Name ' + Math.round(Math.random() * 100).toString() + ((Math.round(Math.random() * 100) > 50) ? ' Account Additional Name' : '');
            var goal = Math.round(Math.random() * 2000000);
            var sum = Math.round(Math.random() * 1000000);
            var color = Math.round(Math.random() * 5);
            var element = new Account(id, type, name, goal, sum, color);
            result.push(element);
        };
        return result;
    }

    function generateRandomTransactions(count, accounts) {
        accounts = accounts || [];
        var result = [];

        for (var i = 0; i < count; i++) {
            var id = guid();
            var date = (new Date()) - Math.round(Math.random() * 4 * 24 * 60 * 60 * 1000);
            var amount = Math.round(Math.random() * 10000);
            var category = 'Category ' + Math.round(Math.random() * 100).toString();
            var account = accounts[Math.round(Math.random() * (accounts.length - 1))].id;
            var description = 'Description ' + Math.round(Math.random() * 100).toString() + ((Math.round(Math.random() * 100) > 50) ? ' Description Additional Description' : '');
            var operation = Math.round(Math.random());
            var element = new Transaction(id, date, amount, category, account, description, operation, accounts);
            result.push(element);
        };
        result = result.sort((a, b) => {
            return a.date > b.date;
        });
        return result;
    }

    function generateRandomCategories(count) {
        var result = [];

        for (var i = 0; i < count; i++) {
            var id = guid();
            var name = 'Category Name ' + Math.round(Math.random() * 100).toString() + ((Math.round(Math.random() * 100) > 50) ? ' Category Additional Name' : '');
            var element = new Category(id, name, null);
            result.push(element);
        };
        return result;
    }
});