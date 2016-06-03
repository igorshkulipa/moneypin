define(['knockout', 'jquery', 'config/config'], (ko, $, config) => {
    return {
        loadModule: loadModule,
        loadLayout: loadLayout
    };

    function loadModule(module, viewModel, position) {
        _loadViewModel(module, viewModel, position);
    }

    function loadLayout() {
        for (var layout in config.layout) {
            _loadTemplate(config.layout[layout].element, config.layout[layout].path)
        }
    }

    function _loadMainContent(module, position) {
        position = position || config.content.main.element;
        $.get(config.modules[module].html)
            .done((template) => {
                $('#' + position).append(template);
            });
        return config.modules[module].js;
    }

    function _loadViewModel(module, viewModel, position) {
        require([_loadMainContent(module, position)], (vm) => {
            viewModel.main = vm;
            ko.applyBindings(viewModel);
        });
    }

    function _loadTemplate(elem, path) {
        $.get(path)
            .done((template) => {
                $('#' + elem).append(template);
            });
    }
});