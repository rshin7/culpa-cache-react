# culpa-cache

Created by: [Richard Shin](https://www.rshin.dev/)

This project exists to preserve the thousands of reviews that was hosted on CULPA, the unofficial professor and course review site for Columbia University. Around the summer of 2021 the site started becoming inaccessible and thousands of reviews going as far back as 1998 were in danger of being lost forever. 

This project is broken up into three parts: the Scraper, the API, and the Server.


## API (Express.js)

This API server currently supports two GET requests:

`/prof/{id}` - Gets all reviews from the professor

`/allprofessors/` - Shows all professors

## server (React.js)

This portion of the project contains the actual front end server where users can view and search through reviews in an easy to use, responsive interface.

## Getting Started

0. Scrape Data (or use the ones already scraped) and put them in `api/data`.
1. Start API server (`npm start` in `api` folder)
2. Start React App (`npm start` in `server` folder)