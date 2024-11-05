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

    sections.forEach(({ id, label, content }) => {
      editor.BlockManager.add(id, {
        label,
        content,
        category: "Add Section",
        attributes: { class: "fa fa-layer-group" },
        draggable: true,
        editable: true,
        resizable: true,
      });
    });

    editor.DomComponents.addType("default", {
      isComponent: (el) => true,
      model: {
        defaults: {
          draggable: true,
          editable: true,
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
            position: "relative",
            border: "1px dashed #ddd",
            padding: "10px",
          },
        },
      },
    });

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
            // Find and replace the placeholder image with the uploaded image
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

    window.handleAddComponent = (type) => {
      const block = editor.BlockManager.get(type);
      if (block) editor.addComponents(block.get("content"));
    };

    return () => {
      editor.destroy();
    };
  }, [sections]);

  return <div id="gjs"></div>;
}

export default GrapesJSEditor;
