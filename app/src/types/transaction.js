define(['knockout'], (ko) => {
    return (id, date, amount, category, account, user, description, operation, accounts) => {
        operation = operation || false;
        var accountInstance = {};
        for (var i = 0; i < accounts.length; i++) {
            if (accounts[i].id() == account) accountInstance = accounts[i];
        }

        var object = {
            id: ko.observable(id),
            date: ko.observable(date),
            localeDate: ko.pureComputed(() => {
                var d = new Date(object.date());
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
            }),
            currency: ko.observable('$'),
            amount: ko.observable(amount),
            category: ko.observable(category),
            account: ko.observable(account),
            user: ko.observable(user),
            description: ko.observable(description),
            operation: ko.observable(operation),
            sumBefore: ko.pureComputed(() => {
                return parseFloat(amount).toFixed(2); //ToDo. Calculate real account sum
            }),
            sumAfter: ko.pureComputed(() => {
                return parseFloat(amount).toFixed(2); //ToDo. Calculate real account sum
            }),
            color: accountInstance.color,
            headerColor: {
                bgcss: ko.pureComputed(() => {
                    return 'panel-heading lt no-border ' + object.color().bgcss();
                })
            }
        };
        return object;
    }
});