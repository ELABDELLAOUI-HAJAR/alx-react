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
  return notifsData.default.filter((notif) => notif.author.id === userId).map((notif) => notif.context);
}

export { normalizedData };
