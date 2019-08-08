import React from 'react';
import Nav from './Nav';
import Social from './Social';
import About from './About';
import Resume from './Resume';
import Home from './Home';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function Content(props) {
    return (<Router>
        <div className="content">
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' component={About} />
                <Route path='/Social' exact component={Social} />
                <Route path='/Resume' exact component={Resume} />
            </Switch>
        </div>
    </Router>);
}