import { NextFunction } from "express";
import {
  getDummyService,
  postDummyService,
  deleteDummyService,
  putDummyService,
} from "./services";

export class Controller {
  public getDummy(req: any, res: any, next: NextFunction) {
    try {
      getDummyService();
      res.status(200).send("ok");
    } catch (err) {
      res.status(400).send(err);
    }
  }

  public postDummy(req: any, res: any, next: NextFunction) {
    try {
      postDummyService();
      res.status(200).send("ok");
    } catch (err) {
      res.status(400).send(err);
    }
  }

  public putDummy(req: any, res: any, next: NextFunction) {
    try {
      putDummyService();
      res.status(200).send("ok");
    } catch (err) {
      res.status(400).send(err);
    }
  }

  public deleteDummy(req: any, res: any, next: NextFunction) {
    try {
      deleteDummyService();
      res.status(200).send("ok");
    } catch (err) {
      res.status(400).send(err);
    }
  }
}
