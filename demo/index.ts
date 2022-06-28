import EasyAnimate, { cubicBezier, AnimationProperties } from '../src/index'

EasyAnimate.changeDefaults({
    duration: 2,
    fillMode: 'forwards'
});

const setUpDemo = (id: string, keyframes: string, props: Partial<AnimationProperties> = {}) => {
    const el = document.querySelector(`${id} .animated-object`);
    const animate = document.querySelector(`${id} .animate`)
    const infinite = document.querySelector(`${id} .infinite`)
    const reverse = document.querySelector(`${id} .reverse`)
    const stop = document.querySelector(`${id} .stop`)
    const skip = document.querySelector(`${id} .skip`)
    const msg = document.querySelector(`${id} .msg`) as HTMLParagraphElement

    let className: string | undefined;

    animate?.addEventListener("click", () => {
        const ani = EasyAnimate.animate(el as Element, keyframes, props)
        className = ani.className;
        ani.finished?.then(() => {
            msg.innerHTML = `Animation done (${new Date().toLocaleTimeString(
                'en-US',
                { hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric' }
            )})`;
        })
    })

    infinite?.addEventListener("click", () => {
        const ani = EasyAnimate.infinite(el as Element, keyframes, props)
        className = ani.className;
        ani.finished?.then(() => {
            msg.innerHTML = `Animation done (${new Date().toLocaleTimeString(
                'en-US',
                { hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric' }
            )})`;
        })
    })

    reverse?.addEventListener("click", () => {
        const ani = EasyAnimate.reverse(el as Element, keyframes, props)
        className = ani.className;
        ani.finished?.then(() => {
            msg.innerHTML = `Animation done (${new Date().toLocaleTimeString(
                'en-US',
                { hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric' }
            )})`;
        })
    })

    stop?.addEventListener("click", () => {
        if (className) EasyAnimate.stop(className)
    })

    skip?.addEventListener("click", () => {
        if (className) EasyAnimate.skip(className)
    })

}

const bounceKeyframes = EasyAnimate.addKeyframes([
    { at: 0, properties: { bottom: "0px", width: "20%" } },
    { at: 0.5, properties: { bottom: "40%", width: "19%" } },
    { at: 1, properties: { bottom: "0px", width: "20%", "background-color": "coral" } }
])

setUpDemo("#bounce", bounceKeyframes, {
    timingFunction: cubicBezier(0.3, 0, 0.3, 1)
})

const fadeInKeyframes = EasyAnimate.addKeyframes([
    { at: 0, properties: { opacity: 0, transform: "translateY(-100%)" } },
    { at: 1, properties: { opacity: 1, transform: "translateY(0)" } }
])

setUpDemo("#fade-in", fadeInKeyframes, {
    duration: 1
})

const borderKeyframes = EasyAnimate.addKeyframes([
    { at: 0, properties: { 'transform': "rotate(0deg)", filter: "blur(5px)" } },
    { at: 0.5, properties: { filter: "blur(50px)"} },
    { at: 1, properties: { 'transform': "rotate(360deg)", filter: "blur(5px)" } }
])

setUpDemo("#border", borderKeyframes, {
    duration: 5,
    timingFunction: "linear",
    fillMode: "none",
    iterationCount: 2
})
