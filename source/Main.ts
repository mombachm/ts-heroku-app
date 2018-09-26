import Constants from "./utils/Constants";

class Main {
  private arguments: string[]
  private express: any = require('express');
  private app: any;

  constructor() {
    this.initApp();
  }

  private initApp() {
    this.app = this.express();

    // set the port of our application
    // process.env.PORT lets the port be set by Heroku
    var port = process.env.PORT || 8080;

    // set the view engine to ejs
    this.app.set('view engine', 'ejs');

    // make express look in the public directory for assets (css/js/img)
    this.app.use(this.express.static(__dirname + '/public'));

    // set the home page route
    this.app.get('/', (req: any, res: any) => {

      // ejs render automatically looks in the views folder
      res.render('index', {test: this.arguments});
    });

    this.app.listen(port, () => {
      console.log('Our app is running on http://localhost:' + port);
    });
  }
}
export default new Main();