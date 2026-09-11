import { Config } from '@remotion/cli/config';

/** Frames are rasterised losslessly before encoding. The default here was
 *  'jpeg', which re-compressed every frame at quality 80 *before* the video
 *  codec saw it — ringing around the thin display type and visible banding
 *  in the near-black radial gradients. PNG costs render time, nothing else. */
Config.setVideoImageFormat('png');
Config.setOverwriteOutput(true);
Config.setEntryPoint('./remotion/index.ts');
// Montage sources + the track live here, NOT in static/ — they are render-time
// inputs only and must never be deployed or publicly served.
Config.setPublicDir('./remotion/public');
