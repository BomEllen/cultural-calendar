import React from 'react';
import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { useNavigate } from 'react-router-dom';

function SideNav() {
    const navigate = useNavigate();

    return (
        <>
        <Navigation
            activeItemId="/management/members"
            onSelect={({ itemId }) => {
                if (itemId === '/dashboard') {
                    navigate('/dashboard');
                } else if (itemId === '/management') {
                    navigate('/management');
                } else if (itemId === '/tips-for-locals') {
                    navigate('/tips-for-locals');
                } else if (itemId === '/management/projects') {
                    navigate('/tips-for-locals/korea');
                } else if (itemId === '/management/members') {
                    navigate('/tips-for-locals/vietnam');
                } // 카테고리 라우팅 시키기
            }}
            items={[
                {
                    title: 'Home',
                    itemId: '/dashboard',
                    elemBefore: () => <>🏠</>, 
                },
                {
                    title: 'Holiday Food',
                    itemId: '/management',
                    elemBefore: () => <>🥘</>, 
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
