///<reference path='../typings/globals/node/index.d.ts'/>
import fs = require("fs");
declare module example {
	interface IGreeterService {
		greet(name: string):string;
	}
}

export default class Greeter implements example.IGreeterService {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet(name: string): string {
        return this.greeting + " " + name;
    }
}

