"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Main = /** @class */ (function () {
    function Main() {
        this.express = require('express');
        this.initApp();
    }
    Main.prototype.initApp = function () {
        var _this = this;
        this.app = this.express();
        // set the port of our application
        // process.env.PORT lets the port be set by Heroku
        var port = process.env.PORT || 8080;
        // set the view engine to ejs
        this.app.set('view engine', 'ejs');
        // make express look in the public directory for assets (css/js/img)
        this.app.use(this.express.static(__dirname + '/public'));
        // set the home page route
        this.app.get('/', function (req, res) {
            // ejs render automatically looks in the views folder
            console.log(_this.arguments);
            res.render('index', { test: "Var Test." });
        });
        this.app.listen(port, function () {
            console.log('Our app is running on http://localhost:' + port);
        });
    };
    return Main;
}());
exports.default = new Main();
//# sourceMappingURL=Main.js.map