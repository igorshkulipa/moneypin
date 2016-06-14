define(['knockout', 'types/accountType'], (ko, accountType) => {
    return (id, type, name, goal, sum) => {
        var accType = accountType(type);
        var object = {
            id: ko.observable(id),
            type: ko.observable(accType),
            name: ko.observable(name),
            sum: ko.observable(sum),
            goal: ko.observable(goal),
            percent: ko.pureComputed(() => {
                return parseFloat((object.sum() / object.goal()) * 100).toFixed(2);
            })
        };
        return object;
    }
});