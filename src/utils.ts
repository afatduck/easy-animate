import { KeyframesProps } from './@types/EasyAnimate';

export const cubicBezier = (x1: number, y1: number, x2: number, y2: number) =>
  `cubic-bezier(${x1}, ${y1}, ${x2}, ${y2})`;

export const steps = (
  steps: number,
  position: 'start' | 'end' | 'jump-start' | 'jump-end' | 'jump-none' | 'jump-both',
) => `steps(${steps}, ${position})`;

export const keyframesRule = ({ name, keyframes: kf }: keyframesRuleProps) => {
  const sorted = kf.filter((k) => k.at >= 0 && k.at <= 1).sort((a, b) => a.at - b.at);

  const properties = sorted.map((k) => {
    const { at, properties: props } = k;
    return `${at * 100}% { ${Object.keys(props)
      .map((p) => `${p}: ${props[p]}`)
      .join('; ')} }`;
  });

  return `@keyframes ${name} { ${properties.join(' ')} }`;
};

interface keyframesRuleProps {
  name: string;
  keyframes: KeyframesProps;
}

export const uid = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};
