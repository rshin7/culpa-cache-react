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

import React from 'react';
import axios from 'axios';
import SearchBox from './SearchBox';
import { Helmet } from 'react-helmet';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import ReviewCard from '../components/ReviewCard';

const ENV_API = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: `${ENV_API}/prof`
})

class RenderReview extends React.Component {
  
  state = {
    courses_info: [],
    courses: []
  }
  
  getReviews = async (id) => {
    api.get(`/${id}`).then(res => {
      // console.log(res.data[0].reviews)
      this.setState({ courses: res.data.reviews, courses_info: res.data.prof_info })
    }).catch(error => {
      console.log(error)
    })
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    this.getReviews(id);
  }

  render() {
  return (
    <div>
      <SearchBox />
      {this.state.courses_info.map((data) => 
      <div>
        <Typography variant="h4" align="center" key={data.prof_id}>{data.prof_name}</Typography>
        <Helmet><title>culpa cache - {data.prof_name} Reviews</title></Helmet> 
      </div>
        )
      }

      {this.state.courses.filter(course => course.review_content !== null).map((course, i) => 
        <div>
      <Grid container justifyContent="center" t={2} b={5}>
        <Grid item key={i} xs={11} md={9} lg={6} >
          <ReviewCard course={course} /> <br />
        </Grid>
      </Grid>
        </div>
        )
      }

      </div>
  )
}
}

export default RenderReview;