import { combineReducers } from 'redux';
import ui from './uiReducer';
import notifications from './notificationReducer';
import courses from './courseReducer';

describe('Test rootReducer', () => {
  let rootReducer;
  beforeEach(() => {
    rootReducer = combineReducers({
      ui,
      notifications,
      courses,
    });
  });

  it("Test root reducer's initial state's structure", () => {
    const received = Object.keys(rootReducer());
    const expected = ['ui', 'notifications', 'courses'];
    expect(received).toEqual(expected);
  });
});
