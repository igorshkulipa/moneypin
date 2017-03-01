define(['knockout', 'services/mockService', 'model/model', 'services/saveLoadService', 'types/Category'], (ko, mockService, model, saveLoadService, Category) => {

    var _model = {};
    _model.categories = ko.observableArray(model.categories);
    _model.currencies = ko.observableArray(model.currencies);

    var viewModel = {
        title: ko.observable('Category Module'),
        strings: {
            title: ko.observable('Categories and Currencies'),
            description: ko.observable('Categories and Currencies Description')
        },
        methods: {
            save: () => {
                saveLoadService.save(model);
            },
            newCategory: () => {
                var category = new Category();
                _model.categories.push(category);
                _model.categories.valueHasMutated();
            }
        },
        categories: _model.categories,
        currencies: _model.currencies,
        selectedView: ko.observable('viewCategory'),
        selectedCategory: ko.observable(),
        resetSelectedCategory: () => {
            viewModel.selectedCategory({});
            viewModel.methods.save();
        },
        inputClick: ($data, $event) => {
            $event.stopPropagation();
            return false;
        },

    };

    viewModel.templateToUse = function ($data) {
        return $data === viewModel.selectedCategory() ? 'editCategory' : 'viewCategory';
    }.bind(viewModel);


    return viewModel;
});