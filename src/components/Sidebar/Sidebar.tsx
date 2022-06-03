import React from 'react'
import { PencilLine } from 'phosphor-react';
import SidebarFooter from './SidebarFooter';
import Avatar from '../Avatar';
import Cover from './Cover';
import SidebarProfile from './SidebarProfile';

export default function Sidebar() {
    return (
        <aside className='bg-gray-600 rounded-lg overflow-hidden'>
            <Cover />
            <SidebarProfile />
            <SidebarFooter />
        </aside>
    )
}
