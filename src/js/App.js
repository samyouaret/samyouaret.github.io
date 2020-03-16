import React from 'react';
import Nav from './components/Nav';
import ContentBrowser from './components/ContentBrowser';
import Section from './components/Section';
import { BrowserRouter as Router } from 'react-router-dom';

//Your initialization
function locationHashChanged(e) {
    console.log(location.hash);
    console.log(e.oldURL, e.newURL);
}
window.onhashchange = locationHashChanged;

export default function App() {
    return (<Router>
        <div className="app">
            <Nav />
            <div className="flex my-16">
                <div className="w-1/3 mx-4">
                    <Section>
                        <div className="rounded">
                            <img src="/images/ouaretsamy-cropped.png" className="max-w-xs rounded" />
                        </div>
                    </Section>
                    
                </div>
                <div className="w-2/3 mx-4">
                    <Section>
                        <ContentBrowser />
                    </Section>
                </div>
            </div>
        </div>
    </Router>);
}