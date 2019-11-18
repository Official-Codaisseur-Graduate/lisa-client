# Introduction 
This is part of our week-long graduation project called LISA that we did for Vitalis (de Wilgenhof), a retirement home in Eindhoven. This project contains the Vitalis Menu Editor, the staff UI-part of the project. Project LISA also includes a Google Assistant app that reads the menu to residents. This UI was requested by the product owner to make it easier for the chef to make and edit his weekly menu, while at the same time adding to the database that our Google Assistant app reads from. 

## Contents of this ReadMe-file
- Introduction
- Repositories in the LISA-project
- Overview
- Product Owner/Requests
- Installation Guide
- Suggestions

## Repositories in the LISA-project
NOTE: Read the Docs for set-up and the latest status of the code - make sure to use the correct branch (development or any open branches that hasn’t been merged into development yet). Only merge into the master branch if all the codes in development are working AND you have already checked with Rein. <br>
<br>
- [LISA-server](https://github.com/Official-Codaisseur-Graduate/lisa-server)
- LISA-client- you are here!
- [LISA Dialogflow](https://github.com/Official-Codaisseur-Graduate/lisa-client-dialogflow)


# Overview

The main functionality is: 
* The dish types
* Adding new dishes by type
* Choosing from existing dishes and types the menu for a specific date.

(update Class 29) the type selector has been removed, we hardcoded several dishtypes in the dishTypeData.js (client side) if one needed to be added/removed they can be removed from above mentioned JS file. Reason for removing is making the UI more accessible for the chef.

The dishes update automatically upon addition.

It is connected to the Database on localhost:5000. The database uses a REST API to interact with the UI.

The accompanying Google Assistant app uses Dialogflow for user interaction, this is connected to our back end with webhooks.

(update Class 30) Added a location selection element, where the user can choose the location from a drop down menu and add and remove dishes for a specific location by sending the location id to the database.

(update Class 31) We mainly fixed the code to make the app working in sync with the backend. The menu gets updated when changing between locations. The dishes get updated automatically after the user adds new dishes. The chosen dishes will show up on the menu. The deleted button on the rendered menu also works now. 

## Product Owner/Requests
We went to Eindhoven and had a meeting with the product owner and the chef to discuss what their UI should look like. Since the time we had to work on this project was very limited and we wanted to present a working product, we did not get to implement all the functionality that was discussed. Some features that can be added are added as Todos in the project todos under the following link: https://github.com/Official-Codaisseur-Graduate/lisa-client/projects/1

# Installation
1) First, make sure to set up the backend [server](https://github.com/Official-Codaisseur-Graduate/lisa-server)

2) Git clone the [CLIENT](https://github.com/Official-Codaisseur-Graduate/lisa-client)
    ```
    $ git clone
    $ cd ./lisa-client
    $ git checkout development
    $ npm install
    ```
    Make sure to correct the database URL to use your local database in /src/constants.js before running:
    ```
    $ npm run start
    ```
3) Go to *constants.js* and change the url to your local server.

4) Add some mock data on a specific day ON YOUR LOCAL SERVER. First, select the location where you want to add a dish. Then add dishes by type in the lower dropdown menu with the white background. Now you can select a date and use the upper form to add these dishes to that day. 

## Suggestions
- Create a fancy homepage
    - if click on the button *homepage*, you go back to the homepage. Reset the location drop down menu to default "--selecteer een locatie--"
