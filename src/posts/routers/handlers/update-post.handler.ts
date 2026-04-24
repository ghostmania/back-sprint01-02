import { HttpStatus } from '../../../core/types/http-statuses';
import { createErrorMessages } from '../../../core/utils/error.utils';
import { Request, Response } from 'express';
import { postInputDtoValidation } from '../../validation/postInputDtoValidation';
import { db } from '../../../db/posts.db';

export function updatePostHandler(req: Request, res: Response) {
  const id = req.params.id;
  const index = db.posts.findIndex((v) => v.id === id);

  if (index === -1) {
    res
      .status(HttpStatus.NotFound)
      .send(createErrorMessages([{ field: 'id', message: 'Blog not found' }]));
    return;
  }
  const post = db.posts[index];

  const errors = postInputDtoValidation({
    ...req.body,
  });

  if (errors.length > 0) {
    res.status(HttpStatus.BadRequest).send(createErrorMessages(errors));
    return;
  }

  post.title = req.body.title;
  post.shortDescription = req.body.shortDescription;
  post.content = req.body.content;

  res.sendStatus(HttpStatus.NoContent);
}
