/// <reference path="../typings/globals/mocha/index.d.ts" />

/// <reference path="../typings/modules/chai/index.d.ts" />

import Greeter from "../src/index";
import chai = require('chai');

/**
 * Globals
 */

var expect = chai.expect;

/**
 * Unit tests
 */
describe('User Model Unit Tests:', () => {

    describe('2 + 4', () => {
        it('should be 6', (done) => {
            expect(2+4).to.equals(6);
            done();
        });

        it('should not be 7', (done) => {
            expect(2+4).to.not.equals(7);
            done();
        });
    });
});

describe('typescript-node', function () {
  var subject : Greeter;

    beforeEach(function () {
       subject = new Greeter("Hello");
    });
  it('should execute', function () {
     var ret =  subject.greet("wooz");
      ret == "2Hello wooz";
  })
})
