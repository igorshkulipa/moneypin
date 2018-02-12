define(['helpers/guid'], (guid) => {
    return (id, date, amount, category, account, description, operation, accounts) => {
        operation = operation || false;
        var accountInstance = {};
        for (var i = 0; i < accounts.length; i++) {
            if (accounts[i].id == account) accountInstance = accounts[i];
        }

        var object = {
            id: id || guid(),
            date: date || Date.now(),
            currency: '$',
            amount: amount,
            category: category,
            account: accountInstance,
            description: description,
            operation: operation
        };

        Object.defineProperty(object, 'sumBefore', {
            configurable: false,
            enumerable: true,
            get: () => {
                return parseFloat(amount).toFixed(2); //ToDo. Calculate real account sum
            }
        });

        Object.defineProperty(object, 'sumAfter', {
            configurable: false,
            enumerable: true,
            get: () => {
                return parseFloat(amount).toFixed(2); //ToDo. Calculate real account sum
            }
        });

        Object.defineProperty(object, 'localeDate', {
            configurable: false,
            enumerable: true,
            get: () => {
                var d = new Date(object.date);
                var now = new Date();
                var yesterday = new Date(now - 24 * 60 * 60 * 1000);
                if (d.getDay() == now.getDay() &&
                    d.getMonth() == now.getMonth() &&
                    d.getYear() == now.getYear()) {
                    return 'Today' + ',  ' + d.toLocaleTimeString()
                }

                if (d.getDay() == yesterday.getDay() &&
                    d.getMonth() == yesterday.getMonth() &&
                    d.getYear() == yesterday.getYear()) {
                    return 'Yesterday' + ',  ' + d.toLocaleTimeString()
                }

                return d.toLocaleDateString() + ',  ' + d.toLocaleTimeString();
            },
        });
        return object;
    }
});