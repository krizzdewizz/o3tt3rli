const o3 = window.o3 || {};
(mod => {

    const COUNT_UNLOCK_CLICKS = 3;
    const STORAGE_KEY = 'o3-xon';

    Object.defineProperty(mod, 'xOn', {
        get: () => localStorage.getItem(STORAGE_KEY) || undefined,
        set: value => value ? localStorage.setItem(STORAGE_KEY, value) : localStorage.removeItem(STORAGE_KEY)
    })

    let unlockCounter = 3;
    const classes = [undefined, 'x', 'latazz'];

    const toggleXUpdate = () => {
        const {xOn} = mod;
        if (xOn) {
            document.body.classList.add(`o3-${xOn}`);
        } else {
            classes.forEach(clz => document.body.classList.remove(`o3-${clz}`));
        }
    };

    let timer;

    const toggleX = () => {
        clearTimeout(timer);
        timer = setTimeout(() => unlockCounter = COUNT_UNLOCK_CLICKS, 2000);

        if (unlockCounter <= 1) {
            const clz = mod.xOn;
            const nextIndex = (classes.indexOf(clz) + 1) % classes.length;

            mod.xOn = classes[nextIndex];
            toggleXUpdate();
            unlockCounter = COUNT_UNLOCK_CLICKS;
        } else {
            unlockCounter--;
        }
    };

    toggleXUpdate();

    mod.toggleXUpdate = toggleXUpdate;
    mod.toggleX = toggleX
})(o3)