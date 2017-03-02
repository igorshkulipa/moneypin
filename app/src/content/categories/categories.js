define(['knockout', 'lodash', 'services/mockService', 'model/model', 'services/saveLoadService', 'types/category', 'types/currency'], (ko, _, mockService, model, saveLoadService, Category, Currency) => {

    var _model = {};
    _model.expenseCategories = ko.observableArray(model.categories.expense);
    _model.incomeCategories = ko.observableArray(model.categories.income);
    _model.budgetCategories = ko.observableArray(model.categories.budget);
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
            newExpenseCategory: ($data, $event) => {
                var parentId = $data && $data.id ? $data.id : null;
                var category = new Category(null, 'New Expense Category', parentId);
                if (parentId) {
                    _.forEach(model.categories.expense, (cat) => {
                        if (cat.id == parentId) {
                            cat.subcategories.push(category);
                        }
                    });
                } else {
                    model.categories.expense.push(category);
                }
                _model.expenseCategories.valueHasMutated();
            },
            newIncomeCategory: ($data, $event) => {
                var parentId = $data && $data.id ? data.id() : null;
                var category = new Category();
                _model.incomeCategories.push(category);
                _model.incomeCategories.valueHasMutated();
            },
            newBudgetCategory: ($data, $event) => {
                var parentId = $data && $data.id ? data.id() : null;
                var category = new Category();
                _model.budgetCategories.push(category);
                _model.budgetCategories.valueHasMutated();
            },
            newCurrency: ($data, $event) => {
                var currency = new Currency();
                _model.currencies.push(currency);
                _model.currencies.valueHasMutated();
            }

        },
        expenseCategories: _model.expenseCategories,
        incomeCategories: _model.incomeCategories,
        budgetCategories: _model.budgetCategories,
        currencies: _model.currencies,
        selectedExpenseView: ko.observable('viewExpenseCategory'),
        selectedIncomeView: ko.observable('viewIncomeCategory'),
        selectedBudgetView: ko.observable('viewBudgetCategory'),
        selectedCurrencyView: ko.observable('viewCurrency'),
        selectedExpenseCategory: ko.observable(),
        selectedIncomeCategory: ko.observable(),
        selectedBudgetCategory: ko.observable(),
        selectedCurrency: ko.observable(),
        resetSelectedCategory: () => {
            viewModel.selectedExpenseCategory({});
            viewModel.selectedIncomeCategory({});
            viewModel.selectedBudgetCategory({});
            viewModel.selectedCurrency({});
            viewModel.methods.save();
        },
        inputClick: ($data, $event) => {
            $event.stopPropagation();
            return false;
        },

    };

    viewModel.expenseTemplateToUse = function ($data) {
        return $data === viewModel.selectedExpenseCategory() ? 'editExpenseCategory' : 'viewExpenseCategory';
    }.bind(viewModel);

    viewModel.incomeTemplateToUse = function ($data) {
        return $data === viewModel.selectedIncomeCategory() ? 'editIncomeCategory' : 'viewIncomeCategory';
    }.bind(viewModel);

    viewModel.budgetTemplateToUse = function ($data) {
        return $data === viewModel.selectedBudgetCategory() ? 'editBudgetCategory' : 'viewBudgetCategory';
    }.bind(viewModel);

    viewModel.currencyTemplateToUse = function ($data) {
        return $data === viewModel.selectedCurrency() ? 'editCurrency' : 'viewCurrency';
    }.bind(viewModel);

    return viewModel;
});