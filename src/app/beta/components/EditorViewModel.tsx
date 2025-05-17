'use client';

import { EffectItem, EffectType } from "@/effects";
import { createContext, useContext } from "react";

export type LayerHistoryItem<T= unknown> = {
  id: string;
  type: EffectType;
  options: T;
}

interface EditorViewModelContextProps {
  availableLayers: EffectItem<unknown>[];
  inputFile?: File;
  layers: LayerHistoryItem[];
  setInputFile: (file?: File) => void;
  setLayers: (layers: LayerHistoryItem[]) => void;
  addLayer: (type: EffectType, options: unknown) => void;
}

export const EditorViewModelContext = createContext<EditorViewModelContextProps>({
  availableLayers: [],
  inputFile: undefined,
  layers: [],
  setInputFile: () => {
    throw Error("setInputFile not implemented");
  },
  setLayers: () => {
    throw Error("setLayers not implemented");
  },
  addLayer: () => {
    throw Error("addLayer not implemented");
  },
});

export const useEditorViewModel = () => {
  const context = useContext(EditorViewModelContext);
  if (!context) {
    throw new Error("useEditorViewModel must be used within an EditorViewModelProvider");
  }
  return context;
}
