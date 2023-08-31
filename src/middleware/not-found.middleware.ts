import { Request, Response, NextFunction } from "express";

export function notFoundHandler(request: Request, response: Response, next: NextFunction) {
  const message = "Resourse nout found";
  return response.status(404).send(message);
}
