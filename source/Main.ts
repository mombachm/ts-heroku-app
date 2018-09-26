import Constants from "./utils/Constants";

class Main {
  private arguments: string[]

  constructor() {
    this.initArguments();
    console.log(this.arguments);
  }

  private initArguments() {
    this.arguments = process.argv;
    this.arguments.splice(0, 2);
  }
}
export default new Main();