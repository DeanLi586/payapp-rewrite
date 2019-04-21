const ParentMenuItems = [{
        name: 'Home',
        href: '/',
        icon: 'home',
        type: 'single'
    },
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: "dashboard",
        type: 'single'
    },
    {
        name: "Child",
        icon: "child_care",
        type: 'group',
        children: [{
                name: 'Add Child',
                icon: 'add',
                href: '/add-child'
            },
            {
                name: 'View Children',
                icon: 'visibility',
                href: '/view-children'
            }
        ]
    },
    {
        name: "Accounts",
        icon: 'credit_card',
        type: 'group',
        children: [{
                name: 'Add Account',
                icon: 'add',
                href: '/'
            },
            {
                name: 'View Accounts',
                icon: 'visibility',
                href: '/'
            }
        ]
    },
    {
        name: "Transactions",
        icon: "payment",
        type: "group",
        children: [{
                name: "Make payment",
                icon: "add",
                href: "/"
            },
            {
                name: "View Payments",
                icon: "visibility",
                href: "/"
            }
        ]
    }
]

const SchoolMenuItems = [{
        name: 'Home',
        href: '/',
        icon: 'home',
        type: 'single'
    },
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: "dashboard",
        type: 'single'
    },
    {
        name: "Accounts",
        icon: 'credit_card',
        type: 'group',
        children: [{
                name: 'Add Account',
                icon: 'add',
                href: '/'
            },
            {
                name: 'View Accounts',
                icon: 'visibility',
                href: '/'
            }
        ]
    },
    {
        name: "Transactions",
        icon: "payment",
        type: "group",
        children: [
            {
                name: "View Payments",
                icon: "visibility",
                href: "/"
            }
        ]
    }
]


export {
    ParentMenuItems,
    SchoolMenuItems
};