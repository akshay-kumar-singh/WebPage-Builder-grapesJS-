import { useEffect } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs-preset-webpage";

function GrapesJSEditor({ sections }) {
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#gjs",
      height: "100vh",
      width: "100%",
      plugins: ["gjs-preset-webpage"],
      storageManager: {
        id: "gjs-",
        type: "local",
        autosave: true,
        storeComponents: true,
        storeStyles: true,
        storeHtml: true,
        storeCss: true,
      },
      deviceManager: {
        devices: [
          { id: "desktop", name: "Desktop", width: "" },
          { id: "tablet", name: "Tablet", width: "768px", widthMedia: "992px" },
          {
            id: "mobilePortrait",
            name: "Mobile portrait",
            width: "320px",
            widthMedia: "575px",
          },
        ],
      },
    });

    // Ensure the body section is present
    editor.on('load', () => {
      const body = editor.getWrapper();

      // Check if the main wrapper exists, if not, add it
      if (!body.find("#main-wrapper").length) {
        body.append(`
          <div id="main-wrapper" style="min-height: 100vh; background-color: #e0e0e0; border: 1px solid #ccc; padding: 20px;">
            <p style="text-align: center; color: #666;"></p>
          </div>
        `);
      }

      editor.refresh(); // Ensure rendering of new content
    });

    // Ensure components can be dragged inside the main wrapper
    editor.DomComponents.addType("default", {
      isComponent: (el) => true,
      model: {
        defaults: {
          draggable: "#main-wrapper",
          droppable: true,
          resizable: {
            tl: 1,
            tc: 1,
            tr: 1,
            cl: 1,
            cr: 1,
            bl: 1,
            bc: 1,
            br: 1,
            ratio: false,
          },
          style: {
            minHeight: "50px",
            minWidth: "100px",
            border: "1px dashed #ddd",
            padding: "10px",
          },
        },
      },
    });

    // Add sections to the Block Manager
    sections.forEach(({ id, label, content }) => {
      editor.BlockManager.add(id, {
        label,
        content,
        category: "Add Section",
        attributes: { class: "fa fa-layer-group" },
        draggable: true,
      });
    });

    // Allow uploaded images to replace selected components
    window.handleUploadPhoto = () => {
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = "image/*";
      fileInput.onchange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            const uploadedImage = reader.result;
            const selectedComponent = editor.getSelected();
            if (selectedComponent) {
              selectedComponent.set(
                "content",
                `<img src="${uploadedImage}" style="max-width: 100%; height: auto;" />`
              );
            }
          };
          reader.readAsDataURL(file);
        }
      };
      fileInput.click();
    };

    // Function to add a block to the main wrapper directly
    window.handleAddComponent = (type) => {
      const block = editor.BlockManager.get(type);
      if (block) {
        const mainWrapper = editor.getWrapper().find("#main-wrapper")[0];
        if (mainWrapper) {
          mainWrapper.append(block.get("content"));
        } else {
          editor.addComponents(block.get("content"));
        }
      }
    };

    return () => {
      editor.destroy();
    };
  }, [sections]);

  return <div id="gjs"></div>;
}

export default GrapesJSEditor;
