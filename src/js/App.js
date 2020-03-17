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
            <div className="flex flex-col md:flex-row my-16">
                <div className="md:w-1/3 w-full sm:mr-4 mb-8">
                    <Section>
                        <div className="rounded mx-auto">
                            <img src="/images/ouaretsamy-cropped.png" className="max-w-full rounded-lg shadow-lg" />
                        </div>
                    </Section>
                </div>
                <div className="md:w-2/3 sm:w-full sm:ml-4 mx-4">
                    <Section>
                        <ContentBrowser />
                    </Section>
                </div>
            </div>
        </div>
    </Router>);
}