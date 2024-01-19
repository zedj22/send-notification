var admin = require("firebase-admin");

const serviceAccount = require('../config/push-notification-key.json');
const certPath = admin.credential.cert(serviceAccount);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    // Add any other configuration options if needed
}); exports.sendNotificationToUser = (user, title, body) => {
    try {
        // Ensure that body is an object and has a 'token' property

        let message = {
            token: user.body.token,
            notification: {
                title: user.body.title,
                body: user.body.body,
            },
            data: {
                orderId: "123",
                orderDate: '2022-10-20'
            }
        };

        return admin.messaging().send(message)
            .then(response => {
                console.log("Notification sent successfully", response);
                return { message: "Notification sent successfully" };
            })
            .catch(error => {
                console.error("Error sending notification", error);
                throw { message: "Error sending notification", error: error };
            });

    } catch (err) {
        console.error("Error in sendNotificationToUser", err);
        throw err;
    }
};


/*var admin = require("firebase-admin");

const serviceAccount = require('../config/push-notification-key.json');
const certPath = admin.credential.cert(serviceAccount);
//var FCM = new fcm(certPath);
exports.sendNotificationToUser = (user, title, body) => {
    try {
        let message = {
            to: user.body.token,
            notification: {
                title: "title",
                body: "body",

            }

        };
        admin.messaging().send(message)
            .then(response => {
                res.status(200).send({ message: "Notification sent successfully" });
            })
            .catch(error => {
                res.status(500).send({ message: "Error sending notification", error: error });
            });
    } catch (err) {
        throw err
    }
};
*/