import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { Controller } from "./controller";

class Server {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.use(cors());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
  }

  private routes(): void {
    this.app.get("/get-dummy", new Controller().getDummy);
    this.app.post("/post-dummy", new Controller().postDummy);
    this.app.put("/put-dummy", new Controller().putDummy);
    this.app.delete("/delete-dummy", new Controller().deleteDummy);
  }

  start(): void {
    this.app.listen(5000, () =>
      console.log("[server] Application is listen on port 5000")
    );
  }
}

function main() {
  const server = new Server();
  server.start();
}

main();
