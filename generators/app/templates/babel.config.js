const ignore = [
    '*.min.js', '*.umd.js'
];
const plugins = [
    '@babel/transform-react-jsx'
];
const presets = [
    '@babel/env'
];
module.exports = function (api) {
    api.cache(true);
    return {
        compact: false, ignore, plugins, presets
    };
};
