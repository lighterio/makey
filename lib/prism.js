var defaults = require('./defaults')
var Part = require('./part')
var Polygon = require('./polygon')

module.exports = Part.extend({

  init: function Prism (options) {
    this.n = options.n || defaults.polyN
    this.h = options.h || defaults.h
    if (!this.shapes) {
      this.shapes = [new Polygon({n: this.n, part: this})]
    }
    Part.call(this, options)

    // Pull the shape up to the part's height.
    this.shapes[0].pull({z: this.h})
  }

})
