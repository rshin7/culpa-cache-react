# culpa cache Front End (React.js)

Created by: [Richard Shin](https://www.rshin.dev/)

This project exists to preserve the thousands of reviews that was hosted on CULPA, the unofficial professor and course review site for Columbia University. During the summer of 2021, the site started timing out during peak loads.

This project is broken up into three parts: the [Scraper](https://github.com/rshin7/culpa-cache-scraper), the [API](https://github.com/rshin7/culpa-cache-api), and the React App.

This portion of the project contains the front end where users can view and search through reviews in an easy to use, responsive interface.

## Getting Started

1. Follow instructions in [API readMe](https://github.com/rshin7/culpa-cache-api) to get local API instance up.
2. Install all dependencies for React App (`npm install`)
3. Create an `.env` file with the following:
```
REACT_APP_API_URL=https://localhost:3001 
REACT_APP_GA_TRACKING_NO=
```
4. Start React App (`npm start`)

## Components

* `SearchBox.js`: Makes a GET request to the API server for `allprofessors` then populates a drop down menu using react-select.
* `RenderReview.js`: Makes an asynchronous GET request to the API server for `prof/{id}`, getting the ID from URL parameters.
* `ReviewCard.js`: Functional component containing the styling for the material-ui Card to display reviews. 