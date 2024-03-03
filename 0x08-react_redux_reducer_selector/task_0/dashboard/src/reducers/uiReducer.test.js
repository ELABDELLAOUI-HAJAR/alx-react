import * as uiActions from '../actions/uiActionCreators';
import * as courseActions from '../actions/courseActionCreators';
import { initialState, uiReducer } from './uiReducer';

describe('Tests for uiReducer', () => {
  it('Verify that the uiReducer returns the initial state when no action is passed', () => {
    const returnedState = uiReducer();
    expect(returnedState).toStrictEqual(initialState);
  });

  it('Verify that the uiReducer returns the initial state when the action SELECT_COURSE is passed', () => {
    const returnedState = uiReducer(undefined, courseActions.selectCourse(1));
    expect(returnedState).toStrictEqual(initialState);
  });

  it('Verify the state returned by the uiReducer, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property', () => {
    const returnedState = uiReducer(undefined, uiActions.displayNotificationDrawer());
    expect(returnedState).toStrictEqual({ ...initialState, isNotificationDrawerVisible: true });
  });
});
