import { schema, normalize } from 'normalizr';

const courseSchema = [new schema.Entity('courses')];
const coursesNormalizer = (data) => {
  return normalize(data, courseSchema);
};

export default coursesNormalizer;
