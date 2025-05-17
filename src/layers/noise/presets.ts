import { NoiseLayerOptions } from "./types";

export const NoiseLayerPresets: Record<string, NoiseLayerOptions> = {
  default: {
    type: "gaussian",
    intensity: 0.5,
  }
}
