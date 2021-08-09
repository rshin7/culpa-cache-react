# culpa cache Front End (React.js)

Created by: [Richard Shin](https://www.rshin.dev/)

This project exists to preserve the thousands of reviews that was hosted on CULPA, the unofficial professor and course review site for Columbia University. Around the summer of 2021 the site started becoming inaccessible and thousands of reviews going as far back as 1998 were in danger of being lost forever. 

This project is broken up into three parts: the [Scraper](https://github.com/rshin7/culpa-cache-scraper), the [API](https://github.com/rshin7/culpa-cache-api), and the React App.

This portion of the project contains the actual front end server where users can view and search through reviews in an easy to use, responsive interface.

## Getting Started

1. Follow instructions in [API readMe](https://github.com/rshin7/culpa-cache-api) to get local API instance up.
2. Install all dependencies for React App (`npm install`)
3. Start React App (`npm start`)

## Components

* `SearchBox.js`: Makes a GET request to the API server for `allprofessors` then populates a drop down menu using react-select.
* `RenderReview.js`: Makes an asynchronous GET request to the API server for `prof/{id}`, getting the ID from URL parameters.
* `ReviewCard.js`: Functional component containing the styling for the material-ui Card to display reviews. 