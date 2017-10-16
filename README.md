# BetterHood
BetterHood.org

********* BETTER HOOD *********

In today's world we are more connected than we have ever been. Unfortunately, it has disconnected us from from our local community even further. We are living in a generation that has more empathy than ever before, but with such a disconnected local community, how can we deploy that empathy? We turn to a very corporate form of giving that has riddled with mismanagement of funds, scandals and CEO's drawing salaries of MILLIONS of dollars.

We are changing that by creating the Better Hood App that will allow residents to create events serving the local community and break our dependency our these greedy corporate "not for profits".

Our code was written in Javascript. It uses Materialize CSS, JQuery, axios, google api, twillio alerts, sequelize and is hosted by heroku

Our app starts with the ability to login and create a user profile. Then you will be redirected to a page where a user can either create or search an event.

If the user chooses to create an event the user will enter a event name, date, description, address, image and category. When the user clicks to create the event it will first go the google geolocation API and it will take the user input and return the latitude and the longitude of the event. All of this data will be stored in a database and it will be accessible by other users.

If the user chooses to search an event the user will enter the parameters of category, start date, end date, and address. The google api will be called to establish a base latitude and longitude. It will send a query to the database and return the results based on the category, the time of the event and then the proximity of the location. It will dynamically populate the results to the page so that the user can connect with a local event that fit where they can make a significant impact
