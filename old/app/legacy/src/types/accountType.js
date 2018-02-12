define(['lodash'], (_) => {
    return (type) => {
        var types = ['bank', 'cash', 'visa', 'mastercard', 'paypal'];
        if (!Number.isNaN(type)) {
            var typeNum = Number.parseInt(type);
            if (typeNum >= 0 && typeNum < types.length) {
                return types[typeNum];
            }
        } else {
            type = type || 'bank';
            for (var i = 0; i < types.length; i++) {
                if (types[i] == type) return type;
            }
        }
        return types[0];
    }
});