define(['knockout'], (ko) => {
    return {
        title: ko.observable('Action'),
        actionClick: () => {
            alert('click');
        }
    };
});