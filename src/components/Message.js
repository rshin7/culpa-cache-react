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

export default function Message() {
    return (
        <>
        <br />
        
        <div style={{ textAlign: 'center', margin: '0 auto', padding: '1% 1% 1% 1%', maxWidth: '700px', wordWrap: 'break-word', borderStyle: 'dotted' }}>
        <div style={{ textAlign: 'right'}}>November 15<sup>th</sup>, 2021</div>
            <div style={{ textAlign: 'left'}}>Hey all,</div> <br /> I've recently been contacted by the one of the original administrators of CULPA. <br /><br />
            Long story short, it seems like the original admins <a href="https://www.reddit.com/r/columbia/comments/qt6v19/official_culpa_relaunch_at_wwwculpaapp" rel="noreferrer" target="_blank">are rebooting CULPA</a>, which is great news.
            That also means my website has served its intended purpose, that is, to serve backups of CULPA reviews while CULPA was down. Now that CULPA is back online, I see no reason to have duplicate sites serving the same reviews, so, I've agreed to shut down my website.
            <br /> <br />
            I created this website during my free time over this past summer because CULPA as we know it was down, Fall 2021 registrations were coming up, and like many of you right now,
            I wanted to take courses with highly rated professors. I figured I wasn't the only one who wanted to access these old reviews and one night while I was reading through Columbia Confessions, I saw this:
            <br /><br />
            <img style={{ width: '70%'}} src="https://www.rshin.dev/img/projects/11697.png" alt="Confession 11697" />
            <br /> <br />
            That gave me the motivation to start this hobby project and share it with you all before the Fall semester began.
            <br /> <br />
            I never intended this website to be a CULPA 2.0; that is precisely why I did not bother adding the ability to add new reviews (and for the technical folks: why data is stored in JSON format). 
            <br /><br />
            If you're interested, I've open sourced my code since day 1: <a href="https://github.com/rshin7/culpa-cache-scraper" rel="noreferrer" target="_blank">the scraper</a> (nothing sophisticated tbh 😅), <a href="https://github.com/rshin7/culpa-cache-api" rel="noreferrer" target="_blank">Express.js API server</a>, and <a href="https://github.com/rshin7/culpa-cache-react" rel="noreferrer" target="_blank">React front-end</a>. You can also read a short write up I wrote on this project <a href="https://www.rshin.dev/projects/#culpa-cache">here</a>.

            <br /><br />

            Here's a link to the <a href="https://www.culpa.app/" rel="noreferrer" target="_blank">updated CULPA</a>, which seems to have some of the more up-to-date reviews I was missing. 
            I suggest you start using the new CULPA as I'll be pulling the plug on this site in a few days.
            <br /><br />
            Thanks for visiting - hope you get the classes you want for Spring! <br />
            <br />
            <div style={{textAlign:'right'}}>
                - <a href="https://www.linkedin.com/in/rshin7/"  rel="noreferrer" target="_blank">Richard</a> <br />
            </div>
        </div></>
    )
}
