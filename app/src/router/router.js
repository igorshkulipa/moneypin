define(['signals', 'hasher', 'crossroads', 'jquery'], (signals, hasher, crossroads, $) => {
    var router = {
        init: init,
        add: add,
        redirect: redirect
    };

    return router;

    var currentHash = '';

    function add(path, params) {
        crossroads.addRoute('/' + path);
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
        hasher.setHash(module);
    }

    function _parseHash(newHash) {
        crossroads.parse(newHash);
        $('#menu-item-' + currentHash).removeClass('nav-active');
        $('#menu-item-' + currentHash + '-icon').removeClass('nav-active');
        $('#menu-item-' + currentHash + '-text').removeClass('nav-active');

        $('#menu-item-' + newHash).addClass('nav-active');
        $('#menu-item-' + newHash + '-icon').addClass('nav-active');
        $('#menu-item-' + newHash + '-text').addClass('nav-active');
        currentHash = newHash;
    }
});