"use strict";
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function (name) {
        return this.greeting + " " + name;
    };
    return Greeter;
}());
exports.__esModule = true;
exports["default"] = Greeter;
