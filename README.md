# Introduction 
This is part of the LISA-project that we did for Vitalis (de Wilgenhof), a retirement home in Eindhoven. This frontend, Vitalis Menu Editor, allows the chefs and staffs to add and edit the menu. 

![Landing page](https://github.com/Official-Codaisseur-Graduate/lisa-client/blob/development/Screenshot.png)

# Contents
- [Introduction](#introduction)
- [Repositories in the LISA-project](#repositories-in-the-lisa-project)
- [Overview](#overview)
- [Installation](#installation) 
- [Resources](#resources)


# Repositories in the LISA-project
NOTE: Read the Docs for set-up and the latest status of the code - make sure to use the correct branch (development or any open branches that hasn’t been merged into development yet). Only merge into the master branch if all the codes in development are working AND you have already checked with Rein. <br>
<br>
- [LISA-server](https://github.com/Official-Codaisseur-Graduate/lisa-server)
- LISA-client- you are here!
- [LISA Dialogflow](https://github.com/Official-Codaisseur-Graduate/lisa-client-dialogflow)


# Overview

The main functionalities: 
- Add new dishes by type
- Design menu for a specific date by choosing from the existing dishes
- Export menu as PDF


The frontend is connected to the database on localhost:5000. 
The accompanying Google Assistant app uses Dialogflow for user interaction, and it is connected to the backend with webhooks.


# Installation
1) First, make sure to set up the backend [Server](https://github.com/Official-Codaisseur-Graduate/lisa-server)

2) Git clone the [Client](https://github.com/Official-Codaisseur-Graduate/lisa-client)
    ```
    $ git clone
    $ cd ./lisa-client
    $ git checkout development
    $ npm install
    ```
    
3) Go to *constants.js* and change the url to your local server.

4) Run the app:
    ```
    $ npm run start
    ```

5) Test all functionalities:
- On the nav bar, click on **Selecteer locatie** to select a location (You can test on the 6th location *Vitalis Wonen aan de Fakkellaan* first, where we have prepared seed data in the database)
- Click on **Gerecht toevoegen** to create a new dish.
- Click on **Menu maken**, select a specific date, pick dishes from the dropdown and design the menu for the day.
- Click on the button **Exporteer menu naar PDF** to export the menu to PDF

# Resources
- [CHANGELOG.md](https://github.com/Official-Codaisseur-Graduate/lisa-client/blob/development/CHANGELOG.md)
- [PDF-README.md](https://github.com/Official-Codaisseur-Graduate/lisa-client/blob/development/PDF-README.md)
    - Details about the functionality of exporting week menu to PDF
- [Github Projects](https://github.com/Official-Codaisseur-Graduate/lisa-client/projects/1)
    - To-do / improvement opportunities 
