import React from 'react';
import Nav from './Nav';
import ContentBrowser from './ContentBrowser';
import SectionChild from './SectionChild';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
    return (<Router>
        <div className="app">
            <Nav />
            <div className="flex">
                <div className="left-section">
                    <SectionChild>
                        <div className="rounded-img">
                            <img src="/src/images/ouaretsamy-cropped.png" className="img" />
                        </div>
                    </SectionChild>
                </div>
                <div className="right-section">
                    <h1>The website is under construction</h1>
                    <SectionChild>
                        <ContentBrowser />
                    </SectionChild>
                </div>
            </div>
        </div>
    </Router>);
}