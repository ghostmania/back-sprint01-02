import { ValidationError } from '../types/validationError';
import { BlogInputDto } from '../dto/blog.input-dto';

export const blogInputDtoValidation = (
  data: BlogInputDto,
): ValidationError[] => {
  const errors: ValidationError[] = [];

  if (!data.name || typeof data.name !== 'string') {
    errors.push({ field: 'name', message: 'Invalid blog name' });
  }

  if (!data.description || typeof data.description !== 'string') {
    errors.push({ field: 'description', message: 'Invalid blog description' });
  }

  if (!data.websiteUrl || typeof data.websiteUrl !== 'string') {
    errors.push({ field: 'websiteUrl', message: 'Invalid blog websiteUrl' });
  }

  return errors;
};
