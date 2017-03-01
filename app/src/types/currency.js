define(['lodash', 'helpers/guid'], (_, guid) => {
    return (id, name, sign) => {
        var object = {
            id: id || guid(),
            name: name || 'US Dollar',
            sign: sign || 'usd'
        };
        return object;
    }
});