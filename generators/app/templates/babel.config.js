const ignore = [
    '*.min.js', '*.umd.js'
];
const plugins = [
];
const presets = [
    '@babel/env', '@babel/react'
];
module.exports = function (api) {
    api.cache(true);
    return {
        compact: false, ignore, plugins, presets
    };
};
