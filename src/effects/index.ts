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
  handle: EffectType;
  title: string;
  description: string;
  presets: Record<string, T>;
}

export const effectMap = {
  encode: {
    description: 'Reencoding images n times mimicing the process of uploading and downloading images.',
    handle: 'encode' as EffectType,
    presets: encodeLayer.presets,
    title: 'Reupload',
  },
  noise: {
    description: 'Add noise to the image.',
    handle: 'noise' as EffectType,
    presets: noiseLayer.presets,
    title: 'Noise',
  }
} as const satisfies Record<EffectType, EffectItem<unknown>>;

export const effectArray = Object.values(effectMap) as EffectItem<unknown>[];
