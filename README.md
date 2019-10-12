## PLEASE READ [INITIAL SETUP](https://github.com/Official-Codaisseur-Graduate/lisa-client/blob/master/InitialSetup.md) FIRST

# Introduction 
This is part of our week-long graduation project called LISA that we did for Vitalis (de Wilgenhof), a retirement home in Eindhoven. This project contains the Vitalis Menu Editor, the staff UI-part of the project. Project LISA also includes a Google Assistant app that reads the menu to residents. This UI was requested by the product owner to make it easier for the chef to make and edit his weekly menu, while at the same time adding to the database that our Google Assistant app reads from. 

You can find the repository for our server [here](https://github.com/Official-Codaisseur-Graduate/lisa-server).

# Overview

The main functionality is: 
* The dish types
* Adding new dishes by type
* Choosing from existing dishes and types the menu for a specific date.

(update Class 29) the type selector has been removed, we hardcoded several dishtypes in the dishTypeData.js (client side) if one needed to be added/removed they can be removed from above mentioned JS file. Reason for removing is making the UI more accessible for the chef.

The dishes update automatically upon addition.

It is connected to the Database on localhost:5000. The database uses a REST API to interact with the UI.

The accompanying Google Assistant app uses Dialogflow for user interaction, this is connected to our back end with webhooks.

## Product Owner/Requests
We went to Eindhoven and had a meeting with the product owner and the chef to discuss what their UI should look like. Since the time we had to work on this project was very limited and we wanted to present a working product, we did not get to implement all the functionality that was discussed. Some features that can be added include: 

### Menu templates 
At Vitalis they work with four week menus on rotation, with a spring/summer and a fall/winter cycle. It would be great if the chef could select a week menu, or even a a four week cycle in one click. 

(update class 29) Copying the weekmenu is a function we have been working on and is partially done. There is a new 'tab' with the option to select a week and getting the corresponding week menu back to the front. The next step would be to be able to copy the week to the week that the chef would like to copy it to.

Update 11-10: we had a small meeting with the PO and he would also like to see the weekmenu permanently on a screen. It is recommended to make a 3rd page on the client which display the menu on there so they could navigate to that page and permanently show it.

### Generating hard copy menus/order forms
Since not everyone will use the Google Assistant app right away, they will still need printed menus. It would be great if these can be generated in our UI in a printer-friendly (pdf) template. The same goes for the (hard copy) order forms they use in the restaurant, so people who are less mobile can have their orders picked up by staff. 

(update class 29) update is done in seperate readme.md see [HERE](https://github.com/Official-Codaisseur-Graduate/lisa-client/blob/master/PDF-README.md)

### Resources panel
An overview of all dishes, types and (eventually) templates, with the option to edit them or delete them from the database.

### Authorization
Given the nature of the business, this app and the fact that it will only be used on-site, it is not very prone to tampering. Still, this UI could use some kind of authorization to make sure only the chef (and staff) can access it.

### Scale up to other locations
Since Vitalis is a big organization with over 20 locations all across the country, we also touched on scalability. It would be great if they would be able to use this system at other locations in the future as well.


