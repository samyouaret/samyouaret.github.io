import React from 'react';
import Social from './Social';
import About from './About';
import Resume from './Resume';
import Home from './Home';

import { Switch, Route } from 'react-router-dom';

function ContentBrowser() {
    return (
        <div className="content">
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/index.html' exact component={Home} />
                <Route path='/about' component={About} />
                <Route path='/Social' exact component={Social} />
                <Route path='/Resume' exact component={Resume} />
            </Switch>
        </div>
    );
}
export default ContentBrowser;