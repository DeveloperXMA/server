import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Routes } from './routes/insRoutes';
import * as mongoose from 'mongoose';
import * as cors from 'cors';

class App {

  public app: express.Application;
  public route: Routes = new Routes();
  public mongoUrl: string = 'mongodb://localhost/INSdb';

  constructor() {
    this.app = express();
    this.app.use(cors());
    this.config();
    this.route.routes(this.app);
    this.mongoSetup();
  }

  private mongoSetup(): void {
    mongoose.Promise = global.Promise;
    mongoose.connect(this.mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }

  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());

    // support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new App().app;