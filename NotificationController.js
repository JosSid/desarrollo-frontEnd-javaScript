import { buildNotificationView } from "./notification-view.js";
import { pubSub } from "./pubsub.js";

export class NotificationController {

    constructor(nodeElement) {
        this.notificationElement = nodeElement;

        this.subscribeToEvents()

    };

    subscribeToEvents() {
        pubSub.subscribe(pubSub.TOPICS.TWEET_LOAD_ERROR, (message) => {
            this.showNotification(message)
        })
    }
    
    showNotification(message) {
         this.notificationElement.innerHTML = buildNotificationView(message);

         //ir al DOM a por el boton
        const closeButtonElement = this.notificationElement.querySelector('.close-notification')
         //asignarle un escuchador al evento click
         closeButtonElement.addEventListener('click', () => {
            this.notificationElement.innerHTML = ''
         })
    };
};