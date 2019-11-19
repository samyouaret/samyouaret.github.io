import React from 'react';
import Social from './Social';
import About from './About';
import Resume from './Resume';
import Home from './Home';
import NotFound from './NotFound';

import { Switch, Route } from 'react-router-dom';


function ContentBrowser() {
    return (
        <div className="content">
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' component={About} />
                <Route path='/Social' component={Social} />
                <Route path='/Resume' component={Resume} />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}
export default ContentBrowser;