# ng-movie-app
Movie info app using TMDb

## Getting started
- run `npm install`
- run `node server.js` to start server. Access via http://localhost:1234
- run webpack --watch to start watcher

## Dependancies
See package.json.

Webpack 2 for bundling and sass compilation.
Express js for the server.

#### Libraries/Frameworks
Bootstrap - to build out a decent looking UI quickly
Jquery - for bootstrap.
Angular - for handling data and state management.

## To Do

### Improvements
* Improve scroll on divs for crew, cast, similar etc.
* Mobile menu should close on selection.

### Compare movies feature?
Have a page for comparing movies ratings, cast etc.

### Review feature
When user has searched a tv show/movie, 2 calls should go out. One to TMDB for the general data, and another to get my review of that tv show/movie if one exists. This will need to match based on TMDB ID.

### Rename ".person-movies" class
Needs to be renamed to something that makes sense.
