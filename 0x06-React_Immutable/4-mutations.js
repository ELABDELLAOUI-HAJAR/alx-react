import { fromJS } from 'immutable';

export const map = fromJS({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

export const map2 = map.withMutations((myMap) => {
  myMap.setIn(['2'], 'Benjamin');
  myMap.setIn(['4'], 'Oliver');
});
