// Definition for an underscore wrapper property
// i.e instead of _.pluck(foo, 'bar'), you can use foo._.pluck('bar')

module.exports = function (cezve) {
  var _ = require('underscore');

  cezve.addProperty({
    name: '_', // name of the property
    allowOverwrite: true, // client code can overwrite this property on a particular object
    method: function (obj) { // getter
      return _(obj);
    },
  });
};
