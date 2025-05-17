'use client';

import LayerList from "./LayerList";
import { LayerInsertDropdown } from "./LayerInsertDropdown";

export default function LayerManager() {
  return (
    <div className="w-full flex flex-col gap-2">
      <LayerList />
      <LayerInsertDropdown />
    </div>
  );
}
