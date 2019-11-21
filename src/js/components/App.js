import React from 'react';
import Nav from './Nav';
import ContentBrowser from './ContentBrowser';
import ChildSection from './ChildSection';
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
            <div className="flex">
                <div className="left-section">
                    <ChildSection>
                        <div className="rounded-img">
                            <img src="/src/images/ouaretsamy-cropped.png" className="img" />
                        </div>
                        <h2 className="flex flex-column text-center">Ouaret Samy</h2>
                        <strong className="text">Web developer, PHP programmer, React lover</strong>
                    </ChildSection>
                </div>
                <div className="right-section">
                    <h1>The website is under construction</h1>
                    <ChildSection>
                        <ContentBrowser />
                    </ChildSection>
                </div>
            </div>
        </div>
    </Router>);
}