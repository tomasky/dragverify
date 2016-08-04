/// <reference path="../typings/globals/mocha/index.d.ts" />
"use strict";
/// <reference path="../typings/modules/chai/index.d.ts" />
var index_1 = require("../src/index");
var chai = require('chai');
/**
 * Globals
 */
var expect = chai.expect;
/**
 * Unit tests
 */
describe('User Model Unit Tests:', function () {
    describe('2 + 4', function () {
        it('should be 6', function (done) {
            expect(2 + 4).to.equals(6);
            done();
        });
        it('should not be 7', function (done) {
            expect(2 + 4).to.not.equals(7);
            done();
        });
    });
});
describe('typescript-node', function () {
    var subject;
    beforeEach(function () {
        subject = new index_1["default"]("Hello");
    });
    it('should execute', function () {
        var ret = subject.greet("wooz");
        ret == "2Hello wooz";
    });
});
