export const PRODUCT_CATEGORIES =[
    {
        label: 'UI KITS',
        value: 'ui_kits' as const,
        featured:[
            {
                name: 'Editor picks',
                href: '#',
                imageSrc:'/nav/ui-kits/mixed.jpg'
            },
            {
                name: 'New arrival',
                href: '#',
                imageSrc:'/nav/ui-kits/blue.jpg'
            },
            {
                name: 'Best sellers',
                href: '#',
                imageSrc:'/nav/ui-kits/purple.jpg'
            },
        ],
    },
    {
        label: 'Icons',
        value: 'icons' as const,
        featured:[
            {
                name: 'Favorite Icon picks',
                href: '#',
                imageSrc:'/nav/icons/picks.jpg'
            },
            {
                name: 'New arrival',
                href: '#',
                imageSrc:'/nav/icons/new.jpg'
            },
            {
                name: 'Best selling Icons',
                href: '#',
                imageSrc:'/nav/icons/bestsellers.jpg'
            },
        ],
    },
]