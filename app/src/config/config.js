define([], () => {
    return {
        root: {
            position: 'main',
            element: {}
        },
        layout: {
            title: {
                position: 'layout-title',
                name: 'title',
                menuText: 'title',
                html: '/layout/title/title.html',
                js: '/layout/title/title.js',
                global: true
            },
            top: {
                position: 'layout-top',
                name: 'top',
                menuText: 'top',
                html: '/layout/top/top.html',
                js: '/layout/top/top.js'
            },
            back: {
                position: 'layout-back',
                name: 'back',
                menuText: 'back',
                html: '/layout/back/back.html',
                js: '/layout/back/back.js'
            },
            menu: {
                position: 'layout-menu',
                name: 'menu',
                menuText: 'menu',
                html: '/layout/menu/menu.html',
                js: '/layout/menu/menu.js'
            },
            menuFooter: {
                position: 'layout-menu-footer',
                name: 'menuFooter',
                menuText: 'menuFooter',
                html: '/layout/menuFooter/menuFooter.html',
                js: '/layout/menuFooter/menuFooter.js'
            }
        },
        config: {
            main: {
                position: 'content-main'
            }
        },
        modals: {
            action: {
                position: 'modal-action',
                name: 'action',
                html: 'modals/action/action.html',
                js: 'modals/action/action'
            },
        },
        content: {
            analysis: {
                name: 'analysis',
                menuText: 'Analysis',
                html: 'content/analysis/analysis.html',
                js: 'content/analysis/analysis'
            },
            budget: {
                name: 'budget',
                menuText: 'Budget',
                html: 'content/budget/budget.html',
                js: 'content/budget/budget'
            },
            calendar: {
                name: 'calendar',
                menuText: 'Payments Calendar',
                html: 'content/calendar/calendar.html',
                js: 'content/calendar/calendar'
            },
            category: {
                name: 'category',
                menuText: 'Category',
                html: 'content/category/category.html',
                js: 'content/category/category'
            },
            debts: {
                name: 'debts',
                menuText: 'Debts',
                html: 'content/debts/debts.html',
                js: 'content/debts/debts'
            },
            expenses: {
                name: 'expenses',
                menuText: 'Income and Expenses',
                html: 'content/expenses/expenses.html',
                js: 'content/expenses/expenses'
            },
            help: {
                name: 'help',
                menuText: 'Help',
                html: 'content/help/help.html',
                js: 'content/help/help'
            },
            main: {
                name: 'main',
                menuText: 'Main',
                html: 'content/main/main.html',
                js: 'content/main/main',
                default: true
            },
            settings: {
                name: 'settings',
                menuText: 'Settings',
                html: 'content/settings/settings.html',
                js: 'content/settings/settings'
            }

        }
    };
});