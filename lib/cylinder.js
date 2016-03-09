var defaults = require('./defaults')
var Prism = require('./prism')

module.exports = Prism.extend({

  init: function Cylinder (options) {
    options = options || {}
    options.n = options.a || defaults.a
    Prism.call(this, options)
  }

})
