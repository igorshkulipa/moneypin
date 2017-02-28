define(['knockout', 'services/mockService', 'model/model', 'services/saveLoadService'], (ko, mockService, model, saveLoadService) => {

    var _model = {};
    _model.accounts = ko.observableArray(model.accounts);
    _model.transactions = ko.observableArray(model.transactions);

    var viewModel = {
        title: ko.observable('Income and Expenses'),
        strings: {
            title: ko.observable('Income and Expenses'),
            description: ko.observable('Income and Expenses Description')
        },
        methods: {
            save: () => {
                saveLoadService.save(model);
            },
        },
        accounts: _model.accounts,
        transactions: _model.transactions,
        selectedView: ko.observable('viewTransaction'),
        selectedTransaction: ko.observable(),
        resetSelectedTransaction: () => {
            viewModel.selectedTransaction({});
            viewModel.methods.save();
        },
        inputClick: ($data, $event) => {
            $event.stopPropagation();
            return false;
        },
    };

    viewModel.templateToUse = function ($data) {
        return $data === viewModel.selectedTransaction() ? 'editTransaction' : 'viewTransaction';
    }.bind(viewModel);


    return viewModel;
});