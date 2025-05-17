'use client';

import { Listbox, ListboxItem } from "@heroui/react";
import { useEditorViewModel } from "./EditorViewModel";

export default function LayerList() {
  const editor = useEditorViewModel();

  return (
    <div className="w-full border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
      <Listbox aria-label="Actions" onAction={(key) => alert(key)} emptyContent="No layers. YET!">
        {editor.layers.map((layer) => (
          <ListboxItem key={layer.type} className="flex items-center">
            <div className="w-4 h-4 bg-default-200 dark:bg-default-100 rounded-full mr-2" />
            {layer.type}
          </ListboxItem>
        ))}
      </Listbox>
    </div>
  );
}
