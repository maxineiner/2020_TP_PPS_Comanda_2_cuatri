const express = require('express');
const bodyparser = require('body-parser');
const { admin } = require('./firebase-config');

const app = express()
app.use(bodyparser.json())

const port = 5000
const notification_options = {
    priority: "high",
    timeToLive: 60 * 60 * 24
};

app.get('/', function (req, res)
{
    res.send('Home');
});

app.get('/test', function (req, res)
{
    const registrationToken = "XXXXX";
    const options = notification_options;

    const message_notification = {
        notification: {
            title: "Sarasa",
            body: "Hola mundo"
        }
    };

    admin.messaging().sendToDevice(registrationToken, message_notification, options)
        .then(response =>
        {
            res.status(200).send("Notification sent successfully")
        })
        .catch(error =>
        {
            console.log(error);
        });
});

app.post('/clientes', function (req, res)
{
    const options = notification_options;
    const payload = req.body;


    console.log(payload);

    admin.messaging().sendToTopic('jefes', payload, options)
        .then(response =>
        {
            res.status(200).send("Notification sent successfully")
        })
        .catch(error =>
        {
            console.log(error);
        });
});

app.post('/jefes', function (req, res)
{
    const options = notification_options;
    const payload = req.body;


    console.log(payload);

    admin.messaging().sendToTopic('jefes', payload, options)
        .then(response =>
        {
            res.status(200).send("Notification sent successfully")
        })
        .catch(error =>
        {
            console.log(error);
        });
});

app.post('/cocineros', function (req, res)
{
    const options = notification_options;
    const payload = req.body;


    console.log(payload);

    admin.messaging().sendToTopic('cocineros', payload, options)
        .then(response =>
        {
            res.status(200).send("Notification sent successfully")
        })
        .catch(error =>
        {
            console.log(error);
        });
});

app.post('/bartenders', function (req, res)
{
    const options = notification_options;
    const payload = req.body;


    console.log(payload);

    admin.messaging().sendToTopic('bartenders', payload, options)
        .then(response =>
        {
            res.status(200).send("Notification sent successfully")
        })
        .catch(error =>
        {
            console.log(error);
        });
});

app.post('/mozos', function (req, res)
{
    const options = notification_options;
    const payload = req.body;


    console.log(payload);

    admin.messaging().sendToTopic('mozos', payload, options)
        .then(response =>
        {
            res.status(200).send("Notification sent successfully")
        })
        .catch(error =>
        {
            console.log(error);
        });
});

app.post('/firebase/notification', (req, res) =>
{
    //const registrationToken = req.body.registrationToken
    const registrationToken = "XXXXXX";
    const message = req.body.message
    const options = notification_options;

    const payload = {
        notification: {
            title: 'Nuevo Cliente',
            body: `Pepito se acaba de registrar`
        },
    }

    admin.messaging().sendToDevice(registrationToken, message, options)
        .then(response =>
        {

            res.status(200).send("Notification sent successfully")

        })
        .catch(error =>
        {
            console.log(error);
        });
})

// Codigo necesario para deploy en Heroku
// app.listen(process.env.PORT, () =>
// {
//     console.log("listening to port" + port)
// })

// Codigo necesario para funcionamiento en localhost
app.listen(5000, () =>
{
    console.log("listening to port" + port)
})
