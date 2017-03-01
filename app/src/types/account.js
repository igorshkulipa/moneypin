define(['types/accountType', 'helpers/guid', 'types/currency'], (AccountType, guid, Currency) => {
    return (id, type, name, plannedValue, sum, color, edit) => {
        var accType = AccountType(type);
        var object = {
            id: id || guid(),
            type: accType,
            name: name || '',
            sum: sum || 0,
            plannedValue: plannedValue || 0,
            isEditing: edit === false || true,
            currency: new Currency()
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