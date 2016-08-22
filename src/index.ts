import fs = require("fs");
  interface IGreeterService {
          greet(name: string):string
  }

export class Greeter implements IGreeterService {
    greeting: string
    constructor(message: string) {
        this.greeting = message
    }
    greet(name: string): string {
        return this.greeting + ":" + name
    }
}

