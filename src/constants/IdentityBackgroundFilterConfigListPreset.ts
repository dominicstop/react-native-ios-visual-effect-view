import type { LayerFilterConfig } from "../types/LayerFilterConfig";


export const IdentityBackgroundFilterConfigListPreset: Array<LayerFilterConfig> = [
  {
    filterName: "bias",
    amount: 0.5,
  },
  {
    filterName: "luminanceCompression",
    amount: 1,
  },
  {
    filterName: "colorBlackAndWhite",
    amount: 0,
  },
  {
    filterName: "contrastColors",
    amount: 1,
  },
  {
    filterName: "saturateColors",
    amount: 1,
  },
  {
    filterName: "brightenColors",
    amount: 0,
  },
  {
    filterName: "colorMatrix",
    colorMatrix: {
      mode: 'constant',
      value: 'identity'
    },
  },
  {
    filterName: "gaussianBlur",
    radius: 0,
    shouldNormalizeEdges: true
  },
];