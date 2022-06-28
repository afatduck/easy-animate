import { AnimationProperties, KeyframesProps } from './@types/EasyAnimate';
import { keyframesRule, uid } from './utils';

export class EasyAnimate {
  private _prefix: string;
  private _animationDefaults: AnimationProperties;
  private _keyframeSheet: CSSStyleSheet;
  private _classSheet: CSSStyleSheet;
  private _keyframes: string[];
  private _classes: string[];

  constructor() {
    this._prefix = 'easy-animations-';
    this._animationDefaults = {
      duration: 1,
      delay: 0,
      iterationCount: 1,
      direction: 'normal',
      timingFunction: 'ease',
      fillMode: 'none',
    };

    const ks = document.createElement('style');
    ks.appendChild(document.createTextNode(''));
    document.head.appendChild(ks);
    this._keyframeSheet = ks.sheet as CSSStyleSheet;

    const cs = document.createElement('style');
    cs.appendChild(document.createTextNode(''));
    document.head.appendChild(cs);
    this._classSheet = cs.sheet as CSSStyleSheet;

    this._keyframes = [];
    this._classes = [];
  }

  get keyframes() {
    return this._keyframes;
  }

  get classes() {
    return this._classes;
  }

  get prefix() {
    return this._prefix;
  }

  changePrefix(_prefix: string) {
    this._prefix = _prefix;
  }

  changeDefaults(defaults: Partial<AnimationProperties>) {
    this._animationDefaults = { ...this._animationDefaults, ...defaults };
  }

  addKeyframes(props: KeyframesProps, name?: string) {
    const kfName = this._prefix + (name || uid());
    const rule = keyframesRule({ name: kfName, keyframes: props });

    if (this._keyframes.includes(kfName)) {
      this._keyframeSheet.deleteRule(this._keyframes.indexOf(kfName));
      this._keyframes = this._keyframes.filter((k) => k !== kfName);
    }

    this._keyframes.push(kfName);
    this._keyframeSheet.insertRule(rule, this._keyframeSheet.cssRules.length);

    return kfName;
  }

  removeKeyframes(name: string) {
    if (this._keyframes.includes(name)) {
      this._keyframeSheet.deleteRule(this._keyframes.indexOf(name));
      this._keyframes = this._keyframes.filter((k) => k !== name);
      return true;
    }
    return false;
  }

  animate(
    elements: HTMLElement | HTMLElement[] | Element | Element[] | HTMLCollection | string,
    keyframes: string,
    props: Partial<AnimationProperties> = {},
    removeClassWhenFinished = false,
  ) {
    let els: HTMLElement[] = [];
    if (typeof elements === 'string') document.querySelectorAll(elements).forEach((e) => els.push(e as HTMLElement));
    else if (elements instanceof HTMLElement || elements instanceof Element) els.push(elements as HTMLElement);
    else if (elements instanceof HTMLCollection) els = Array.from(elements) as HTMLElement[];
    else els = elements as HTMLElement[];

    const animationProperties = { ...this._animationDefaults, ...props };
    const className = this._prefix + uid();
    const rule = `.${className} { animation: ${keyframes} ${animationProperties.duration}s ${animationProperties.delay}s ${animationProperties.iterationCount} ${animationProperties.direction} ${animationProperties.timingFunction} ${animationProperties.fillMode};`;

    this._classSheet.insertRule(rule, this._classSheet.cssRules.length);
    this._classes.push(className);

    els.forEach((e) => {
      e.classList.forEach((c) => {
        if (this._classes.includes(c)) e.classList.remove(c);
      });
      e.style.animation = 'none';
      e.classList.add(className);
      setTimeout(() => {
        e.style.removeProperty('animation');
      }, 0);
    });

    let finished: Promise<void> | undefined = undefined;
    if (animationProperties.iterationCount !== 'infinite') {
      finished = new Promise((resolve) => {
        const to = setTimeout(() => {
          resolve();
        }, animationProperties.duration * 1000 * (animationProperties.iterationCount as number) + animationProperties.delay * 1000);
        addEventListener(`${className}-finished`, (e: CustomEventInit) => {
          clearTimeout(to);
          if (e.detail.skipped) resolve();
        });
      });
    }
    if (finished && removeClassWhenFinished) finished.then(() => this.stop(className));

    return { className, finished };
  }

  infinite(
    elements: HTMLElement | HTMLElement[] | Element | Element[] | HTMLCollection | string,
    keyframes: string,
    props: Partial<AnimationProperties> = {},
    removeClassWhenFinished = false,
  ) {
    return this.animate(elements, keyframes, { ...props, iterationCount: 'infinite' }, removeClassWhenFinished);
  }

  reverse(
    elements: HTMLElement | HTMLElement[] | Element | Element[] | HTMLCollection | string,
    keyframes: string,
    props: Partial<AnimationProperties> = {},
    removeClassWhenFinished = false,
  ) {
    return this.animate(elements, keyframes, { ...props, direction: 'reverse' }, removeClassWhenFinished);
  }

  stop(className: string) {
    if (this._classes.includes(className)) {
      this._classSheet.deleteRule(this._classes.indexOf(className));
      this._classes = this._classes.filter((c) => c !== className);
      document.querySelectorAll(`.${className}`).forEach((e) => e.classList.remove(className));
      const stopEvent = new CustomEvent(`${className}-finished`, {
        detail: { skipped: false },
      });
      dispatchEvent(stopEvent);
      return true;
    }
    return false;
  }

  stopAll() {
    this._classes.forEach((c) => this.stop(c));
  }

  skip(className: string) {
    if (this._classes.includes(className)) {
      const index = this._classes.indexOf(className);
      let ruleCss = this._classSheet.cssRules[index].cssText;
      ruleCss = ruleCss.replace(/(infinite|\ds)/, '0s');
      this._classSheet.deleteRule(index);
      this._classSheet.insertRule(ruleCss, index);
      const skipEvent = new CustomEvent(`${className}-finished`, {
        detail: { skipped: true },
      });
      dispatchEvent(skipEvent);
      return true;
    }
    return false;
  }

  skipAll() {
    this._classes.forEach((c) => this.skip(c));
  }
}
