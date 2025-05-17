export interface NoiseLayerOptions {
  type: "gaussian" | "perlin";
  intensity: number;
}

export interface NoiseLayer {
  type: "noise";
  options: NoiseLayerOptions;
}
