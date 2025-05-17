import { ReactElement } from "react";
import * as encodeLayer from "./encode";
import * as noiseLayer from "./noise";

export const EFFECT_TYPES = ['encode', 'noise'] as const;
export type EffectType = typeof EFFECT_TYPES[number];

type EffectEditorRenderProps<T> = {
  defaultOptions: T;
  onChange: (options: T) => void;
}
export type EffectEditorRender<T> = (props: EffectEditorRenderProps<T>) => ReactElement;

export type EffectItem<T> = {
  presets: Record<string, T>;
}

export const effectList = {
  encode: {
    presets: encodeLayer.presets,
  },
  noise: {
    presets: noiseLayer.presets,
  }
} as const satisfies Record<EffectType, EffectItem<unknown>>;
