var defaults = require('./defaults')
var Shape = require('./shape')
var Prism = require('./prism')

module.exports = Prism.extend({

  init: function Cube (options) {
    options = options || {}
    options.n = 4
    var r = (options.h || defaults.h) / 2
    this.shapes = [new Shape({
      points: [[-r, -r, 0], [-r, r, 0], [r, r, 0], [r, -r, 0]],
      part: this
    })]
    Prism.call(this, options)
  }

})
