const path = require("path");

const extraNodeModules = {
  shared: path.resolve(__dirname + '/../shared'),
};

const watchFolders = [
  path.resolve(__dirname + '/../shared'),
];

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    extraNodeModules: new Proxy(extraNodeModules, {
      get: (target, name) => {
        return name in target
          ? target[name]
          : path.join(process.cwd(), `node_modules/${name}`)
      }
    }),
  },
  watchFolders
};
