import express, { NextFunction, Request, Response } from "express";
const app = express();
const port = 3000;

// parsers
app.use(express.json());
app.use(express.text());

// middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);
  next();
};

app.get("/", logger, (req: Request, res: Response) => {
  // console.log(req.params);
  // console.log(req.query.email);
  res.send("Hello developers");
});

app.post("/", logger, (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: "successfully received data",
  });
});

export default app;
