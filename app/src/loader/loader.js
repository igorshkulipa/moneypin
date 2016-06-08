define(['knockout', 'jquery', 'config/config'], (ko, $, config) => {
    var moduleCache = {};

    return {
        loadModule: loadModule,
        loadLayout: loadLayout
    };

    function loadLayout() {
        for (var layout in config.layout) {
            loadModule(config.layout[layout]);
        }
    }

    function loadModule(module) {
        moduleCache[module.name] = moduleCache[module.name] || module;
        calcPosition(module);
        loadViewModel(module);
    }

    function calcPosition(module) {
        var position = module.position || config.config.main.position;
        if (moduleCache[module.name]) {
            moduleCache[module.name].position = position;
            moduleCache[module.name].element = $('#' + position);
        }
    }

    function loadViewModel(module) {
        require([loadModuleTemplate(module)], (vm) => {
            moduleCache[module.name].viewModel = vm;
            if (moduleCache[module.name].element[0]) ko.cleanNode(moduleCache[module.name].element[0]);
            while (!moduleCache[module.name].template) { }
            moduleCache[module.name].element.html(moduleCache[module.name].template);
            ko.applyBindings(vm, moduleCache[module.name].element.get(0));
        });
    }

    function loadModuleTemplate(module) {
        $.get(moduleCache[module.name].html)
            .then((template) => {
                moduleCache[module.name].template = template;
            });
        return moduleCache[module.name].js;
    }
});