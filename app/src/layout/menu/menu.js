define(['knockout', 'modals/action/action'], (ko, action) => {
    return {
        actionMenuItemText: ko.observable('Action'),
        transferMenuItemText: ko.observable('Transfer'),
        actionClick: ($data, $event) => {
            var modal = document.getElementById('actionModal');
            var close = document.getElementById('closeActionModal');

            modal.style.display = "block";

            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }

            close.onclick = function () {
                modal.style.display = "none";
            }

            $event.stopPropagation();
            $event.preventDefault();
            return false;
        },
        transferClick: ($data, $event) => {
            var modal = document.getElementById('transferModal');
            var close = document.getElementById('closeTransferModal');

            modal.style.display = "block";

            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }

            close.onclick = function () {
                modal.style.display = "none";
            }

            $event.stopPropagation();
            $event.preventDefault();
            return false;
        }
    };
});