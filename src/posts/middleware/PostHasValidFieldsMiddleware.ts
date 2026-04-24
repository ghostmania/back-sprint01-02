import { NextFunction } from 'express';
import { HttpStatus } from '../../core/types/http-statuses';
import { createErrorMessages } from '../../core/utils/error.utils';
import { postInputDtoValidation } from '../validation/postInputDtoValidation';
import { Request, Response } from 'express';

export const PostHasValidFIeldsMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errors = postInputDtoValidation(req.body);

  if (errors.length > 0) {
    res.status(HttpStatus.BadRequest).send(createErrorMessages(errors));
    return;
  }
  next(); // Успешная авторизация, продолжаем
};
