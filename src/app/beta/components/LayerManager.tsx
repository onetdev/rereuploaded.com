'use client';

import { useEditorViewModel } from "./EditorViewModel";
import LayerList from "./LayerList";
import { LayerInsertDropdown } from "./LayerInsertDropdown";

export default function LayerManager() {
  const editor = useEditorViewModel();

  return (
    <div className="w-full flex flex-col gap-2">
      <LayerList />
      <LayerInsertDropdown />
    </div>
  );
}
