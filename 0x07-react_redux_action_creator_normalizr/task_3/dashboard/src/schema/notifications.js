import * as notifsData from '../../../../notifications.json';
import { normalize, schema } from 'normalizr'

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, {
  idAttribute: "guid"
});
const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

const normalizedData = normalize(notifsData, [notification]);

export default function getAllNotificationsByUser(userId) {

  const notifications = normalizedData.entities.notifications;
  const messages = normalizedData.entities.messages;

  return Object.values(notifications).reduce((result, notif) => {
    if (notif.author === userId) {
      result.push(messages[notif.context]);
    }
    return result;
  }, []);

}

export { normalizedData };
