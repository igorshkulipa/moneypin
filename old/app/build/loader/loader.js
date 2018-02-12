'use strict';

define(['knockout', 'jquery', 'config/config', 'services/saveLoadService', 'model/model'], function (ko, $, config, saveLoadService, model) {
    var moduleCache = {};

    return {
        loadModule: loadModule,
        loadLayout: loadLayout,
        loadModals: loadModals,
        loadData: loadData
    };

    function loadModals() {
        for (var modal in config.modals) {
            loadModule(config.modals[modal]);
        }
    }

    function loadLayout() {
        for (var layout in config.layout) {
            loadModule(config.layout[layout]);
        }
    }
    function loadModule(module, rootVM) {
        moduleCache[module.name] = moduleCache[module.name] || module;
        calcPosition(module);
        return loadViewModel(module, rootVM);
    }

    function loadData() {
        //saveLoadService.clear();
        saveLoadService.load(model);
    }

    function calcPosition(module) {
        var position = module.position || config.config.main.position;
        if (moduleCache[module.name]) {
            moduleCache[module.name].position = position;
            moduleCache[module.name].element = $('#' + position);
        }
    }

    function loadViewModel(module, rootVM) {
        return loadModuleTemplate(module).then(function (jsPath) {
            require([jsPath], function (vm) {
                moduleCache[module.name].viewModel = vm;
                updateModule(moduleCache[module.name]);
                if (moduleCache[module.name].viewModel.methods && moduleCache[module.name].viewModel.methods.afterload) moduleCache[module.name].viewModel.methods.afterload();
                if (vm.strings) {
                    for (var mod in moduleCache) {
                        if (moduleCache[mod].global) {
                            for (var prop in vm.strings) {
                                moduleCache[mod].viewModel[prop] = vm.strings[prop];
                            }
                            updateModule(moduleCache[mod]);
                        }
                    }
                }
            });
        });
    }

    function updateModule(module) {
        if (module.element.get(0)) ko.cleanNode(module.element.get(0));
        module.element.html(module.template);
        ko.applyBindings(module.viewModel, module.element.get(0));
    }

    function loadModuleTemplate(module) {
        return $.get(moduleCache[module.name].html).then(function (template) {
            moduleCache[module.name].template = template;
            return moduleCache[module.name].js;
        });
    }
});
