define(['lodash'], (_) => {
    return {
        save: save
    };

    function save(model) {
        window.localStorage['sencoiney'] = model;
    }
});