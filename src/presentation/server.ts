import express, { Router } from "express";

export class Server {
  private readonly app = express();
  constructor(private PORT: number, private routes: Router) {}

  start() {
    this.app.use(express.json()); // raw
    this.app.use(express.urlencoded({ extended: true })); // x-www-form-urlencoded

    this.app.use(this.routes);

    this.app.listen(this.PORT, () => {
      console.log("Working on port:", this.PORT);
    });
  }
}
