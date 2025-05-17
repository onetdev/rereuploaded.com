export interface EncodeLayerOptions {
  iterations: number;
  quality: number;
}

export interface EncodeLayer {
  type: "encode";
  options: EncodeLayerOptions;
}
