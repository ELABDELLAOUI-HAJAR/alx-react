import { schema, normalize } from 'normalizr';
import * as notificationsData from '../../../../notifications.json';

const notifications = notificationsData.default;

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notificationSchema = [new schema.Entity('notifications', { author: user, context: message })];

export const normalizedNotifications = normalize(notifications, notificationSchema);

export default function getAllNotificationsByUser(userId) {
  const userMessages = [];
  const notifications = normalizedNotifications.entities.notifications;
  const messages = normalizedNotifications.entities.messages;

  for (const guid in notifications) {
    if (notifications[guid].author === userId) {
      userMessages.push(messages[notifications[guid].context]);
    }
  }

  return userMessages;
}

export const notificationsNormalizer = (data) => {
  return normalize(data, notificationSchema);
};
