define([], () => {
    return {
        root: {
            position: 'main',
            element: {}
        },
        layout: {
            menu: {
                position: 'layout-menu',
                name: 'menu',
                menuText: 'menu',
                html: '/layout/menu/menu.html',
                js: '/layout/menu/menu.js'
            },
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
        modules: {
            accounts: {
                name: 'accounts',
                menuText: 'Accounts',
                html: 'modules/accounts/accounts.html',
                js: 'modules/accounts/accounts',
                path: 'tab-accounts',
                position: 'content-accounts',
                templates:[],
                default: true
            },
            analysis: {
                name: 'analysis',
                menuText: 'Analysis',
                html: 'modules/analysis/analysis.html',
                js: 'modules/analysis/analysis',
                path: 'tab-analysis',
                position: 'content-analysis',
                templates: [],
            },
            budget: {
                name: 'budget',
                menuText: 'Budget',
                html: 'modules/budget/budget.html',
                js: 'modules/budget/budget',
                path: 'tab-budget',
                position: 'content-budget',
                templates: [],
            },
            calendar: {
                name: 'calendar',
                menuText: 'Payments Calendar',
                html: 'modules/calendar/calendar.html',
                js: 'modules/calendar/calendar',
                path: 'tab-calendar',
                position: 'content-calendar',
                templates: [],
            },
            categories: {
                name: 'categories',
                menuText: 'Categories',
                html: 'modules/categories/categories.html',
                js: 'modules/categories/categories',
                path: 'tab-categories',
                position: 'content-categories',
                templates: [],
            },
            debts: {
                name: 'debts',
                menuText: 'Debts',
                html: 'modules/debts/debts.html',
                js: 'modules/debts/debts',
                path: 'tab-debts',
                position: 'content-debts',
                templates: [],
            },
            transactions: {
                name: 'transactions',
                menuText: 'All Transactions',
                html: 'modules/transactions/transactions.html',
                js: 'modules/transactions/transactions',
                path: 'tab-transactions',
                position: 'content-transactions',
                templates: [],
            },
            help: {
                name: 'help',
                menuText: 'Help',
                html: 'modules/help/help.html',
                js: 'modules/help/help',
                path: 'tab-help',
                position: 'content-help',
                templates: [],
            },
            settings: {
                name: 'settings',
                menuText: 'Settings',
                html: 'modules/settings/settings.html',
                js: 'modules/settings/settings',
                path: 'tab-settings',
                position: 'content-settings',
                templates: [],
            }
        }
    };
});