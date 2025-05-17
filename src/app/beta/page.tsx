import { effectArray } from "@/effects";
import { EditorViewModelProvider } from "./components/EditorViewModelProvider";
import ImageSelector from "./components/ImageSelector";
import LayerManager from "./components/LayerManager";

export default function Beta() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-5 gap-[32px]">
      <EditorViewModelProvider availableLayers={effectArray}>
        <div className="md:col-span-1 flex flex-col gap-5 items-start">
          <h3 className="text-3xl text-center sm:text-left">1. Select image</h3>
          <ImageSelector />
        </div>
        <div className="md:col-span-2 flex flex-col gap-5 items-start">
          <h3 className="text-3xl text-center sm:text-left">2. Add effects</h3>
          <LayerManager />
        </div>
        <div className="md:col-span-2 flex flex-col gap-5 items-start">
          <h3 className="text-3xl text-center sm:text-left">3. Result and preview</h3>
        </div>
      </EditorViewModelProvider>
    </main>
  );
}
