import { Router } from 'express';
import { getPostByIdHandler } from './handlers/get-post-by-id.handler';
import { getPostsListHandler } from './handlers/get-post-list.hadler';
import { updatePostHandler } from './handlers/update-post.handler';
import { createPostHandler } from './handlers/create-post.handler';
import { deletePostHandler } from './handlers/delete-post.handler';

export const postsRouter = Router({});

postsRouter
  .get('', getPostsListHandler)

  .get('/:id', getPostByIdHandler)
  .post('', createPostHandler)

  .put('/:id', updatePostHandler)

  .delete('/:id', deletePostHandler);
