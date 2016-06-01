//((app) => {
//    app.LayoutMenu =
//      ng.core.Component({
//          selector: 'layout-menu',
//          templateUrl: 'src/layout/menu/menu.html',
//          directives: [ng.router.ROUTER_DIRECTIVES],
//          providers: [ng.router.ROUTER_PROVIDERS, ng.http.HTTP_PROVIDERS],
//      })
//      .Class({
//          constructor: [ng.router.Router, (router) => {
//              //app.router = router;
//          }],
//          hrefClick: ($event, state) => {
//              $event.preventDefault();
//              app.router.navigateByUrl(state)
//                  .then((res) => {
//                      console.log('res', res);
//                  })
//              .catch((ex) => {
//                  console.log('ex', ex);
//              });
//          }
//      });
//})(window.app || (window.app = {}));
"use strict";
