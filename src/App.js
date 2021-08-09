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

import React from 'react'
import './App.css';
import NotFound from './components/NotFound';
import SearchBox from './components/SearchBox';
import RenderReview from './components/RenderReview';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {

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
