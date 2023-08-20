import React from 'react';
import "./SidebarChat.css";
import { Avatar } from '@mui/material';

function SidebarChat() {
  return (
    <div className='sidebarChat'>
        <Avatar/>
        <div className="sidebarChat__info">
            <h2>Viral</h2>
            <p>This is last massage</p>
        </div>
    </div>
  )
}

export default SidebarChat