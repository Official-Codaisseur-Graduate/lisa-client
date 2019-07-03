# Introduction 
This is part of our week-long graduation project called LISA that we did for Vitalis (de Wilgenhof), a retirement home in Eindhoven. This project contains the Vitalis Menu Editor, the staff UI-part of the project. Project LISA also includes a Google Assistant app that reads the menu to residents. This UI was requested by the product owner to make it easier for the chef to make and edit his weekly menu, while at the same time adding to the database that our Google Assistant app reads from. 

# Overview

The main functionality is: 
* Adding new dish types (courses) by name
* Adding new dishes by type
* Choosing from existing dishes and types the menu for a specific date.

The types and dishes update automatically upon addition.

It is connected to the Database on localhost:5000. The database uses a REST API to interact with the UI.

The accompanying Google Assistant app uses Dialogflow for user interaction, this is connected to our back end with webhooks.

You can find the repository for our server [HERE](https://github.com/samaneh-dallalizad/lisa_project)


## Product Owner/Requests
We went to Eindhoven and had a meeting with the product owner and the chef to discuss what their UI should look like. Since the time we had to work on this project was very limited and we wanted to present a working product, we did not get to implement all the functionality that was discussed. Some features that can be added include: 

### Menu templates 
At Vitalis they work with four week menus on rotation, with a spring/summer and a fall/winter cycle. It would be great if the chef could select a week menu, or even a a four week cycle in one click.

### Generating hard copy menus/order forms
Since not everyone will use the Google Assistant app right away, they will still need printed menus. It would be great if these can be generated in our UI in a printer-friendly (pdf) template. The same goes for the (hard copy) order forms they use in the restaurant, so people who are less mobile can have their orders picked up by staff.

### Resources panel
An overview of all dishes, types and (eventually) templates, with the option to edit them or delete them from the database.

### Authorization
Given the nature of the business, this app and the fact that it will only be used on-site, it is not very prone to tampering. Still, this UI could use some kind of authorization to make sure only the chef (and staff) can access it.

### Scale up to other locations
Since Vitalis is a big organization with over 20 locations all across the country, we also touched on scalability. It would be great if they would be able to use this system at other locations in the future as well.

=====

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
