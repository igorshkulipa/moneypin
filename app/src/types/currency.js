define(['lodash', 'helpers/guid'], (_, guid) => {
    return (id, name, sign) => {
        var object = {
            id: id || guid(),
            name: name || '',
            sign: sign || ''
        };
        return object;
    }
});