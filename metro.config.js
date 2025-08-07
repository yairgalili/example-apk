const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
    resolver: {
        sourceExts: ['js', 'jsx', 'json', 'ts', 'tsx', 'cjs', 'mjs','ttf','bvh'],
        assetExts: ['glb', 'gltf', 'png', 'jpg','fbx','bvh'],
      },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
