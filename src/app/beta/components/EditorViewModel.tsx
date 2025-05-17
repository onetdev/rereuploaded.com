'use client';

import { EffectEditorRender, EffectItem, EffectType } from "@/effects";
import { createContext, PropsWithChildren, useContext, useState } from "react";

export type LayerHistoryItem<T= unknown> = {
  id: string;
  type: EffectType;
  options: T;
  editor: EffectEditorRender<T>
}

interface EditorViewModelContextProps {
  availableLayers: EffectItem<unknown>[];
  inputFile?: File;
  layers: LayerHistoryItem[];
  setInputFile: (file?: File) => void;
  setLayers: (layers: LayerHistoryItem[]) => void;
}

const EditorViewModelContext = createContext<EditorViewModelContextProps>({
  availableLayers: [],
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

interface EditorViewModelProviderProps extends PropsWithChildren {
  availableLayers: EffectItem<unknown>[];
}

export const EditorViewModelProvider = ({ children, availableLayers }: EditorViewModelProviderProps) => {
  const [inputFile, setInputFile] = useState<File>();
  const [layers, setLayers] = useState<LayerHistoryItem[]>([]);

  return (
    <EditorViewModelContext.Provider value={{ availableLayers, inputFile, layers, setInputFile, setLayers }}>
      {children}
    </EditorViewModelContext.Provider>
  );
}
