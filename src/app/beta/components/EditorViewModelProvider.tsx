"use client";

import { EffectItem, EffectType } from "@/effects";
import { PropsWithChildren, useState } from "react";
import { EditorViewModelContext, LayerHistoryItem } from "./EditorViewModel";

interface EditorViewModelProviderProps extends PropsWithChildren {
  availableLayers: EffectItem<unknown>[];
}

export const EditorViewModelProvider = ({ children, availableLayers }: EditorViewModelProviderProps) => {
  const [inputFile, setInputFile] = useState<File>();
  const [layers, setLayers] = useState<LayerHistoryItem[]>([]);

  const addLayer = (type: EffectType, options: unknown) => {
    const newLayer: LayerHistoryItem = {
      id: crypto.randomUUID(),
      type,
      options,
    };

    setLayers((prev) => [...prev, newLayer]);
  }

  return (
    <EditorViewModelContext.Provider value={{ addLayer, availableLayers, inputFile, layers, setInputFile, setLayers }}>
      {children}
    </EditorViewModelContext.Provider>
  );
}
