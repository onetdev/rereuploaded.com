'use client';

import { createContext, PropsWithChildren, useContext, useState } from "react";
 
type NoiseLayer = {
  type: "noise";
  noiseType: "gaussian" | "perlin";
  intensity: number;
}
type PerspectiveLayer = {
  type: "perspective";
  perspective: number;
  intensity: number;
}
type LayerType = NoiseLayer | PerspectiveLayer

interface EditorViewModelContextProps {
  inputFile?: File;
  setInputFile: (file?: File) => void;
  layers: LayerType[];
  setLayers: (layers: LayerType[]) => void;
}

const EditorViewModelContext = createContext<EditorViewModelContextProps>({
  inputFile: undefined,
  layers: [],
  setInputFile: () => {
    throw Error("setInputFile not implemented");
  },
  setLayers: () => {
    throw Error("setLayers not implemented");
  },
});

export const useEditorViewModel = () => {
  const context = useContext(EditorViewModelContext);
  if (!context) {
    throw new Error("useEditorViewModel must be used within an EditorViewModelProvider");
  }
  return context;
}

export const EditorViewModelProvider = ({ children }: PropsWithChildren) => {
  const [inputFile, setInputFile] = useState<File>();
  const [layers, setLayers] = useState<LayerType[]>([]);

  return (
    <EditorViewModelContext.Provider value={{ inputFile, setInputFile, layers, setLayers }}>
      {children}
    </EditorViewModelContext.Provider>
  );
}
