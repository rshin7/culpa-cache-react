// Copyright (C) 2021 Richard Shin

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

import './App.css';
import React, { useEffect } from 'react'
import NotFound from './components/NotFound';
import SearchBox from './components/SearchBox';
import RenderReview from './components/RenderReview';
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history'

ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_NO)
const browserHistory = createBrowserHistory()
browserHistory.listen((location, action) => {
  ReactGA.pageview(location.pathname + location.search)
})

function App() {
  const location = useLocation();
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return (
    <>
    
    <div className="App">
    <Router>
        <Switch>
          <Route exact path='/' component={SearchBox} />
          <Route exact path='/review/:id' component={RenderReview}/>
          <Route exact path='*' component={NotFound} />
        </Switch>
    </Router>
      </div>
    </>
  );
}

export default App;
