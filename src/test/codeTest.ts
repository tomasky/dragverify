import * as fst from "../index";
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

describe('Greeter-test', function () {
  var subject : fst.Greeter;
    beforeEach(function () {
       subject = new fst.Greeter("Hello");
    });
  it('greet string should equals', function () {
     var ret =  subject.greet("wooz");
       expect(ret).to.equals("Hello:wooz");
  })
})
