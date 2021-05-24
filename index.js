const oldJSHook = require.extensions[".js"];

const loader = (module, filename) => {
  const oldJSCompile = module._compile;
  module._compile = (code, file) => {
    code = `module.exports = \`\r${code}\`;`;
    module._compile = oldJSCompile;
    module._compile(code, file);
  };
  oldJSHook(module, filename);
};

exports = module.exports = (...extensions) => {
  extensions.forEach(extension => {
    require.extensions[extension] = loader;
  });
};
