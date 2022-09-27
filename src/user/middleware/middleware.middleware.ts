import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    console.log("middle console",authorization);

    if(!authorization) throw new HttpException("no Author token", HttpStatus.FORBIDDEN);

    console.log("收到了 authorization", authorization);
    if(authorization === 'aaaa') return next();
    else throw new HttpException("token not right  ", HttpStatus.ACCEPTED);
  }
} 
