import ImageSelector from "./components/ImageSelector";

export default function Beta() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
      <div>
        <h3 className="text-3xl text-center sm:text-left">1. Select image</h3>
        <ImageSelector />
      </div>
      <div>
        <h3 className="text-3xl text-center sm:text-left">2. Add effects</h3>
      </div>
      <div>
        <h3 className="text-3xl text-center sm:text-left">3. Result and preview</h3>
      </div>
    </main>
  );
}
