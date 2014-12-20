// Definition for an underscore wrapper property on all objects
module.exports = function (cezve) {
  var _ = require('underscore');

  cezve.addDefinition({
    name: '_',
    cache: true,
    method: function (obj) {
      return _(obj);
    },
  });
};
