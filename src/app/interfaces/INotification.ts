// {
//     "notification":
//     {
//       "title": "COMANDERA",
//       "body": "Soy un mensajito"
//     }
// }

export interface INotificacion
{
    notification: NotificationMessagePayload;
    data?: any;
}

interface NotificationMessagePayload
{
    title: string;
    body: string;
    clickAction?: string; // Handler de la notificacion
    badge?: string;
    bodyLocArgs?: string;
    bodyLocKey?: string;
    color?: string;
    icon?: string;
    sound?: string;
    tag?: string;
    titleLocArgs?: string;
    titleLocKey?: string;
}