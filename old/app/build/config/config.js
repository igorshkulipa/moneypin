'use strict';

define([], function () {
    return {
        root: {
            position: 'main',
            element: {}
        },
        layout: {
            //title: {
            //    position: 'layout-title',
            //    name: 'title',
            //    menuText: 'title',
            //    html: '/layout/title/title.html',
            //    js: '/layout/title/title.js',
            //    global: true
            //},
            //top: {
            //    position: 'layout-top',
            //    name: 'top',
            //    menuText: 'top',
            //    html: '/layout/top/top.html',
            //    js: '/layout/top/top.js'
            //},
            //back: {
            //    position: 'layout-back',
            //    name: 'back',
            //    menuText: 'back',
            //    html: '/layout/back/back.html',
            //    js: '/layout/back/back.js'
            //},
            menu: {
                position: 'layout-menu',
                name: 'menu',
                menuText: 'menu',
                html: '/layout/menu/menu.html',
                js: '/layout/menu/menu.js'
            }
            //menuFooter: {
            //    position: 'layout-menu-footer',
            //    name: 'menuFooter',
            //    menuText: 'menuFooter',
            //    html: '/layout/menuFooter/menuFooter.html',
            //    js: '/layout/menuFooter/menuFooter.js'
            //}
        },
        config: {
            main: {
                position: 'content-main'
            },
            localStoragePrefix: 'z8q8f9Dm'
        },
        modals: {
            //action: {
            //    position: 'modal-action',
            //    name: 'action',
            //    html: 'modals/action/action.html',
            //    js: 'modals/action/action'
            //},
        },
        content: {
            accounts: {
                name: 'accounts',
                menuText: 'Accounts',
                html: 'content/accounts/accounts.html',
                js: 'content/accounts/accounts',
                path: 'tab-accounts',
                position: 'content-accounts',
                default: true
            },
            analysis: {
                name: 'analysis',
                menuText: 'Analysis',
                html: 'content/analysis/analysis.html',
                js: 'content/analysis/analysis',
                path: 'tab-analysis',
                position: 'content-analysis'
            },
            budget: {
                name: 'budget',
                menuText: 'Budget',
                html: 'content/budget/budget.html',
                js: 'content/budget/budget',
                path: 'tab-budget',
                position: 'content-budget'
            },
            calendar: {
                name: 'calendar',
                menuText: 'Payments Calendar',
                html: 'content/calendar/calendar.html',
                js: 'content/calendar/calendar',
                path: 'tab-calendar',
                position: 'content-calendar'
            },
            categories: {
                name: 'categories',
                menuText: 'Categories',
                html: 'content/categories/categories.html',
                js: 'content/categories/categories',
                path: 'tab-categories',
                position: 'content-categories'
            },
            debts: {
                name: 'debts',
                menuText: 'Debts',
                html: 'content/debts/debts.html',
                js: 'content/debts/debts',
                path: 'tab-debts',
                position: 'content-debts'
            },
            transactions: {
                name: 'transactions',
                menuText: 'All Transactions',
                html: 'content/transactions/transactions.html',
                js: 'content/transactions/transactions',
                path: 'tab-transactions',
                position: 'content-transactions'
            },
            help: {
                name: 'help',
                menuText: 'Help',
                html: 'content/help/help.html',
                js: 'content/help/help',
                path: 'tab-help',
                position: 'content-help'
            },
            //main: {
            //    name: 'main',
            //    menuText: 'Main',
            //    html: 'content/main/main.html',
            //    js: 'content/main/main',
            //    default: true,
            //    path: 'tab-main',
            //    position: 'content-main'
            //},
            settings: {
                name: 'settings',
                menuText: 'Settings',
                html: 'content/settings/settings.html',
                js: 'content/settings/settings',
                path: 'tab-settings',
                position: 'content-settings'
            }
        }
    };
});
