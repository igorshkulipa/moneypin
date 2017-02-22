define(['types/accountType', 'helpers/guid'], (AccountType, guid) => {
    return (id, type, name, plannedValue, sum, color) => {
        var accType = AccountType(type);
        var object = {
            id: id || guid(),
            type: accType,
            name: name || '',
            sum: sum || 0,
            plannedValue: plannedValue || 0
        };

        Object.defineProperty(object, 'percent', {
            configurable: false,
            enumerable: true,
            get: () => {
                return object.plannedValue == 0 ? 100 : parseFloat((object.sum / object.plannedValue) * 100).toFixed(2);
            }
        });

        return object;
    }
});