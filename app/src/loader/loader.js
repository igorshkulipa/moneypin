define(['knockout', 'jquery', 'config/config'], (ko, $, config) => {
    //var elem;
    //var template;
    var moduleCache = {};

    return {
        loadModule: loadModule,
        loadLayout: loadLayout
    };

    //Load Module
    function loadModule(module, position) {
        moduleCache[module] = moduleCache[module] || {};
        calcPosition(module, position);
        loadViewModel(module, position);
    }

    function calcPosition(module, position) {
        position = position || config.content.main.element;
        if (moduleCache[module]) {
            moduleCache[module].position = position;
            moduleCache[module].element = $('#' + position);
        }
    }

    function loadViewModel(module, position) {
        require([loadModuleTemplate(module, position)], (vm) => {
            moduleCache[module].viewModel = vm;
            if (moduleCache[module].element[0]) ko.cleanNode(moduleCache[module].element[0]);
            while (!moduleCache[module].template) { }
            moduleCache[module].element.html(moduleCache[module].template);
            ko.applyBindings(vm, moduleCache[module].element.get(0));
        });
    }

    function loadModuleTemplate(module, position) {
        $.get(config.modules[module].html)
            .then((template) => {
                moduleCache[module].template = template;
            });
        return config.modules[module].js;
    }

    // Load Layout
    function loadLayout() {
        var layoutPromises = [];
        for (var layout in config.layout) {
            layoutPromises.push(loadTemplate(config.layout[layout].element, config.layout[layout].path));
        }
        return $.when.apply(null, layoutPromises);
    }

    function loadTemplate(elem, path) {
        $.get(path)
            .then((template) => {
                $('#' + elem).append(template);
            });
    }
});