import React from 'react';
import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

function SideNav() {
    return (
        <>
        <Navigation
            activeItemId="/management/members"
            onSelect={({ itemId }) => {
            // maybe push to the route
            }}
            items={[
            {
                title: 'Home',
                itemId: '/dashboard',
                elemBefore: () => <>🏠</>, 
            },
            {
                title: 'Food',
                itemId: '/management',
                elemBefore: () => <>🥘</>, 
                subNav: [
                {
                    title: 'January 1 - Newyears Day',
                    itemId: '/management/projects',
                },
                {
                    title: 'December 25 - Christmas',
                    itemId: '/management/members',
                },
                ],
            },
            {
                title: 'Tips for locals',
                itemId: '/another',
                elemBefore: () => <>🌐</>,
                subNav: [
                    {
                        title: 'Korea',
                        itemId: '/management/projects',
                    },
                    {
                        title: 'Vietnam',
                        itemId: '/management/members',
                    },
                    ],
            },
            ]}
        />
        </>
    );
}

export default SideNav;
