import { schema, normalize } from 'normalizr';

const courseSchema = [new schema.Entity('courses')];
export default coursesNormalizer = (data) => {
  return normalize(data, courseSchema);
};
