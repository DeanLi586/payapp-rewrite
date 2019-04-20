const ParentMenuItems = [
    {
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
        href: "/",
        icon: "child_care",
        type: 'group',
        children: [
            {
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
]

const SchoolMenuItems = [
    {
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
        href: "/",
        icon: "child_care",
        type: 'single'
    },
    // {
    //     name: "",
    //     href: "",
    //     icon: ""
    // },
    // {
    //     name: "",
    //     href: "",
    //     icon: ""
    // },
    // {
    //     name: "",
    //     href: "",
    //     icon: ""
    // },
]


export {
    ParentMenuItems,
    SchoolMenuItems
};