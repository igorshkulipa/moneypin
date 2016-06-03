define(['knockout', 'jquery', 'load/config'], (ko, $, config) => {
    return {
        loadLayout: loadLayout
    };

    function loadLayout() {
        for (var layout in config.layout) {
            _loadTemplate(config.layout[layout].element, config.layout[layout].path)
        }
    }

    function _loadTemplate(elem, path) {
        $.get(path)
        .done((template) => {
            $('#' + elem).append(template);
        });
    }
});