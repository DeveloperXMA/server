//   /lib/controllers/crmController.ts
import * as mongoose from 'mongoose';
import { InsuranceSchema } from '../models/insModel';
import { Request, Response } from 'express';

const Insurance = mongoose.model('Insurance', InsuranceSchema);

export class InsuranceController {

  public addNewInsurance(req: Request, res: Response) {
    let newInsurance = new Insurance(req.body);
    newInsurance.save((err, insurnace) => {
      if (err) {
        res.send(err);
      }
      res.json(insurnace);
    })
  }

  public getInsurances (req: Request, res: Response) {
    Insurance.find({}, (err, insurance) => {
      if (err) {
        res.send(err);
      }
      res.json(insurance);
    })
  }
}