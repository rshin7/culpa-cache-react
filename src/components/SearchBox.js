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
import Typography from '@material-ui/core/Typography' // eslint-disable-next-line
import Select, { createFilter } from 'react-select';
import ReactSelect from "../search-components/ReactSelect";

const ENV_API = process.env.REACT_APP_API_URL;

export default class SearchBox extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            selectOptions : [],
            id: "",
            name: ''
        }
    }
    async getOptions() {
        const res = await axios.get(`${ENV_API}/all-professors`)
        const data = res.data

        const options = data.map(d => ({
            "value" : d.prof_id,
            "label" : d.prof_name,
        }))

        this.setState({selectOptions: options})
    }

    handleClick(e) {
        this.setState({id:e.value, name: e.label})
        console.log(e.value);
        window.location.href = `/review/${e.value}`
    }

    componentDidMount() {
        this.getOptions()
    }

    
    
      render() {
        // console.log(this.state.selectOptions)
        return (
            <div>
                <Typography variant="h2" align="center"><a href="/" style={{textDecoration: 'none', color: 'black', fontStyle: 'italic'}}>culpa-cache</a></Typography>
                    <div style={{maxWidth: '40%', paddingLeft: '30%'}}>
                        <ReactSelect 
                            placeholder = "Search for Professor..."
                            components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null, NoOptionsMessage: () => " No Reviews Found for that Professor" }}
                            options = {this.state.selectOptions} 
                            onChange = {this.handleClick.bind(this)}
                            filterOption={createFilter({ignoreAccents: false})}
                        />
                    </div>
            </div>
        )
      }
    }