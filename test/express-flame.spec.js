var sinon = require("sinon");
var should = require("chai").should();
import {
  ExpressFlame as e2f
}
from "../src";
var log = require("debug")("flame:express-flame");
describe("Express-Flame", function() {

  const req = {};
  const res = {};
  let next;
  let p;

  function express_method(req, res, next) {
    log("express_method was called");
    next();
  }

  const flame_method = e2f(express_method);

  beforeEach(function() {
    next = sinon.spy();
    p = flame_method(req, res, next);
  })

  it("should be able to call an express like method as a FlameLet Method", async function(done) {

    (p instanceof Promise).should.equal(true);
    p.then(function() {

    }).catch(function() {
      log("error was thrown calling express method");
    }).then(function() {
      next.callCount.should.equal(1);
    }).catch(function() {

    }).then(function() {
      done();
    })
  })

})
