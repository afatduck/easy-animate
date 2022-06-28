import type * as CssType from 'csstype';

export type AnimationName = string;
export type AnimationDuration = number;
export type AnimationDelay = number;
export type AnimationIterationCount = number | 'infinite';
export type AnimationDirections = 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
export type AnimationTimingFunction =
  | 'ease'
  | 'ease-in'
  | 'ease-out'
  | 'ease-in-out'
  | 'linear'
  | 'step-start'
  | 'step-end'
  // eslint-disable-next-line @typescript-eslint/ban-types
  | (string & {});
export type AnimationFillMode = 'none' | 'forwards' | 'backwards' | 'both';

export interface AnimationProperties {
  duration: AnimationDuration;
  delay: AnimationDelay;
  iterationCount: AnimationIterationCount;
  direction: AnimationDirections;
  timingFunction: AnimationTimingFunction;
  fillMode: AnimationFillMode;
}

export type KeyframesProps = {
  at: number;
  properties: CssType.PropertiesHyphen & { [key: string]: string | number };
}[];

export as namespace EasyAnimate;
