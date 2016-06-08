define(['signals', 'hasher', 'crossroads'], (signals, hasher, crossroads) => {
    var router = {
        init: init,
        add: add,
        redirect: redirect
    };

    return router;

    function add(module, params) {
        crossroads.addRoute('/' + module);
        return router;
    }

    function init(routed, bypassed) {
        crossroads.routed.add(routed);
        crossroads.bypassed.add(bypassed);

        hasher.initialized.add(_parseHash);
        hasher.changed.add(_parseHash);
        hasher.init();

        return router;
    }

    function redirect(module) {
        crossroads.parse(module);
    }

    function _parseHash(newHash) {
        crossroads.parse(newHash);
    }
});