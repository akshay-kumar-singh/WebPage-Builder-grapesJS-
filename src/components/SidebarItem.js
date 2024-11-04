// src/components/SidebarItem.js
import React from 'react';

function SidebarItem({ id, label, icon, onClick }) {
  return (
    <div className="sidebar-item" onClick={() => onClick(id)}>
      <span className="icon">{icon}</span>
      <span className="label">{label}</span>
    </div>
  );
}

export default SidebarItem;
