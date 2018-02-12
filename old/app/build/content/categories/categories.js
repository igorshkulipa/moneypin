'use strict';

define(['knockout', 'lodash', 'services/mockService', 'model/model', 'services/saveLoadService', 'types/category', 'types/currency'], function (ko, _, mockService, model, saveLoadService, Category, Currency) {

    var _model = {};
    makeCategoriesObservable(_model);

    var viewModel = {
        title: ko.observable('Category Module'),
        strings: {
            title: ko.observable('Categories'),
            description: ko.observable('Categories Description')
        },
        methods: {
            save: function save() {
                saveLoadService.save(model);
            },
            newExpenseCategory: function newExpenseCategory($data, $event) {
                var parentId = $data && $data.id ? $data.id : null;
                createNewCategory(_model.expenseCategories, 'New Expense Category', parentId);
                _model.expenseCategories.valueHasMutated();
            },
            newIncomeCategory: function newIncomeCategory($data, $event) {
                var parentId = $data && $data.id ? $data.id : null;
                createNewCategory(_model.incomeCategories, 'New Income Category', parentId);
                _model.incomeCategories.valueHasMutated();
            },
            newBudgetExpenseCategory: function newBudgetExpenseCategory($data, $event) {
                var parentId = $data && $data.id ? $data.id : null;
                createNewCategory(_model.budgetExpenseCategories, 'New Budget Expense Category', parentId);
                _model.budgetExpenseCategories.valueHasMutated();
            },
            newBudgetIncomeCategory: function newBudgetIncomeCategory($data, $event) {
                var parentId = $data && $data.id ? $data.id : null;
                createNewCategory(_model.budgetIncomeCategories, 'New Budget Income Category', parentId);
                _model.budgetIncomeCategories.valueHasMutated();
            }

        },
        expenseCategories: _model.expenseCategories,
        incomeCategories: _model.incomeCategories,
        budgetExpenseCategories: _model.budgetExpenseCategories,
        budgetIncomeCategories: _model.budgetIncomeCategories,
        selectedView: ko.observable('viewCategory'),
        selectedCategory: ko.observable(),
        resetSelectedCategory: function resetSelectedCategory() {
            viewModel.selectedCategory({});
            viewModel.methods.save();
        },
        inputClick: function inputClick($data, $event) {
            $event.stopPropagation();
            return false;
        }

    };

    function createNewCategory(observableArray, name, parentId) {
        var category = new Category(null, name, parentId);
        if (parentId) {
            _.forEach(observableArray(), function (cat) {
                if (cat.id == parentId) {
                    cat.subcategoriesObservable.push(category);
                }
            });
        } else {
            category.subcategoriesObservable = ko.observableArray(category.subcategories);
            observableArray.push(category);
        }
    }

    function makeCategoriesObservable(_model) {
        var expenseObservable = model.categories.transactions.expense;
        _.forEach(expenseObservable, function (cat) {
            cat.subcategoriesObservable = ko.observableArray(cat.subcategories);
        });
        var incomeObservable = model.categories.transactions.income;
        _.forEach(incomeObservable, function (cat) {
            cat.subcategoriesObservable = ko.observableArray(cat.subcategories);
        });
        var budgetExpenseObservable = model.categories.budget.expense;
        _.forEach(budgetExpenseObservable, function (cat) {
            cat.subcategoriesObservable = ko.observableArray(cat.subcategories);
        });
        var budgetIncomeObservable = model.categories.budget.income;
        _.forEach(budgetIncomeObservable, function (cat) {
            cat.subcategoriesObservable = ko.observableArray(cat.subcategories);
        });
        _model.expenseCategories = ko.observableArray(expenseObservable);
        _model.incomeCategories = ko.observableArray(incomeObservable);
        _model.budgetExpenseCategories = ko.observableArray(budgetExpenseObservable);
        _model.budgetIncomeCategories = ko.observableArray(budgetIncomeObservable);
    }

    viewModel.templateToUse = function ($data) {
        return $data === viewModel.selectedCategory() ? 'editCategory' : 'viewCategory';
    }.bind(viewModel);

    return viewModel;
});
