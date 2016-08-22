import * as fst from "../index";
import * as chai from 'chai';

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
  let subject : fst.Greeter;
    beforeEach(function () {
       subject = new fst.Greeter("wooz");
    });
  it('greet string should equals', function () {
     let ret =  subject.greet();
       expect(ret).to.equals("Hello:wooz");
  })
})
