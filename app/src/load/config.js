define([], () => {
    return {
        layout: {
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
        }
    };
});