import { Router } from 'express';
import { getBlogsListHandler } from './handlers/get-blog-list.hadler';
import { getBlogByIdHandler } from './handlers/get-blog-by-id.handler';
import { createBlogHandler } from './handlers/create-blog.handler';
import { updateBlogHandler } from './handlers/update-blog.handler';
import { deleteBlogHandler } from './handlers/delete-blog.handler';

export const blogsRouter = Router({});

blogsRouter
  .get('', getBlogsListHandler)

  .get('/:id', getBlogByIdHandler)
  .post('', createBlogHandler)

  .put('/:id', updateBlogHandler)

  .delete('/:id', deleteBlogHandler);
