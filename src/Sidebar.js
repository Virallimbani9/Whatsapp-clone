import React from 'react'
import "./Sidebar.css";
import SidebarChat from './SidebarChat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Avatar,IconButton } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';

function Sidebar() {
  return (
    <div className='sidebar'>
    <div className="sidebar__header">
      
      <Avatar/>

      <div className="sidebar__headerRight">

        
        <IconButton>
        <DonutLargeIcon/>
        </IconButton>

        <IconButton>
        < ChatIcon/>
        </IconButton>

        <IconButton>
        <MoreVertIcon/>
        </IconButton>

      </div>
    </div>

    <div className="sidebar__search">
      <div className="sidebar__searchContainer">
        <SearchOutlined/>
        <input placeholder='Search Or Start New Chats' type="text" />
      </div>
    </div>

    <div className="sidebar__chats">

      <SidebarChat/>
      <SidebarChat/>
      <SidebarChat/>
      <SidebarChat/>

    </div>
    </div>
  )
}

export default Sidebar