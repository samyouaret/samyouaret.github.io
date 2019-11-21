import React from 'react';
import Writings from './Writings';
import Contact from './Contact';
import Resume from './Resume';
import Home from './Home';
import NotFound from './NotFound';

import { Switch, Route } from 'react-router-dom';


function ContentBrowser() {
    return (
        <div className="content">
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/writings' component={Writings} />
                <Route path='/resume' component={Resume} />
                <Route path='/getintouch' component={Contact} />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}
export default ContentBrowser;