import { Request, Response } from 'express';
import { InsuranceController } from '../controllers/insControllers';

export class Routes {

  public insuranceController = new InsuranceController();
  public routes(app): void {
    app.route('/')
    .get((req: Request, res: Response) => {
      res.status(200).send({
        message: `GET request successful`
      })
    })

    app.route('/insurances')
      .get(this.insuranceController.getInsurances)
      .post(this.insuranceController.addNewInsurance);
  }
}