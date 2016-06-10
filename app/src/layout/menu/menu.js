define(['knockout', 'modals/action/action'], (ko, action) => {
    return {
        title: ko.observable('Action'),
        actionClick: () => {
            action.show();
        }
    };
});