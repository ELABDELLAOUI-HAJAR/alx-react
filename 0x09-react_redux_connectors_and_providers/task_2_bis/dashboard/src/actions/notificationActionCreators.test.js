import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from "./notificationActionTypes";
import { markAsAread, setNotificationFilter } from "./notificationActionCreators";

describe('Tests for notificationActionCreators actions', () => {
  it('Verify that call markAsAread return the correct data', () => {
    const expectOutput = {
      type: MARK_AS_READ,
      index: 1
    };

    expect(markAsAread(1)).toEqual(expectOutput);
  });

  it('Verify that call setNotificationFilter return the correct data', () => {
    const expectOutput = {
      type: SET_TYPE_FILTER,
      filter: "DEFAULT",
    };

    expect(setNotificationFilter(NotificationTypeFilters.DEFAULT)).toEqual(expectOutput);
  });
});
