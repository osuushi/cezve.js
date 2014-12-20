function Runtime () {
  this.methodConfigs = {};
}

Runtime.prototype.getProperty = function (obj, name) {
  var config = this.methodConfigs[name];
  if (config.allowOverwrite && name in obj) return obj[name]; // allow overwriting
  return config[name](obj);
};

function init(definitions) {
  var runtime = global.CezveRuntime || new Runtime();
  global.CezveRuntime = runtime;
  var loader = {
    addProperty: function (config) {
      runtime.methods[config.name] = config;
    },
  };

  definitions.forEach(function (fn) {
    fn(loader);
  });
}

// TODO: how are we going to pass the definitions to init and also to the parser?
