var defaults = require('./defaults')
var Shape = require('./shape')

module.exports = Shape.extend({

  init: function Polygon (options) {
    this.points = options.points
    if (this.points) {
      this.n = this.points.length
    } else {
      var r = this.r = options.r || defaults.r
      var n = this.n = options.n || defaults.polyN
      var points = this.points = options.points = new Array(n)
      var radians = Math.PI * 2 / n
      for (var i = 0; i < n; i++) {
        var angle = i * radians
        points[i] = [Math.cos(angle) * r, Math.sin(angle) * r, 0]
      }
    }
    Shape.call(this, options)
  }

})
