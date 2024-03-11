import rootReducer from "./rootReducer";
import { fromJS } from 'immutable';

describe('Tests for rootReducer', () => {
  it("Test root reducer's initial state's structure", () => {
    const received = Object.keys(rootReducer());
    const expected = ['courses', 'notifications', 'ui'];
    expect(received).toEqual(expected);
  });
});
