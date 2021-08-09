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

import React, { useState } from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function ReviewCard({ course }) {
    const [state, setState] = useState({raised:false})
    return (
        <div>
            <Card onMouseOver={() => setState({raised: true})}
                  onMouseOut={() => setState({raised:false})}
                  raised={state.raised}
            >
                <CardHeader 
                
                title = { course.course_name } 
                subheader= { course.review_date }
                
                />
                <CardContent>
                    <Typography variant='body2'>
                        {course.review_content}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
