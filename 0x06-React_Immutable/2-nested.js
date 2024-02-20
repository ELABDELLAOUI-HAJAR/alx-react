import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  try {
    return fromJS(object).getIn(array);
  } catch (error) {
    return undefined;
  }
}
