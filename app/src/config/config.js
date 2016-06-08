define([], () => {
    return {
        layout: {
            main: {
                element: 'layout-main',
                path: 'layout/main/main.html'
            },
            top: {
                element: 'layout-top',
                path: 'layout/top/top.html'
            },
            project: {
                element: 'layout-project',
                path: 'layout/project/project.html'
            },
            menu: {
                element: 'layout-menu',
                path: 'layout/menu/menu.html'
            },
            menuFooter: {
                element: 'layout-menu-footer',
                path: 'layout/menuFooter/menuFooter.html'
            }
        },
        content: {
            main: {
                element: 'content-main'
            }
        },
        modules: {
            analysis: {
                name: 'analysis',
                menuText: 'Analysis',
                html: 'modules/analysis/analysis.html',
                js: 'modules/analysis/analysis'
            },
            budget: {
                name: 'budget',
                menuText: 'Budget',
                html: 'modules/budget/budget.html',
                js: 'modules/budget/budget'
            },
            calendar: {
                name: 'calendar',
                menuText: 'Payments Calendar',
                html: 'modules/calendar/calendar.html',
                js: 'modules/calendar/calendar'
            },
            category: {
                name: 'category',
                menuText: 'Category',
                html: 'modules/category/category.html',
                js: 'modules/category/category'
            },
            debts: {
                name: 'debts',
                menuText: 'Debts',
                html: 'modules/debts/debts.html',
                js: 'modules/debts/debts'
            },
            expenses: {
                name: 'expenses',
                menuText: 'Income and Expenses',
                html: 'modules/expenses/expenses.html',
                js: 'modules/expenses/expenses'
            },
            help: {
                name: 'help',
                menuText: 'Help',
                html: 'modules/help/help.html',
                js: 'modules/help/help'
            },
            main: {
                name: 'main',
                menuText: 'Main',
                html: 'modules/main/main.html',
                js: 'modules/main/main',
                default: true
            },
            settings: {
                name: 'settings',
                menuText: 'Settings',
                html: 'modules/settings/settings.html',
                js: 'modules/settings/settings'
            }

        }
    };
});