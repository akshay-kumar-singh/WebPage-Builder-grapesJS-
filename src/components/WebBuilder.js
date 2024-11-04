// src/components/WebBuilder.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import GrapesJSEditor from './GrapesJSEditor';
import sections from './sections'; // Import the sections array
import './WebBuilder.css';

function WebBuilder() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSections = sections.filter(section =>
    section.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="web-builder-container">
      <Sidebar
        sections={filteredSections}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onAddComponent={(type) => window.handleAddComponent(type)}
      />
      <GrapesJSEditor sections={sections} />
    </div>
  );
}

export default WebBuilder;
