const {component} = require('./banner')
const {writeFileSync} = require('fs')
const {join} = require('path')

const FONT_CYBERLARGE = "Cyberlarge";
const FONT_MINI = "Mini";

const banner = text =>
    writeFileSync(
        join(__dirname, `../libs/web/src/assets/scripts/banner/${text.toLowerCase().replace(/ /g, '-')}.banner.js`),
        component(text, FONT_MINI)
    );

banner('o3tt3rli')
banner('music')
banner('formation')