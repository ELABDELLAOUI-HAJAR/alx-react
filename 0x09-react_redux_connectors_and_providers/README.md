# Project: 0x09. React Redux Connectors and Providers

## Resources

* Redux CreateStore
* Redux Connect
* Redux Provider
* Redux Middleware
* Redux Thunk
* Redux devtools
* Redux Reselect

## Tasks

| Task | File |
| ---- | ---- |
| 0. Write mapStateToProps | [task_0/dashboard/src/App/App.js](./task_0/dashboard/src/App/App.js) |
| 1. Create a small store | [task_0/dashboard/src/index.js](./task_0/dashboard/src/index.js) |
| 2. Test MapStateToProps | [task_0/dashboard/src/App/App.test.js](./task_0/dashboard/src/App/App.test.js) |
| 3. Update mapStateToProps | [task_1/dashboard/src/App/App.js](./task_1/dashboard/src/App/App.js) |
| 4. Connect your actions creators | [task_1/dashboard/src/App/App.js](./task_1/dashboard/src/App/App.js) |
| 5. Refactor your code | [task_1/dashboard/src/App/App.js](./task_1/dashboard/src/App/App.js) |
| 6. Update your tests | [task_1/dashboard/src/App/App.test.js](./task_1/dashboard/src/App/App.test.js) |
| 7. Async actions & Thunk middleware | [task_2/dashboard/src/index.js](./task_2/dashboard/src/index.js) |
| 8. Connect LoginRequest to the App | [task_2/dashboard/src/App/App.js](./task_2/dashboard/src/App/App.js) |
| 9. Connect user state to the Footer | [task_2/dashboard/src/Footer/Footer.js](./task_2/dashboard/src/Footer/Footer.js) |
| 10. Connect Logout action creator to the Header | [task_2/dashboard/src/Header/Header.js](./task_2/dashboard/src/Header/Header.js) |
| 11. Modify the uiReducer | [task_2/dashboard/src/reducers/uiReducer.js](./task_2/dashboard/src/reducers/uiReducer.js) |
| 12. Modify the test suites | [task_2/dashboard/src/App/App.test.js](./task_2/dashboard/src/App/App.test.js), [task_2/dashboard/src/Footer/Footer.test.js](./task_2/dashboard/src/Footer/Footer.test.js), [task_2/dashboard/src/Header/Header.test.js](./task_2/dashboard/src/Header/Header.test.js), [task_2/dashboard/src/reducers/uiReducer.test.js](./task_2/dashboard/src/reducers/uiReducer.test.js) |
| 13. Understand how to use the Redux Chrome extension | [task_3/dashboard/src/index.js](./task_3/dashboard/src/index.js) |
| 14. Combine store: Root reducer | [task_4/dashboard/src/reducers/rootReducer.js](./task_4/dashboard/src/reducers/rootReducer.js) |
| 15. Combine store: modify the application | [task_4/dashboard/src/index.js](./task_4/dashboard/src/index.js) |
| 16. Combine store: write the tests | [task_4/dashboard/src/App/App.test.js](./task_4/dashboard/src/App/App.test.js), [task_4/dashboard/src/reducers/rootReducer.test.js](./task_4/dashboard/src/reducers/rootReducer.test.js) |
| 17. Connect notifications: New Action Creator | [task_5/dashboard/src/actions/notificationActionCreators.js](./task_5/dashboard/src/actions/notificationActionCreators.js) |
| 18. Connect notifications: Improve reducer | [task_5/dashboard/src/reducers/notificationReducer.js](./task_5/dashboard/src/reducers/notificationReducer.js) |
| 19. Connect notifications to the reducer | [task_5/dashboard/src/Notifications/Notifications.js](./task_5/dashboard/src/Notifications/Notifications.js) |
| 20. Connect notifications: clean up | [task_5/dashboard/src/App/App.js](./task_5/dashboard/src/App/App.js) |
| 21. Connect notifications: update the test suites | [task_5/dashboard/src/reducers/notificationReducer.test.js](./task_5/dashboard/src/reducers/notificationReducer.test.js), [task_5/dashboard/src/App/App.test.js](./task_5/dashboard/src/App/App.test.js), [task_5/dashboard/src/Notifications/Notifications.js](./task_5/dashboard/src/Notifications/Notifications.js), [task_5/dashboard/src/Notifications/Notifications.test.js](./task_5/dashboard/src/Notifications/Notifications.test.js), [task_5/dashboard/src/actions/notificationActionCreators.test.js](./task_5/dashboard/src/actions/notificationActionCreators.test.js) |
| 22. Selectors | [task_6/dashboard/src/Notifications/Notifications.js](./task_6/dashboard/src/Notifications/Notifications.js), [task_6/dashboard/src/Notifications/Notifications.test.js](./task_6/dashboard/src/Notifications/Notifications.test.js) |
| 23. Connect courses: create a course selector | [task_7/dashboard/src/selectors/courseSelector.js](./task_7/dashboard/src/selectors/courseSelector.js), [task_7/dashboard/src/selectors/courseSelector.test.js](./task_7/dashboard/src/selectors/courseSelector.test.js) |
| 24. Connect courses: create a fetch courses function | [task_7/dashboard/src/actions/courseActionCreators.js](./task_7/dashboard/src/actions/courseActionCreators.js), [task_7/dashboard/src/actions/courseActionCreators.test.js](./task_7/dashboard/src/actions/courseActionCreators.test.js) |
| 25. Connect the courses component | [task_7/dashboard/src/CourseList/CourseList.js](./task_7/dashboard/src/CourseList/CourseList.js), [task_7/dashboard/src/CourseList/CourseList.test.js](./task_7/dashboard/src/CourseList/CourseList.test.js) |
| 26. Memoized selectors: Redux Reselect | [task_8/dashboard/src/selectors/notificationSelector.js](./task_8/dashboard/src/selectors/notificationSelector.js) |
| 27. Memoized selectors: update the UI | [task_8/dashboard/src/Notifications/Notifications.js](./task_8/dashboard/src/Notifications/Notifications.js) |
| 28. Memoized selectors: update the test suite | [task_8/dashboard/src/Notifications/Notifications.test.js](./task_8/dashboard/src/Notifications/Notifications.test.js), [task_8/dashboard/src/selectors/notificationSelector.test.js](./task_8/dashboard/src/selectors/notificationSelector.test.js) |
| 29. Container/Component | [task_9/dashboard/src/Notifications/Notifications.js](./task_9/dashboard/src/Notifications/Notifications.js), [task_9/dashboard/src/Notifications/Notifications.test.js](./task_9/dashboard/src/Notifications/Notifications.test.js), [task_9/dashboard/src/Notifications/NotificationsContainer.js](./task_9/dashboard/src/Notifications/NotificationsContainer.js), [task_9/dashboard/src/Notifications/NotificationsContainer.test.js](./task_9/dashboard/src/Notifications/NotificationsContainer.test.js) |
