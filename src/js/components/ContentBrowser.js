import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Resume from './Resume';
import Contact from './Contact';

function ContentBrowser() {
    return (
        <div className="content">
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/resume' component={Resume} />
                <Route path='/getintouch' component={Contact} />
            </Switch>
        </div>
    );
}
export default ContentBrowser;