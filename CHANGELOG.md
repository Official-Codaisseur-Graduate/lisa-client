## Change Log

#### Class 29
the type selector has been removed, we hardcoded several dishtypes in the dishTypeData.js (client side) if one needed to be added/removed they can be removed from above mentioned JS file. Reason for removing is making the UI more accessible for the chef.

#### Class 30
Added a location selection element, where the user can choose the location from a drop down menu and add and remove dishes for a specific location by sending the location id to the database.

#### Class 31
We mainly fixed the code to make the app working in sync with the backend. The menu gets updated when changing between locations. The dishes get updated automatically after the user adds new dishes. The chosen dishes will show up on the menu. The deleted button on the rendered menu also works now. 

#### Class 32
- Clean-up code
	- Location actions are now combined in one file
	- Take out the navigation bar from App.js and put it in its own component
- Added home-page that displays instructions for using the menu editor (in Dutch). It also contains links to different pages.
- When a new dish is added to the menu, the menu now displays dishes in a set order – appetizer, main, dessert – rather than ordered by the time it is added to the menu
- Hooks used in NavBar component
- Now select location becomes its own page; once the location is selected, a message appears to notify the user and directs him or her to the other pages. Selected location is always visible in the navbar
- Allow user to export one-day menu to PDF. If there is Option 2, the format will also be adjusted automatically.
- On menu display page, only one dish will be shown under each dish type. If user adds another dish to the same dish type, the original dish will be replaced by the new added one. **FUTURE IMPROVEMENT:  Synchronize menu display page with PDF/redux state.**