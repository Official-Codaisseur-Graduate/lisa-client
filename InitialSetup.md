## How to get Started!?

1) Git clone both the [CLIENT](https://github.com/Official-Codaisseur-Graduate/lisa-client) and the [SERVER](https://github.com/Official-Codaisseur-Graduate/lisa-server)

2) npm install for both, to install the used packages.

3) start the database as mentioned with the below command:

`$ docker run --rm -e POSTGRES_PASSWORD=secret -p 5432:5432 postgres`

4) Start the server and double check if everything is working. Make sure to use either use serveo or a heroku link. Make sure to change this in the dialogflow fulfillment tab as well.

5) run npm start to start the client and add some mock data on any day.

6) Talk to google home assistant (this can also be the app on your mobile device) and ask 'Hey google, praat met de keuken' or 'Hey Google, talk to the kitchen'

7) Ask what the menu is for the day you made some items for. You can also ask for just the starter, main-course, dessert for a specific day.

8) Good luck

For more detailed information please read the more extensive README's
- [CLIENT README](https://github.com/Official-Codaisseur-Graduate/lisa-client/blob/development/README.md)
- [SERVER README](https://github.com/Official-Codaisseur-Graduate/lisa-server/blob/development/readme.md)
- [DIALOGFLOW README](https://github.com/Official-Codaisseur-Graduate/lisa-server/blob/development/dialogflow-README/README.md)
