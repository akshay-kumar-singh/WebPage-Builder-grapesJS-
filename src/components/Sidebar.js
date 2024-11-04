// src/components/Sidebar.js
import React from 'react';
import SidebarItem from './SidebarItem';
import SearchBar from './SearchBar';

function Sidebar({ sections, searchTerm, setSearchTerm, onAddComponent }) {
  return (
    <div className="sidebar">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <h2>Add Section</h2>
      <div className="sidebar-grid">
        {sections.map(({ id, label, icon }) => (
          <SidebarItem key={id} id={id} label={label} icon={icon} onClick={onAddComponent} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
