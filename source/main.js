"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Main = /** @class */ (function () {
    function Main() {
        this.initArguments();
        console.log(this.arguments);
    }
    Main.prototype.initArguments = function () {
        this.arguments = process.argv;
        this.arguments.splice(0, 2);
    };
    return Main;
}());
exports.default = new Main();
//# sourceMappingURL=Main.js.map