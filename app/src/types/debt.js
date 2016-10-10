define(['lodash'], (_) => {
    return (id, accountId, date, personId, description, returnDate) => {
        var object = {
            id: ko.observable(id),
            account: ko.observable(accountId),
            date: ko.observable(date),
            person: ko.observable(personId),
            description: ko.observable(description),
            returnDate: ko.observable(returnDate)
        };
        return object;
    }
});