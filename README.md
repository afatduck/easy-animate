# Easy Animations
A simple library to make using CSS animations easier. It can be used to define, start and stop animations.

Browser only. Supporded on all modern browsers except IE.

You can see a demo [here](https://afatduck.github.io/easy-animate/demo/).

## Contents

1. [Features](#Features)
2. [Installation](#Installation)
3. [How Does It Work?](#how-does-it-work)
4. [Usage](#usage)
    1. [Animation Properties](#animation-properties)
    2. [Keyframes](#keyframes)
    3. [Return values](#return-values)
    4. [Auto remove class](#auto-remove-class)
    5. [Stopping an animation](#stopping-an-animation)
    6. [Utilities](#utilities)


## Features

- Small size, one dependency.
- Easy to use.
- Define animation keyframes within JavaScript.
- Start and stop animations.
- Types for CSS properties.
- Callback functions for when animations are finished.

## Installation

```sh
npm install easy-animate
# or
yarn add easy-animate
```

## How does it work?

The library creates two style tags in the head of the document. One for the animations and one for the keyframes.

It uses CSSStyleSheet API to manipulate the styles.

When starting an animation, the library creates a new class and applies it to all selected elements.

## Usage

The most basic example.
```ts
import EasyAnimate from 'easy-animate';

EasyAnimate.animate('.modal', 'fadeIn');
```
In this example, '.modal' is the query selector for the element to animate. 'fadeIn' is the animation name.

Beside the query selector, you can also use a DOM element.

### Animation Properties

In the previous example we only defined the animation name. Rest of the animation properties can be passed in as the third `props` argument.

```ts
EasyAnimate.animate(document.body, "fadeIn", {
    delay: 0,
    duration: .5,
    fillMode: "forwards",
    timingFunction: "ease-in-out",
    iterationCount: 1,
    direction: "normal"
    // Not all properties are required.
})
```

Properties that are not provided are derived from these defaults:
- `delay:  0`
- `duration: 1`
- `fillMode: "none"`
- `timingFunction: "ease"`
- `iterationCount: 1`
- `direction: "normal"`

You can change these defaults by calling the `changeDefaults` method.

```ts
EasyAnimate.changeDefaults({
    timingFunction: "linear",
    fillMode: "forwards"
})
```

### Keyframes

In the examples above we used keyframes which are already defined in CSS.

To define keyframes, you can use the `addKeyframes` method.

```ts
const fadeInKeyframes = EasyAnimate.addKeyframes([
    { at: 0, properties: { opacity: 0, transform: "translateY(-100%)" } },
    { at: 1, properties: { opacity: 1, transform: "translateY(0)" } }
])
```

This will define keyframes and return the animation name. You can provide the animation name as the second argument, however, the prefix will still be prepended.

Providing name that already exists will override the existing keyframes. You can also manually delete keyframes by calling the `removeKeyframes` method.

```ts
EasyAnimate.removeKeyframes(fadeInKeyframes)
// Returns weather the operation was successful.
```

### Return values

`animate` method _(or any of the substitues, see [utilities](#Utilites))_ will return an object containing the class name applied and a promise that will be resolved when the animation is finished.

_Note: Promise will be undefined if itteration count is infinite._

```ts
const { className, finished } = EasyAnimate.animate('.ball', 'bounce');

finished?.then(() => {
    console.log('Animation done.');
}
```

### Auto remove class

If you want class to be automatically removed after the animation is finished, you can set last argument to `true`.

```ts
EasyAnimate.animate('.notification', 'slideIn', {}, true);
```

If you start a new animation on the same element, the old animation will be removed.

### Stopping an animation

To stop an animation, you can either call the `stop` or `skip` method. The `stop` method will entirely remove the animation class from the element. The `skip` method will only set the animation duration to 0. This means that if you use `fillMode` `"forwards"` or `"both"`, the animation will keep it's final state. The `skip` method will also resolve the promise, whlse the `stop` method will not.

```ts
const { className, finished } = EasyAnimate.animate('.ball', 'bounce');

EasyAnimate.stop(className);
// True
EasyAnimate.skip(className);
// False because the class is no longer defined.
```

### Utilities

You can run `skipAll` or `stopAll` to stop all animations.

To change prefix which is prepended to animation names, you can call the `changePrefix` method.

```ts
EasyAnimate.changePrefix('my-animation-');
```

There are `infinite` and `reverse` methods that behave exactly like the `animate` method. The only difference is that `infinite` will set iteration count to `"infinite"` and `reverse` will set the direction to `"reverse"`.

When setting `timingFunction`, you can use a function to define steps or cubic bezier in a more readable way.

```ts
import { cubicBezier, steps } from 'easy-animate';

EasyAnimate.animate(".bar", "grow", {
    timingFunction: steps(10, "jump-start")
    // Or
    timingFunction: cubicBezier(0.1, 0.7, 0.1, 1)
})
