import React from 'react';
import { Composition } from 'remotion';
import { Intro, TOTAL_FRAMES } from './Intro';
import { fps } from '../src/lib/design/tokens';
import { her } from '../src/lib/content';

const TOTAL = TOTAL_FRAMES;   // follows the track: 31.09s at 30fps

export const RemotionRoot: React.FC = () => (
  <>
    {/* landscape — the on-site intro */}
    <Composition
      id="Intro" component={Intro}
      durationInFrames={TOTAL} fps={fps} width={1920} height={1080}
      defaultProps={{ name: her.name, age: her.age }}
    />
    {/* 9:16 — the shareable version for stories / WhatsApp */}
    <Composition
      id="IntroVertical" component={Intro}
      durationInFrames={TOTAL} fps={fps} width={1080} height={1920}
      defaultProps={{ name: her.name, age: her.age }}
    />
  </>
);
