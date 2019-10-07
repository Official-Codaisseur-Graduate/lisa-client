## How to get Started!?

1) Git clone both the [CLIENT](https://github.com/Official-Codaisseur-Graduate/lisa-client) and the [SERVER](https://github.com/Official-Codaisseur-Graduate/lisa-server)

2) npm install for both, to install the used packages.

3) start the database as mentioned with the below command:

`$ docker run --rm -e POSTGRES_PASSWORD=secret -p 5432:5432 postgres`

4) Start the server and double check if everything is working.

5) Run npm start to start the client and add some mock data on any day. First, add dishes by type in the lower dropdown menu with the white background. Then, select a date and use the upper form to add these dishes to that day. If your added dishes don't appear in the dropdown menu, you need to refresh the page.

6) Make sure to make the server available online using either serveo or a heroku link. 
To use Serveo copy this: `ssh -R 80:localhost:5000 serveo.net` (the 5000 is the port that the server runs on). Then copy it in a empty terminal and run it by typing 'yes'. The https link in green is your server URL.

7) set up dialogflow: 
To edit LISA, you will need to log in with her Google account [here](https://dialogflow.cloud.google.com/#/agent/e4ee0583-d68d-4127-a8bd-49f3522ded28/intents).

Google ID: lisa.vitalis.assistant@gmail.com
For the password, please contact Rein.

To connect LISA to your server as a webhook, add <!your server URL!>/google-menus in the fulfillment tab.
(scroll down to see the save button).

7) Talk to google home assistant (this can also be the app on your mobile device but make sure to sign in as Lisa) and ask 'Hey google, praat met de keuken' wich means 'Hey Google, talk to the kitchen'. It only works in Dutch.

8) Ask what the menu is for the day you made some items for. You can also ask for just the starter, main-course, dessert for a specific day.

9) Good luck

For more detailed information please read the more extensive README's
- [CLIENT README](https://github.com/Official-Codaisseur-Graduate/lisa-client/blob/master/README.md)
- [SERVER README](https://github.com/Official-Codaisseur-Graduate/lisa-server/blob/master/readme.md)
- [DIALOGFLOW README](https://github.com/Official-Codaisseur-Graduate/lisa-server/blob/master/dialogflow-README/README.md)
