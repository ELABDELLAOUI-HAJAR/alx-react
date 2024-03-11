import * as uiActions from '../actions/uiActionCreators';
import * as courseActions from '../actions/courseActionCreators';
import uiReducer, { initialState } from './uiReducer';

describe('Tests for uiReducer', () => {
  it('Verify that the uiReducer returns the initial state when no action is passed', () => {
    const returnedState = uiReducer();
    expect(returnedState.toJS()).toStrictEqual(initialState.toJS());
  });

  it('Verify that the uiReducer returns the initial state when the action SELECT_COURSE is passed', () => {
    const returnedState = uiReducer(undefined, courseActions.selectCourse(1));
    expect(returnedState.toJS()).toStrictEqual(initialState.toJS());
  });

  it('Verify the state returned by the uiReducer, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property', () => {
    const returnedState = uiReducer(undefined, uiActions.displayNotificationDrawer());
    expect(returnedState.toJS()).toStrictEqual({ ...initialState.toJS(), isNotificationDrawerVisible: true });
  });

  it('Verify the state returned by the uiReducer, when the action LOGIN is passed', () => {
    const returnedState = uiReducer(undefined, uiActions.login('hajar@test.ma', 'HEA123'));
    expect(returnedState.get('isUserLoggedIn')).toBe(true);
    expect(returnedState.get('user')).toEqual({ email: 'hajar@test.ma', password: 'HEA123' });
  });
});
