define(['knockout', 'modals/action/action'], (ko, action) => {
    return {
        actionMenuItemText: ko.observable('Action'),
        transferMenuItemText: ko.observable('Transfer'),
        actionClick: () => {
            action.show();
        },
        transferClick: () => {
            action.show();
}    };
});