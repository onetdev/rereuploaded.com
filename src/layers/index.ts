export * from "./encode";
export * from "./noise";

import { EncodeLayer } from "./encode";
import { NoiseLayer } from "./noise";

export type LayerType = EncodeLayer | NoiseLayer;
