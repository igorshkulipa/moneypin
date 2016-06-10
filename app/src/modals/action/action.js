define(['knockout', 'jquery', 'remodal'], (ko, $, remodal) => {
    return {
        title: ko.observable('Action'),
        show: () => {
            var modal = $('[data-remodal-id=modalAction]').remodal();
            modal.open();
        }
    };
});