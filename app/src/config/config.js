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
                html: 'modules/analysis/analysis.html',
                js: 'modules/analysis/analysis'
            },
            budget: {
                html: 'modules/budget/budget.html',
                js: 'modules/budget/budget'
            },
            calendar: {
                html: 'modules/calendar/calendar.html',
                js: 'modules/calendar/calendar'
            },
            category: {
                html: 'modules/category/category.html',
                js: 'modules/category/category'
            },
            debts: {
                html: 'modules/debts/debts.html',
                js: 'modules/debts/debts'
            },
            expenses: {
                html: 'modules/expenses/expenses.html',
                js: 'modules/expenses/expenses'
            },
            help: {
                html: 'modules/help/help.html',
                js: 'modules/help/help'
            },
            main: {
                html: 'modules/main/main.html',
                js: 'modules/main/main'
            },
            settings: {
                html: 'modules/settings/settings.html',
                js: 'modules/settings/settings'
            }

        }
    };
});