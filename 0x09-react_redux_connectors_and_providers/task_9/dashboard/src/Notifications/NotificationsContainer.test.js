import React from 'react';
import { NotificationsContainerStateless } from './NotificationsContainer';
import { shallow } from 'enzyme';

describe('Test NotificationsContainer', () => {
  it('fetchNotifications is called when the component is mounted', () => {
    const mock = jest.fn();
    shallow(<NotificationsContainerStateless fetchNotifications={mock} />);

    expect(mock).toHaveBeenCalled();
  });
});
