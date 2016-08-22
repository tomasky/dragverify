import * as fst from "./lib/reflect";
//import fs = require("fs");
export  interface IGreeterService {
          greet(name: string):string
  }

export class Greeter implements IGreeterService {
    @fst.format("Hello:%s")
    greeting: string
    constructor(message: string) {
        this.greeting = message
    }
    greet(){
        let formatString = fst.getFormat(this, "greeting");
        return formatString.replace("%s", this.greeting);
    }
    greetbyname(name: string): string {
        return this.greeting + ":" + name
    }
}

