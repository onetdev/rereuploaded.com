'use client';

import { useEditorViewModel } from "./EditorViewModel";
import LayerList from "./LayerList";
import { LayerInsertDropdown } from "./LayerInsertDropdown";

export default function LayerManager() {
  const editor = useEditorViewModel();

  const onInsert = (key: string) => {
    const layer = editor.availableLayers.find((layer) => layer.handle === key);
    if (layer) {
      editor.addLayer(layer.handle, layer.presets.default);
    }
  };

  const insertList = editor.availableLayers.map((layer) => ({
    key: layer.handle,
    label: layer.title,
    shortcut: "",
  }));

  return (
    <div className="w-full flex flex-col gap-2">
      <LayerList />
      <LayerInsertDropdown items={insertList} onInsert={onInsert} />
    </div>
  );
}
