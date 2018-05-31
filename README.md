# TskTrckr Client

![Deployed site](https://i.imgur.com/Pm9ZGwL.png)

# Summary

TskTrckr is a barebones todo list tracker. Users can have any number of lists which themselves can have any number of todos, which can be marked completed when they're finished. The app uses Ember as a JavaScript front end framework paired with a rails API for managing data.

# Links

* [Deployed Client](https://omniczech.github.io/capstone-frontend/)
* [Deployed API](https://quiet-gorge-19484.herokuapp.com/)
* [API Repo](https://github.com/omniczech/capstone-backend)
* [Wireframes and User Stories](https://i.imgur.com/XxcscWl.jpg)

# Technologies used

* Ember.js
* Handlebars.js
* SCSS
* JavaScript
* Git

# Development process

Once the preliminary API setup was complete, I began by creating the /my-lists/ route and creating components for a collection of lists which contains a button to delete the list, and a form for adding a new list.

After users were able to create and delete lists, I added a form to add new todos, as well as buttons to delete each specific todo. after testing these and confirming they worked, I encountered an issue with the view not updating. After some investigation I found that the API's serializers were not correctly configured for what ember was expecting, and were returning the whole todo object when a call was made to the user. Once I made changes to ensure that only the IDs for hasManys were being serializing correctly, the view began updating on the creation of any records.

After the view was working correctly, I added in a function that would allow a user to toggle whether or not a specific todo was completed. This also is reflected by striking through the todo and its details as well as changing the box clicked to toggle to change to a checkmark.

During this process I began to work on the functionality to allow users to create teams for collaborative work on lists but realized that the time I would need to complete the feature was more than I had left before the end of the project period. This feature is the next part of the app that will be developed.

# Future Features

* Users can create teams with other Users
* Teams will be able to have lists that belong to the team and can be edited by members of the team.
* Users can minimize lists of todos to conserve vertical screen space.

# Installation

1. Fork and clone this Repo
2. Navigate to the repo and `npm install` to install dependencies
3. Run `grunt serve` and go to localhost:4741 in your browser.
