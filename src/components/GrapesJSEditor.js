// src/components/GrapesJSEditor.js
import { useEffect } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs-preset-webpage';

function GrapesJSEditor({ sections }) {
  useEffect(() => {
    const editor = grapesjs.init({
      container: '#gjs',
      height: '700px',
      width: '100%',
      plugins: ['gjs-preset-webpage'],
      storageManager: {
        id: 'gjs-',
        type: 'local',
        autosave: true,
        storeComponents: true,
        storeStyles: true,
        storeHtml: true,
        storeCss: true,
      },
      deviceManager: {
        devices: [
          { id: 'desktop', name: 'Desktop', width: '' },
          { id: 'tablet', name: 'Tablet', width: '768px', widthMedia: '992px' },
          { id: 'mobilePortrait', name: 'Mobile portrait', width: '320px', widthMedia: '575px' },
        ],
      },
    });

    sections.forEach(({ id, label, content }) => {
      editor.BlockManager.add(id, {
        label,
        content,
        category: 'Add Section',
        draggable: true,
        removable: true,
      });
    });
    

    window.handleAddComponent = (type) => {
      const block = editor.BlockManager.get(type);
      if (block) editor.addComponents(block.get('content'));
    };
  }, [sections]);

  return <div id="gjs"></div>;
}

export default GrapesJSEditor;
