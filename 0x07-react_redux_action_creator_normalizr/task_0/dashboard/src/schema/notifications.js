import * as notifsData from '../../../../notifications.json';


export default function getAllNotificationsByUser(userId) {
    return notifsData.default.filter((notif) => notif.author.id === userId).map((notif) => notif.context);
}
