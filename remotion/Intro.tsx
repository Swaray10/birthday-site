import React from 'react';
import {
  AbsoluteFill, Audio, Img, Sequence, interpolate, spring, staticFile,
  useCurrentFrame, useVideoConfig, Easing
} from 'remotion';
import { color, type, ease } from '../src/lib/design/tokens';
import { CUTS, CAPTIONS, LOCKUP_FROM, DURATION } from './montage';
import { loadSatoshi } from './font';

loadSatoshi();

export type IntroProps = { name: string; age: number };
export const FPS = 30;
export const TOTAL_FRAMES = Math.ceil(DURATION * FPS);

const toF = (s: number) => Math.round(s * FPS);

/** Sizes derive from the canvas — the same montage renders 16:9 and 9:16. */
const useScale = () => {
  const { width, height } = useVideoConfig();
  const portrait = height > width;
  return {
    portrait,
    pad:     width * (portrait ? 0.075 : 0.0625),
    eyebrow: width * (portrait ? 0.021 : 0.0125),
    number:  width * (portrait ? 0.29  : 0.1563),
    sign:    width * (portrait ? 0.055 : 0.0281),
    orb:     Math.max(width, height) * 0.72
  };
};

const useRise = (delay = 0, dur = 21) => {
  const frame = useCurrentFrame();
  const t = interpolate(frame - delay, [0, dur], [0, 1], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
    easing: Easing.bezier(...(ease.out as unknown as [number, number, number, number]))
  });
  return { opacity: t, transform: `translateY(${(1 - t) * 18}px)` };
};

/** One montage frame. kenburns = slow push; punch = hard cut with a small
 *  scale settle (1.05→1) that makes each hit land; fade = crossfade pair. */
const Shot: React.FC<{ src: string; frames: number; style: string; index: number }> =
({ src, frames, style, index }) => {
  const f = useCurrentFrame();
  let scale = 1, opacity = 1;
  if (style === 'kenburns') {
    scale = interpolate(f, [0, frames], [1.02, 1.1]);
    opacity = interpolate(f, [0, 8], [0, 1], { extrapolateRight: 'clamp' });
  } else if (style === 'punch') {
    scale = interpolate(f, [0, 7], [1.05, 1], {
      extrapolateRight: 'clamp',
      easing: Easing.bezier(0.16, 1, 0.30, 1)
    });
  } else {
    scale = interpolate(f, [0, frames], [1.0, 1.055]);
    opacity = interpolate(f, [0, 10, frames - 10, frames], [0, 1, 1, 0]);
  }
  // alternate the drift axis so consecutive punches don't feel repetitive
  const drift = style === 'punch' ? (index % 2 ? 1 : -1) * interpolate(f, [0, frames], [0, 8]) : 0;
  const url = staticFile(`intro-media/${src}.jpg`);
  return (
    <AbsoluteFill style={{ opacity }}>
      {/* fill layer: the same photo, blurred and dimmed — never the subject */}
      <Img
        src={url}
        style={{ width: '100%', height: '100%', objectFit: 'cover',
                 transform: 'scale(1.18)', filter: 'blur(38px) brightness(0.55) saturate(1.1)' }}
      />
      {/* the photo itself, whole — contain guarantees no face is ever cropped */}
      <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Img
          src={url}
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain',
                   transform: `scale(${scale}) translateX(${drift}px)`,
                   boxShadow: `0 24px 80px ${color.inkDeep}cc` }}
        />
      </AbsoluteFill>
      <AbsoluteFill style={{
        background: `linear-gradient(180deg, ${color.inkDeep}33 0%, transparent 30%, transparent 66%, ${color.inkDeep}77 100%)`
      }} />
    </AbsoluteFill>
  );
};

const Caption: React.FC<{ text: string }> = ({ text }) => {
  const s = useScale();
  return (
    <div style={{
      ...useRise(2), position: 'absolute',
      left: s.pad, bottom: s.pad * 1.15,
      fontFamily: type.mono, fontSize: s.eyebrow, fontWeight: type.eyebrowWeight,
      letterSpacing: type.eyebrowTracking, textTransform: 'uppercase',
      color: color.lilac, display: 'flex', alignItems: 'center', gap: s.eyebrow * 0.7,
      textShadow: `0 1px 12px ${color.inkDeep}`
    }}>
      <span style={{ width: s.eyebrow * 1.9, height: 2, background: 'currentColor', opacity: 0.55 }} />
      {text}
    </div>
  );
};

const Lockup: React.FC<IntroProps> = ({ name, age }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = useScale();
  const g = spring({ frame, fps, config: { damping: 14, stiffness: 90 } });
  const fadeIn = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp' });
  return (
    <AbsoluteFill style={{ background: color.inkDeep, opacity: fadeIn,
                           justifyContent: 'center', alignItems: 'center',
                           padding: `0 ${s.pad}px`, textAlign: 'center' }}>
      <div style={{
        position: 'absolute', width: s.orb, height: s.orb, borderRadius: '50%',
        background: `radial-gradient(circle, ${color.lilac} 0%, transparent 66%)`,
        opacity: 0.3 * g, filter: `blur(${s.orb * 0.055}px)`, transform: `scale(${0.9 + g * 0.15})`
      }} />
      <div style={{
        fontFamily: type.sans, fontSize: s.number, fontWeight: type.displayWeight,
        letterSpacing: type.displayTracking, lineHeight: 0.9,
        color: color.lilac, transform: `scale(${0.86 + g * 0.14})`, opacity: g
      }}>{age}</div>
      <div style={{
        ...useRise(24, 24), fontFamily: type.sans, fontSize: s.sign, fontWeight: 400,
        letterSpacing: '-0.03em', color: color.paper
      }}>Happy birthday, {name}.</div>
    </AbsoluteFill>
  );
};

export const Intro: React.FC<IntroProps> = ({ name, age }) => (
  <AbsoluteFill style={{ backgroundColor: color.inkDeep }}>
    <Audio src={staticFile('intro-media/track.mp3')} />
    {CUTS.map((c, i) => (
      <Sequence key={c.src} from={toF(c.from)} durationInFrames={toF(c.to) - toF(c.from) + (c.style === 'fade' ? 10 : 0)}>
        <Shot src={c.src} frames={toF(c.to) - toF(c.from)} style={c.style} index={i} />
      </Sequence>
    ))}
    {CAPTIONS.map((c) => (
      <Sequence key={c.text} from={toF(c.from)} durationInFrames={toF(c.to) - toF(c.from)}>
        <Caption text={c.text} />
      </Sequence>
    ))}
    <Sequence from={toF(LOCKUP_FROM)}>
      <Lockup name={name} age={age} />
    </Sequence>
  </AbsoluteFill>
);
