define(['knockout'], (ko) => {
    return (color) => {
        var bgcsss = ['bg-danger', 'bg-info', 'bg-primary', 'bg-success', 'bg-warning'];
        var textcsss = ['text-danger', 'text-info', 'text-primary', 'text-success', 'text-warning'];
        var colors = ['red', 'blue', 'turquoise', 'green', 'yellow'];
        var name = isNaN(color) ? 'red' : (color < colors.length ? colors[color] : 'red');
        var bgcss = isNaN(color) ? 'bg-danger' : (color < bgcsss.length ? bgcsss[color] : 'bg-danger');
        var textcss = isNaN(color) ? 'text-danger' : (color < textcsss.length ? textcsss[color] : 'text-danger');

        for (var i = 0; i < colors.length; i++) {
            if (colors[i] === color || bgcsss[i] === color || textcsss[i] === color) {
                name = colors[i];
                bgcss = bgcsss[i];
                textcss = textcsss[i];
            }
        }
        return {
            name: ko.observable(name),
            bgcss: ko.observable(bgcss),
            textcss: ko.observable(textcss)
        };
    }
});