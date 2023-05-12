const figlet = require("figlet");
const toLines = text =>
    text
        .split('\n')
        .filter(it => !!it)
        .map(line => Array.from(line));

const toHtml = text => {
    const lines = toLines(text)

    return lines.map(line => `<div class="line">${line.map(c => `<span class="char gigi-glow ${c === 'o' ? 'i-point' : ''}">${c === ' ' ? '&nbsp;' : c}</span>`).join('\n')}</div>`).join('\n')
}

const component = (text, font) => {
    const formatted = figlet.textSync(text, {
        font
    });

    const cmpName = text.toLowerCase().replace(/ /g, '-')

    const html = toHtml(formatted);
    return `(() => {
class BannerComponent extends HTMLElement {
    connectedCallback() {
        this.classList.add('banner')
        this.innerHTML = \`${html}\`;
    }
}
window.customElements.define('${cmpName}-banner', BannerComponent);
})()`;
};
module.exports = {
    component
};
