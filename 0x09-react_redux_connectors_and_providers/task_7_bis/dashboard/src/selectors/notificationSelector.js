export const filterTypeSelected = (state) => {
  return state.get('filter');
};

export const getNotifications = (state) => {
  return Object.values(state.getIn(['notifications', 'entities', 'messages']).toJS());
};

export const getUnreadNotifications = (state) => {
  return Object.values(state.getIn(['notifications', 'entities', 'messages']).toJS()).filter((notif) => !notif.isRead);
};
