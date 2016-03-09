/* global describe it */
var Cube = require('../lib/cube')
var Prism = require('../lib/prism')
var Cylinder = require('../lib/cylinder')

describe('Cube', function () {
  it('makes a cube', function (done) {
    var o = new Cube()
    o.write('makey-cube.stl', done)
  })
})

describe('Prism', function () {
  it('makes a prism', function (done) {
    var o = new Prism({n: 6})
    o.write('makey-prism.stl', done)
  })
})

describe('Cylinder', function () {
  it('makes a cylinder', function (done) {
    var o = new Cylinder().scale({z: 0.1})
    o.write('makey-cylinder.stl', done)
  })
})
